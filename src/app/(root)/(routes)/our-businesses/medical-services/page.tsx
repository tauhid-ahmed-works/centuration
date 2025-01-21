import * as data from "@/data/business/medical-services";
import { Heading } from "@/components/heading";
import DecorateLine from "@/components/decorate-line";
import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideFileDown } from "lucide-react";
import Image from "next/image";
import { bannerData } from "@/data/business/medical-services";
import { Hero } from "@/components/hero";

export default function MedicalServicePage() {
  return (
    <>
      <Hero data={bannerData} />
      {/* Scanner Section */}
      <section className="section mt-10 md:mt-20 lg:mt-30">
        <div className="container">
          <div className="md:grid md:grid-cols-[300px_1fr] lg:grid-cols-[480px_1fr] md:gap-6 lg:gap-10">
            <div className="md:bg-primary-500 md:flex md:items-center md:py-5 md:px-12">
              <Heading
                size="5xl"
                className="text-primary-500 text-center md:text-left text-pretty md:text-white md:!leading-relaxed"
                as="h2"
              >
                {data.rentScanner.title}
              </Heading>
            </div>
            <DecorateLine className="mt-8 md:hidden" />
            <div className="mt-6 md:mt-0 flex flex-col justify-center items-center md:items-start">
              <p className="text-secondary-300 text-sm md:text-base text-pretty">
                {data.rentScanner.description}
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
        </div>
      </section>
      <section className="section bg-gray-300 md:bg-transparent">
        <div className="container">
          <div className="py-6 text-center md:text-left">
            <Heading className="text-secondary-400" as="h2" size="3.5xl">
              {data.rentScanner.subtitle}
            </Heading>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            {data.rentScanner.content.map((item, i) => (
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
          <div className="mt-14">
            <Image
              src={data.rentScanner.videoLink}
              width={1920}
              height={600}
              alt="Image"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Amenities */}
      <section className="section relative">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/business/medical-service/amenities/image-01.png"
            width="1920"
            height="1080"
            alt="section-image"
            className="object-cover size-full hidden md:block"
          />
        </div>
        <div className="container relative py-20">
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
                className="object-cover size-full"
              />
              <div className="absolute h-full top-0 -inset-x-6 -z-10 -mt-20">
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
                size="3.5xl"
              >
                Amenities
              </Heading>
              <ul className="flex flex-col gap-6 md:gap-0 lg:flex-row md:flex-wrap mt-4 md:mt-8">
                {data.amenities.content.map((item, i) => (
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
      <section className="section md:mt-28">
        <div className="container">
          <Image
            width={1920}
            height={400}
            src={data.ctCubeModels.image}
            alt="featured-model"
            className="h-[350px] md:h-[450px] object-cover size-full"
          />
          <div className="mx-auto text-center max-w-lg mt-10 md:mt-20">
            <Heading className="text-secondary-400" as="h2" size="4.5xl">
              {data.ctCubeModels.title}
            </Heading>
          </div>
          <DecorateLine className="mt-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 mt-10 place-items-center">
            {data.ctCubeModels.models.map((item, i) => (
              <div key={i}>
                <Image src={item.image} width={400} height={300} alt="model" />
                <Heading size="3xl" className="text-primary-500 mt-4">
                  {item.title}
                </Heading>

                <ul className="space-y-1 mt-4">
                  <li>
                    <strong className="text-secondary-400 font-semibold">
                      Size:
                    </strong>
                    &nbsp;
                    <span className="text-secondary-300">
                      {item.point.size}
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-400 font-semibold">
                      Rooms:
                    </strong>
                    &nbsp;
                    <span className="text-secondary-300">
                      {item.point.rooms}
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-400 font-semibold">
                      CT Scanner:
                    </strong>
                    &nbsp;
                    <span className="text-secondary-300">
                      {item.point["ct-scanner"]}
                    </span>
                  </li>
                  <li>
                    <strong className="text-secondary-400 font-semibold">
                      Availability:
                    </strong>
                    &nbsp;
                    <span className="text-secondary-300">
                      {item.point.availability}
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
            ))}
          </div>
        </div>
      </section>
      {/* Contact us */}
      <section className="section bg-secondary-500 md:py-14 lg:py-20">
        <div className="container">
          <DecorateLine className="mt-8 justify-start" variant="secondary" />
          <Heading className="mt-6 !leading-relaxed" size="3.5xl">
            <span className="text-white">{data.contactUs.title[0]}</span>
            <br />
            <span className="text-primary-500">{data.contactUs.title[1]}</span>
          </Heading>
        </div>
      </section>
      {/*  */}
      <section className="section">
        <div className="container">
          <div className="max-w-sm mx-auto text-center">
            <Heading className="text-secondary-400" size="4.5xl">
              {data.ourSolutions.title}
            </Heading>
            <DecorateLine className="mt-8" />
          </div>
          <div className="overflow-hidden mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 -m-px">
              {data.ourSolutions.features.map((item, i) => (
                <div className="space-y-4 text-center p-8 border" key={i}>
                  <Image
                    className="size-10 mx-auto"
                    src={item.icon}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                  <Heading className="text-secondary-400" as="h3" size="2xl">
                    {item.title}
                  </Heading>
                  <p className="text-secondary-300">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="py-20">
            <Image
              src={data.ourSolutions.image}
              width={1920}
              height={500}
              alt="image"
            />
          </div>
        </div>
      </section>
      {/* Infection */}
      <section className="section bg-secondary-500 text-center md:py-14 lg:py-20">
        <div className="container">
          <Heading className="text-primary-500 lg:px-48" size="4.5xl">
            {data.infectionPrevention.title}
          </Heading>
          <DecorateLine className="mt-8 md:hidden" />
          <p className="text-white mt-10">{data.infectionPrevention.content}</p>
        </div>
      </section>
    </>
  );
}
