import { cn } from "@/lib/utils";

type Props = {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  className?: string;
  impact?: "bold";
};

export default function DecorateLine({
  variant = "primary",
  size = "lg",
  impact = "bold",
  className,
}: Props) {
  const classnames = cn("h-0.5", {
    "bg-primary-500": variant === "primary",
    "bg-white": variant === "secondary",
    "w-16": size === "default",
    "w-25": size === "lg",
    "h-1": impact === "bold",
  });
  return (
    <span className={cn("flex justify-center", className)}>
      <span className={classnames}></span>
    </span>
  );
}
