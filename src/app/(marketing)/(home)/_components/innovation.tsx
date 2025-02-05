"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { useTranslations } from "next-intl";

export default function Invitation({ ...props }) {
  const t = useTranslations("home");
  const text = useTranslations("text");
  return (
    <section className="section bg-gray-50 grid place-items-center" {...props}>
      <div className="container">
        <div className="space-y-8">
          <Heading size="3xl" as="h2">
            {t("innovation.title")}
          </Heading>
          <div className="md:flex md:gap-10 items-center space-y-4">
            <div className="md:flex-1 relative w-full h-72 md:h-96">
              <Image
                src="/assets/images/homepage/invitation.webp"
                alt="image"
                fill
                className="rounded aspect-square w-full h-full object-cover"
              />
            </div>

            <div className="md:flex-1 space-y-4">
              <Heading size="2xl">{t("innovation.subtitle")}</Heading>
              <p className="text-sm mt-4 space-y-2">
                {t("innovation.description")}
              </p>
              <Button size="md" className="mt-4" variant="primary">
                {text("learn_more")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
