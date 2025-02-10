import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

type CommunicationCallType = {
  title: string;
  subtitle: string;
  key_features: {
    title: string;
    description: string;
  }[];
};

type CommunicationZoneType = {
  title: string;
  subtitle: string;
  key_features: string[];
};

type CommunicationDataType = {
  communicationCall: CommunicationCallType;
  communicationZone: CommunicationZoneType;
};

type CommunicationProps = {
  data: CommunicationDataType;
};

export function Communication({ data }: CommunicationProps) {
  const { communicationCall, communicationZone } = data;
  return (
    <>
      <section className="section" data-padding="md">
        <div className="container">
          <div className="text-center space-y-6 max-w-[75ch] mx-auto">
            <Heading className="text-primary-500" size="3xl">
              {communicationCall.title}
            </Heading>
            <p className="text-secondary-300">{communicationCall.subtitle}</p>
          </div>
          <div className="pt-10 md:pt-14 lg:pt-20">
            <div className="py-10 px-14 bg-primary-50 space-y-6 rounded-2xl text-secondary-300 border border-primary-500">
              <Heading size="2xl">
                {communicationCall.key_features[0].title}
              </Heading>
              <p>{communicationCall.key_features[0].description}</p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button contrast="outline" className="w-60">
              Call Us For More
            </Button>
          </div>
        </div>
      </section>
      <section className="section" data-padding="sm">
        <div className="container">
          <div className="text-center space-y-6 max-w-[75ch] mx-auto">
            <Heading className="text-secondary-400" size="3xl">
              {communicationZone.title}
            </Heading>
            <p className="text-secondary-300">{communicationZone.subtitle}</p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap mt-10 md:mt-14 lg:mt-20 -mx-4 [&>*:last-child]:basis-full">
            {communicationZone.key_features.map((feature, index: number) => (
              <div className="p-4 basis-1/2" key={index}>
                <div className="py-10 px-14 bg-primary-50 space-y-6 rounded-2xl text-secondary-300 border border-primary-500">
                  <Heading size="2xl" as="h3" className="text-secondary-400">
                    0{index + 1}.
                  </Heading>
                  <p className="text-secondary-300">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
