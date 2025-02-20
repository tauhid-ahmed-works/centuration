"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import React, { RefObject, useRef } from "react";

export default function AnimatedCard({
  className,
  children,
  index,
}: {
  className?: string;
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as RefObject<Element>, {
    margin: `0px 0px ${(15 * index + 150) * -1}px 0px`,
  });
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateSlideIn({
  children,
  from = "left",
  index = 0,
  once = true,
  className,
}: {
  children: React.ReactNode;
  from?: "left" | "right";
  index?: number;
  once?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ x: from === "left" ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        type: "tween",
        delay: index * 0.1,
      }}
      viewport={{ once: once }}
    >
      {children}
    </motion.div>
  );
}
