"use client";

import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import AnimatedCard from "@/components/animate-card";
import { ourBusinessesPath } from "@/paths";
import * as path from "@/paths";

const businessCategories = [
  {
    title: "Technologies",
    image: "/assets/images/business/business-card/technology.png",
    path: path.businessTechnologiesPath(),
  },

  {
    title: "Medical Services",
    image: "/assets/images/business/business-card/medical-service.png",
    path: path.businessMedicalServicesPath(),
  },
  {
    image: "/assets/images/business/business-card/launderettes.png",
    path: path.businessLaunderettesPath(),
  },

  {
    image: "/assets/images/business/business-card/ice-ivoire.png",
    path: path.businessIceIvoirePath(),
  },
  {
    image: "/assets/images/business/business-card/commodities.png",
    path: path.businessCommoditiesPath(),
  },

  {
    image: "/assets/images/business/business-card/real-state.png",
    path: path.businessRealEstatePath(),
  },
  {
    image: "/assets/images/business/business-card/fertilizer.png",
    path: path.businessFertilizerPath(),
  },
  {
    image: "/assets/images/business/business-card/logistics.png",
    path: path.businessLogisticsPath(),
  },
  {
    image: "/assets/images/business/business-card/logistics.png",
    path: path.businessPetrochemicalsPath(),
  },
];

export default function BusinessCards() {
  const t = useTranslations("home");
  const text = useTranslations("text");
  const data = businessCategories.slice(0, 6).map((d, index) => ({
    ...d,
    id: index + 1,
    title: t.raw("business.categories")[index],
  }));
  return (
    <section className="section" data-padding="lg">
      <div className="container">
        <div className="space-y-10 text-center mt-20 lg:mt-0">
          <div className="max-w-lg mx-auto text-center space-y-4">
            <Heading as="h2" size="3xl">
              {t("business.title")}
            </Heading>
            <p>{t("business.description")}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map((card, index) => (
              <div key={card.id} className="max-w-96 w-full mx-auto">
                <AnimatedCard index={index}>
                  <div className="hover:shadow hover:-translate-y-1 transition-transform duration-200 rounded overflow-hidden">
                    <Link href={card.path}>
                      <div className="relative min-h-52">
                        <Image
                          src={card.image}
                          fill
                          alt="image"
                          className="size-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold font-title text-sm text-center py-4 text-gray-850">
                        {card.title}
                      </h3>
                    </Link>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
          <Button variant="primary" size="md" asChild>
            <Link href={ourBusinessesPath()}>{text("see_all")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
