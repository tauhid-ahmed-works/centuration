"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useAnimation,
} from "motion/react";
import { Heading } from "./heading";
import Underline from "./decorate-line";
import { Button } from "./ui/button";
import Link from "next/link";

type CarouselPaginationProps = {
  currentIndex: number;
  activeIndex?: number;
  handlePointerPresence: (presence: boolean) => void;
  handleActiveIndex: (index: number) => void;
  paginationLength: number;
  duration: number;
  isPaused?: boolean;
  className?: string;
};

type BannerProps = {
  duration?: number;
  data: {
    title: string;
    content: string;
    mediaSrc: string;
    mediaType: "video" | "image";
    learn_more: string;
  }[];
};

const NEXT = "NEXT";
const PREV = "PREV";
const SWIPE_AMOUNT = 30;

const variants = {
  initial: (direction: string) => ({
    x: direction === NEXT ? "100%" : "-100%",
  }),
  enter: () => ({
    x: 0,
  }),
  exit: (direction: string) => ({
    x: direction === NEXT ? "-100%" : "100%",
  }),
};

export function Banner({ duration = 5, data }: BannerProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [prevIndex, setPrevIndex] = React.useState<[number, number]>([-1, 0]);
  const [isPaused, setIsPaused] = React.useState(false);
  const SLIDES = data || [
    {
      title: "Hello World",
      content: "lorem ipsum dolor sit amet.",
      mediaSrc: "/assets/images/homepage/resume.png",
      learn_more: "#",
    },
    {
      title: "Hello World",
      content: "lorem ipsum dolor sit amet.",
      mediaSrc: "/assets/images/homepage/resume.png",
      learn_more: "#",
    },
  ];

  if (activeIndex !== prevIndex[1]) {
    setPrevIndex([prevIndex[1], activeIndex]);
  }
  const currentIndex = Math.abs(activeIndex) % SLIDES.length;
  const currentSlide = SLIDES[currentIndex];

  const carouselRef = React.useRef(null);
  const x = useMotionValue(0);

  const direction = prevIndex[0] > prevIndex[1] ? PREV : NEXT;
  const intervalId = React.useRef<NodeJS.Timeout | null>(null);
  React.useEffect(() => {
    if (isPaused || SLIDES.length < 1) return;
    intervalId.current = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, duration * 1000);
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [activeIndex, isPaused]);

  const onDragEnd = () => {
    const dragAmount = x.get();
    if (Math.abs(dragAmount) > SWIPE_AMOUNT) {
      if (dragAmount > 0) {
        setActiveIndex(activeIndex - 1);
      } else {
        setActiveIndex(activeIndex + 1);
      }
      x.set(0);
    }
  };

  const handleActiveIndex = (index: number) => setActiveIndex(index);
  const handlePointerPresence = (presence: true | false) =>
    setIsPaused(presence);

  const nextSlide = SLIDES[currentIndex + 1] ?? SLIDES[0];
  const prevSlide = SLIDES[currentIndex - 1] ?? SLIDES[SLIDES.length - 1];

  return (
    <div className="h-screen pt-16">
      <motion.div
        dragConstraints={{ left: 0, right: 0 }}
        drag="x"
        style={{ x }}
        className="relative size-full"
        onDragEnd={onDragEnd}
        dragElastic={0.1}
      >
        <div className="h-screen inset-0 absolute -translate-x-full text-white text-9xl">
          {/* {prevSlide} */}
        </div>
        <div className="h-screen inset-0 absolute translate-x-full text-white text-9xl">
          {/* {nextSlide} */}
        </div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            ref={carouselRef}
            key={currentIndex}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}
            custom={direction}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className={cn("absolute inset-0 flex items-center")}
          >
            <Media>
              <Image
                className="object-cover"
                fill
                src={currentSlide.mediaSrc}
                alt="media"
              />
            </Media>
            <Content>
              <div
                onPointerEnter={handlePointerPresence.bind(null, true)}
                onPointerLeave={handlePointerPresence.bind(null, false)}
                className="container"
              >
                <div className="space-y-4 max-w-lg text-white">
                  <Heading
                    as="h2"
                    size="6xl"
                    underline={<Underline size="md" />}
                  >
                    {currentSlide.title}
                  </Heading>
                  {currentSlide.content && <p>{currentSlide.content}</p>}
                  <Button asChild variant="secondary">
                    <Link href={currentSlide.learn_more}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </Content>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      {SLIDES.length > 1 && (
        <CarouselNumberPagination
          currentIndex={currentIndex}
          handleActiveIndex={handleActiveIndex}
          handlePointerPresence={handlePointerPresence}
          paginationLength={SLIDES.length}
          duration={duration}
          isPaused={isPaused}
        />
      )}
      {SLIDES.length > 1 && (
        <CarouselBulletPagination
          currentIndex={currentIndex}
          handleActiveIndex={handleActiveIndex}
          handlePointerPresence={handlePointerPresence}
          paginationLength={SLIDES.length}
          duration={duration}
        />
      )}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className="relative w-full">{children}</div>;
}
function Media({ children }: { children: React.ReactNode }) {
  return (
    <div className="size-full absolute after:absolute after:inset-0 after:bg-[linear-gradient(120deg,#000,transparent)] after:opacity-70">
      {children}
    </div>
  );
}

