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
    | "3.5xl"
    | "4xl"
    | "4.5xl"
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
      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-2xl md:3.5xl": size === "3.5xl",
      "text-3xl md:4xl": size === "4xl",
      "text-3.5xl md:4.5xl": size === "4.5xl",
      "text-3xl md:text-4xl lg:text-5xl": size === "5xl",
      "text-4xl md:text-5xl lg:text-6.5xl !leading-snug": size === "6.5xl",
    },
    className
  );
  return <Comp className={classnames}>{children}</Comp>;
}
