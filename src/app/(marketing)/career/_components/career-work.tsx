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
        <div className="flex w-full flex-col sm:flex-row justify-center items-center gap-6">
          <div className="order-2 space-y-4 flex-1 shrink-0">
            <div className="space-y-1">
              <Heading className="text-secondary-400" as="h2" size="3xl">
                {data.title}
              </Heading>
              <Heading className="text-secondary-400" as="h3" size="2xl">
                {data.subtitle}
              </Heading>
            </div>
            <p>{data.description}</p>
            <Button variant="primary" size="sm">
              About More
            </Button>
          </div>
          <div className="flex-1 w-full min-h-54 h-full max-h-96 order-1 md:order-2 relative shrink-0 aspect-square">
            <Image
              fill
              sizes="40vw"
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
