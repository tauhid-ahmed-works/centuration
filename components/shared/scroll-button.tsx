"use client";

import { useScrollSnap } from "../snapping";
import * as Icons from "@/components/icons";

export function ScrollButton({ ...props }) {
  return (
    <button
      className="fixed bottom-4 right-4 z-500 flex flex-col items-center group"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      {...props}
    >
      <span className="bg-brand-500  group-hover:bg-emerald-500 transition-colors duration-300 size-12 rounded-full flex items-center justify-center">
        <Icons.ChevronUp className="size-6 text-white" />
      </span>
      <span className="text-white">Back to Top</span>
    </button>
  );
}

export function ScrollSnapHome() {
  const { handleScrollIntoView } = useScrollSnap();
  return <ScrollButton onClick={() => handleScrollIntoView(0)} />;
}
