import { Heading } from "@/components/heading";
import Underline from "@/components/decorate-line";
import { Banner, BannerType } from "@/components/banner";
import HowItWorks from "./_components/how-it-works";
import { useIntl } from "@/lib/get-intl";
import { OurClients } from "./_components/our-clients";
import CustomerBenefits from "./_components/customer-benefits";
import OurServices from "./_components/laundry-services";
import OurInvention from "./_components/our-invention";
import OrderingGuide from "./_components/ordering-guide";
import MobileApps from "./_components/mobile-apps";
import Professionals from "./_components/professionals";

const bannerMedia = [
  {
    mediaSrc:
      "/assets/images/business/launderettes/banner/launderette-banner-1.webp",
    mediaType: "image",
    learn_more: "/",
  },
  {
    mediaSrc:
      "/assets/images/business/launderettes/banner/launderette-banner-2.webp",
    mediaType: "image",
    learn_more: "/",
  },
  {
    mediaSrc:
      "/assets/images/business/launderettes/banner/launderette-banner-3.webp",
    mediaType: "image",
    learn_more: "/",
  },
];

export default function LaunderettesPage() {
  const technologyData = useIntl("business_launderettes");
  const text = technologyData("text");
  const bannerIntl = technologyData("banner");
  const howItWorksData = technologyData("walkthrough");
  const benefitsData = technologyData("benefits");
  const partnersData = technologyData("partners");
  const ourServiceData = technologyData("laundry_service");
  const ourInnovationData = technologyData("our_innovation");
  const orderingGuideData = technologyData("easy_ordering");
  const professionalData = technologyData("professional");
  const bannerData: BannerType[] = bannerIntl.map(
    (item: Record<string, string>, index: number) => ({
      ...item,
      ...bannerMedia[index],
    })
  );

  return (
    <>
      <Banner data={bannerData} />
      {/* TODO: translation to be done */}
      <section className="section bg-secondary-500 text-center text-white">
        <Heading size="4xl" as="h2">
          <span>DROP YOUR</span>&nbsp;
          <span className="text-primary-500">DROP YOUR</span>
        </Heading>
        <Underline className="mt-4" align="center" variant="secondary" />
        <p className="mt-10">
          We wash, dry, go back and deliver all over Abidjan.
        </p>
      </section>
      <CustomerBenefits
        data={{ ...benefitsData, text: text.chap_chap_point }}
      />
      <OurServices data={ourServiceData} />
      <OurInvention
        data={{ ...ourInnovationData, text: text.chap_chap_point }}
      />
      <HowItWorks data={howItWorksData} />
      <OrderingGuide data={orderingGuideData} />
      <MobileApps />
      <Professionals data={professionalData} />
      <OurClients data={partnersData} />
    </>
  );
}
