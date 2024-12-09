import { cn } from "@/lib/utils";

type HeadingProps = {
  size?:
    | "sm"
    | "md"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6.5xl";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

export function Heading({
  size = "5xl",
  as,
  className,
  children,
}: HeadingProps) {
  const Comp = as ? as : "h2";
  const classnames = cn(
    "font-semibold",
    {
      "text-3xl md:text-4xl lg:text-5xl": size === "5xl",
    },
    className
  );
  return <Comp className={classnames}>{children}</Comp>;
}
