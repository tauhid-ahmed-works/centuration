import { cn } from "@/lib/utils";
import React, { ElementType } from "react";

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
  as?: ElementType;
  children: React.ReactNode;
  underline?: React.ReactElement<{ className?: string }>;
};

export function Heading({
  size = "5xl",
  as: Comp = "h2",
  className,
  children,
  underline,
}: HeadingProps) {
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

  return (
    <Comp className={classnames}>
      {children}
      {underline &&
        React.isValidElement(underline) &&
        React.cloneElement(underline, {
          className: cn("", underline.props.className),
        })}
    </Comp>
  );
}
