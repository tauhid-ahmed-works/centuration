"use client";
import { businessCategories } from "@/data/business-category";
import { usePathname } from "next/navigation";
import CTA from "@/components/cta";
import { Intro } from "./_components/intro";

export default function LogisticsPage() {
  const pathname = usePathname();
  const data = businessCategories.find((item) => item.path.includes(pathname));
  return (
    <>
      <Intro />
      <section className="py-16">
        <div className="container">
          <h2 className="text-4.5xl font-semibold font-title text-gray-850 leading-none mb-6">
            {data?.sections && data?.sections[1].title}
          </h2>

          <div className="max-w-[80ch] space-y-2 text-sm pb-5 mb-4">
            <p>{data?.sections && data?.sections[1].content}</p>
          </div>
          <CTA href="/contact" text="Contact Us" />
        </div>
      </section>
    </>
  );
}
