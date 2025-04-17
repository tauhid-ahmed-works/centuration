"use client";

import Underline from "@/components/decorate-line";
import Embla from "@/components/embla";
import { Heading } from "@/components/heading";
import Image from "next/image";

const images = [
  "/assets/images/business/ice-ivoire/banner/partners/partner-01.png",
  "/assets/images/business/ice-ivoire/banner/partners/partner-02.png",
  "/assets/images/business/ice-ivoire/banner/partners/partner-03.png",
  "/assets/images/business/ice-ivoire/banner/partners/partner-04.png",
  "/assets/images/business/ice-ivoire/banner/partners/partner-05.png",
  "/assets/images/business/ice-ivoire/banner/partners/partner-06.png",
  "/assets/images/business/ice-ivoire/banner/partners/partner-07.png",
];

export function Partners({
  data,
}: {
  data: { title: string; description: string };
}) {
  return (
    <section className="section" data-padding="lg">
      <Embla data={images} loop slidesPerView={7} align="center" autoplay>
        <div className="max-w-md flex flex-col items-center text-center mx-auto space-y-6">
          <Heading
            as="h2"
            size="5xl"
            className="text-secondary-500"
            underline={
              <Underline variant="primary" align="center" weight="normal" />
            }
          >
            {data.title}
          </Heading>
          <p className="text-secondary-300">{data.description}</p>
          <Embla.InlineNavigationControls />
        </div>
        <div className="mt-10">
          <Embla.Container>
            {[...images, ...images].map((image, index) => (
              <Embla.Slide key={index}>
                <Image
                  src={image}
                  width={250}
                  height={275}
                  alt={"partner"}
                  className="w-[250px] h-[275px] object-cover"
                />
              </Embla.Slide>
            ))}
          </Embla.Container>
        </div>
      </Embla>
    </section>
  );
}
