import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heading } from "@/components/heading";

export default function CareerWork({
  data,
}: {
  data: { title: string; subtitle: string; description: string };
}) {
  return (
    <section className="section" data-size="lg">
      <div className="container">
        <div className="flex flex-col sm:flex-row h-full gap-6">
          <div className="space-y-4 order-2 md:order-1 flex-1 shrink-0 flex flex-col justify-center">
            <div className="space-y-1">
              <Heading className="text-secondary-400" as="h2" size="3xl">
                {data.title}
              </Heading>
              <Heading className="text-secondary-400" as="h3" size="2xl">
                {data.subtitle}
              </Heading>
            </div>
            <p>{data.description}</p>
            <div className="">
              <Button variant="primary" size="sm">
                About More
              </Button>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2 min-h-72 md:h-[550px] self-stretch relative rounded overflow-hidden">
            <Image
              fill
              sizes="40vw"
              className="size-full object-cover"
              src="/assets/images/career/model.webp"
              alt="african-businesswoman-smiling"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
