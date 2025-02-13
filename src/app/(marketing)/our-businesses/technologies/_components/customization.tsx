"use client";

import { Heading } from "@/components/heading";
import Image from "next/image";
import {
  LucideSlidersVertical,
  LucideTimer,
  LucideShieldCheck,
} from "lucide-react";
import React from "react";
import { EmblaCarousel } from "@/components/swiper";

type CustomizationDataType = {
  title: string;
  title2: string;
  key_features: {
    id: string;
    title: string;
  }[];
};

type CustomizationProps = {
  data: CustomizationDataType;
};

const featureIcons = {
  custom_slides_holders: <LucideTimer />,
  special_equipment_scenarios: <LucideSlidersVertical />,
  software_adaptation: <LucideShieldCheck />,
};

const customizationContent = [
  {
    id: 1,
    mediaSrc:
      "/assets/images/business/technology/customization/carousel/customization-01.webp",
  },
  {
    id: 2,
    mediaSrc:
      "/assets/images/business/technology/customization/carousel/customization-02.webp",
  },
  {
    id: 3,
    mediaSrc:
      "/assets/images/business/technology/customization/carousel/customization-03.webp",
  },
];

export default function Customization({ data }: CustomizationProps) {
  return (
    <>
      <section className="section bg-secondary-600 !p-0">
        <section className="section" data-padding="md">
          <div className="container">
            <div className="max-w-xl mx-auto">
              <EmblaCarousel
                items={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
                renderItem={(item) => (
                  <div key={item.id} className="">
                    <Image
                      alt="customization"
                      width={300}
                      height={300}
                      src={
                        "/assets/images/business/technology/customization/image-01.png"
                      }
                      className="size-full object-cover"
                    />
                  </div>
                )}
                autoplay={false} // Enable autoplay
                autoplayInterval={3000} // Set autoplay interval to 3 seconds
                loop={true} // Enable infinite loop
                arrows={true} // Show navigation arrows
                className="my-custom-class" // Add custom class for
                slidesToShow={1}
              />
            </div>
          </div>
        </section>
        <section
          className="section relative after:absolute after:h-52 after:inset-x-0 after:-bottom-10 after:bg-white after:-z-10 z-0"
          data-padding="md"
        >
          <div className="container">
            <div className="text-center">
              <Heading className="text-white" size="5xl">
                {data.title}
              </Heading>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-10 md:mt-14 lg:mt-20 text-white">
              {data.key_features.map((feature) => (
                <div
                  className="bg-primary-500 h-64 max-w-sm mx-auto w-full py-10 px-6 flex flex-col items-center justify-center space-y-10 text-center"
                  key={feature.title}
                >
                  {React.cloneElement(
                    featureIcons[feature.id as keyof typeof featureIcons],
                    {
                      className: "size-12 md:size-16",
                    }
                  )}
                  <Heading size="xl">{feature.title}</Heading>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section relative bg-white -mt-20">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/business/technology/circle shape.png"
              fill
              alt="shape"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="container" data-size="smx">
            <div className="md:py-12 lg:py-24 flex">
              <div className="relative flex-1 shrink-0 h-[455px]">
                <Image
                  src="/assets/images/business/technology/mobile.webp"
                  fill
                  sizes="60vw"
                  alt="desktop"
                  className="size-full object-contain"
                />
              </div>
              <div className="relative flex-1 shrink-0 h-[455px]">
                <Image
                  src="/assets/images/business/technology/desktop.webp"
                  fill
                  sizes="60vw"
                  alt="desktop"
                  className="size-full object-contain"
                />
              </div>
            </div>
            <div className="text-center relative">
              <Heading className="text-secondary-400" size="5xl">
                {data.title2}
              </Heading>
            </div>
            <div className="mt-10 md:mt-14 lg:mt-20">
              <EmblaCarousel
                items={customizationContent}
                renderItem={(item) => (
                  <div key={item.id} className="text-center border">
                    <Image
                      alt="customization"
                      width={300}
                      height={300}
                      src={item.mediaSrc}
                      className="size-full object-cover"
                    />
                  </div>
                )}
                autoplay={false} // Enable autoplay
                autoplayInterval={3000} // Set autoplay interval to 3 seconds
                loop={true} // Enable infinite loop
                arrows={true} // Show navigation arrows
                className="my-custom-class" // Add custom class for styling
                slidesToShow={3}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
