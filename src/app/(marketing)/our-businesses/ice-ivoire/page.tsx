import { Banner, BannerType } from "@/components/banner";
import { useIntl } from "@/lib/get-intl";
import { WhyInvest } from "./_components/why-invest";
import { Partners } from "./_components/partners";
import { TrustedBrands } from "./_components/trusted-brands";
import { Spotlight } from "./_components/spotlight";
import { ProvenResult } from "./_components/proven-result";
import HighlightMachine from "./_components/highlight-machine";

export default function IceIvoirePage() {
  const iceVendingData = useIntl("business_iceVending");
  const text = iceVendingData("text");
  const bannerIntl = iceVendingData("banner");
  const bannerData: BannerType[] = [
    {
      mediaSrc: "/assets/images/business/ice-ivoire/banner/banner-image-1.webp",
      mediaType: "image",
      title: bannerIntl[1].title,
      content: bannerIntl[1].content,
      learn_more: "/",
    },
    {
      mediaSrc: "/assets/images/business/ice-ivoire/banner/banner-image-2.webp",
      mediaType: "image",
      title: bannerIntl[2].title,
      content: bannerIntl[2].content,
      learn_more: "/",
    },
    {
      mediaSrc: "/assets/images/business/ice-ivoire/banner/banner-image-3.webp",
      mediaType: "image",
      title: bannerIntl[3].title,
      content: bannerIntl[3].content,
      learn_more: "/",
    },
  ];
  const whyInvest = iceVendingData("investment_benefits");
  const partners = iceVendingData("partners");
  const productSpotlight = iceVendingData("product_spotlight");
  const provenResult = iceVendingData("proven_results");

  return (
    <>
      <Banner data={bannerData} />
      <WhyInvest
        data={whyInvest}
        text={{
          understand_ice_business: text.understand_ice_business,
          calculate_your_profit: text.calculate_your_profit,
        }}
      />

      <ProvenResult data={provenResult} />
      <HighlightMachine />

      <TrustedBrands data={{ title: text.trusted_customers_worldwide }} />
      <Spotlight data={productSpotlight} />
      <Partners data={partners} />
    </>
  );
}
