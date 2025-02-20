import Image from "next/image";
import { Heading } from "@/components/heading";
import Underline from "@/components/decorate-line";
import { Button } from "@/components/ui/button";
import { Banner, BannerType } from "@/components/banner";
import AnimatedCard, { AnimateSlideIn } from "@/components/animate-card";
import HowItWorks from "./_components/how-it-works";
import { useIntl } from "@/lib/get-intl";
import { OurClients } from "./_components/our-clients";
import CustomerBenefits from "./_components/customer-benefits";
import OurServices from "./_components/laundry-services";
import OurInvention from "./_components/our-invention";
import OrderingGuide from "./_components/ordering-guide";

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
  const bannerData: BannerType[] = bannerIntl.map(
    (item: Record<string, string>, index: number) => ({
      ...item,
      ...bannerMedia[index],
    })
  );

  return (
    <>
      <Banner data={bannerData} />
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
      {/* Customer Benefits */}
      <CustomerBenefits
        data={{ ...benefitsData, text: text.chap_chap_point }}
      />
      {/* Our Service */}
      <OurServices data={ourServiceData} />
      {/* Our Invention  */}
      <OurInvention
        data={{ ...ourInnovationData, text: text.chap_chap_point }}
      />
      {/* how it works */}
      <HowItWorks data={howItWorksData} />
      {/* ordering guide  */}
      <OrderingGuide data={orderingGuideData} />
      {/*  */}
      <section className="section bg-secondary-500" data-padding="md">
        <div className="container">
          <div className="flex gap-20">
            <div className="flex-1">
              <Image
                width={350}
                height={700}
                src="/assets/images/business/launderettes/our-app/phone.png"
                alt="order"
                className="mx-auto"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center text-white">
              <Heading className="text-primary-500" as="h2" size="base">
                Try on mobile
              </Heading>
              <Underline className="mt-2" size="md" />
              <Heading className="mt-6" as="h3" size="3xl">
                Your laundry collected, washed, dried and delivered with the
                Chap-Chap Laundry App
              </Heading>
              <p className="mt-6">
                Place an order in 2 minutes chrono, don&apos;t move anymore, we
                take care of everything
              </p>
              <p className="text-primary-500 text-3xl mt-6">Soon available</p>
              <div className="flex gap-4 mt-10">
                <Button
                  className="border-white rounded cursor-pointer"
                  size="md"
                >
                  App Store
                </Button>
                <Button
                  className="border-white rounded cursor-pointer"
                  size="md"
                >
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="section" data-padding="md">
        <div className="container">
          <div className="text-center space-y-6">
            <Heading className="text-primary-500" size="2xl">
              collaborate with Chap-Chap laundry
            </Heading>
            <Underline align="center" className="!mt-2" />
            <Heading className="text-secondary-400" size="3xl">
              Professionals
            </Heading>
            <p className="md:px-52">
              You&apos;re a professional, you have laundry to wash, enjoy the
              PARTNER CHAP formula and don&apos;t get tired anymore. Entrust us
              with your laundry, we take care of it, and it is less
              expensive.Companies (Hotels, Residences, Guesthouses, Restaurant,
              Hospitals, Beauty Institute, Hairdressing Room, Spa etc.)
            </p>
            <div className="mt-10 relative w-full aspect-video">
              <Image
                src="/assets/images/business/launderettes/professional/professional-bg.png"
                fill
                alt="image"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Heading as="h3" className="text-white" size="3xl">
                  You&apos;re a professional.
                  <br />
                  contact us for a more personalised order.
                </Heading>
              </div>
            </div>
            <Button className="mt-6">Contact us to clarify the details!</Button>
          </div>
        </div>
      </section>
      {/*  */}
      <OurClients data={partnersData} />
    </>
  );
}
