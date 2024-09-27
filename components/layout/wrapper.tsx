import { cn } from "@/libs/utils/cn";

export default function Wrapper({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "default";
}) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-gutter",
        size === "default" && "max-w-container",
        size === "sm" && "max-w-container-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
