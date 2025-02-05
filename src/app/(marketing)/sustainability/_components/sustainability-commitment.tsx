import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AnimatedCard from "../../../../components/animate-card";

export default function SustainabilityCommitment() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-10 sm:px-10 md:px-0 md:py-16 md:mb-20">
      <div className="container">
        <div className="md:flex md:gap-10 items-center py-10">
          <div className="md:flex-1 my-5">
            <AnimatedCard className="space-y-6" index={0}>
              <h3 className="text-xl lg:text-5xl font-medium font-title">
                {t("sustainability_our_commitment")}
              </h3>
              <p className="text-base">{t("sustainability_our_comm_text_1")}</p>
              <p className="text-base">{t("sustainability_our_comm_text_2")}</p>
            </AnimatedCard>
          </div>

          <div className="md:flex-1 w-full">
            <AnimatedCard index={8}>
              <Image
                src="/assets/images/sustainability/commitment-centure.webp"
                alt="image"
                width={590}
                height={590}
                className="rounded-xl aspect-square w-full h-full object-cover"
              />
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
