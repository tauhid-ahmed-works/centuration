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
    "font-semibold leading-[1.5]",
    {
      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-base lg:text-xl": size === "xl",
      "text-[clamp(1rem,5vw,1.5rem)]": size === "2xl",
      "text-[clamp(1rem,5vw,2rem)]": size === "3xl",
      "text-[clamp(1.25rem,5vw,2.5rem)]": size === "4xl",
      "text-[clamp(1.25rem,5vw,3rem)]": size === "5xl",
      "text-[clamp(1.5rem,5vw,4rem)]": size === "6xl",
    },
    className
  );
  return <Comp className={classnames}>{children}</Comp>;
}
