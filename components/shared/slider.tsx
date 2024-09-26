"use client";
import { cn } from "@/libs/utils/cn";
import { motion } from "framer-motion";
import React, { useState, useRef, useContext, createContext } from "react";

const SliderContext = createContext<{
  activeIndex: number;
  setActiveIndex: (id: number) => void;
  slideCount: number;
}>({
  activeIndex: 0,
  setActiveIndex: () => {},
  slideCount: 0,
});

export default function Slider({ children }: { children?: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount] = useState(4);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <SliderContext.Provider value={{ activeIndex, setActiveIndex, slideCount }}>
      <div ref={containerRef} className="relative">
        <div ref={sliderRef} className="h-screen bg-black flex relative">
          {children}
        </div>
      </div>
    </SliderContext.Provider>
  );
}

function Slide({ children }: { children?: React.ReactNode }) {
  const { activeIndex: index } = useContext(SliderContext);

  return (
    <motion.div
      animate={{ x: `-${index * 100}%` }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-full shrink-0 w-full flex items-center text-white realtive"
    >
      <div className="w-full">{children}</div>
    </motion.div>
  );
}

function Indicators() {
  const { activeIndex, setActiveIndex } = useContext(SliderContext);
  return (
    <div className="flex gap-1 mt-2 w-full absolute z-100">
      <SliderButton
        id={0}
        index={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <SliderButton
        id={1}
        index={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <SliderButton
        id={2}
        index={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <SliderButton
        id={3}
        index={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}

function SliderButton({
  index,
  setActiveIndex,
  id,
}: {
  id: number;
  index: number;
  setActiveIndex: (id: number) => void;
}) {
  return (
    <button
      onClick={() => setActiveIndex(id)}
      className={cn(
        "relative size-3 rounded-full border before:absolute before:inset-px before:bg-white before:rounded-full hover:before:opacity-100 before:opaciy-0 before:transition-opacity before:duration-300",
        index === id ? "before:opacity-100" : "before:opacity-0"
      )}
    ></button>
  );
}

Slider.displayName = "Slider";
Slider.Slide = Slide;
Slider.Indicators = Indicators;
