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
      "text-sm md:text-lg font-normal": size === "sm",
      "text-base md:text-lg font-normal": size === "base",
      "text-base md:text-lg lg:text-xl": size === "xl",
      "text-base md:text-xl lg:text-2xl": size === "2xl",
      "text-lg md:text-2xl lg:text-3.5xl": size === "3xl",
      "text-xl md:text-3xl lg:text-5xl": size === "4xl",
      "text-xl md:text-3.5xl lg:text-5xl": size === "5xl",
      "text-2xl md:text-4.5xl lg:text-[56px]": size === "6xl",
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
