import { useViewportScroll, animate } from 'framer-motion';

export default  ScrollSnap() {
  const { scrollY } = useViewportScroll();

  const handleScroll = () => {
    animate(scrollY, {
      to: scrollY + 100,
      duration: 0.5,
      ease: 'easeInOut',
    });
  };

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll" onScroll={handleScroll}>
      <div className="h-screen">Section 1</div>
      <div className="h-screen">Section 2</div>
      <div className="h-screen">Section 3</div>
    </div>
  );
}