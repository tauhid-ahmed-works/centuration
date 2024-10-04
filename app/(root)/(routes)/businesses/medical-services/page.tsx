"use client";
import { usePathname } from "next/navigation";
import { businessCategories } from "@/data/business-category";
import { Icons } from "@/components/icons";
import { Typography } from "@/components/shared/typography";
import Wrapper from "@/components/layout/wrapper";
import CTA from "@/components/shared/cta";
import MedCarousel from "@/components/feature/business/med/banner";

export default function MedicalServicePage() {
  const pathname = usePathname();
  const data = businessCategories.find((item) => item.path.includes(pathname));

  return (
    <>
      <MedCarousel />
      <Wrapper>
        <section className="py-14">
          <Typography.H2 className="max-w-[20ch] mb-4">
            {data?.sections && data?.sections[1].title}
          </Typography.H2>
          <div className="lg:grid lg:grid-cols-12">
            <div className="lg:col-span-7 md:pr-20">
              <p className="max-w-[80ch] space-y-2 mb-10">
                {data?.sections && data?.sections[1].content}
              </p>
            </div>

            <div className="lg:col-span-5">
              <Typography.H3>{data?.sections && data?.sections[2]?.title}</Typography.H3>

              <div className="space-y-2">
                <ul className="pt-8 pb-10 space-y-1">
                  {data?.sections &&
                    data?.sections[2]?.content.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <Icons.ArrowRight className="size-5 text-brand-500 mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <CTA href="/contact" text="Contact Us" />
        </section>

        <section className="py-16">
          <Typography.H2 className=" mt-6">
            {data?.sections && data?.sections[3]?.title}
          </Typography.H2>

          <p className="max-w-[80ch] space-y-2 mt-5">
            {data?.sections && data?.sections[3]?.content}
          </p>

          <div className="max-w-[80ch] space-y-2 text-sm font-normal">
            <ul className="text-left pt-8 pb-10 md:text-lg text-base font-normal">
              {data?.sections &&
                data?.sections[3]?.list.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Icons.ArrowRight className="size-5 text-brand-500 mt-1 shrink-0" />
                    <span>
                      {item.includes("\t")
                        ? item
                            .split("\t")
                            .map((split, i) =>
                              i === 1 ? <strong key={i}>{split}</strong> : split
                            )
                        : item}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
