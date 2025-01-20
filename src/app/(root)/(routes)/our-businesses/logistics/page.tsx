"use client";
import { businessCategories } from "@/data/business-category";
import { usePathname } from "next/navigation";
import CTA from "@/components/cta";
import * as Banner from "@/features/carousel/banner";
import { bannerData } from "@/data/business/logistics";
import { ExternalLinkIcon } from "@/components/icons";

export default function CommoditiesPage() {
  const pathname = usePathname();
  const data = businessCategories.find((item) => item.path.includes(pathname));
  return (
    <>
      <>
        <Banner.Carousel
          data={bannerData}
          duration={3}
          render={(bannerData: Record<string, string>) => (
            <Banner.Item>
              {bannerData.slide === "video" ? (
                <Banner.MediaVideo mediaLink={bannerData.videoLink} />
              ) : (
                <Banner.MediaImage
                  alt={bannerData.title}
                  mediaLink={bannerData.imageLink}
                />
              )}
              <Banner.Container>
                <Banner.Title>{bannerData.title}</Banner.Title>
                <Banner.Description>{bannerData.content}</Banner.Description>
                <Banner.CTA route={bannerData.href}>
                  Learn More <ExternalLinkIcon className="!size-3" />
                </Banner.CTA>{" "}
              </Banner.Container>
            </Banner.Item>
          )}
        />
      </>
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
