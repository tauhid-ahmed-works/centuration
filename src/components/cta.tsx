import Link from "next/link";
import { ArrowLong } from "./icons";

export default function CTA({
  href,
  text = "Read More",
}: {
  href: string;
  text?: string;
}) {
  return (
    <Link
      className="bg-white text-gray-850 inline-flex justify-between group"
      href={href}
      target="_blank"
    >
      <span className="inline-flex px-4 items-center text-sm font-semibold">
        {text}
      </span>
      <span className="inline-flex items-center justify-center shrink-0 bg-gray-850 text-white size-14">
        <ArrowLong className="size-5 group-hover:animate-bouncex" />
      </span>
    </Link>
  );
}
