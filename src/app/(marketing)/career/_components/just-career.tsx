import Image from "next/image";
import { Icons } from "@/components/icons";
import { Heading } from "@/components/heading";
import React from "react";

const icons = [<Icons.FlexibleWork />, <Icons.Tour />, <Icons.Holiday />];

export default function JustCareer({
  data,
  children,
}: {
  children: React.ReactNode;
  data: { title: string; description: string; additional: string[] };
}) {
  return (
    <section className="section" data-padding="md">
      <div className="container">
        <div className="space-y-8">
          <div className="flex md:items-center flex-col md:flex-row gap-6">
            <div className="flex-1 shrink-0 relative aspect-video md:aspect-square rounded overflow-hidden">
              <Image
                src="/assets/images/career/career-sec.webp"
                alt="image"
                fill
                sizes="40vw"
                className="rounded aspect-square w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 shrink-0 space-y-10">
              <div className="space-y-4">
                <Heading className="text-secondary-400" size="3xl" as="h2">
                  {data.title}
                </Heading>
                <p>{data.description}</p>
              </div>
              <div className="flex gap-6">
                {data.additional.map((benefit, index) => (
                  <div
                    className="flex flex-col items-center gap-4"
                    key={benefit}
                  >
                    {React.cloneElement(icons[index], {
                      className: "size-10 lg:size-14",
                    })}
                    <span className="text-sm lg:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
