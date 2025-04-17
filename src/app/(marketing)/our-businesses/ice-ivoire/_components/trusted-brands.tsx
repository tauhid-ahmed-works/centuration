"use client";
import Image from "next/image";
import Embla from "@/components/embla";
import { Heading } from "@/components/heading";

const brands = [
  "/assets/images/business/ice-ivoire/brands/client-1.png",
  "/assets/images/business/ice-ivoire/brands/client-2.png",
  "/assets/images/business/ice-ivoire/brands/client-3.png",
  "/assets/images/business/ice-ivoire/brands/client-4.png",
  "/assets/images/business/ice-ivoire/brands/client-5.png",
  "/assets/images/business/ice-ivoire/brands/client-6.png",
  "/assets/images/business/ice-ivoire/brands/client-7.png",
  "/assets/images/business/ice-ivoire/brands/client-8.png",
  "/assets/images/business/ice-ivoire/brands/client-9.png",
  "/assets/images/business/ice-ivoire/brands/client-10.png",
];

export function TrustedBrands({ data }: { data: { title: string } }) {
  return (
    <section className="section bg-stone-950/90" data-padding="md">
      <div className="space-y-8">
        <Heading className="text-primary-500 text-center" size="5xl">
          {data.title}
        </Heading>
        <Embla data={brands} slidesPerView={4}>
          <div className="max-w-6xl mx-auto relative" data-size="sm">
            <div className="px-20 md:px-32">
              <Embla.Container>
                {brands.map((image, i) => (
                  <Embla.Slide key={i}>
                    <div className="px-4">
                      <Image
                        src={image}
                        width={300}
                        height={20}
                        alt="brand"
                        className="h-20 w-full aspect-video object-cover"
                      />
                    </div>
                  </Embla.Slide>
                ))}
              </Embla.Container>
            </div>
            <Embla.NavigationControls />
          </div>
        </Embla>
      </div>
    </section>
  );
}
