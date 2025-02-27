import Underline from "@/components/decorate-line";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Professionals({
  data,
}: {
  data: {
    title: string;
    subtitle: string;
    headline: string;
    description: string;
  };
}) {
  return (
    <section className="section" data-padding="md">
      <div className="container">
        <div className="text-center space-y-6">
          <Heading className="text-primary-500" size="2xl">
            {data.title}
          </Heading>
          <Underline align="center" className="!mt-2" />
          <Heading className="text-secondary-400" size="3xl">
            {data.subtitle}
          </Heading>
          <p className="md:px-52">{data.description}</p>
          <div className="mt-10 relative w-full aspect-video">
            <Image
              src="/assets/images/business/launderettes/professional/professional-bg.png"
              fill
              alt="image"
              className="contrast-less"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Heading as="h3" className="text-white" size="3xl">
                <span className="block"> {data.headline.split("\t")[0]}</span>
                <span className="block"> {data.headline.split("\t")[1]}</span>
              </Heading>
            </div>
          </div>
          {/* TODO: translation to be done */}
          <Button className="mt-6">Contact us to clarify the details!</Button>
        </div>
      </div>
    </section>
  );
}
