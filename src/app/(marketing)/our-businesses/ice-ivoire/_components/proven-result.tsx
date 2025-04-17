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
                <div className="w-fit mx-auto">
                  <Underline variant="primary" />
                </div>
              </p>
              <Button>{data.cta}</Button>
            </div>
            <div className="border-4 border-rose-500 md:col-start-1 md:col-span-2 md:row-start-1">
              <div className="size-44 border"></div>
            </div>
            <div className="border-4 border-rose-500 md:col-start-1 md:row-start-2">
              <div className="size-44 border">1</div>
            </div>
            <div className="border-4 border-rose-500 md:col-start-2 md:row-start-2">
              <div className="size-44 border">2</div>
            </div>
            <div className="border-4 border-rose-500 md:col-start-3 md:row-start-2">
              <div className="size-44 border">3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
