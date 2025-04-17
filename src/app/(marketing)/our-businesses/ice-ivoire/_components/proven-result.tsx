import Underline from "@/components/decorate-line";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

export function ProvenResult({
  data,
}: {
  data: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
}) {
  return (
    <section className="section bg-secondary-50" data-padding="lg">
      <div className="space-y-10">
        <div className="container" data-size="md">
          <Heading
            as="h2"
            size="base"
            className="text-secondary-300 text-center"
          >
            {data.description}
          </Heading>
        </div>
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:row-start-1 md:col-start-3">
            <div className="md:col-start-3 md:row-start-1 bg-white p-14 text-center space-y-6">
              <Heading as="h3" size="3xl" className="text-primary-500">
                {data.title}
              </Heading>
              <p className="text-secondary-300">
                {data.subtitle}
                <span className="w-fit mx-auto">
                  <Underline variant="primary" />
                </span>
              </p>
              <Button>{data.cta}</Button>
            </div>
            <div className="md:col-start-1 md:col-span-2 md:row-start-1 min-h-72">
              <iframe
                src="https://www.youtube.com/embed/V48AmKrtuO8?si=Ahln4JaMziVG_f2f&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="size-full"
              ></iframe>
            </div>
            <div className="md:col-start-1 md:row-start-2 min-h-72">
              <iframe
                src="https://www.youtube.com/embed/vwtdzyfBTlM?si=k0FJq2s0xEqdhZc7&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="size-full"
              ></iframe>
            </div>
            <div className="md:col-start-2 md:row-start-2 min-h-72">
              <iframe
                src="https://www.youtube.com/embed/vwtdzyfBTlM?si=k0FJq2s0xEqdhZc7&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="size-full"
              ></iframe>{" "}
            </div>
            <div className="md:col-start-3 md:row-start-2 min-h-72">
              <iframe
                src="https://www.youtube.com/embed/vwtdzyfBTlM?si=k0FJq2s0xEqdhZc7&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="size-full"
              ></iframe>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
