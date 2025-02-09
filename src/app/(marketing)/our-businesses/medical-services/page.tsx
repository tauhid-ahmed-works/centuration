import { Heading } from "@/components/heading";
import Underline from "@/components/decorate-line";
import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideFileDown } from "lucide-react";
import Image from "next/image";
import { Banner, BannerType } from "@/components/banner";
import { getIntl } from "@/lib/get-intl";

const ourSolutionsIcons = [
  "/assets/images/business/medical-service/icons/wall.png",
  "/assets/images/business/medical-service/icons/oreo.png",
  "/assets/images/business/medical-service/icons/horn.png",
  "/assets/images/business/medical-service/icons/zoom.png",
  "/assets/images/business/medical-service/icons/search.png",
  "/assets/images/business/medical-service/icons/cart.png",
];

export default function MedicalServicePage() {
  const medicalServiceIntl = getIntl("business_medical_service");
  const bannerIntl: BannerType[] = medicalServiceIntl("banner");
  const rentScannerIntl = medicalServiceIntl("rent_scanner");
  const amenitiesIntl = medicalServiceIntl("amenities");
  const modelsIntl = medicalServiceIntl("ctCubeModels");
  const contactUsIntl = medicalServiceIntl("contactUs");
  const ourSolutionsIntl = medicalServiceIntl("ourSolutions");
  const infectionPreventionIntl = medicalServiceIntl("infectionPrevention");
  const bannerData: BannerType[] = [
    {
      mediaSrc:
        "/assets/images/business/medical-service/banner/banner-image-1.webp",
      mediaType: "image",
      title: bannerIntl[1].title,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/medical-service/banner/banner-image-2.webp",
      mediaType: "image",
      title: bannerIntl[2].title,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/medical-service/banner/banner-image-3.webp",
      mediaType: "image",
      title: bannerIntl[3].title,
      learn_more: "/",
    },
  ];
  return (
    <>
      <Banner data={bannerData} />
      {/* Scanner Section */}
      <section className="section" data-padding="lg">
        <div className="container">
          <div className="space-y-10 lg:space-y-20">
            <div className="md:grid md:grid-cols-[300px_1fr] lg:grid-cols-[480px_1fr] md:gap-6 lg:gap-10">
              <div className="md:bg-primary-500 md:flex md:items-center md:py-5 md:px-12">
                <Heading
                  size="5xl"
                  className="text-primary-500 text-center md:text-left text-pretty md:text-white"
                  as="h2"
                  underline={
                    <Underline
                      align="center"
                      variant="primary"
                      className="md:hidden"
                    />
                  }
                >
                  {rentScannerIntl.title}
                </Heading>
              </div>
              <div className="mt-6 md:mt-0 flex flex-col justify-center items-center md:items-start">
                <p className="text-secondary-300 text-sm md:text-base text-pretty">
                  {rentScannerIntl.description}
                </p>
                <Button
                  variant="primary"
                  contrast="outline"
                  className="mt-7 border-primary-500 text-primary-500 font-bold w-48"
                >
                  Contact
                </Button>
              </div>
            </div>
            <div className="text-center md:text-left">
              <Heading className="text-secondary-400" as="h2" size="4xl">
                {rentScannerIntl.subtitle}
              </Heading>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
              {rentScannerIntl.features.map((item: string, i: number) => (
                <li
                  className="bg-primary-50 text-secondary-300 p-2 rounded-full text-sm flex items-center gap-3"
                  key={i}
                >
                  <span className="size-12 inline-flex items-center justify-center text-white rounded-full bg-primary-500 shrink-0">
                    <LucideArrowRight />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/assets/images/business/medical-service/rentScanner/image-01.webp"
                sizes="(max-width:600px) 50vw, 80vw"
                alt="Image"
                fill
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section relative" data-padding="md">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/business/medical-service/amenities/image-01.png"
            width="1920"
            height="1080"
            alt="section-image"
            className="object-cover size-full hidden md:block"
          />
        </div>
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-[300px_30px_1fr] lg:grid-cols-[480px_40px_1fr] md:grid-rows-[290px_100px_1fr] gap-4">
            <div className="md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3 hidden md:block relative z-20">
              <Image
                src="/assets/images/business/medical-service/amenities/card-image-01.png"
                width="400"
                height="400"
                alt="section-image"
                className="object-cover size-full"
              />
            </div>
            <div className="md:row-start-2 md:row-end-4 md:col-start-1 relative z-10">
              <Image
                src="/assets/images/business/medical-service/amenities/card-image-03.png"
                width="400"
                height="400"
                alt="section-image"
                className="object-cover size-full mt-20 lg:mt-0"
              />
              <div className="absolute h-full top-0 -inset-x-6 -z-10">
                <Image
                  src="/assets/images/business/medical-service/amenities/image-01.png"
                  width="1920"
                  height="1080"
                  alt="section-image"
                  className="object-cover size-full"
                />
              </div>
            </div>
            <div className="md:row-start-1 md:row-end-3 md:col-start-3 hidden md:block">
              <Image
                src="/assets/images/business/medical-service/amenities/card-image-02.png"
                width="400"
                height="400"
                alt="section-image"
                className="object-cover size-full"
              />
            </div>
            <div className="md:row-start-3 md:row-end-4 md:col-start-3">
              <Heading
                className="text-primary-500 text-center md:text-left md:mt-8 md:ml-4"
                size="4xl"
              >
                {amenitiesIntl.title}
              </Heading>
              <ul className="flex flex-col gap-6 md:gap-0 lg:flex-row md:flex-wrap mt-4 md:mt-8">
                {amenitiesIntl.features.map((item: string, i: number) => (
                  <li
                    className="bg-primary-500 text-white py-2 px-4 flex gap-4 items-center md:bg-transparent md:basis-1/2"
                    key={i}
                  >
                    <span className="size-12 inline-flex items-center justify-center text-primary-500 rounded-full bg-white shrink-0 md:bg-primary-500 md:text-black">
                      <LucideArrowRight />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Models */}
      <section className="section" data-padding="lg">
        <div className="container">
          <Image
            width={1920}
            height={400}
            src="/assets/images/business/medical-service/model/model-01.webp"
            alt="featured-model"
            className="h-[350px] md:h-[450px] object-cover size-full"
          />
          <div className="mx-auto text-center max-w-lg mt-10 md:mt-20">
            <Heading
              className="text-secondary-400"
              as="h2"
              size="5xl"
              underline={<Underline align="center" variant="primary" />}
            >
              {modelsIntl.title}
            </Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-4 mt-10 place-items-center">
            {modelsIntl.models.map(
              (
                item: { title: string; specifications: Record<string, string> },
                i: number
              ) => (
                <div className="w-fit" key={i}>
                  <Image
                    src="/assets/images/business/medical-service/model/model-01.webp"
                    width={400}
                    height={300}
                    alt="model"
                  />
                  <Heading size="2xl" className="text-primary-500 mt-4">
                    {item.title}
                  </Heading>

                  <ul className="space-y-1 mt-4">
                    <li>
                      <strong className="text-secondary-400 font-semibold">
                        Size:
                      </strong>
                      &nbsp;
                      <span className="text-secondary-300">
                        {item.specifications.size}
                      </span>
                    </li>
                    <li>
                      <strong className="text-secondary-400 font-semibold">
                        Rooms:
                      </strong>
                      &nbsp;
                      <span className="text-secondary-300">
                        {item.specifications.rooms}
                      </span>
                    </li>
                    <li>
                      <strong className="text-secondary-400 font-semibold">
                        CT Scanner:
                      </strong>
                      &nbsp;
                      <span className="text-secondary-300">
                        {item.specifications["scanner"]}
                      </span>
                    </li>
                    <li>
                      <strong className="text-secondary-400 font-semibold">
                        Availability:
                      </strong>
                      &nbsp;
                      <span className="text-secondary-300">
                        {item.specifications.availability}
                      </span>
                    </li>
                  </ul>
                  <div className="flex gap-2 lg:gap-4 mt-4">
                    <Button variant="primary" size="md">
                      Details
                    </Button>
                    <Button
                      className="before:inset-0 font-normal"
                      variant="secondary"
                      size="md"
                    >
                      Inquire
                    </Button>
                    <button className="size-9 lg:size-12 bg-secondary-500 shrink-0 rounded inline-flex items-center justify-center">
                      <LucideFileDown className="text-white size-5 md:size-6" />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      {/* Contact us */}
      <section className="section bg-secondary-500" data-padding="md">
        <div className="container">
          <Heading
            className="mt-6 !leading-relaxed"
            size="4xl"
            underline={<Underline align="left" variant="secondary" />}
          >
            <span className="text-white">
              {contactUsIntl.title.split("\t")[0]}
            </span>
            <br />
            <span className="text-primary-500">
              {contactUsIntl.title.split("\t")[1]}
            </span>
          </Heading>
        </div>
      </section>
      {/*  */}
      <section className="section" data-padding="lg">
        <div className="container">
          <div className="max-w-sm mx-auto text-center">
            <Heading
              className="text-secondary-400"
              size="4xl"
              underline={<Underline align="center" variant="primary" />}
            >
              {ourSolutionsIntl.title}
            </Heading>
          </div>
          <div className="overflow-hidden mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 -m-px -space-x-px -space-y-px">
              {ourSolutionsIntl.reasons.map(
                (item: { title: string; content: string }, i: number) => (
                  <div
                    className="space-y-4 text-center p-8 border border-secondary-50"
                    key={i}
                  >
                    <Image
                      className="size-10 mx-auto"
                      src={ourSolutionsIcons[i]}
                      width={40}
                      height={40}
                      alt="icon"
                    />
                    <Heading className="text-secondary-400" as="h3" size="2xl">
                      {item.title}
                    </Heading>
                    <p className="text-secondary-300">{item.content}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="mt-14 md:mt-28 lg:mt-40 relative h-96 lg:h-[550px]">
            <Image
              src="/assets/images/business/medical-service/our-solutions/solution-01.webp"
              fill
              sizes="80vw"
              alt="image"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Infection */}
      <section
        className="section bg-secondary-500 text-center"
        data-padding="md"
      >
        <div className="container">
          <Heading
            className="text-primary-500 lg:px-48"
            size="4xl"
            underline={<Underline align="center" className="md:hidden" />}
          >
            {infectionPreventionIntl.title}
          </Heading>
          <p className="text-white mt-10">{infectionPreventionIntl.content}</p>
        </div>
      </section>
    </>
  );
}
