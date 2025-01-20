import { cn } from "@/lib/utils";
import * as Typography from "@/components/typography";

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
        <Typography.H2>{children}</Typography.H2>
        {decorator && (
          <hr className="border-t-2 border-brand-500 rounded absolute -bottom-1 inset-x-[20%]" />
        )}
      </div>
    </div>
  );
}
