import React from "react";
import Wrapper from "../layout/wrapper";
import Button from "../shared/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CareerWork() {
  const t = useTranslations("HomePage");
  return (
    <section>
      <Wrapper>
        <div className="lg:flex justify-between items-center gap-20 mt-14">
          <div className="text-center w-full">
            <h2 className="text-xl lg:text-3xl mb-5">
              {t("career_page_tag_line_impacting")}
            </h2>

            <span className="text-base lg:text-3xl font-semibold whitespace-nowrap">
              {t("career_page_why_work_title")}
            </span>

            <p className="text-sm mt-5 mb-5">
              {t("career_page_why_work_title_txt_1")}
            </p>

            <Button variant="primary">About More</Button>
          </div>

          <div className="w-full object-cover mt-10 lg:mt-0">
            <Image
              width={500}
              height={500}
              className="md:w-[50%] md:h-[50%] w-full h-full lg:w-[70%] lg:h-[70%] object-cover mx-auto"
              src="/assets/images/career/african-businesswoman-smiling.webp"
              alt="african-businesswoman-smiling"
            ></Image>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
