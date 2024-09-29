"use client";
import ScrollSnap from "@/components/snapping";

export default function AnimaPage() {
  return (
    <div className="h-screen relative bg-black z-[50000]">
      {/* <ScrollSnap>
        <ScrollSnap.Group>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </ScrollSnap.Group>

        <ScrollSnap.Indicators />
      </ScrollSnap> */}
    </div>
  );
}

function SectionOne() {
  return (
    <div className="min-h-screen bg-indigo-600 text-9xl grid place-items-center">
      <div className="min-h-[200vh] w-full bg-yellow-600"></div>
    </div>
  );
}

function SectionTwo() {
  return (
    <div className="h-screen bg-emerald-600 text-9xl grid place-items-center">
      2
    </div>
  );
}

function SectionThree() {
  return (
    <div className="h-screen bg-red-600 text-9xl grid place-items-center">
      3
    </div>
  );
}

function SectionFour() {
  return (
    <div className="h-screen bg-blue-600 text-9xl grid place-items-center">
      4
    </div>
  );
}
