"use client";
import { useScroll, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

const pathnames = ["/contact", "/privacy-policy", "/terms-and-conditions"];

export default function HeaderBackground() {
  const [scrolled, setScrolled] = useState(0);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const matchedPathname = pathnames.includes(pathname);
  scrollY.on("change", (change) => setScrolled(change));

  return (
    <div className="absolute inset-0">
      <motion.div
        initial={{ background: "#12182600" }}
        animate={{ background: scrolled >= 100 ? "#121826" : "#12182600" }}
        className="absolute size-full bg-gray-900"
      />
      <motion.div
        initial={{ background: "#12182670" }}
        animate={{ background: matchedPathname ? "#121826" : "#12182670" }}
        className="absolute size-full bg-gray-900"
      />
    </div>
  );
}
