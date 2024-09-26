import { cn } from "@/libs/utils/cn";

export default function SectionTitle({
  children,
  className,
  decorator = true,
}: {
  children: React.ReactNode;
  className?: string;
  decorator?: boolean;
}) {
  return (
    <div className={cn("text-center text-gray-850", className)}>
      <div className="relative inline-block">
        <h2 className="h2 mb-2">{children}</h2>
        {decorator && (
          <hr className="border-t-2 border-brand-500 absolute bottom-0 inset-x-12" />
        )}
      </div>
    </div>
  );
}
