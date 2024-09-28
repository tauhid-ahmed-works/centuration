"use client";
import { cn } from "@/libs/utils/cn";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Wrapper from "@/components/layout/wrapper";
import * as Icons from "@/components/icons";
import BannerTextBlock from "./text-block";

const CarouselContext = createContext<any>({
  data: [],
  activeIndex: 0,
  goToSlide: () => {},
  direction: "next",
});

interface CarouselProps {
  className?: string;
  data: any[];
  children?: React.ReactNode;
}

export default function Carousel({ className, children, data }: CarouselProps) {
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
      slideInterval.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [activeIndex]);

  return (
    <div className={cn("text-white h-screen", className)}>
      <CarouselContext.Provider
        value={{
          data,
          activeIndex,
          goToSlide,
          direction,
        }}
      >
        {children}
      </CarouselContext.Provider>
    </div>
  );
}

export function CarouselItem({ children }: any) {
  const { data, direction, activeIndex } = useContext(CarouselContext);
  return (
    <div className="size-full relative xoverflow-x-hidden">
      <MotionConfig transition={{ duration: 0.5, type: "tween" }}>
        <AnimatePresence custom={direction}>
          {data.map(
            (item: any, index: number) =>
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
                  {children}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}

function CarouselImage() {
  const { data, direction, activeIndex } = useContext(CarouselContext);
  const item = data[activeIndex];
  if (!item) return null;
  return (
    <motion.div className="absolute inset-0 bg-indigo-950 after:absolute after:inset-0 after:bg-shade-1 cafter:backdrop-blur">
      <Image
        alt="image"
        src={item.bannerImage}
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
function CarouselVideo() {
  const { data, direction, activeIndex } = useContext(CarouselContext);
  const item = data[activeIndex];
  if (!item) return null;
  return (
    <motion.div className="absolute inset-0 bg-indigo-950 after:absolute after:inset-0 after:bg-shade-1 cafter:backdrop-blur">
      <Image
        alt="image"
        src={item.bannerImage}
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
}

export function CarouselIndicatorGroup() {
  const { data } = useContext(CarouselContext);
  return (
    data.length > 1 && (
      <div className="flex gap-1 mt-4">
        {data.map((item: any, index: number) => (
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

export function CarouselTextBlock() {
  const { data, direction, activeIndex } = useContext(CarouselContext);
  const item = data[activeIndex];
  if (!item) return null;
  return (
    <Wrapper className="relative text-white z-10 flex flex-col justify-center h-full">
      <motion.div
        className="max-w-[65ch] rounded"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.5 }}
      >
        <BannerTextBlock
          tagLine={"Our Bussiness"}
          heading={item.businessName}
          paragraph={item.descriptions.long.paragraphs[0]}
        />
      </motion.div>
      <CarouselIndicatorGroup />
    </Wrapper>
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
Carousel.Indicator = CarouselIndicator;
Carousel.IndicatorGroup = CarouselIndicatorGroup;
