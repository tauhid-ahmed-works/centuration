import { notFound } from "next/navigation";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title:
      "Business - " +
      removeDash(params.slug)
        .split(" ")
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(" "),
  };
}
const routes = [
  "technologies",
  "sustainability",
  "commodities",
  "petrochemicals",
  "real-estate",
  "logistics",
  "fertilizer",
  "ice-ivoire",
  "medical-services",
  "self-service-launderettes",
];

import Wrapper from "@/components/layout/wrapper";
import BannerAnimation from "@/components/shared/banner-animation";
import { businessCategories } from "@/data/business-category";
import { removeDash } from "@/libs/utils/removeDash";
import Image from "next/image";

export default function Business({ params }: { params: { slug: string } }) {
  if (!routes.includes(params.slug)) notFound();
  const data = businessCategories.find((item) =>
    item.path.includes(params.slug)
  );
  if (!data?.available) return <ComingSoon />;
  return (
    <>
      <div className="h-screen">
        {data?.bannerImage ? (
          <Image
            src={data.bannerImage as string}
            alt={data.businessName}
            width={1920}
            height={1080}
            className="object-cover w-full h-full block"
          />
        ) : (
          <video
            className="block absolute inset-0 object-cover w-full h-full"
            muted
            loop
            autoPlay
          >
            <source src="/assets/video/tec-video.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 w-full h-full bg-black/20"></div>
        <div className="absolute flex items-center inset-0 w-full h-full">
          <Wrapper className="text-center text-white font-semibold animate-revealin">
            <h1 className="font-title text-5.5xl leading-none mb-4">
              {data?.businessName}
            </h1>
            <p>{data?.resume}</p>
          </Wrapper>
        </div>
        <BannerAnimation />
      </div>
      <Wrapper className="space-y-4 max-w-3xl pt-20 mb-10">
        <h2 className="text-4.5xl font-semibold font-title text-gray-850 leading-none mb-6">
          {data?.descriptions.long.title}
        </h2>
        <div className="max-w-[80ch] space-y-2 text-sm font-semibold">
          {data.descriptions.long.paragraphs.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Wrapper>
    </>
  );
}

function ComingSoon() {
  return (
    <div className="h-screen bg-gray-900 text-white lg:text-6xl md:text-4xl text-2xl flex items-center justify-center font-semibold">
      Coming Soon
    </div>
  );
}
