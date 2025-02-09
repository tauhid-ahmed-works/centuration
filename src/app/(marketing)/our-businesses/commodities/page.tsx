import Image from "next/image";
import { Heading } from "@/components/heading";
import Underline from "@/components/decorate-line";
import { Button } from "@/components/ui/button";
import { Banner, BannerType } from "@/components/banner";
import { useIntl } from "@/lib/get-intl";

export default function CommoditiesPage() {
  const commoditiesData = useIntl("business_commodities");
  const bannerIntl = commoditiesData("banner");
  const aboutIntl = commoditiesData("aboutNutriagro");
  const ourServicesIntl = commoditiesData("ourServices");
  const popularProductsIntl = commoditiesData("popularProducts");
  const ourOfferIntl = commoditiesData("ourOffer");
  const whyChooseUsIntl = commoditiesData("whyChooseUs");
  const bannerData: BannerType[] = [
    {
      mediaSrc:
        "/assets/images/business/commodities/banner/commodities-banner-01.webp",
      mediaType: "image",
      title: bannerIntl[1].title,
      content: bannerIntl[1].content,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/commodities/banner/commodities-banner-02.webp",
      mediaType: "image",
      title: bannerIntl[2].title,
      content: bannerIntl[2].content,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/commodities/banner/commodities-banner-03.webp",
      mediaType: "image",
      title: bannerIntl[3].title,
      content: bannerIntl[3].content,
      learn_more: "/",
    },
  ];
  return (
    <>
      <Banner data={bannerData} />
      <section className="section" data-padding="lg">
        <div className="container">
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
          <div className="mt-10 text-center space-y-4">
            {aboutIntl.content.map((item: string, i: number) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="md">Know More</Button>
          </div>
        </div>
      </section>
      <section className="bg-secondary-500 section">
        <div className="container">
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-[auto_auto_auto_auto] justify-between">
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
                    className="size-12"
                    width={48}
                    height={48}
                    alt="icon"
                  />
                  <span className="flex flex-col">
                    <span className="font-semibold text-white text-xl">
                      {item.title}
                    </span>
                    <span className="text-primary-500">{item.content}</span>
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
      <section className="section" data-padding="lg">
        <div className="container">
          <div className="space-y-10 md:space-y-14 lg:space-y-20">
            <div className="space-y-4">
              <Heading
                className="text-center text-secondary-500"
                size="5xl"
                as="h2"
              >
                {popularProductsIntl.title}
              </Heading>
              <Underline align="center" />
            </div>

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
            <div className="text-center">
              <Button>See all products</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-10 md:flex-row items-center justify-center">
            <div className="space-y-6 md:space-y-10 max-w-sm">
              <div className="space-y-6">
                <Heading className="text-primary-500" as="h2" size="2xl">
                  {ourOfferIntl.title}
                </Heading>
                <Heading as="h3" size="4xl">
                  {ourOfferIntl.subtitle}
                </Heading>
                <div className="spacey-6">
                  <Heading as="h3" size="xl">
                    {ourOfferIntl.subtitle2}
                  </Heading>
                  <p>{ourOfferIntl.description}</p>
                </div>
                <Button>Contact Now</Button>
              </div>
            </div>
            <div className="relative w-72 h-[450px] -mb-10">
              <Image
                fill
                src="/assets/images/business/commodities/banner/mobile.png"
                alt="mobile"
                className="object-fill"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section relative" data-padding="lg">
        <div className="absolute size-full inset-0 after:absolute after:inset-0 after:bg-secondary-500/80">
          <Image
            fill
            src="/assets/images/business/commodities/why-choose-us.png"
            alt="why-choose-us"
            className="object-cover"
          />
        </div>
        <div className="container relative">
          <div className="flex gap-28">
            <div className="relative flex-1 h-auto">
              <Image
                fill
                src="/assets/images/business/commodities/why-choose-us.png"
                alt="why-choose-us"
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-white space-y-8">
              <Heading as="h2" size="4xl">
                {whyChooseUsIntl.title}
              </Heading>
              <ul className="space-y-6">
                {whyChooseUsIntl.content.map((item: string, index: number) => (
                  <li className="flex gap-6 items-start" key={index}>
                    <div className="size-5 rounded-full border-primary-500 border-2 shrink-0"></div>
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
