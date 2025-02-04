// "use client";

// import React, { useState, useRef } from "react";
// import { motion, useScroll, useMotionValueEvent, animate } from "motion/react";

// export default function HomePage() {
//   const [_, setIndex] = useState(0);
//   const sections = 6;
//   const { scrollY } = useScroll();
//   const prevScrollY = useRef(0);

//   useMotionValueEvent(scrollY, "change", (value) => {
//     const delta = value - prevScrollY.current;

//     if (Math.abs(delta) >= 200) {
//       setIndex((prev) => {
//         const newIndex = Math.min(prev + 1, Math.max(prev - 1, sections));
//         animate(
//           document.documentElement,
//           { scrollTop: newIndex * window.innerHeight },
//           { type: "spring", stiffness: 100, damping: 15, duration: 5 }
//         );

//         prevScrollY.current = value;
//         return newIndex;
//       });
//     }
//   });

//   return (
//     <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
//       {[...Array(sections)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="h-screen flex items-center justify-center text-9xl font-bold bg-gray-800 text-white snap-start"
//         >
//           Section {i + 1}
//         </motion.div>
//       ))}
//     </main>
//   );
// }

export default function page() {
  return <div>page</div>;
}
