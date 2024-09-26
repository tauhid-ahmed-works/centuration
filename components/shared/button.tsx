import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/libs/utils/cn";

// interface ButtonVariant {
//   variant?: "primary" | "secondary" | "outline";
// }

// interface ButtonTone {
//   intent?: "bold" | "light" | "outline";
// }

const buttonVariants = {
  primary:
    "bg-brand-500 border border-brand-500 text-white hover:bg-brand-500/90",
  secondary: "bg-white text-brand-500 hover:bg-brand-50",
  outline: "border border-gray-100 text-white hover:bg-gray-850/20",
};

export default function Button({
  children,
  variant = "primary",
  className,
  asChild,
  ...props
}: {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex px-4 py-2 items-center justify-center whitespace-nowrap rounded text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none shadow disabled:opacity-50",
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
