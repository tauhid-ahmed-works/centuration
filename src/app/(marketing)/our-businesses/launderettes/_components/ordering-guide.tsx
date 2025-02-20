import AnimatedCard from "@/components/animate-card";
import Underline from "@/components/decorate-line";
import { Heading } from "@/components/heading";
import Image from "next/image";

export default function OrderingGuide({
  data,
}: {
  data: { title: string; features: string[] };
}) {
  return (
    <section className="section" data-padding="md">
      <div className="text-center">
        <Heading as="h2" size="4xl" className="text-primary-500">
          {data.title}
        </Heading>
        <Underline className="mt-10" align="center" />
      </div>
      <div className="mt-10 lg:mt-20">
        <div className="container">
          <div className="flex gap-4 md:gap-10 lg:gap-16 xl:gap24">
            {data.features.map((feature, index) => (
              <AnimatedCard
                key={index}
                index={0}
                className="space-y-6 md:space-y-8 text-center flex-1 px-4"
              >
                <Image
                  width={150}
                  height={150}
                  src="/assets/images/business/launderettes/order/order.png"
                  alt="order"
                  className="mx-auto"
                />
                <p>
                  <strong>{feature.split("\t")[0]}</strong>{" "}
                  {feature.split("\t")[1]}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
