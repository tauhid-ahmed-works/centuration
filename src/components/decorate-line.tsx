import { cn } from "@/lib/utils";

type UnderlineProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  weight?: "bold" | "normal";
  align?: "left" | "right" | "center";
};

export default function Underline({
  variant = "secondary",
  size = "lg",
  weight = "bold",
  align = "left",
  className,
}: UnderlineProps) {
  const classnames = cn({
    "bg-primary-500": variant === "primary",
    "bg-white": variant === "secondary",
    "w-11": size === "sm",
    "w-16": size === "md",
    "w-[115px]": size === "lg",
    "h-0.5": weight === "normal",
    "h-1": weight === "bold",
  });
  return (
    <span
      className={cn(
        "flex mt-4 lg:mt-6",
        {
          "justify-start": align === "left",
          "justify-center": align === "center",
          "justify-end": align === "right",
        },
        className
      )}
    >
      <span className={classnames} />
    </span>
  );
}
