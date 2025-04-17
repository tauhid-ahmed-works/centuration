import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";

// Embla Context
interface EmblaContextType<T = unknown> {
  emblaRef: ReturnType<typeof useEmblaCarousel>[0];
  emblaApi: UseEmblaCarouselType[1];
  autoplay: boolean;
  loop: boolean;
  delay: number;
  data: T[];
  canScroll: boolean;
  slidesPerView?: number;
  selectedSlide: number;
}

const EmblaContext = createContext<EmblaContextType | null>(null);
export const useEmblaContext = () => {
  const context = useContext(EmblaContext);
  if (!context) {
    throw new Error("useEmblaContext must be used within an EmblaProvider");
  }
  return context;
};

interface EmblaProviderProps<T = unknown> {
  loop?: boolean;
  autoplay?: boolean;
  delay?: number;
  data?: T[];
  align?: "start" | "center" | "end";
  children: ReactNode;
  playOnInit?: boolean;
  stopOnLastSnap?: boolean;
  slidesPerView?: number;
}

export default function Embla({
  loop = true,
  autoplay = false,
  delay = 6000,
  data = [],
  align = "center",
  playOnInit = false,
  children,
  stopOnLastSnap = true,
  slidesPerView = 1,
}: EmblaProviderProps) {
  const autoplayRef = Autoplay({
    delay,
    stopOnInteraction: false,
    playOnInit: playOnInit,
    stopOnMouseEnter: true,
    stopOnFocusIn: true,
    stopOnLastSnap: stopOnLastSnap,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align }, [autoplayRef]);
  const [canScroll, setCanScroll] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);

  // Check if carousel can scroll based on container size vs content size
  useEffect(() => {
    if (!emblaApi) return;

    const handleSelectedSlide = () =>
      setSelectedSlide(emblaApi.selectedScrollSnap());

    emblaApi.on("select", handleSelectedSlide);

    const updateCanScroll = () => {
      const canScrollValue =
        emblaApi.canScrollNext() || emblaApi.canScrollPrev();
      setCanScroll(canScrollValue);
    };

    // Initial check
    updateCanScroll();

    // Listen for resize and select events to update scroll ability
    emblaApi.on("resize", updateCanScroll);
    emblaApi.on("select", updateCanScroll);
    emblaApi.on("reInit", updateCanScroll);

    return () => {
      emblaApi.off("resize", updateCanScroll);
      emblaApi.off("select", updateCanScroll);
      emblaApi.off("reInit", updateCanScroll);
    };
  }, [emblaApi]);

  return (
    <EmblaContext.Provider
      value={{
        emblaRef,
        emblaApi,
        autoplay,
        loop,
        delay,
        data,
        canScroll,
        slidesPerView,
        selectedSlide,
      }}
    >
      {children}
    </EmblaContext.Provider>
  );
}

// Carousel Container
function EmblaContainer({
  children,
  className,
  fluid = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
}) {
  const { emblaRef } = useEmblaContext();
  return (
    <div
      className={cn("h-full", !fluid && "overflow-hidden")}
      ref={emblaRef}
      {...props}
    >
      <div
        className={cn("flex h-full -mx-2 cursor-grab items-stretch", className)}
      >
        {children}
      </div>
    </div>
  );
}

// Individual Slide
function EmblaSlide({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { slidesPerView } = useEmblaContext();
  return (
    <div
      className={cn(
        "shrink-0 grow-0 min-w-0 px-2",
        {
          "basis-full": slidesPerView === 1,
          "basis-full sm:basis-1/2": slidesPerView === 2,
          "basis-full sm:basis-1/2 md:basis-1/3": slidesPerView === 3,
          "basis-2/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4":
            slidesPerView === 4,
          "basis-1/2 sm:basis-4/12 md:basis-3/12 lg:basis-2/12":
            slidesPerView === 6,
        },
        className
      )}
    >
      {children}
    </div>
  );
}

// Navigation Controls
function NavigationControls({
  className,
}: {
  className?: string;
  hidden?: boolean;
}) {
  const { emblaApi } = useEmblaContext();
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // const

  // If we can't scroll, don't render the navigation controls
  // if (!canScroll) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-between inset-x-0 gap-1 absolute top-1/2 -translate-y-1/2 pointer-events-none",
        className
      )}
    >
      <Button
        variant="transparent"
        contrast="default"
        className="size-12 p-0 pointer-events-auto"
        size="icon"
        onClick={scrollPrev}
      >
        <LucideChevronLeft />
      </Button>
      <Button
        variant="transparent"
        contrast="default"
        className="size-12 p-0 pointer-events-auto"
        size="icon"
        onClick={scrollNext}
      >
        <LucideChevronRight />
      </Button>
    </div>
  );
}

// Inline Navigation Controls
function InlineNavigationControls({ className }: { className?: string }) {
  const { emblaApi, canScroll } = useEmblaContext();
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // If we can't scroll, don't render the navigation controls
  if (!canScroll) return null;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Button
        variant="transparent"
        contrast="default"
        className="size-12 p-0"
        size="icon"
        onClick={scrollPrev}
      >
        <LucideChevronLeft />
      </Button>
      <Button
        variant="transparent"
        contrast="default"
        className="size-12 p-0"
        size="icon"
        onClick={scrollNext}
      >
        <LucideChevronRight />
      </Button>
    </div>
  );
}

// Pagination Dots
function Pagination() {
  const { emblaApi, data, canScroll } = useEmblaContext();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Ensure data is treated as an array
  const dataArray = Array.isArray(data) ? data : [data];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  // If we can't scroll, don't render the pagination
  if (!canScroll) return null;

  return (
    <div className="flex justify-center gap-2 mt-4 relative z-10">
      {dataArray.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          className={cn(
            "size-3 rounded-full bg-secondary-100 transition cursor-pointer hover:bg-primary-500",
            selectedIndex === i && "bg-primary-500"
          )}
        />
      ))}
    </div>
  );
}

Embla.Container = EmblaContainer;
Embla.Slide = EmblaSlide;
Embla.NavigationControls = NavigationControls;
Embla.InlineNavigationControls = InlineNavigationControls;
Embla.Pagination = Pagination;
