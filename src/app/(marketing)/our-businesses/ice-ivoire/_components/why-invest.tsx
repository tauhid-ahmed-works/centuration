"use client";
import Underline from "@/components/decorate-line";
import Embla from "@/components/embla";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Icon1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={64}
      height={54}
      viewBox="0 0 64 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.862 25.737a2.25 2.25 0 01.228 2.098l-4.5 11.25a2.253 2.253 0 01-4.18-1.679l3.266-8.156H21a2.25 2.25 0 01-2.09-3.094l4.5-11.25a2.254 2.254 0 014.18 1.688l-3.266 8.156H30a2.252 2.252 0 011.862.987zM63.75 15.365V38.25a6.75 6.75 0 01-13.5 0V27A2.25 2.25 0 0048 24.75h-4.5V49.5H48a2.25 2.25 0 010 4.5H3a2.25 2.25 0 010-4.5h4.5V6.75A6.75 6.75 0 0114.25 0h22.5a6.75 6.75 0 016.75 6.75v13.5H48A6.75 6.75 0 0154.75 27v11.25a2.25 2.25 0 004.5 0V15.365a2.25 2.25 0 00-.658-1.584l-5.434-5.44a2.251 2.251 0 113.184-3.183l5.44 5.434a6.706 6.706 0 011.968 4.773zM39 49.5V6.75a2.25 2.25 0 00-2.25-2.25h-22.5A2.25 2.25 0 0012 6.75V49.5h27z"
        fill="currentColor"
      />
    </svg>
  );
}

function Icon2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={64}
      height={53}
      viewBox="0 0 64 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M61.25 48h-9v-6.75H59a2.248 2.248 0 002.182-2.796l-9-36a2.25 2.25 0 00-4.364 0l-9 36A2.25 2.25 0 0041 41.25h6.75V48h-18v-4.5H32a2.25 2.25 0 100-4.5h-2.25v-4.5H32a2.25 2.25 0 100-4.5H7.25a2.25 2.25 0 000 4.5H9.5V39H7.25a2.25 2.25 0 000 4.5H9.5V48H2.75a2.25 2.25 0 000 4.5h58.5a2.25 2.25 0 100-4.5zM50 12.28l6.117 24.47H43.883L50 12.28zM14 34.5h11.25V39H14v-4.5zm0 9h11.25V48H14v-4.5zM28.625 21a7.874 7.874 0 100-15.749 7.874 7.874 0 000 15.749zm0-11.25a3.375 3.375 0 110 6.75 3.375 3.375 0 010-6.75z"
        fill="currentColor"
      />
    </svg>
  );
}

function Icon3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.946 9.33C13.227 4.191 20.052 0 30 0c9.948 0 16.773 4.191 21.054 9.33 3.18 3.81 4.965 8.16 5.637 11.67H60v6h-3v27h3v6H0v-6h3V27H0v-6h3.309c.672-3.51 2.46-7.86 5.637-11.67zM9 27v27h9v-9a12 12 0 0124 0v9h9V27H9zm41.538-6a21 21 0 00-4.092-7.83A19.2 19.2 0 0037.2 7.023a38.02 38.02 0 011.536 3.033c1.479 3.291 2.661 7.137 3.09 10.944h8.712zm-14.76 0a32.098 32.098 0 00-2.514-8.481 27.001 27.001 0 00-2.604-4.608 14.808 14.808 0 00-.66-.858c-.212.254-.432.54-.66.858-.894 1.239-1.8 2.817-2.604 4.608A32.098 32.098 0 0024.222 21h11.556zm-17.604 0c.429-3.81 1.608-7.653 3.09-10.944.478-1.062.99-2.072 1.536-3.03a19.2 19.2 0 00-9.246 6.144A21 21 0 009.462 21h8.712zM36 54v-9a6 6 0 10-12 0v9h12z"
        fill="currentColor"
      />
    </svg>
  );
}

const icons = [
  {
    icon: <Icon1 />,
    text: "Station",
  },
  {
    icon: <Icon2 />,
    text: "Station",
  },
  {
    icon: <Icon3 />,
    text: "Station",
  },
];

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
                  <Embla data={icons} slidesPerView={3} align="start">
                    <div className="relative space-y-6">
                      <div className="px-6 md:px-14">
                        <Embla.Container>
                          {icons.map((item, i) => (
                            <Embla.Slide
                              className="!basis-1/3 p- bg-white"
                              key={i}
                            >
                              <div className="border text-primary-500 border-primary-500 bg-white hover:bg-primary-500 hover:text-white flex flex-col items-center gap-4 p-6 md:p-8 lg:p-12">
                                {item.icon}
                                <span className="text-md">{item.text}</span>
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
