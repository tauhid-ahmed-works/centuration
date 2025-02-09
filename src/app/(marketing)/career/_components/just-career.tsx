import Image from "next/image";
import { Icons } from "@/components/icons";
import { Heading } from "@/components/heading";
import React from "react";

const icons = [<Icons.FlexibleWork />, <Icons.Tour />, <Icons.Holiday />];

export default function JustCareer({
  data,
}: {
  data: { title: string; description: string; additional: string[] };
}) {
  return (
    <section className="section" data-padding="sm">
      <div className="container">
        <div className="md:flex md:gap-10 items-center space-y-4">
          <div className="md:flex-1 w-full relative h-72">
            <Image
              src="/assets/images/career/career-sec.webp"
              alt="image"
              fill
              className="rounded aspect-square w-full h-full object-cover"
            />
          </div>
          <div className="md:flex-1 space-y-10">
            <Heading size="2xl" as="h2">
              {data.title}
            </Heading>
            <p>{data.description}</p>

            <div className="sm:flex-row flex gap-10 justify-center items-center">
              {data.additional.map((benefit, index) => (
                <div className="flex flex-col items-center gap-4" key={benefit}>
                  {React.cloneElement(icons[index], {
                    className: "size-14",
                  })}
                  <span className="text-2xl">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
