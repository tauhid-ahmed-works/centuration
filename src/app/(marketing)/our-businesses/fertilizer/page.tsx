import { Banner, BannerType } from "@/components/banner";
import { useIntl } from "@/lib/get-intl";

export default function LogisticsPage() {
  const commoditiesData = useIntl("business_fertilizer");
  const bannerIntl = commoditiesData("banner");
  const bannerData: BannerType[] = [
    {
      mediaSrc:
        "/assets/images/business/fertilizer/banner/banner-image-01.webp",
      mediaType: "image",
      title: bannerIntl[1].title,
      content: bannerIntl[1].content,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/fertilizer/banner/banner-image-02.webp",
      mediaType: "image",
      title: bannerIntl[2].title,
      content: bannerIntl[2].content,
      learn_more: "/",
    },
    {
      mediaSrc:
        "/assets/images/business/fertilizer/banner/banner-image-03.webp",
      mediaType: "image",
      title: bannerIntl[3].title,
      content: bannerIntl[3].content,
      learn_more: "/",
    },
  ];
  return (
    <>
      <Banner data={bannerData} />
    </>
  );
}
