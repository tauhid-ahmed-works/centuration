import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AnimatedCard from "@/components/animate-card";
import { Heading } from "@/components/heading";

export default function SustainabilityCommitment() {
  const t = useTranslations("sustainability");
  return (
    <section className="section" data-padding="md">
      <div className="container">
        <div className="md:flex md:gap-10 items-center py-10">
          <div className="md:flex-1 my-5">
            <AnimatedCard className="space-y-4" index={0}>
              <Heading size="3xl" as="h2">
                {t("commitment.title")}
              </Heading>
              <p>{t("commitment.description").split("\t")[0]}</p>
              <p>{t("commitment.description").split("\t")[1]}</p>
            </AnimatedCard>
          </div>

          <div className="md:flex-1 w-full">
            <AnimatedCard className="relative h-96" index={8}>
              <Image
                src="/assets/images/sustainability/commitment-centure.webp"
                alt="image"
                fill
                className="rounded-xl aspect-square w-full h-72 object-cover"
              />
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