function CarouselNumberPagination({
  handleActiveIndex,
  handlePointerPresence,
  currentIndex,
  paginationLength,
  duration,
  isPaused,
  className,
}: CarouselPaginationProps) {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      strokeDashoffset: 0,
      transition: { duration, ease: "linear" },
    });
  }, [controls, duration, currentIndex]);

  return (
    <div
      onPointerEnter={handlePointerPresence.bind(null, true)}
      onPointerLeave={handlePointerPresence.bind(null, false)}
      className={cn(
        "absolute inset-y-0 pl-6 pr-4 z-50 xl:grid place-items-center hidden",
        className
      )}
    >
      <div className="space-y-2 text-base px-4 mt-18">
        {[...Array(paginationLength)].map((_, i) => (
          <React.Fragment key={i}>
            <motion.button
              onClick={handleActiveIndex.bind(null, i)}
              layout
              className="size-8 grid place-items-center rounded-full relative z-20 cursor-pointer text-gray-100 hover:bg-primary-500 transition-colors"
              data-index={i}
            >
              <motion.svg
                className="absolute inset-0"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="49"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                {currentIndex === i && !isPaused && (
                  <motion.circle
                    className="absolute"
                    cx="50"
                    cy="50"
                    r="49"
                    stroke="#98c73d"
                    strokeWidth="2"
                    fill="none"
                    key={`${currentIndex}-${isPaused}`}
                    initial={{
                      strokeDasharray: 2 * Math.PI * 50,
                      strokeDashoffset: 2 * Math.PI * 50,
                    }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{
                      duration: duration,
                      ease: "linear",
                    }}
                  />
                )}
              </motion.svg>

              {i + 1}
            </motion.button>
            {currentIndex === i && (
              <motion.div
                layoutId="1"
                className="h-18 w-px mx-auto relative z-10 bg-gray-100"
              >
                <motion.div
                  className={cn("absolute inset-0", {
                    "bg-primary-500": !isPaused,
                    "bg-gray-100": isPaused,
                  })}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: isPaused ? Infinity : duration }}
                  key={`${currentIndex}-${isPaused}`}
                />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function CarouselBulletPagination({
  paginationLength,
  handlePointerPresence,
  handleActiveIndex,
  currentIndex,
}: CarouselPaginationProps) {
  return (
    <div
      onPointerEnter={handlePointerPresence.bind(null, true)}
      onPointerLeave={handlePointerPresence.bind(null, false)}
      className="space-x-2 absolute top-3/4 flex items-center justify-center inset-x-0"
    >
      {[...Array(paginationLength)].map((_, i) => (
        <button
          onClick={handleActiveIndex.bind(null, i)}
          className={cn(
            "size-1.5 rounded-full bg-gray-500 cursor-pointer xl:hidden",
            {
              "scale-150 bg-primary-500": i === currentIndex,
              "hover:scale-150 hover:bg-primary-500": i !== currentIndex,
            }
          )}
          key={i}
        ></button>
      ))}
    </div>
  );
}
