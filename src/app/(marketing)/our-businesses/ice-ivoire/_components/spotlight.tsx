import Underline from "@/components/decorate-line";
import { Heading } from "@/components/heading";
import Image from "next/image";

type Spotlight = {
  title: string;
  description: string;
  key_features: {
    title: string;
    description: string;
  }[];
};

export function Spotlight({ data }: { data: Spotlight }) {
  return (
    <section className="section bg-secondary-500" data-padding="lg">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 items-center flex flex-col gap-4">
            <Image
              src="/assets/images/business/ice-ivoire/ice-machine/ice-box.png"
              width={500}
              height={600}
              alt="ice machine"
            />
            <Image
              src="/assets/images/business/ice-ivoire/ice-machine/ice-in-beach.png"
              width={500}
              height={600}
              alt="ice machine"
              className="hidden md:block"
            />
          </div>
          <div className="flex-1">
            <div className="space-y-12 divide-y divide-secondary-300 [&>*]:pb-12">
              <div className="space-y-6">
                <Heading
                  className="text-primary-500"
                  size="3xl"
                  underline={<Underline variant="primary" />}
                >
                  {data.title}
                </Heading>
                <p className="text-white">{data.description}</p>
              </div>

              {data.key_features.map((item, index) => (
                <div key={index} className="space-y-6x">
                  <Heading as="h3" size="2xl" className="text-primary-500">
                    <span className="text-4.5xl font-semibold text-white mr-6 align-middle">
                      {(index + 1).toString().padStart(2, "0")}.
                    </span>{" "}
                    {item.title}
                  </Heading>
                  <p className="text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
