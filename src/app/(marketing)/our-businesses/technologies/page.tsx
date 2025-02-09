import { Banner, BannerType } from "@/components/banner";
import { useIntl } from "@/lib/get-intl";

export default function TechnologyPage() {
  const commoditiesData = useIntl("business_technology");
  const bannerIntl = commoditiesData("banner");
  const bannerData: BannerType[] = [
    {
      mediaSrc: "/assets/images/business/technology/banner/video1.mp4",
      mediaType: "video",
      title: bannerIntl[1].title,
      content: bannerIntl[1].content,
      duration: 50,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/technology/banner/banner-image-01.webp",
      mediaType: "image",
      title: bannerIntl[2].title,
      content: bannerIntl[2].content,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/technology/banner/banner-image-02.webp",
      mediaType: "image",
      title: bannerIntl[3].title,
      content: bannerIntl[3].content,
      learn_more: "/",
    },
  ];
  return (
    <>
      {" "}
      <Banner data={bannerData} />
    </>
  );
}
