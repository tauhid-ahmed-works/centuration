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
    | "6xl";
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
      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-base lg:text-xl": size === "xl",
      "text-base lg:text-2xl": size === "2xl",
      "text-xl md:text-2xl lg:text-3xl": size === "3xl",
      "text-xl md:text-2xl lg:text-4xl": size === "4xl",
      "text-xl md:text-3xl lg:text-5xl": size === "5xl",
      "text-2xl md:text-5xl lg:text-6xl": size === "6xl",
    },
    className
  );
  return <Comp className={classnames}>{children}</Comp>;
}
