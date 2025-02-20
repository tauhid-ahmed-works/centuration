"use client";
import { EmblaCarousel } from "@/components/swiper";
import { Heading } from "@/components/heading";
import Image from "next/image";

export default function HowItWorks({
  data,
}: {
  data: {
    title: string;
    features: { title: string; content: string; id: string }[];
  };
}) {
  return (
    <section className="section bg-secondary-500/60" data-padding="md">
      <div className="text-center">
        <Heading className="text-white" as="h2" size="4xl">
          {data.title}
        </Heading>
      </div>
      <div className="container mt-14">
        <div className="flex gap-4 relative">
          <EmblaCarousel
            items={data.features}
            renderItem={(item) => (
              <div className="border border-white bg-white/10 backdrop-blur p-5 space-y-4">
                <Image
                  src="/assets/images/business/launderettes/banner/how-it-works/1.png"
                  width="300"
                  height="300"
                  alt="image"
                  className="w-full"
                />
                <Heading as="h3" size="3xl">
                  <span className="text-primary-500">
                    {item.title.split(" ")[0]}
                  </span>{" "}
                  <span className="text-white">{item.title.split(" ")[1]}</span>
                </Heading>
                <p className="text-sm text-white">{item.content}</p>
              </div>
            )}
            autoplay={false} // Enable autoplay
            autoplayInterval={3000} // Set autoplay interval to 3 seconds
            loop={true} // Enable infinite loop
            arrows={true} // Show navigation arrows
            className="my-custom-class" // Add custom class for
            slidesToShow={3}
          />
        </div>
      </div>
    </section>
  );
}
