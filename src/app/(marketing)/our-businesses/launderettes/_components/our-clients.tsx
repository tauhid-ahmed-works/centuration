import Image from "next/image";
import { Heading } from "@/components/heading";

type OurClientsProps = {
  data: {
    title: string;
    content: string;
  };
};

const clientLogos = [
  "/assets/images/business/technology/icons/clients/client-1.png",
  "/assets/images/business/technology/icons/clients/client-2.png",
  "/assets/images/business/technology/icons/clients/client-3.png",
  "/assets/images/business/technology/icons/clients/client-4.png",
  "/assets/images/business/technology/icons/clients/client-5.png",
  "/assets/images/business/technology/icons/clients/client-6.png",
  "/assets/images/business/technology/icons/clients/client-7.png",
  "/assets/images/business/technology/icons/clients/client-8.png",
  "/assets/images/business/technology/icons/clients/client-9.png",
  "/assets/images/business/technology/icons/clients/client-10.png",
  "/assets/images/business/technology/icons/clients/client-11.png",
  "/assets/images/business/technology/icons/clients/client-12.png",
  "/assets/images/business/technology/icons/clients/client-13.png",
  "/assets/images/business/technology/icons/clients/client-14.png",
  "/assets/images/business/technology/icons/clients/client-15.png",
];

export function OurClients({ data }: OurClientsProps) {
  return (
    <section className="section" data-padding="md">
      <div className="text-center">
        <Heading className="text-primary-500" size="5xl">
          {data.title}
        </Heading>
        <p>{data.content}</p>
      </div>
      <div className="container">
        <div className="relative overflow-hidden flex flex-nowrap gap-6 group">
          <div className="sponsor-animation shrink-0 flex items-center gap-6">
            {clientLogos.map((logo) => (
              <div className="w-48 shrink-0 relative" key={logo}>
                <Image src={logo} width={192} height={100} alt="logo" />
              </div>
            ))}
          </div>
          <div className="sponsor-animation shrink-0 flex items-center gap-6">
            {clientLogos.map((logo) => (
              <div className="w-48 shrink-0 relative" key={logo}>
                <Image src={logo} width={192} height={100} alt="logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
