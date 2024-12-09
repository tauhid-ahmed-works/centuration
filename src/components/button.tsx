import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = {
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "lg" | "md" | "sm" | "icon";
  shape?: "square" | "pill" | "rounded";
  impact?: "bold" | "light" | "outline" | "ghost" | "link" | "decorate";
  asChild?: boolean;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-white [&_svg]:size-4 hover:translate-y-px active:translate-y-0.5";

const impactClasses: Record<
  NonNullable<ButtonProps["variant"]>,
  Partial<Record<NonNullable<ButtonProps["impact"]>, string>>
> = {
  primary: {
    bold: "bg-primary-500 hover:bg-primary-500/80",
    outline:
      "outline outline-offset-2 ring-primary-500 text-primary-500 hover:bg-primary-500/15",
    ghost: "text-primary-500 hover:bg-primary-500/20 hover:text-white",
    decorate:
      "bg-primary-500 hover:bg-primary-500/80 outline outline-primary-500 outline-offset-2",
    link: "hover:underline hover:underline-offset-2 hover:text-primary-500",
  },
  secondary: {
    bold: "bg-white hover:bg-white/90 text-black",
    outline:
      "outline outline-offset-2 ring-gray-500 text-white hover:bg-gray-500/10",
    ghost: "text-white hover:bg-white/15 active:bg-white/15",
    decorate:
      "bg-white text-black hover:bg-white/90 outline outline-white outline-offset-2",
  },
  danger: { bold: "" },
  success: { bold: "" },
};

const shapeClasses: Record<NonNullable<ButtonProps["shape"]>, string> = {
  square: "rounded-none",
  pill: "rounded-full",
  rounded: "rounded-md",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  lg: "px-5 py-3 text-base",
  md: "px-4 py-3",
  sm: "px-3 py-2 text-xs",
  icon: "[&_svg]:size-5 size-6",
};

export function Button({
  asChild = false,
  variant = "primary",
  impact = "bold",
  size = "md",
  shape = "rounded",
  className,
  children,
  disabled,
  ...props
}: ButtonProps & React.ComponentProps<"button">) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        baseClasses,
        impactClasses[variant]?.[impact],
        shapeClasses[shape],
        sizeClasses[size],
        className
      )}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Comp>
  );
}
