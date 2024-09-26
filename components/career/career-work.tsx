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

          <div>
            <Image
              width={5000}
              height={5000}
              className="w-full h-[550px]"
              src="/assets/images/career/african-businesswoman-smiling.webp"
              alt="african-businesswoman-smiling"
            ></Image>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
