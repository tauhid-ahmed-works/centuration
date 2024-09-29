import Image from "next/image";

export function Shade({ children, ...props }: { children: React.ReactNode }) {
  return (
    <div
      className="relative after:absolute after:inset-0 after:bg-shade-1"
      {...props}
    >
      {children}
    </div>
  );
}

export function ImageShade({
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
