"use client";
import React, { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const Lenis = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis
      options={{
        duration: 1.2,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      }}
      root
    >
      {children}
    </ReactLenis>
  );
};

export default Lenis;
