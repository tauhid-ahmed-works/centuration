import { cn } from "@/libs/utils/cn";
import Image from "next/image";

export function Shade({ children, ...props }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute inset-0 after:absolute after:inset-0 after:bg-shade-1"
      {...props}
    >
      {children}
    </div>
  );
}

export function ImageShade({
  className,
  src,
  alt,
  ...props
}: {
  className?: string;
  src: string;
  alt: string;
}) {
  return (
    <Shade>
      <Image
        src={src}
        alt={alt}
        {...props}
        className={cn("object-cover  size-full block", className)}
      />
    </Shade>
  );
}

export function VideoShade({
  src,
  alt,
  className,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Shade {...props}>
      <Image src={src} alt={alt} className={className} />
    </Shade>
  );
}
