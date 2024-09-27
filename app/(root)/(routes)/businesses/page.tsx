"use client";
import Wrapper from "@/components/layout/wrapper";
import SectionTitle from "@/components/shared/section-title";
import Link from "next/link";
import * as Icons from "@/components/icons";
import { businessCategories } from "@/data/business-category";
import Image from "next/image";
import BusinessCard from "@/components/business/business-card";
import BannerAnimation from "@/components/shared/banner-animation";
import Slider from "@/components/feature/business/banner-slider";

export default function Businesses() {
  return (
    <>
      <div className="h-screen">
        <Slider />
        <BannerAnimation />
      </div>
      <div className="w-full overflow-x-hidden">
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
                    <h3 className="text-xl font-semibold px-4 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white">
                      {item.businessName?.toUpperCase()}
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
          </Wrapper>
        </section>
      </div>
    </>
  );
}
