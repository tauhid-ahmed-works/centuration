import { Heading } from "@/components/heading";
import Image from "next/image";
import {
  LucideChevronLeft,
  LucideChevronRight,
  LucideSlidersVertical,
  LucideTimer,
  LucideShieldCheck,
} from "lucide-react";
import React from "react";

type CustomizationDataType = {
  title: string;
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

export default function Customization({ data }: CustomizationProps) {
  return (
    <>
      <section className="section bg-secondary-600 !p-0">
        <section className="section" data-padding="md">
          <div className="container">
            <div className="max-w-3xl mx-auto w-full flex flex-col items-center relative">
              <div className="absolute top-1/2 -inset-x-3 md:inset-x-0 flex justify-between -translate-y-1/2">
                <button className="text-gray-100 cursor-pointer hover:text-primary-500">
                  <LucideChevronLeft className="size-10" />
                </button>
                <button className="text-gray-100 cursor-pointer hover:text-primary-500">
                  <LucideChevronRight className="size-10" />
                </button>
              </div>
              <div className="max-w-sm md:max-w-md w-full mx-10 md:mx-20 h-84 relative before:absolute before:inset-x-0 before:inset-y-10 before:bg-primary-500/10 before:blur-2xl before:opacity-30">
                <Image
                  src="/assets/images/business/technology/customization/image-01.png"
                  fill
                  sizes="30vw"
                  alt="Image"
                  className="size-full object-contain"
                />
              </div>
              <div className="flex gap-1.5 justify-center [&>*:nth-child(2)]:bg-primary-500 [&>*:nth-child(2)]:before:bg-primary-500 [&>*:nth-child(2)]:before:blur-xl">
                {[...Array(6)].map((_, i) => (
                  <button
                    key={i}
                    className="size-4 rounded-full bg-secondary-700 inline-block align-middle relative before:absolute before:inset-0 before:rounded-full cursor-pointer"
                  ></button>
                ))}
              </div>
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
        <section className="section h-screen relative bg-white -mt-20">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/business/technology/circle shape.png"
              fill
              alt="shape"
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>
      </section>
    </>
  );
}
