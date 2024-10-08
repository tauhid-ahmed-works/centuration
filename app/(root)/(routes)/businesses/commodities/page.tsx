"use client";
import { businessCategories } from "@/data/business-category";
import { usePathname } from "next/navigation";
import { ArrowLong } from "@/components/icons";
import Link from "next/link";
import Wrapper from "@/components/layout/wrapper";
import ComoCarousel from "@/components/feature/business/como/banner";

export default function CommoditiesPage() {
  const pathname = usePathname();
  const data = businessCategories.find((item) => item.path.includes(pathname));
  return (
    <>
      <ComoCarousel />
      <Wrapper className="py-16">
        <h2 className="text-4.5xl font-semibold font-title text-gray-850 leading-none mb-6">
          {data?.descriptions.long.title}
        </h2>

        <div className="max-w-[80ch] space-y-2 text-sm">
          {data &&
            data.descriptions.long.paragraphs.map((item) => <p key={item}>{item}</p>)}
        </div>

        <div className="inline-block overflow-hidden rounded shadow-xl group mt-10 mb-5">
          <Link
            className="bg-white text-gray-850 inline-flex justify-between"
            href="/contact"
            target="_blank">
            <span className="inline-flex px-4 items-center text-sm font-semibold">
              Contact Us
            </span>
            <span className="inline-flex items-center justify-center shrink-0 bg-gray-850 text-white size-14">
              <ArrowLong className="size-5 group-hover:animate-bouncex" />
            </span>
          </Link>
        </div>
      </Wrapper>
    </>
  );
}
