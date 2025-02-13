import Image from "next/image";
import { Heading } from "@/components/heading";
import Underline from "@/components/decorate-line";
import { Button } from "@/components/ui/button";
import { Banner, BannerType } from "@/components/banner";
import { useIntl } from "@/lib/get-intl";
import { LucideCheck } from "lucide-react";

const bannerMedia = [
  {
    mediaSrc:
      "/assets/images/business/commodities/banner/commodities-banner-01.webp",
    mediaType: "image",

    learn_more: "/",
  },
  {
    mediaSrc:
      "/assets/images/business/commodities/banner/commodities-banner-02.webp",
    mediaType: "image",
    learn_more: "/",
  },
  {
    mediaSrc:
      "/assets/images/business/commodities/banner/commodities-banner-03.webp",
    mediaType: "image",
    learn_more: "/",
  },
];

export default function CommoditiesPage() {
  const commoditiesData = useIntl("business_commodities");
  const bannerIntl = commoditiesData("banner");
  const aboutIntl = commoditiesData("aboutNutriagro");
  const ourServicesIntl = commoditiesData("ourServices");
  const popularProductsIntl = commoditiesData("popularProducts");
  const ourOfferIntl = commoditiesData("ourOffer");
  const whyChooseUsIntl = commoditiesData("whyChooseUs");

  const bannerData: BannerType[] = bannerIntl.map(
    (item: Record<string, string>, index: number) => ({
      ...item,
      ...bannerMedia[index],
    })
  );
  return (
    <>
      <Banner data={bannerData} />
      <section className="section" data-padding="lg">
        <div className="hidden lg:block absolute top-0 inset-x-0">
          <div className="container">
            <div className="flex justify-end items-center">
              <div className="h-44 w-40">
                <Image
                  className="size-full object-contain block"
                  width={160}
                  height={176}
                  src="/assets/images/business/commodities/tag.svg"
                  alt="tag"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container" data-size="md">
          <div className="space-y-4 lg:space-y-6 text-center max-w-4xl mx-auto">
            <Heading className="text-primary-500" as="h2" size="2xl">
              {aboutIntl.title}
            </Heading>
            <Heading
              className="text-secondary-400"
              as="h3"
              size="5xl"
              underline={<Underline align="center" variant="primary" />}
            >
              {aboutIntl.subtitle}
            </Heading>
          </div>
          <div className="mt-10 space-y-4">
            {aboutIntl.content.map((item: string, i: number) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg">Know More</Button>
          </div>
        </div>
      </section>
      <section className="bg-secondary-500 section" data-padding="md">
        <div className="container">
          <ul className="grid grid-cols-2 gap-4 gap-y-8 md:grid-cols-[auto_auto_auto_auto] justify-between items-start">
            {ourServicesIntl.map(
              (item: {
                id: number;
                icon: string;
                title: string;
                content: "string";
              }) => (
                <li className="flex items-center gap-4" key={item.id}>
                  <Image
                    src={item.icon}
                    className="size-8 lg:size-10"
                    width={48}
                    height={48}
                    alt="icon"
                  />
                  <span className="flex flex-col">
                    <span className="font-semibold text-white lg:text-xl whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="text-primary-500 text-xs md:text-md">
                      {item.content}
                    </span>
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
      <section className="section" data-padding="lg">
        <div className="container">
          <Heading
            className="text-center text-secondary-400"
            size="5xl"
            as="h2"
            underline={<Underline align="center" variant="primary" />}
          >
            {popularProductsIntl.title}
          </Heading>

          <div className="mt-10 md:mt-14 lg:mt-20">
            <div className="flex gap-8">
              <div className="flex-1 group">
                <div className="relative w-full aspect-square group-hover:bg-primary-100">
                  <Image
                    src="/assets/images/business/commodities/products/corn.png"
                    alt="image of product"
                    fill
                  />
                </div>
                <Heading
                  className="text-secondary-400 group-hover:text-primary-500 mt-6"
                  as="h3"
                  size="3xl"
                >
                  Yellow Corn
                </Heading>
              </div>
              <div className="flex-1 group">
                <div className="relative w-full aspect-square group-hover:bg-primary-100">
                  <Image
                    src="/assets/images/business/commodities/products/salt.png"
                    alt="image of product"
                    fill
                  />
                </div>
                <Heading
                  className="text-secondary-400 group-hover:text-primary-500 mt-6"
                  as="h3"
                  size="3xl"
                >
                  Yellow Corn
                </Heading>
              </div>
              <div className="flex-1 group">
                <div className="relative w-full aspect-square group-hover:bg-primary-100">
                  <Image
                    src="/assets/images/business/commodities/products/sugar.png"
                    alt="image of product"
                    fill
                  />
                </div>
                <Heading
                  className="text-secondary-400 group-hover:text-primary-500 mt-6"
                  as="h3"
                  size="3xl"
                >
                  Yellow Corn
                </Heading>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 md:mt-14 lg:mt-20">
            <Button>See all products</Button>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="section pt-10 sm:pt-14 lg:20 pb-0">
        <div className="container">
          <div className="flex flex-col gap-10 sm:flex-row items-center justify-between">
            <div className="space-y-6 md:space-y-10 flex-1 shrink-0">
              <div className="space-y-6">
                <Heading className="text-primary-500" as="h2" size="2xl">
                  {ourOfferIntl.title}
                </Heading>
                <Heading className="text-secondary-400" as="h3" size="4xl">
                  {ourOfferIntl.subtitle}
                </Heading>
                <div className="space-y-6 text-secondary-300">
                  <Heading as="h3" size="xl">
                    {ourOfferIntl.subtitle2}
                  </Heading>
                  <p>{ourOfferIntl.description}</p>
                </div>
                <Button>Contact Now</Button>
              </div>
            </div>
            <div className="relative h-96 md:h-[650px] w-96 sm:flex-1 shrink-0 top-10">
              <Image
                fill
                src="/assets/images/business/commodities/banner/mobile.png"
                alt="mobile"
                className="object-contain size-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="section relative" data-padding="lg">
        <div className="absolute size-full inset-0 after:absolute after:inset-0 after:bg-secondary-500/60">
          <Image
            fill
            src="/assets/images/business/commodities/banner/commodities-banner-01.webp"
            alt="why-choose-us"
            className="object-cover"
          />
        </div>
        <div className="container relative">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-14 justify-between">
            <div className="relative h-72 sm:flex-1 sm:h-auto">
              <Image
                fill
                src="/assets/images/business/commodities/banner/commodities-banner-01.webp"
                alt="why-choose-us"
                className="object-cover rounded contrast-75"
              />
            </div>
            <div className="flex-1 text-white space-y-8">
              <Heading as="h2" size="4xl">
                {whyChooseUsIntl.title}
              </Heading>
              <ul className="space-y-6">
                {whyChooseUsIntl.content.map((item: string, index: number) => (
                  <li className="flex gap-6 items-start" key={index}>
                    <div className="size-5 rounded-full border-primary-500 border-2 shrink-0 flex items-center justify-center">
                      <LucideCheck className="size-3 text-primary-500 stroke-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="md" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
