"use client";
import Link from "next/link";
import * as Icons from "@/components/icons";
import Image from "next/image";
import BusinessCard from "./_components/business-card";
import { businessCategory } from "@/data/business/our-businesses";
import { bannerData } from "@/data/business/our-businesses";
import * as Banner from "@/components/carousel/banner";
import { ExternalLinkIcon } from "@/components/icons";
import { Heading } from "@/components/heading";

export default function Businesses() {
  return (
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
              </Banner.CTA>
            </Banner.Container>
          </Banner.Item>
        )}
      />
      <div className="w-full overflow-x-hidden">
        <section className="pb-10 lg:pb-20">
          <div className="px-4 text-center max-w-4xl mx-auto py-10 md:py-20">
            <Heading as="h2" className="mb-4">
              {businessCategory.title}
            </Heading>
            <p>{businessCategory.subtitle}</p>
          </div>
          <div className="container">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 lg:!w-container-sm">
              {businessCategory.category.map((item, index) => (
                <BusinessCard key={item.id} index={index}>
                  <Link
                    href={`${item.path}`}
                    className="relative inline-block w-full h-full after:absolute after:inset-0 after:bg-black/50 text-white"
                  >
                    <Image
                      className="absolute inset-0 w-full h-full object-cover"
                      src={item.imageLink}
                      alt={item.title}
                      width={300}
                      height={200}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center p-8 z-10 space-y-4">
                      <h3 className="text-xl font-semibold px-4 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white">
                        {item.title?.toUpperCase()}
                      </h3>
                      <span className="self-start pl-4 font-semibold flex group">
                        Read More
                        <span className="border-black flex ml-2 group-hover:animate-bouncex mt-0.5">
                          <Icons.ArrowLong className="size-5" />
                        </span>
                      </span>
                    </div>
                  </Link>
                </BusinessCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
