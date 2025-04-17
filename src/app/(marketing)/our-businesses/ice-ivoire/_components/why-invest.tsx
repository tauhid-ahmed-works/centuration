"use client";
import Underline from "@/components/decorate-line";
import Embla from "@/components/embla";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function WhyInvest({
  data,
  text,
}: {
  data: { title: string; subtitle: string; description: string };
  text: {
    understand_ice_business: string;
    calculate_your_profit: string;
  };
}) {
  console.log(text);
  return (
    <>
      <section className="section" data-padding="md">
        <div className="space-y-10">
          <div className="space-y-2">
            <Heading className="text-primary-500 text-center" size="5xl">
              {data.title}
            </Heading>
            <div className="md:hidden text-center">
              <Heading
                className="text-secondary-300 font-medium"
                as="h3"
                size="xl"
                underline={
                  <Underline align="center" weight="normal" variant="primary" />
                }
              >
                {data.subtitle}
              </Heading>
              <p className="font-medium">{data.description}</p>
            </div>
          </div>
          <div className="container">
            <div className="flex flex-col items-center md:flex-row gap-4">
              <div className="flex-1 w-full sm:max-w-[500px] lg:pr-14 xl:pr-20">
                <Image
                  src="/assets/images/business/ice-ivoire/ice-machine/ice-box.png"
                  width={400}
                  height={300}
                  alt="Ice Box"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex-2 lg:flex-1 shrink-0 w-full max-md:-mt-20 relative">
                <div className="md:space-y-10">
                  <div className="hidden md:block space-y-4">
                    <Heading
                      className="text-secondary-300 font-medium"
                      as="h3"
                      size="xl"
                    >
                      {data.subtitle}
                    </Heading>
                    <p className="font-medium text-2xl lg:text-3.5xl text-secondary-400">
                      {data.description}
                    </p>
                  </div>
                  <Embla data={[1, 2, 3]} slidesPerView={3} align="start">
                    <div className="relative space-y-6">
                      <div className="px-6 md:px-14">
                        <Embla.Container>
                          {[1, 2, 3].map((item, i) => (
                            <Embla.Slide
                              className="!basis-1/3 p- bg-white"
                              key={i}
                            >
                              <div className="border border-primary-500 bg-white hover:bg-primary-500 hover:text-white flex flex-col items-center gap-4 p-6 md:p-8 lg:p-12">
                                <div className="size-9 border-4"></div>
                                <span className="text-md">Station</span>
                              </div>
                            </Embla.Slide>
                          ))}
                        </Embla.Container>
                      </div>
                      <Embla.NavigationControls className="md:flex hidden" />
                      <Embla.InlineNavigationControls className="flex justify-center" />
                    </div>
                  </Embla>
                </div>
                <div className="flex flex-col  md:flex-row gap-6">
                  <Button variant="primary">
                    {text.calculate_your_profit}
                  </Button>
                  <Button variant="primary" contrast="outline">
                    {text.understand_ice_business}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
