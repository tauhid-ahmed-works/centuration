import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import Underline from "@/components/decorate-line";

const categoryImages = {
  medicine: "/assets/images/business/technology/area-of-scope/medicine.webp",
  restaurants:
    "/assets/images/business/technology/area-of-scope/restaurant.webp",
  automation:
    "/assets/images/business/technology/area-of-scope/automation.webp",
};

type ApplicationScopeProps = {
  data: {
    title: string;
    subtitle: string;
    categories: {
      id: string;
      title: string;
    }[];
  };
};

export default function ApplicationScope({ data }: ApplicationScopeProps) {
  return (
    <section className="section bg-gray-300" data-padding="sm">
      <section className="section" data-padding="md">
        <div className="container">
          <Heading
            className="text-center text-secondary-500"
            as="h2"
            size="3xl"
          >
            {data.title}
          </Heading>
          <div className="mt-10 md:mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
            {data.categories.map((category) => (
              <div key={category.id} className="max-w-lg w-full mx-auto">
                <Image
                  src={
                    categoryImages[category.id as keyof typeof categoryImages]
                  }
                  alt={category.title}
                  width={400}
                  height={400}
                  className="aspect-auto w-full object-cover"
                />
                <Underline
                  className="mt-4"
                  variant="primary"
                  weight="normal"
                  size="md"
                />
                <Heading
                  className="text-secondary-500 mt-4 md:mt-6"
                  as="h3"
                  size="2xl"
                >
                  {category.title}
                </Heading>
                <div className="flex md:justify-start gap-5 mt-4 md:mt-6">
                  <div className="flex-1 md:flex-initial">
                    <Button
                      className="w-full"
                      variant="primary"
                      contrast="outline"
                      size="md"
                    >
                      More Details
                    </Button>
                  </div>
                  <button className="bg-secondary-500 size-10 md:size-12 rounded flex items-center justify-center text-white hover:opacity-90 cursor-pointer">
                    <svg
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15 16"
                    >
                      <path
                        fill="currentColor"
                        d="M3 13h.86v-.9h.39c.62 0 1.14-.45 1.14-1.06s-.5-1.05-1.14-1.05H3v3zm.86-1.59v-.72h.3c.2 0 .37.13.37.35s-.16.36-.37.36h-.3zM6.19 13h1.19c1 0 1.62-.59 1.62-1.52C9 10.61 8.38 10 7.38 10H6.19zm.86-.71V10.7h.29c.33 0 .78.16.78.78 0 .65-.45.81-.78.81zM10 13h.86v-1.07h1.06v-.69h-1.06v-.54h1.21v-.69h-2.06v3z"
                      />
                      <path
                        fill="currentColor"
                        d="M12.5 16h-10c-.83 0-1.5-.67-1.5-1.5v-13C1 .67 1.67 0 2.5 0h7.09c.4 0 .78.16 1.06.44l2.91 2.91c.28.28.44.66.44 1.06V14.5c0 .83-.67 1.5-1.5 1.5M2.5 1c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h10c.28 0 .5-.22.5-.5V4.41a.47.47 0 00-.15-.35L9.94 1.15A.5.5 0 009.59 1z"
                      />
                      <path
                        fill="currentColor"
                        d="M13.38 5h-2.91C9.66 5 9 4.34 9 3.53V.62c0-.28.22-.5.5-.5s.5.22.5.5v2.91c0 .26.21.47.47.47h2.91c.28 0 .5.22.5.5s-.22.5-.5.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" data-padding="md">
        <div className="container">
          <Heading
            className="text-center text-secondary-500"
            as="h3"
            size="3xl"
          >
            {data.subtitle}
          </Heading>
        </div>
        <div className="mt-10 md:mt-14 lg:mt-20 overflow-hidden">
          <div className="w-full shrink-0 h-72 flex gap-1">
            <div className="shrink-0 h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative">
              <Image
                src="/assets/images/business/technology/area-of-scope/catalogue/bell.webp"
                fill
                sizes="30vw"
                alt="catalogue"
                className="object-cover size-full"
              />
            </div>
            <div className="shrink-0 h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative">
              <Image
                src="/assets/images/business/technology/area-of-scope/catalogue/watch.webp"
                fill
                sizes="30vw"
                alt="catalogue"
                className="object-cover size-full"
              />
            </div>
            <div className="shrink-0 h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative">
              <Image
                src="/assets/images/business/technology/area-of-scope/catalogue/red.webp"
                fill
                sizes="30vw"
                alt="catalogue"
                className="object-cover size-full"
              />
            </div>
            <div className="shrink-0 h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 relative">
              <Image
                src="/assets/images/business/technology/area-of-scope/catalogue/pink.webp"
                fill
                sizes="30vw"
                alt="catalogue"
                className="object-cover size-full"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <ul className="flex gap-1 [&>*:nth-child(2)]:bg-secondary-500">
              {[...Array(6)].map((_, i) => (
                <li key={i} className="size-2.5 rounded-full bg-gray-700"></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
