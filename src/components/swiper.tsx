"use client";

import { useState, useEffect, ReactNode, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaOptionsType } from "embla-carousel";
import { IconButton } from "./ui/icon-button";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Generic type for carousel items
interface CarouselItem {
  id: string | number;
  [key: string]: unknown;
}

interface EmblaCarouselProps<T extends CarouselItem> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  arrows?: boolean;
  className?: string;
  slidesToShow?: number;
}

export const EmblaCarousel = <T extends CarouselItem>({
  items,
  renderItem,
  loop = false,
  autoplay = true,
  autoplayInterval = 3000,
  arrows = true,
  className = "",
  slidesToShow,
}: EmblaCarouselProps<T>) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true);
  const [isInView, setIsInView] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const options: EmblaOptionsType = {
    align: "start",
    loop,
    skipSnaps: false,
    inViewThreshold: 0.1,
    dragFree: false,
    containScroll: "keepSnaps",
    watchDrag: true,
    slidesToScroll: 1,
    dragThreshold: 4,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      delay: autoplayInterval,
      stopOnInteraction: true,
      playOnInit: isInView && autoplay,
    }),
  ]);

  const onSelect = (): void => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  // Intersection Observer to detect if the carousel is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (emblaApi) {
          if (entry.isIntersecting && autoplay) {
            emblaApi.plugins().autoplay?.play();
          } else {
            emblaApi.plugins().autoplay?.stop();
          }
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, [emblaApi, autoplay]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={`relative w-full ${className}`} ref={carouselRef}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn("flex-[0_0_100%] min-w-0", {
                "md:flex-[0_0_50%] lg:flex-[0_0_33.333333%]":
                  slidesToShow === 3,
              })}
            >
              <div className="px-4">{renderItem(item, index)}</div>
            </div>
          ))}
        </div>
      </div>

      {arrows && (
        <div className="absolute -inset-x-8 top-1/2 -translate-y-1/2 flex justify-between">
          <IconButton
            variant="primary"
            contrast="ghost"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
            type="button"
          >
            <LucideChevronLeft />
          </IconButton>
          <IconButton
            onClick={() => emblaApi?.scrollNext()}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
            type="button"
            variant="primary"
            contrast="ghost"
          >
            <LucideChevronRight />
          </IconButton>
        </div>
      )}
      <div className="flex gap-2">
        {[...Array(items.length)].map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "cursor-pointer size-4 border rounded bg-rose-500",
              index === selectedIndex && "bg-green-500"
            )}
          ></button>
        ))}
      </div>
    </div>
  );
};
