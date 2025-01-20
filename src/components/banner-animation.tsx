"use client";
import { ChevronDown } from "./icons";

export default function BannerAnimation({ ...props }) {
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: innerHeight, behavior: "smooth" });
      }}
      {...props}
      className="mx-auto z-100 flex flex-col justify-center items-center gap-1 text-brand-500 absolute inset-x-0 bottom-8"
    >
      <button {...props}>
        <ChevronDown
          className="size-8 animate-hero brightness-150 scale-150"
          style={{ animationDelay: "0ms" }}
        ></ChevronDown>
        <ChevronDown
          className="size-8 animate-hero brightness-150 scale-150 -mt-5"
          style={{ animationDelay: "250ms" }}
        ></ChevronDown>
        <ChevronDown
          className="size-8 animate-hero brightness-150 scale-150 -mt-5"
          style={{ animationDelay: "500ms" }}
        ></ChevronDown>
      </button>
    </div>
  );
}
