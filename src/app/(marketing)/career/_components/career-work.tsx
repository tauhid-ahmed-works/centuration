import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Heading } from "@/components/heading";

export default function CareerWork() {
  const t = useTranslations("HomePage");
  return (
    <section className="section" data-size="md">
      <div className="container">
        <div className="md:flex justify-around items-center gap-10 text-center">
          <div className="space-y-4">
            <Heading as="h2" size="3xl">
              {t("career_page_tag_line_impacting")}
            </Heading>

            <Heading as="h3" size="2xl">
              {t("career_page_why_work_title")}
            </Heading>

            <p>{t("career_page_why_work_title_txt_1")}</p>
            <Button variant="primary" size="sm">
              About More
            </Button>
          </div>

          <div className="h-96 w-full relative mt-8 md:mt-0">
            <Image
              fill
              className="size-full object-cover object-top"
              src="/assets/images/career/african-businesswoman-smiling.webp"
              alt="african-businesswoman-smiling"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
