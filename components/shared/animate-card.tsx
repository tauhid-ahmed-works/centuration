"use client";
import { cn } from "@/libs/utils/cn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedCard({
  className,
  children,
  index,
}: {
  className?: string;
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: `0px 0px ${(15 * index + 150) * -1}px 0px`,
  });
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {children}
    </motion.div>
  );
}
