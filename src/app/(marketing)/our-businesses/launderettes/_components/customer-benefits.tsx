import Image from "next/image";
import { AnimateSlideIn } from "@/components/animate-card";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

export default function CustomerBenefits({
  data,
}: {
  data: { title: string; description: string; text: string };
}) {
  return (
    <section className="section" data-padding="md">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10">
          <AnimateSlideIn className="relative min-h-96 flex-1">
            <Image
              src="/assets/images/business/launderettes/banner/store-point.jpg"
              fill
              alt="store point"
              className="object-cover"
            />
          </AnimateSlideIn>
          <AnimateSlideIn
            from="right"
            className="space-y-10 flex-1 text-center lg:text-left"
          >
            <Heading as="h2" size="5xl" className="text-primary-500">
              {data.title}
            </Heading>
            <p>{data.description}</p>
            <Button>{data.text}</Button>
          </AnimateSlideIn>
        </div>
      </div>
    </section>
  );
}
