"use client";
import Wrapper from "@/components/layout/wrapper";
import SectionTitle from "@/components/shared/section-title";
import Link from "next/link";
import * as Icons from "@/components/icons";
import { businessCategories } from "@/data/business-category";
import Image from "next/image";
import BusinessCard from "@/components/business/business-card";
import BannerAnimation from "@/components/shared/banner-animation";
import Slider from "@/components/shared/slider";

export default function Businesses() {
  return (
    <div className="w-full overflow-x-hidden">
      <Slider>
        {businessCategories.map((item) => (
          <Slider.Slide key={item.id}>
            <div className="absolute w-full h-full inset-0">
              <Image
                width={1920}
                height={2000}
                src={item.bannerImage as string}
                className="w-full h-full object-cover"
                alt={"image"}
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <Wrapper className="relative text-white font-semibold z-10">
              <div className="max-w-[65ch] rounded">
                <div className="-ml-4 p-4 bg-black/5 bg-blur-sm">
                  <h1 className="">Our Businesses</h1>
                  <h2 className="text-4.5xl mt-2">{item.businessName}</h2>
                  <p className="mt-2 text-md leading-tight">
                    {item.descriptions.long.paragraphs[0]}
                  </p>
                </div>
                <Link
                  className="py-2 inline-flex items-center gap-1 hover:translate-x-1 duration-300 transition-transform"
                  href={item.path}
                >
                  Learn More <Icons.ArrowLong size={2} />
                </Link>
              </div>

              <Slider.Indicators />
            </Wrapper>
            <BannerAnimation />
          </Slider.Slide>
        ))}
      </Slider>
      <section className="pb-10 lg:pb-20">
        <div className="px-4 text-center max-w-4xl mx-auto py-10 md:py-20">
          <SectionTitle className="mb-4">Our Businesses</SectionTitle>
          <p>
            As an African diversified conglomerate, our interest in multiple
            industries indicates our determination to cater to our vision of
            providing basic needs.
          </p>
        </div>
        <Wrapper className="grid grid-cols-auto-fit-250 gap-4 !max-w-[900px]">
          {businessCategories.map((item, index) => (
            <BusinessCard key={item.id} index={index}>
              <Link
                href={`${item.path}`}
                className="relative inline-block w-full h-full after:absolute after:inset-0 after:bg-black/50 text-white"
              >
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={item.thumbnailImage as string}
                  alt={item.businessName}
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 flex flex-col justify-center p-8 z-10 space-y-4">
                  <h3 className="text-xl font-bold px-4 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white">
                    {item.businessName?.toUpperCase()}
                  </h3>
                  <span className="self-start pl-4 font-bold flex group">
                    Read More
                    <span className="border-black flex ml-2 group-hover:animate-bouncex mt-0.5">
                      <Icons.ArrowLong className="size-5" />
                    </span>
                  </span>
                </div>
              </Link>
            </BusinessCard>
          ))}
        </Wrapper>
      </section>
    </div>
  );
}
