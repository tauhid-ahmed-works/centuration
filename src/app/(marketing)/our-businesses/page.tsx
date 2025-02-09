import { BusinessCard } from "@/components/business-card";
import { Heading } from "@/components/heading";
import { Banner, BannerType } from "@/components/banner";
import { useIntl } from "@/lib/get-intl";

export default function Businesses() {
  const businessData = useIntl("businesses");
  const bannerIntl = businessData("banner");
  const businessIntl = businessData("business");
  const bannerData: BannerType[] = [
    {
      mediaSrc:
        "/assets/images/business/commodities/banner/commodities-banner-01.webp",
      mediaType: "image",
      title: bannerIntl[1].title,
      content: bannerIntl[1].content,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/launderettes/banner/launderette-banner-2.webp",
      mediaType: "image",
      title: bannerIntl[2].title,
      content: bannerIntl[2].content,
      learn_more: "/",
    },
    {
      mediaSrc: "/assets/images/business/medical-service/banner/image-01.png",
      mediaType: "image",
      title: bannerIntl[3].title,
      content: bannerIntl[3].content,
      learn_more: "/",
    },
  ];
  return (
    <>
      <Banner data={bannerData} />
      <section className="section" data-padding="sm">
        <div className="px-4 text-center max-w-4xl mx-auto py-10 md:py-20">
          <Heading as="h2" size="4xl" className="mb-4">
            {businessIntl.title}
          </Heading>
          <p>{businessIntl.description}</p>
        </div>
        <div className="container">
          <BusinessCard />
        </div>
      </section>
    </>
  );
}
