import Link from "next/link";
import * as Icons from "@/components/icons";

export function RouteRedirect({
  path,
  children,
}: {
  path: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      className="mt-4 inline-flex items-center gap-1 hover:translate-x-1 duration-300 transition-transform group"
      href={path}>
      <span className="group-hover:font-semibold">
        {children ? children : "Read more"}
      </span>{" "}
      <Icons.ArrowLong size={2} />
    </Link>
  );
}
