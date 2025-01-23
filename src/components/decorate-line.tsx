import { cn } from "@/lib/utils";

type Props = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  impact?: "bold";
  align?: "left" | "right" | "center";
};

export default function Underline({
  variant = "primary",
  size = "lg",
  impact = "bold",
  align,
  className,
}: Props) {
  const classnames = cn("h-0.5", {
    "bg-primary-500": variant === "primary",
    "bg-white": variant === "secondary",
    "w-12": size === "sm",
    "w-16": size === "md",
    "w-[115px]": size === "lg",
    "h-1": impact === "bold",
    'mx-auto': align === 'center',
  });
  return (
    <span className={cn("flex", className)}>
      <span className={classnames}></span>
    </span>
  );
}
