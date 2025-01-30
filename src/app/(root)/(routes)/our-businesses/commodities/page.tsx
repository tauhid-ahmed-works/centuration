import Image from "next/image";
import { bannerData } from "@/data/business/commodities";
import { Hero } from "@/components/hero";
import { Heading } from "@/components/heading";
import * as data from "@/data/business/commodities";
import Underline from "@/components/decorate-line";
import { Button } from "@/components/ui/button";

export default function CommoditiesPage() {
  return (
    <>
      <Hero data={bannerData} />
      <section className="section" data-padding="lg">
        <div className="container">
          <div className="space-y-4 lg:space-y-6 text-center max-w-4xl mx-auto">
            <Heading className="text-primary-500" as="h2" size="2xl">
              {data.aboutNutriagro.title}
            </Heading>
            <Heading as="h3" size="5xl">
              {data.aboutNutriagro.subtitle}
            </Heading>
            <Underline align="center" variant="primary" />
          </div>
          <div className="mt-10 text-center space-y-4">
            {data.aboutNutriagro.content.map((item, i) => (
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
            {data.ourServices.map((item) => (
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
            ))}
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
                {data.popularProducts.title}
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
      <section className="section" data-padding="lg">
        <div className="container">
          <div className="flex flex-col gap-10 md:flex-row items-center justify-center">
            <div className="space-y-6 md:space-y-10 max-w-sm">
              <div className="space-y-6">
                <Heading className="text-primary-500" as="h2" size="2xl">
                  {data.ourOffer.title}
                </Heading>
                <Heading as="h3" size="4xl">
                  {data.ourOffer.subtitle}
                </Heading>
                <div className="spacey-6">
                  <Heading as="h3" size="xl">
                    {data.ourOffer.subtitle2}
                  </Heading>
                  <p>{data.ourOffer.description}</p>
                </div>
                <Button>Contact Now</Button>
              </div>
            </div>
            {/* <Image
              width="300"
              height="600"
              src="/assets/images/business/commodities/banner/mobile.png"
              alt="mobile"
              className="-mb-60 block"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
}
