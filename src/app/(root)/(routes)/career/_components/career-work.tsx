import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CareerWork() {
  const t = useTranslations("HomePage");
  return (
    <div className="container">
      <div className="md:flex justify-around items-center gap-10 mt-24">
        <div className="text-center md:w-[55%] pb-16">
          <h2 className="text-3xl mb-16">
            {t("career_page_tag_line_impacting")}
          </h2>

          <span className="text-4xl font-semibold">
            {t("career_page_why_work_title")}
          </span>

          <p className="text-sm mt-5 mb-10">
            {t("career_page_why_work_title_txt_1")}
          </p>

          <Button variant="primary">About More</Button>
        </div>

        <div className="h-[250px] md:h-[350px] lg:h-[450px]">
          <Image
            width={250}
            height={250}
            className="size-full object-cover object-top"
            src="/assets/images/career/african-businesswoman-smiling.webp"
            alt="african-businesswoman-smiling"
          ></Image>
        </div>
      </div>
    </div>
  );
}
