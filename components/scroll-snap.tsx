"use client";

import { useState, useEffect, useRef, useContext, createContext } from "react";
import { cn } from "@/libs/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

type ScrollSnapStartProps = {
  children: React.ReactNode;
  className?: string;
  index: number;
  content?: "center" | "end";
  height?: "screen" | "responsive";
};

type ScrollSnapContextType = {
  activeIndex: number;
  handleScrollIntoView: (index: number) => void;
} | null;

const ScrollSnapContext = createContext<ScrollSnapContextType>(null);

export function useScrollSnap() {
  try {
    const context = useContext(ScrollSnapContext);
    if (!context) {
      throw new Error(
        "useScrollSnap must be used within a ScrollSnap component"
      );
    }
    return context;
  } catch (error) {
    return null;
  }
}

export default function ScrollSnap({ children, className }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionCount, setSectionCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollIntoView = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const section = container.querySelector(
      `[data-snap-index="${index}"]`
    ) as HTMLElement;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observe = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          setActiveIndex(Number(entry.target.dataset.snapIndex));
        }
      });
    };

    const observer = new IntersectionObserver(observe, {
      root: container,
      threshold: 0.5,
    });

    const sections = container.querySelectorAll("[data-snap-index]");
    setSectionCount(sections.length);
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <ScrollSnapContext.Provider value={{ activeIndex, handleScrollIntoView }}>
      <div
        ref={containerRef}
        className={cn(
          "snap-mandatory snap-y min-h-screen md:min-h-auto md:h-screen overflow-y-scroll relative",
          className
        )}
      >
        {children}
        <div className="fixed hidden z-200 right-0 md:right-4 inset-y-0 md:flex flex-col justify-center">
          <div className="flex flex-col justify-center gap-1 rounded-full p-2">
            {Array.from({ length: sectionCount }, (_, index) => (
              <button
                key={index}
                className={cn(
                  "block shrink-0 size-2.5 font-semibold rounded-full m-1 bg-brand-500 cursor-pointer scale-[0.50] shadow transition-transform duration-300 relative before:size-5 before:block before:absolute before:inset-0 before:rounded-full",
                  index === activeIndex ? "scale-125" : "hover:scale-100"
                )}
                onClick={() => handleScrollIntoView(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollSnapContext.Provider>
  );
}

function ScrollSnapStart({
  children,
  index,
  content = "center",
  height = "screen",
}: ScrollSnapStartProps) {
  return (
    <section
      data-snap-index={index}
      data-scroll-snap={true}
      className={cn(
        "h-full snap-start gird",
        content === "center" && "place-content-center",
        content === "end" && "place-content-end",
        height === "responsive" && "h-[140vh] md:h-screen"
      )}
    >
      {children}
    </section>
  );
}

ScrollSnap.displayName = "Scroll Snap";
ScrollSnap.Start = ScrollSnapStart;
