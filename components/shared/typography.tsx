import { cn } from "@/libs/utils/cn";
interface Props {
  className?: string;
  children: React.ReactNode;
}

interface TagProps extends Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function H1({ className, children }: Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl lg:text-5xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children }: Props) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3.5xl lg:text-4.5xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children }: Props) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H6({ className, children }: Props) {
  return <h6 className={cn("scroll-m-20 text-base", className)}>{children}</h6>;
}

export function P({ className, children }: Props) {
  return (
    <>
      <p className={cn("leading-7 [&:not(:first-child)]:mt-5", className)}>
        {children}
      </p>
    </>
  );
}

export function Tag({ className, children, as = "span" }: TagProps) {
  const Tag = as;
  return <Tag className={cn("text-base", className)}>{children}</Tag>;
}

export * as Typography from "./typography";
