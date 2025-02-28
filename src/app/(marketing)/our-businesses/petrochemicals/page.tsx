import { BannerType, Banner } from "@/components/banner";
import { useIntl } from "@/lib/get-intl";
import PageInformation from "@/components/page-information";

const bannerMedia = [
  {
    mediaSrc:
      "/assets/images/business/petrochemicals/banner/banner-image-01.webp",
    mediaType: "image",
    learn_more: "/",
  },
  {
    mediaSrc:
      "/assets/images/business/petrochemicals/banner/banner-image-01.webp",
    mediaType: "image",
    learn_more: "/",
  },
  {
    mediaSrc:
      "/assets/images/business/petrochemicals/banner/banner-image-01.webp",
    mediaType: "image",
    learn_more: "/",
  },
];

export default function PetrochemicalsPage() {
  const petrochemicalsData = useIntl("business_petrochemicals");
  const bannerIntl = petrochemicalsData("banner");
  const bannerData: BannerType[] = bannerIntl.map(
    (item: Record<string, string>, index: number) => ({
      ...item,
      ...bannerMedia[index],
    })
  );
  const information = petrochemicalsData("information");
  return (
    <>
      <Banner data={bannerData} />
      <PageInformation
        title={information.title}
        content={information.content}
      />
    </>
  );
}
