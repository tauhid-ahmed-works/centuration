import { Heading } from "@/components/heading";
import Underline from "@/components/decorate-line";

export default function LaundryServices({
  data,
}: {
  data: {
    title: string;
    description: string;
    machine_capacities: { type: string; capacity: string }[];
  };
}) {
  return (
    <section className="section bg-gray-300" data-padding="md">
      <div className="container">
        <div className="text-center space-y-6 text-secondary-300">
          <Heading
            as="h2"
            size="4xl"
            className="text-primary-500"
            underline={<Underline align="center" variant="primary" />}
          >
            {data.title}
          </Heading>

          <p className="font-medium">{data.description}</p>
        </div>
        <div className="flex flex-row gap-4 text-center text-primary-500 mt-10 lg:mt-20">
          {data.machine_capacities.map((machine) => (
            <div
              key={machine.capacity}
              className="font-semibold aspect-square bg-white flex-1 p-4 md:p-8 lg:p-12 flex justify-center flex-col leading-none"
            >
              <span className="text-3xl md:text-4xl lg:text-6xl">
                {machine.capacity.split("\t")[0]}
              </span>
              <div className="h-0.5 md:h-1 bg-primary-500"></div>
              <span className="text-xl">{machine.capacity.split("\t")[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
