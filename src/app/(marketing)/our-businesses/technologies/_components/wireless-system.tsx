import { AnimateSlideIn } from "@/components/animate-card";
import Underline from "@/components/decorate-line";
import { Heading } from "@/components/heading";
import Image from "next/image";

type WirelessSystemDataType = {
  title: string;
  subtitle: string;
  key_features: { id: string; title: string; content: string }[];
};

type WirelessSystemProps = {
  data: WirelessSystemDataType;
};

const featureIcons = {
  energy: "/assets/images/business/technology/icons/flash.svg",
  design: "/assets/images/business/technology/icons/press.svg",
  stability: "/assets/images/business/technology/icons/broadcast.svg",
};

export function WirelessSystem({ data }: WirelessSystemProps) {
  return (
    <section className="section" data-padding="md">
      <div className="container">
        <div className="text-center space-y-2">
          <Heading className="text-primary-500" as="h2" size="4xl">
            {data.title}
          </Heading>
          <Heading
            as="h3"
            size="sm"
            underline={<Underline variant="primary" align="center" />}
            className="text-secondary-300"
          >
            {data.subtitle}
          </Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-14 lg:mt-20">
          {data.key_features.map((feature, i) => (
            <AnimateSlideIn
              key={i}
              index={i}
              className="max-w-lg size-full text-center mx-auto flex flex-col group"
            >
              <div className="size-16 lg:size-24 bg-primary-500 rounded-2xl mx-auto z-10 -mb-8 relative flex justify-center items-center">
                <Image
                  src={featureIcons[feature.id as keyof typeof featureIcons]}
                  width={20}
                  height={20}
                  alt="image"
                  className="size-10"
                />
              </div>
              <div className="bg-gray-300 rounded py-16 flex-1 group-hover:shadow transition-shadow active:shadow">
                <div className="space-y-4 rounded h-full w-52 mx-auto">
                  <Heading
                    className="font-medium text-secondary-400"
                    as="h3"
                    size="base"
                  >
                    {feature.title}
                  </Heading>
                  <p className="text-sm text-secondary-300">
                    {feature.content}
                  </p>
                </div>
              </div>
            </AnimateSlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
