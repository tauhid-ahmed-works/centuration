"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export default function ScrollDots() {
  const [index, setIndex] = useState<number>(1);
  const scrolling = useRef(false); // Prevent observer override when scrolling manually

  const handleIndexClick = (newIndex: number) => {
    scrolling.current = true;
    setIndex(newIndex + 1);
    const element = document.querySelector(`[data-section="${newIndex + 1}"]`);
    element?.scrollIntoView({ behavior: "smooth" });

    // Reset scrolling flag after a delay
    setTimeout(() => {
      scrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    const elements = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrolling.current) return; // Ignore updates while scrolling manually

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = Number(
              entry.target.getAttribute("data-section")
            );
            if (!isNaN(sectionIndex)) {
              setIndex(sectionIndex);
            }
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold for better detection
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed right-3 inset-y-0 z-[5000] flex items-center">
      <div className="flex flex-col gap-6 backdrop-blur-lg">
        {Array.from({ length: 5 }, (_, i) => (
          <button
            onClick={() => handleIndexClick(i)}
            key={i}
            className={cn(
              "size-1 bg-primary-500 backdrop-blur ring-1 transition-transform ring-secondary-400 rounded-full cursor-pointer",
              index === i + 1 && "bg-primary-500 scale-200",
              index !== i + 1 && "hover:bg-primary-500 hover:scale-200"
            )}
          ></button>
        ))}
      </div>
    </div>
  );
}
