"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { RefObject, useRef } from "react";

export default function BusinessCard({
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
    margin: `0px 0px ${(10 * index + 200) * -1}px 0px`,
  });
  return (
    <motion.div
      ref={ref}
      className={cn("h-52 rounded overflow-hidden", className)}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {children}
    </motion.div>
  );
}
