"use client";
import { businessCategories } from "@/data/business-category";
import { usePathname } from "next/navigation";
import Wrapper from "@/components/layout/wrapper";
import LogisticsCarousel from "@/components/feature/business/logistic/banner";
import CTA from "@/components/shared/cta";

export default function CommoditiesPage() {
  const pathname = usePathname();
  const data = businessCategories.find((item) => item.path.includes(pathname));
  return (
    <>
      <LogisticsCarousel />
      <Wrapper className="py-16">
        <section className="py-16">
          <h2 className="text-4.5xl font-semibold font-title text-gray-850 leading-none mb-6">
            {data?.sections && data?.sections[1].title}
          </h2>

          <div className="max-w-[80ch] space-y-2 text-sm pb-5 mb-4">
            <p>{data?.sections && data?.sections[1].content}</p>
          </div>
          <CTA href="/contact" text="Contact Us" />
        </section>
      </Wrapper>
    </>
  );
}
