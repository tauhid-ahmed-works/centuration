"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useRef } from "react";

export default function AnimatedCard({
  className,
  children,
  index,
  once = true,
}: {
  className?: string;
  children: React.ReactNode;
  index: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once }}
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
