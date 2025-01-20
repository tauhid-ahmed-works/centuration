import Image from "next/image";
import SectionTitle from "../../../../components/section-title";
import { ArrowLong } from "../../../../components/icons";
import AnimatedCard from "../../../../components/animate-card";

import { businessCategories } from "@/data/business-category";
import Link from "next/link";

export default function BusinessCards() {
  return (
    <div className="min-h-screen py-16 grid place-items-center">
      <div className="container px-10 md:px-20">
        <div className="mb-8">
          <div className="max-w-[60ch] mx-auto">
            <SectionTitle className="mb-10">Our Businesses</SectionTitle>
            <p>
              As a diversified conglomerate, our interest in multiple sectors
              indicates our determination to cater to our vision of providing
              basic needs.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {businessCategories.slice(0, 6).map((card, index) => (
            <AnimatedCard key={card.id} index={index}>
              <div className="hover:shadow hover:-translate-y-1 transition-all duration-300 rounded overflow-hidden">
                <Link href={card.path}>
                  <div className="h-44">
                    <Image
                      src={card.thumbnailImage}
                      width={400}
                      height={250}
                      alt="image"
                      className="size-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold font-title text-sm text-center py-4 text-gray-850">
                    {card.businessName}
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
