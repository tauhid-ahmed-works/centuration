"use client";
import {
  businessCategories,
  type BusinessCategory,
} from "@/data/business-category";
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
import Link from "next/link";
import Wrapper from "@/components/layout/wrapper";
import * as Icons from "@/components/icons";

interface SliderContextType {
  data: BusinessCategory[];
  activeIndex: number;
  goToSlide: (index: number) => void;
  direction: "next" | "prev";
}

const SliderContext = createContext<SliderContextType>({
  data: [],
  activeIndex: 0,
  goToSlide: () => {},
  direction: "next",
});

interface SliderProps {
  className?: string;
  data?: BusinessCategory[];
  type: "image" | "video";
}

export default function Slider({
  className,
  data = businessCategories.slice(0, 6),
  type = "image",
}: SliderProps) {
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
    slideInterval.current = setInterval(nextSlide, 5000);

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [activeIndex]);

  return (
    <div className={cn("h-screen", className)}>
      <SliderContext.Provider
        value={{
          data,
          activeIndex,
          goToSlide,
          direction,
        }}
      >
        <SliderContent type={type} />
      </SliderContext.Provider>
    </div>
  );
}

export function SliderContent({ type }: { type: "image" | "video" }) {
  const { data, direction, activeIndex } = useContext(SliderContext);
  return (
    <div className="size-full relative overflow-x-hidden">
      <MotionConfig transition={{ duration: 0.5, type: "tween" }}>
        <AnimatePresence custom={direction}>
          {data.map(
            (item: BusinessCategory, index: number) =>
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
                  <motion.div className="absolute inset-0 bg-indigo-950 after:absolute after:inset-0 after:bg-shade-1 cafter:backdrop-blur">
                    {type === "image" ? (
                      <Image
                        alt="image"
                        src={item.bannerImage}
                        fill
                        priority
                        className="object-cover"
                      />
                    ) : null}
                  </motion.div>
                  <Wrapper className="relative text-white z-10 flex flex-col justify-center h-full">
                    <motion.div
                      className="max-w-[65ch] rounded"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h1 className="font-semibold">Our Businesses</h1>
                      <h2 className="text-4.5xl font-semibold">
                        {item.businessName}
                      </h2>
                      <p className="mt-4 text-md">
                        {item.descriptions.long.paragraphs[0]}
                      </p>
                      <Link
                        className="mt-4 inline-flex items-center gap-1 hover:translate-x-1 duration-300 transition-transform group"
                        href={item.path}
                      >
                        <span className="group-hover:font-semibold">
                          Learn More
                        </span>{" "}
                        <Icons.ArrowLong size={2} />
                      </Link>
                    </motion.div>
                    <SliderIndicatorGroup />
                  </Wrapper>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}

export function SliderIndicatorGroup() {
  const { data } = useContext(SliderContext);
  return (
    <div className="flex gap-1 mt-4">
      {data.map((item: BusinessCategory, index: number) => (
        <SliderIndicator index={index} key={index} />
      ))}
    </div>
  );
}

export function SliderIndicator({ index }: { index: number }) {
  const { activeIndex, goToSlide } = useContext(SliderContext);
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

Slider.Content = SliderContent;
Slider.Indicator = SliderIndicator;
Slider.IndicatorGroup = SliderIndicatorGroup;
