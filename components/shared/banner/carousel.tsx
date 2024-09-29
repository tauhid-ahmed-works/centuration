"use client";

import { cn } from "@/libs/utils/cn";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Wrapper from "@/components/layout/wrapper";

interface DataProps {
  tagLine?: string;
  heading?: string;
  paragraph?: string;
  className?: string;
  children?: ReactNode;
  imageURL?: string;
  videoURL?: string;
  path?: string;
  render: (item?: DataProps, index?: number) => ReactNode;
}

interface CarouselProps {
  className?: string;
  data: DataProps[];
  children?: ReactNode;
  duration?: number;
  indicators?: boolean;
}

interface CarouselContextProps {
  className?: string;
  data: DataProps[];
  children?: ReactNode;
  duration?: number;
  indicators: boolean;
  activeIndex: number;
  goToSlide: (index: number) => void;
  direction: "next" | "prev";
}

const CarouselContext = createContext<CarouselContextProps>({
  data: [],
  activeIndex: 0,
  goToSlide: () => {},
  direction: "next",
  indicators: true,
});

export default function Carousel({
  className,
  children,
  data,
  duration = 5,
  indicators = true,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? "next" : "prev");
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const nextSlide = useCallback(() => {
    const nextIndex = (activeIndex + 1) % data.length;
    goToSlide(nextIndex);
  }, [activeIndex, data.length, goToSlide]);

  useEffect(() => {
    if (data.length > 1) {
      slideInterval.current = setInterval(nextSlide, duration * 1000);
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [nextSlide, duration, data.length]);

  return (
    <div className={cn("text-white h-screen", className)}>
      <CarouselContext.Provider
        value={{
          data,
          activeIndex,
          goToSlide,
          direction,
          indicators,
        }}
      >
        {children}
      </CarouselContext.Provider>
    </div>
  );
}

export function CarouselItem({
  render,
}: {
  render: (item: DataProps, index: number) => ReactNode;
}) {
  const { data, direction, activeIndex } = useContext(CarouselContext);
  return (
    <div className="size-full relative overflow-x-hidden bg-gray-950">
      <MotionConfig transition={{ duration: 0.5, type: "tween" }}>
        <AnimatePresence custom={direction}>
          {data.map(
            (item: DataProps, index: number) =>
              index === activeIndex && (
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full flex items-center"
                >
                  {render(item, index)}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}

export function CarouselTextBlock({
  tagLine,
  heading,
  paragraph,
  path,
  render,
}: DataProps) {
  return (
    <Wrapper className="relative text-white z-10 flex flex-col justify-center h-full">
      <motion.div
        className="max-w-[50ch] rounded"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.5 }}
      >
        {render({ tagLine, heading, paragraph, path } as DataProps)}
      </motion.div>
      <CarouselIndicatorGroup />
    </Wrapper>
  );
}

function CarouselImage({ imageURL, ...props }: { imageURL: string }) {
  return (
    <motion.div className="absolute inset-0 bg-indigo-950 after:absolute after:inset-0 after:bg-shade-1">
      <Image
        alt="image"
        src={imageURL}
        fill
        priority
        className="object-cover"
        {...props}
      />
    </motion.div>
  );
}

function CarouselVideo({ videoURL, ...props }: { videoURL: string }) {
  return (
    <motion.div className="absolute inset-0 bg-indigo-950 after:absolute after:inset-0 after:bg-shade-1 cafter:backdrop-blur">
      <Image
        alt="image"
        src={videoURL}
        fill
        priority
        className="object-cover"
        {...props}
      />
    </motion.div>
  );
}

export function CarouselIndicatorGroup() {
  const { data, indicators } = useContext(CarouselContext);
  return (
    data.length > 1 &&
    indicators && (
      <div className="flex gap-1 mt-4">
        {data.map((item: DataProps, index: number) => (
          <CarouselIndicator index={index} key={index} />
        ))}
      </div>
    )
  );
}

export function CarouselIndicator({ index }: { index: number }) {
  const { activeIndex, goToSlide } = useContext(CarouselContext);
  return (
    <button
      onClick={() => goToSlide(index)}
      className={cn(
        "size-3.5 border-2 border-white/50 relative rounded-full before:absolute before:inset-0.5 before:bg-gray-400 before:rounded-full before:scale-0 before:transition-transform",
        index === activeIndex &&
          "before:scale-100 before:bg-white border-white",
        index !== activeIndex &&
          "hover:before:scale-100 hover:before:bg-white hover:border-white"
      )}
    />
  );
}

const variants = {
  enter: (direction: string) => ({
    x: direction === "next" ? "100%" : "-100%",
  }),
  center: {
    x: 0,
  },
  exit: (direction: string) => ({
    x: direction === "next" ? "-100%" : "100%",
  }),
};

Carousel.TextBlock = CarouselTextBlock;
Carousel.Image = CarouselImage;
Carousel.Video = CarouselVideo;
Carousel.Item = CarouselItem;
Carousel.IndicatorGroup = CarouselIndicatorGroup;
