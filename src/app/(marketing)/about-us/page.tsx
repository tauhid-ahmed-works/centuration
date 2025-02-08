import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Centurions",
  description: "Centurions About Page",
};
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Banner, type BannerType } from "@/components/banner";

export default function Page() {
  const t = useTranslations("about_us");
  const bannerIntl = t.raw("banner");
  const bannerData: BannerType[] = [
    {
      mediaSrc: "/assets/images/about/banner/about-us-banner-1.webp",
      mediaType: "image",
      title: bannerIntl[1].title,
      content: bannerIntl[1].content,
      learn_more: "/",
    },
    {
      mediaSrc: "/assets/images/about/banner/about-us-banner-2.webp",
      mediaType: "image",
      title: bannerIntl[2].title,
      content: bannerIntl[2].content,
      learn_more: "/",
    },
    {
      mediaSrc: "/assets/images/about/banner/about-us-banner-3.webp",
      mediaType: "image",
      title: bannerIntl[3].title,
      content: bannerIntl[3].content,
      learn_more: "/",
    },
  ];
  return (
    <>
      <Banner data={bannerData} />
      <section className="section" data-padding="md">
        <div className="container" data-size="md">
          <div className="text-center space-y-4">
            <Heading as="h2" size="4xl">
              {t("destiny.title")}
            </Heading>
            <p>{t("destiny.description")}</p>
          </div>
        </div>
      </section>
      <section className="section relative" data-padding="md">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/about/ceo.webp"
            className="size-full object-cover"
            alt="about team"
            fill
          />
        </div>
        <div className="container">
          <div className="flex justify-end min-h-96 items-center">
            <div className="p-10 max-w-md relative z-10 rounded inline-block text-white space-y-4 backdrop-blur-sm">
              <Heading className="text-white" as="h2" size="4xl">
                {t("ceo.title")}
              </Heading>
              <p>{t("destiny.description")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section space-y-12" data-padding="md">
        <div className="container" data-size="md">
          <div className="text-center space-y-4">
            <Heading as="h2" size="4xl">
              {t("leadership.title")}
            </Heading>
            <p>{t("leadership.description")}</p>
          </div>
        </div>
        <div className="container" data-size="md">
          <div className="-mr-4 md:flex flex-wrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="basis-1/2 lg:basis-1/4 pr-4 pb-4">
                <Image
                  src="/assets/images/about/executive.webp"
                  className="w-full max-w-96 mx-auto object-cover"
                  alt="about team"
                  width="400"
                  height="400"
                />
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold">Sani Dangote</h3>
                  <p className="text-sm">Group Vice President</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary-500 section" data-padding="md">
        <div className="container" data-size="sm">
          <div className="text-center text-white space-y-6">
            <Heading as="h2" size="3xl">
              {t("company.title")}
            </Heading>
            <p>{t("company.description")}</p>
          </div>
        </div>
      </section>
      <section className="section" data-padding="md">
        <div className="container">
          <div className="text-center">
            <Heading as="h2" size="4xl">
              {t("priority.title")}
            </Heading>
            <p>{t("priority.description")}</p>
          </div>
        </div>

        <div className="container">
          <div className="pt-12 space-y-10">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`flex flex-col gap-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="md:flex-1 space-y-4 self-center">
                  <Heading as="h3" size="2xl">
                    {t.raw("priority.priorities")[index].title}
                  </Heading>
                  <p> {t.raw("priority.priorities")[index].description}</p>
                  <Link href="#">
                    <Button size="sm">About Me</Button>
                  </Link>
                </div>
                <div className="md:flex-1 h-96 md:aspect-square overflow-hidden rounded relative">
                  <Image
                    src="/assets/images/about/about-card.webp"
                    alt="about-card"
                    fill
                    className="size-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
