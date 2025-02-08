import { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// Make all custom props optional by adding ? to each property
export type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "danger";
  contrast?: "default" | "medium" | "light" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  shape?: "square" | "sm" | "md" | "lg" | "pill";
};

export type ButtonVariants = Partial<
  Record<
    NonNullable<ButtonProps["variant"]>,
    Partial<Record<NonNullable<ButtonProps["contrast"]>, string>>
  >
>;
export type ButtonSizes = Partial<
  Record<NonNullable<ButtonProps["size"]>, string>
>;
export type ButtonShapes = Partial<
  Record<NonNullable<ButtonProps["shape"]>, string>
>;

const buttonVariants: ButtonVariants = {
  primary: {
    default: "bg-primary-500 text-white",
    outline: "text-primary-500 border border-primary-500",
  },
  secondary: {
    medium:
      "bg-white text-black relative before:absolute before:inset-px before:border-2 before:border-black",
    default: "bg-white text-black",
    outline: "text-white border border-white",
  },
};

const buttonSizes: ButtonSizes = {
  sm: "h-10 px-6 text-sm",
  md: "h-10 md:h-12 px-6",
  lg: "h-12 md:h-14 px-8",
};

const buttonShapes: ButtonShapes = {
  square: "rounded-none",
  sm: "rounded-sm",
  md: "rounded",
  lg: "rounded-lg",
  pill: "rounded-full",
};

const baseClasses =
  "inline-flex justify-center items-center gap-3 align-middle font-semibold focus-visible:outline-none focus-visible:ring-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-3 shadow-sm disabled:shadow-none overflow-hidden hover:opacity-85 border border-transparent text-sm md:text-base hover:shadow cursor-pointer";

export function Button({
  variant = "primary",
  contrast = "default",
  size = "lg",
  shape = "md",
  className,
  asChild,
  ...props
}: ButtonProps & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  const classnames = cn(
    baseClasses,
    buttonVariants[variant]?.[contrast],
    buttonShapes[shape],
    buttonSizes[size],
    className
  );
  return <Comp className={classnames} {...props} />;
}
