"use client";
import { useScroll, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useConfig } from "@/context/config-context";

const pathnames = ["/contact", "/privacy-policy", "/terms-and-conditions"];

export default function HeaderBackground() {
  const [scrolled, setScrolled] = useState(0);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const matchedPathname = pathnames.includes(pathname);
  scrollY.on("change", (change) => setScrolled(change));
  const { scrollSnapPosition } = useConfig();

  return (
    <div className="absolute inset-0 z-10">
      <motion.div
        initial={{ background: "transparent" }}
        animate={{
          background:
            scrolled >= 100 ? "var(--headerAnimation)" : "transparent",
        }}
        className="absolute inset-0 w-full h-full z-10"
      />
      <motion.div
        initial={{ background: "gray" }}
        animate={{
          background: matchedPathname
            ? "var(--headerAnimation-light)"
            : "transparent",
        }}
        className="absolute inset-0 w-full h-full"
      />
      <motion.div
        initial={{ background: "transparent" }}
        animate={{
          background:
            scrollSnapPosition > 0 ? "var(--headerAnimation)" : "transparent",
        }}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
