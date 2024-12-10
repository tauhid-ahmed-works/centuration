"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../button";
import { Heading } from "../heading";
import {
  CarouselContentProps,
  CarouselPaginationProps,
  CarouselProps,
  CarouselSlideProps,
} from "./types";
import { NEXT, PREV, VIDEO, IMAGE } from "./constant";
import { useCarousel } from "./hook";

const variants = {
  initial: (direction: string) => ({
    x: direction === NEXT ? "100%" : "-100%",
  }),
  animate: () => ({
    x: 0,
  }),
  exit: (direction: string) => ({
    x: direction === NEXT ? "-100%" : "100%",
  }),
};

export function Carousel({
  data = [],
  duration = 5,
  overlay = true,
  className,
}: CarouselProps) {
  const { direction, currentIndex, handleCarouselSlide }: any = useCarousel(
    data,
    {
      duration,
    }
  );

  return (
    <>
      <div
        className={cn("relative overflow-hidden size-full h-screen", className)}
      >
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="size-full absolute inset-0 flex items-center"
          >
            <CarouselContent overlay={overlay} data={data[currentIndex]}>
              <CarouselPagination
                length={data.length}
                activeIndex={currentIndex}
                onClick={handleCarouselSlide}
              />
            </CarouselContent>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

function CarouselContent({ data, overlay, children }: CarouselContentProps) {
  const mediaLink = (
    data.videoLink ? data.videoLink : data.imageLink
  ) as string;
  const type = data.videoLink ? VIDEO : IMAGE;

  return (
    <>
      <div
        className={cn("absolute inset-0 bg-primary-100", {
          "after:absolute after:inset-0 after:bg-black/50": overlay,
        })}
      >
        <CarouselMedia mediaLink={mediaLink} type={type} />
      </div>
      <div className="container relative z-10 text-white">
        <div className="space-y-4 lg:space-y-6">
          <Heading>{data.title}</Heading>
          <p>{data.content}</p>
          <div className="">
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

function CarouselMedia({
  mediaLink,
  type,
}: {
  mediaLink: string;
  type: "VIDEO" | "IMAGE";
}) {
  return type === "VIDEO" ? (
    <video
      src={mediaLink}
      autoPlay
      muted
      loop
      className="object-cover size-full"
    />
  ) : (
    <Image
      className="size-full object-cover"
      src={mediaLink}
      width="1920"
      height="1080"
      alt={type}
    />
  );
}

function CarouselPagination({
  onClick,
  activeIndex,
  length,
}: CarouselPaginationProps) {
  return (
    <div className="flex gap-1.5 text-white z-50 py-5">
      {Array(length)
        .fill(null)
        .map((_, index) => (
          <button
            key={index}
            className={cn(
              "size-4 rounded-full border-2 cursor-pointer space-x-2 relative before:absolute before:inset-0.5 before:bg-white before:rounded-full before:scale-0 transition-transform",
              {
                "before:scale-100 scale-110": activeIndex === index,
                "hover:before:scale-100 hover:scale-110": activeIndex !== index,
              }
            )}
            onClick={onClick.bind(null, { index })}
          ></button>
        ))}
    </div>
  );
}
