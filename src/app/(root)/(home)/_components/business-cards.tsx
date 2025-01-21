import Image from "next/image";
import { ArrowLong } from "@/components/icons";
import AnimatedCard from "@/components/animate-card";

import { businessCategory } from "@/data/business/our-businesses";
import Link from "next/link";
import { Heading } from "@/components/heading";

export default function BusinessCards() {
  return (
    <div className="min-h-screen py-16 grid place-items-center">
      <div className="container px-10 md:px-20">
        <div className="mb-8">
          <div className="max-w-[60ch] mx-auto text-center">
            <Heading as="h2" className="mb-10">
              Our Businesses
            </Heading>
            <p>
              As a diversified conglomerate, our interest in multiple sectors
              indicates our determination to cater to our vision of providing
              basic needs.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {businessCategory.category.slice(0, 6).map((card, index) => (
            <AnimatedCard key={card.id} index={index}>
              <div className="hover:shadow hover:-translate-y-1 transition-all duration-300 rounded overflow-hidden">
                <Link href={card.path}>
                  <div className="h-44">
                    <Image
                      src={card.imageLink}
                      width={400}
                      height={250}
                      alt="image"
                      className="size-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold font-title text-sm text-center py-4 text-gray-850">
                    {card.title}
                  </h3>
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
        <div className="text-center pt-10">
          <div className="inline-block overflow-hidden rounded shadow-xl group">
            <Link
              className="bg-white text-gray-850 inline-flex justify-between"
              href="/businesses"
            >
              <span className="inline-flex px-4 items-center text-sm font-semibold">
                See All
              </span>
              <span className="inline-flex items-center justify-center shrink-0 bg-gray-850 text-white size-14">
                <ArrowLong className="size-5 group-hover:animate-bouncex" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
