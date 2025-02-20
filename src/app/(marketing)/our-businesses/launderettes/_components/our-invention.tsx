import Underline from "@/components/decorate-line";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

export default function OurInvention({
  data,
}: {
  data: {
    title: string;
    subtitle: string;
    description: string;
    text: string;
  };
}) {
  return (
    <section className="section bg-gray-300" data-padding="lg">
      <div className="container">
        <div className="space-y-20">
          <div className="text-center">
            <Heading
              as="h2"
              className="text-primary-500"
              size="4xl"
              underline={
                <Underline align="center" size="lg" variant="primary" />
              }
            >
              {data.title}
            </Heading>
          </div>

          <div className="w-full aspect-video relative overflow-hidden group">
            <iframe
              className="absolute pointer-events-none top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Q9s4HiaRDaA?autoplay=1&mute=1&loop=1&playlist=Q9s4HiaRDaA&controls=1"
              title="YouTube video player"
              allow="encrypted-media; fullscreen"
              data-lenis-prevent={true}
            ></iframe>
          </div>

          <div className="text-center">
            <Heading
              size="3xl"
              className="text-secondary-400"
              underline={<Underline align="center" variant="primary" />}
            >
              {data.subtitle}
            </Heading>

            <p className="text-secondary-300 mt-6">{data.description}</p>
            <Button className="mt-10">{data.text}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
