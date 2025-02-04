"use client";

import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/heading";
import { useTranslations } from "next-intl";

export default function CompanyResume() {
  const t = useTranslations("home");
  const text = useTranslations("text");
  return (
    <section className="section h-screen grid place-items-center bg-gray-300 overflow-x-hidden relative">
      <Image
        className="size-full absolute inset-0 block object-cover brightness-50"
        src="/assets/images/homepage/resume.png"
        alt="image"
        fill
      />
      <div className="md:p-10 w-full h-[600px] relative flex items-center">
        <div className="container z-10 relative rounded">
          <div className="py-14 px-10 md:px-20 bg-gray-100 backdrop-blur w-full max-w-[600px] space-y-4">
            <Image
              src="/assets/icons/logo.webp"
              alt="centurion"
              width={100}
              height={100}
            />
            <Heading as="h2" size="3xl">
              <span className="text-gray-700">
                {t("resume.title").split(" ")[0]}
              </span>{" "}
              <span className="text-red-500">
                {t("resume.title").split(" ")[1]}
              </span>
            </Heading>
            <p className="text-sm">{t("resume.description")}</p>
            <p className="font-bold uppercase flex gap-1 flex-wrap">
              <span className="text-gray-700">
                {t("resume.tags").split(" ")[0]}
              </span>
              <span className="text-green-600">
                {t("resume.tags").split(" ")[1]}
              </span>
              <span className="text-red-600">
                {t("resume.tags").split(" ")[2]}
              </span>
              <span className="text-orange-600">
                {t("resume.tags").split(" ")[3]}
              </span>
            </p>
            <Link className="inline-block" href="/">
              {text("learn_more")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
