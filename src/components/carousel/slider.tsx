"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SeamlessInfiniteSlider = ({ images }) => {
  // Duplicate images to create seamless effect
  const extendedImages = [
    ...images.slice(-3), // Last three images at the start
    ...images, // Original images
    ...images.slice(0, 3), // First three images at the end
  ];

  const [currentIndex, setCurrentIndex] = useState(3); // Start after initial duplicates
  const sliderRef = useRef(null);

  // Smooth transition handler
  const smoothTransition = useCallback((newIndex) => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(-${newIndex * 200}px)`;

      // Trigger reflow
      sliderRef.current.offsetHeight;

      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      setCurrentIndex(newIndex);
    }
  }, []);

  // Navigation handlers with seamless wrapping
  const nextSlide = useCallback(() => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);

    // If we've reached the last extended image, reset position
    if (nextIndex >= extendedImages.length - 3) {
      setTimeout(() => {
        smoothTransition(3);
      }, 500);
    }
  }, [currentIndex, extendedImages.length, smoothTransition]);

  const prevSlide = useCallback(() => {
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);

    // If we've reached the first extended image, reset position
    if (prevIndex <= 0) {
      setTimeout(() => {
        smoothTransition(extendedImages.length - 6);
      }, 0);
    }
  }, [currentIndex, extendedImages.length, smoothTransition]);

  // Auto-play effect
  // useEffect(() => {
  //   const autoPlayInterval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(autoPlayInterval);
  // }, [nextSlide]);

  return (
    <div className="w-[400px] mx-auto overflow-hidden relative group">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out border-2 border-red-500"
        style={{
          transform: `translateX(-${currentIndex * 200}px)`,
          width: `${extendedImages.length * 200}px`,
        }}
      >
        {extendedImages.map((image, index) => (
          <div key={index} className="w-[200px] flex-shrink-0 p-2 group/item">
            <div className="relative w-[200px] h-[200px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                priority
                sizes="200px"
                className="object-cover transition-transform duration-300 group-hover/item:scale-110"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 
        bg-white/70 hover:bg-white/90 backdrop-blur-sm 
        rounded-full p-2 m-2 z-10 shadow-md
        transition-all duration-300 
        opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-8 h-8 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 
        bg-white/70 hover:bg-white/90 backdrop-blur-sm 
        rounded-full p-2 m-2 z-10 shadow-md
        transition-all duration-300 
        opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-8 h-8 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              // Adjust index to match extended array
              const adjustedIndex = index + 3;
              setCurrentIndex(adjustedIndex);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${
                currentIndex >= 3 &&
                currentIndex < extendedImages.length - 3 &&
                Math.floor(currentIndex - 3) === index
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

// Slider Component
export const Slider = () => {
  const images = [
    "https://unsplash.it/id/402/400/400",
    "https://unsplash.it/id/403/400/400",
    "https://unsplash.it/id/404/400/400",
    "https://unsplash.it/id/405/400/400",
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <SeamlessInfiniteSlider images={images} />
    </div>
  );
};

export default Slider;
