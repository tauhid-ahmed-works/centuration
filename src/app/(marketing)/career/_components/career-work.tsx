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
    <section className="section" data-size="md">
      <div className="container">
        <div className="md:flex justify-around items-center gap-10 text-center">
          <div className="space-y-4 flex-1 shrink-0">
            <Heading as="h2" size="3xl">
              {data.title}
            </Heading>

            <Heading as="h3" size="2xl">
              {data.subtitle}
            </Heading>

            <p>{data.description}</p>
            <Button variant="primary" size="sm">
              About More
            </Button>
          </div>

          <div className="h-[600px] w-full relative mt-8 md:mt-0 flex-1 shrink-0">
            <Image
              fill
              className="size-full object-cover object-top"
              src="/assets/images/career/model.webp"
              alt="african-businesswoman-smiling"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
