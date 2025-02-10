import Image from "next/image";
import { Heading } from "@/components/heading";
import {
  LucideSettings,
  LucideRadio,
  LucideCircleUserRound,
  LucideLayers,
} from "lucide-react";
import React from "react";

type SolutionsDataType = {
  title: string;
  key_features: {
    id: string;
    title: string;
    features: string[];
  }[];
};

type SolutionProps = {
  data: SolutionsDataType;
};

const catalogueIcons = {
  manufacturing: <LucideSettings />,
  quality_stability: <LucideRadio />,
  durability: <LucideCircleUserRound />,
  scalability: <LucideLayers />,
};

export default function Solutions({ data }: SolutionProps) {
  return (
    <section className="section relative">
      <div className="absolute size-full after:absolute after:inset-0 after:bg-gradient-to-b after:from-secondary-500/20 after:to-secondary-500">
        <Image
          fill
          sizes="100vw"
          src="/assets/images/business/technology/innovative-solutions.webp"
          alt="Innovative Solutions"
          className="size-full object-cover"
        />
      </div>
      <div className="relative pt-20 md:pt-32 lg:pt-48">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <Heading size="3xl" className="text-white text-center">
              {data.title}
            </Heading>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 text-white mt-10 md:mt-14 lg:mt-20">
            {data.key_features.map((item) => (
              <div
                className="bg-white/10 backdrop-blur-xs border border-white p-8 space-y-4 max-w-96 mx-auto"
                key={item.title}
              >
                {React.cloneElement(
                  catalogueIcons[item.id as keyof typeof catalogueIcons],
                  {
                    className: "size-6 md:size-8",
                  }
                )}
                <Heading className="text-primary-500" size="xl">
                  {item.title}
                </Heading>
                <ul className="text-sm space-y-2.5">
                  {item.features.map((feature) => (
                    <li
                      className="first-letter:text-lg first-letter:font-semibold"
                      key={feature}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
