"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import Link from "next/link";

type Direction = "NEXT" | "PREV";

const NEXT: Direction = "NEXT";
const PREV: Direction = "PREV";

// animation variants
const variants = {
  initial: (direction: Direction) => ({
    x: direction === NEXT ? "100%" : "-100%",
    opacity: 0.9,
  }),
  enter: () => ({
    x: 0,
    opacity: 1,
  }),
  exit: (direction: Direction) => ({
    x: direction === NEXT ? "-100%" : "100%",
    opacity: 0.9,
  }),
};

export function Carousel({
  data = [],
  render,
  duration = 3,
}: {
  data: Record<string, string>[];
  render: (data: Record<string, string>) => React.ReactNode;
  duration?: number;
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [prevIndex, setPrevIndex] = React.useState<[number, number]>([-1, 0]);
  const [paused, setPaused] = React.useState(false);

  // Update tuple whenever the activeIndex changes
  if (activeIndex !== prevIndex[1]) {
    setPrevIndex([prevIndex[1], activeIndex]);
  }

  // Determine the direction
  const direction: Direction = prevIndex[0] > prevIndex[1] ? PREV : NEXT;

  // handle slide button click
  const handleSlideClick = ({
    direction,
    index,
  }: {
    direction?: Direction;
    index?: number;
  }) => {
    const nextIndex = index
      ? index
      : direction === NEXT
      ? activeIndex + 1
      : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // get current product
  const currentIndex = Math.abs(activeIndex) % data.length;

  const handleDragEnd = (_event: PointerEvent, info: any) => {
    if (info.offset.x > 20) {
      // Dragging right
      handleSlideClick({ direction: PREV });
    } else if (info.offset.x < -20) {
      // Dragging left
      handleSlideClick({ direction: NEXT });
    }
  };

  const containerRef = React.useRef(null);
  const intervalId = React.useRef<NodeJS.Timeout | undefined>(undefined);
  React.useEffect(() => {
    if (paused || data.length < 2) return;
    intervalId.current = setInterval(() => {
      handleSlideClick({ direction: NEXT });
    }, duration * 1000);

    return () => clearInterval(intervalId.current);
  }, [activeIndex, paused]);

  return (
    <motion.section
      ref={containerRef}
      className="relative overflow-hidden h-screen bg-secondary-500"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <AnimatePresence custom={direction}>
        <motion.div
          dragConstraints={containerRef}
          key={currentIndex}
          custom={direction}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{
            duration: 0.6, // slightly longer for smoothness
            ease: [0.25, 0.8, 0.25, 1], // cubic bezier for a more elegant ease
          }}
          drag="x"
          onDragEnd={handleDragEnd}
          dragElastic={0.1}
          className="absolute inset-0"
        >
          {render(data[currentIndex])}
        </motion.div>
      </AnimatePresence>
      <Dots
        data={data}
        activeIndex={currentIndex}
        handleSlideClick={handleSlideClick}
      />
    </motion.section>
  );
}

function Dots({
  activeIndex,
  handleSlideClick,
  data,
}: {
  activeIndex: number;
  handleSlideClick: Function;
  data: {}[];
}) {
  if (data.length <= 1) return;
  return (
    <div className="container absolute bottom-10 justify-center inset-x-0 py-1 p-4 flex gap-2 z-30">
      {data.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            handleSlideClick({ index: index });
          }}
          className={cn(
            "cursor-pointer rounded-full size-4 border-1 border-white transition-all duration-300 backdrop-blur-3xl ",
            {
              "bg-white scale-100": index === activeIndex,
              "bg-gray-800 hover:bg-gray-200 duration-300 scale-90":
                index !== activeIndex,
            }
          )}
        />
      ))}
    </div>
  );
}

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function Item({ className, children }: Props) {
  return (
    <div
      className={cn(
        "h-screen after:absolute after:inset-0 after:bg-black/50",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Container({ className, children }: Props) {
  return (
    <div
      className={cn(
        "container flex items-center absolute inset-0 z-10 text-white",
        className
      )}
    >
      <div className="max-w-xl space-y-6">{children}</div>
    </div>
  );
}

export function MediaVideo({
  mediaLink,
  className,
}: Props & { mediaLink: string }) {
  return (
    <video
      src={mediaLink}
      autoPlay
      muted
      loop
      className={cn("object-cover size-full", className)}
    />
  );
}
export function MediaImage({
  mediaLink,
  className,
  alt,
}: Props & { mediaLink: string; alt: string }) {
  return (
    <Image
      className={cn("size-full object-cover", className)}
      src={mediaLink}
      fill
      alt={alt}
    />
  );
}
export function Description({ className, children }: Props) {
  return <p className={cn("pr-4", className)}>{children}</p>;
}
export function Title({ children, className }: Props) {
  return (
    <Heading className={cn(className)} size="6.5xl">
      {children}
    </Heading>
  );
}
export function CTA({
  children,
  className,
  route = "#",
  variant = "default",
}: Props & { route: string; variant?: "default" | "secondary" | "outline" }) {
  return (
    <Button asChild className={cn(className)} variant={variant}>
      <Link href={route}> {children}</Link>
    </Button>
  );
}
export function CTAGroup({ children }: { children: React.ReactNode }) {
  return <div className="space-x-2">{children}</div>;
}
