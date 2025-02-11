import { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// Make all custom props optional by adding ? to each property
export type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "danger";
  contrast?: "default" | "medium" | "light" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  shape?: "square" | "sm" | "md" | "lg" | "pill";
  disabled?: boolean;
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
    outline: "text-secondary-500 border border-secondary-500",
    ghost: "text-secondary-300 disabled:opacity-50 hover:text-primary-500",
  },
  secondary: {
    default: "bg-white text-secondary-500",
    outline: "text-white border border-white",
  },
};

const buttonSizes: ButtonSizes = {
  sm: "size-10 px-6",
  md: "size-10 md:size-12",
  lg: "size-12 md:size-14",
};

const buttonShapes: ButtonShapes = {
  square: "rounded-none",
  sm: "rounded-sm",
  md: "rounded",
  lg: "rounded-lg",
  pill: "rounded-full",
};

const baseClasses =
  "inline-flex justify-center items-center align-middle focus-visible:outline-none focus-visible:ring-2 active:translate-y-px  overflow-hidden hover:opacity-85 border border-transparent cursor-pointer disabled:pointer-events-none shrink-0";

export function IconButton({
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
