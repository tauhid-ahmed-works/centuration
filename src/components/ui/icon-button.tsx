import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export function IconButton({ ...props }: ButtonProps) {
  return <button className="size-5" {...props} />;
}
