import React from "react";
import { NEXT, PREV } from "./constant";
import { CarouselSlideProps } from "./types";

type Config = {
  duration?: number;
  pause?: boolean;
};

type CarouselData = Record<string, string | number | boolean>;

export function useCarousel(data: CarouselData[], config: Config) {
  if (data.length < 1) return;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [prevIndex, setPrevIndex] = React.useState([-1, activeIndex]);

  const handleCarouselSlide = (payload: CarouselSlideProps) => {
    const nextIndex =
      typeof payload.index === "number"
        ? payload.index
        : payload.direction === NEXT
        ? activeIndex + 1
        : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  React.useEffect(() => {
    if (config.pause) return;
    const intervalId = setInterval(
      handleCarouselSlide.bind(null, { direction: NEXT }),
      (config.duration as number) * 1000
    );
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  if (activeIndex !== prevIndex[1]) {
    setPrevIndex([prevIndex[1], activeIndex]);
  }

  const direction = prevIndex[0] < prevIndex[1] ? NEXT : PREV;
  const currentIndex = Math.abs(activeIndex) % data.length;

  return {
    activeIndex,
    setActiveIndex,
    direction,
    currentIndex,
    handleCarouselSlide,
  };
}
