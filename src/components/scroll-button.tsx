"use client";

import * as Icons from "@/components/icons";
import { useScrollSnap } from "./scroll-snap";

export function ScrollButton({ ...props }) {
  return (
    <button
      className="fixed bottom-6 md:right-6 right-2 z-500 flex flex-col items-center group p-1 size-20 rounded-full justify-center bg-transparent"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      {...props}
    >
      <span className="bg-brand-500 group-hover:bg-secondary-500 transition-colors duration-300 size-7 rounded-full flex items-center justify-center">
        <Icons.ChevronUp className="size-3 text-white" />
      </span>
      <span className="text-white text-[10px] font-semibold inline-block relative bg-secondary-500/20 p-px rounded back">
        Back to Top
      </span>
    </button>
  );
}

export function ScrollSnapHome() {
  const { handleScrollIntoView } = useScrollSnap();
  return <ScrollButton onClick={() => handleScrollIntoView(0)} />;
}
