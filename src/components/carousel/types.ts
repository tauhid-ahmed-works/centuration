export type CarouselData = {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  detailsLink?: string;
  contact?: boolean;
  imageLink?: string;
  videoLink?: string;
};

export type CarouselProps = {
  duration?: number;
  overlay?: boolean;
  data: CarouselData[];
  className?: string;
};

export type CarouselSlideProps = {
  direction?: string;
  index?: number;
};

export type CarouselPaginationProps = {
  onClick: (payload: CarouselSlideProps) => void;
  activeIndex: number;
  length: number;
};

export type CarouselContentProps = {
  data: CarouselData;
  overlay?: boolean;
  children: React.ReactNode;
};
