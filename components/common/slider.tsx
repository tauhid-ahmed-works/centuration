"use client";

export default function Slider() {
  return <div className="h-screen"></div>;
}

export function SliderIndicatorGroup() {
  return <div className="flex gap-1"></div>;
}
export function SliderIndicator() {
  return (
    <button className="size-3 border rounded-full before:absolute before:inset-0.5 before:bg-white"></button>
  );
}
