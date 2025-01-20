"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
  ReactElement,
} from "react";
import { cn } from "@/lib/utils";
import { useConfig } from "@/context/config-context";

// Props for ScrollSnap component
type ScrollSnapProps = {
  children: React.ReactNode;
  className?: string;
};

// Props for SnapGroup component
type SnapGroupProps = {
  children: React.ReactNode;
};

// ScrollSnap context type
type ScrollSnapContextType = {
  activeIndex: number;
  handleScrollIntoView: (index: number) => void;
  container: HTMLDivElement | null;
  sectionCount: number;
  setSectionCount: React.Dispatch<React.SetStateAction<number>>;
} | null;

// Create context with initial null value
const ScrollSnapContext = createContext<ScrollSnapContextType>(null);

// Hook to use ScrollSnap context
export function useScrollSnap() {
  const context = useContext(ScrollSnapContext);
  if (!context) {
    throw new Error("useScrollSnap must be used within a ScrollSnap component");
  }
  return context;
}

// ScrollSnap component
export default function ScrollSnap({ children, className }: ScrollSnapProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionCount, setSectionCount] = useState(0);
  const { setScrollSnapPosition } = useConfig();

  const handleScrollIntoView = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const section = container.querySelector(
      `[data-snap="${index}"]`
    ) as HTMLElement;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
      setScrollSnapPosition(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observe = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          setActiveIndex(Number(entry.target.dataset?.snap));
          setScrollSnapPosition(Number(entry.target.dataset?.snap));
        }
      });
    };

    const observer = new IntersectionObserver(observe, {
      root: container,
      threshold: 0.5,
    });

    const sections = container.querySelectorAll("[data-snap]");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setScrollSnapPosition]);

  return (
    <ScrollSnapContext.Provider
      value={{
        activeIndex,
        handleScrollIntoView,
        container: containerRef.current,
        sectionCount,
        setSectionCount,
      }}
    >
      <div ref={containerRef} className={cn("relative", className)}>
        {children}
      </div>
    </ScrollSnapContext.Provider>
  );
}

function SnapGroup({ children }: SnapGroupProps) {
  const { setSectionCount } = useScrollSnap();

  useEffect(() => {
    const sectionCount = React.Children.count(children);
    setSectionCount(sectionCount);
  }, [setSectionCount, children]);

  return (
    <div className="h-screen snap-mandatory snap-y overflow-y-scroll relative">
      {React.Children.map(children, (child, index) => (
        <div data-snap={index} className={cn("min-h-screen  snap-end")}>
          {React.isValidElement(child)
            ? React.cloneElement(child as ReactElement, {})
            : null}
        </div>
      ))}
    </div>
  );
}

function Indicators() {
  const { activeIndex, handleScrollIntoView, sectionCount } = useScrollSnap();
  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeIndex, handleScrollIntoView]);
  return (
    <div className="fixed right-0 md:right-4 inset-y-0 flex flex-col justify-center ">
      <div className="flex flex-col justify-center gap-1 rounded-full p-2">
        {[...Array(sectionCount)].map((_, index) => (
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
  );
}

// Add displayName and components to ScrollSnap
ScrollSnap.displayName = "ScrollSnap";
ScrollSnap.Group = SnapGroup;
ScrollSnap.Indicators = Indicators;
