"use client";
import * as Banner from "@/features/carousel/banner";
import { bannerData } from "@/data/business/fertilizer";
import { ArrowLong, ExternalLinkIcon } from "@/components/icons";
import Link from "next/link";

export default function FertilizerPage() {
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
      <section>
        <div>
          <h2 className="text-4.5xl font-semibold font-title text-gray-850 leading-none mb-6">
            Unlock the Power of Growth with Fertilizer
          </h2>

          <div className="max-w-[80ch] space-y-2 text-sm">
            <p>
              Enhance your soil’s nutrients and boost plant vitality with the
              right fertilizer. From nurturing roots to promoting lush, healthy
              greenery, fertilizers are the key to flourishing gardens and
              thriving crops.
            </p>
          </div>

          <div className="inline-block overflow-hidden rounded shadow-xl group mt-10 mb-5">
            <Link
              className="bg-white text-gray-850 inline-flex justify-between"
              href="#/"
              target="_blank"
            >
              <span className="inline-flex px-4 items-center text-sm font-semibold">
                See All
              </span>
              <span className="inline-flex items-center justify-center shrink-0 bg-gray-850 text-white size-14">
                <ArrowLong className="size-5 group-hover:animate-bouncex" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
