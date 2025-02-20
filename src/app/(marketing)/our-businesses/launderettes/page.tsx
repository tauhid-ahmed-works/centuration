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
      {/*  */}
      <section className="section bg-gray-300" data-padding="lg">
        <div className="container">
          <div className="space-y-20">
            <div className="text-center">
              <Heading
                as="h2"
                className="text-primary-500"
                size="4xl"
                underline={
                  <Underline align="center" size="lg" variant="primary" />
                }
              >
                An innovative concept near you
              </Heading>
            </div>

            <div className="w-full aspect-video relative overflow-hidden group">
              <iframe
                className="absolute pointer-events-none top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Q9s4HiaRDaA?autoplay=1&mute=1&loop=1&playlist=Q9s4HiaRDaA&controls=1"
                title="YouTube video player"
                allow="encrypted-media; fullscreen"
                data-lenis-prevent={true}
              ></iframe>
            </div>

            <div className="text-center">
              <Heading
                size="3xl"
                className="text-secondary-400"
                underline={<Underline align="center" variant="primary" />}
              >
                Your laundry always fresh
              </Heading>

              <p className="text-secondary-300 mt-6">
                Wash and dry large amounts of linen or bulky items all at once.
                Chap-chap laundries are fully self-service, accessible 24 hours
                a day, 7 days a week, and have free access to the car parks of
                our partner sites.
              </p>
              <Button className="mt-10">Find a chap-chap point</Button>
            </div>
          </div>
        </div>
      </section>
      {/* how it works */}
      <HowItWorks data={howItWorksData} />

      {/*  */}
      <section className="section" data-padding="md">
        <div className="text-center">
          <Heading as="h2" size="4xl" className="text-primary-500">
            How to place an order chap-chap?
          </Heading>
          <Underline className="mt-10" align="center" />
        </div>
        <div className="mt-10 lg:mt-20">
          <div className="container">
            <div className="flex gap-4 md:gap-10 lg:gap-16 xl:gap24">
              <AnimatedCard
                index={0}
                className="space-y-6 md:space-y-8 text-center flex-1 px-4"
              >
                <Image
                  width={150}
                  height={150}
                  src="/assets/images/business/launderettes/order/order.png"
                  alt="order"
                  className="mx-auto"
                />
                <p>
                  Step 1: Place your order via our website, choose the formula
                  that suits you and validate your payment via M obile money.
                </p>
              </AnimatedCard>
              <AnimatedCard
                index={1}
                className="space-y-6 md:space-y-8 text-center flex-1 px-4"
              >
                <Image
                  width={150}
                  height={150}
                  src="/assets/images/business/launderettes/order/order.png"
                  alt="order"
                  className="mx-auto"
                />
                <p>
                  Step 2: Prepare your clothes in a bag, one of our couriers
                  will pick it up at your home or address of your choice, and
                  then bring it to us.
                </p>
              </AnimatedCard>
              <AnimatedCard
                index={2}
                className="space-y-6 md:space-y-8 text-center flex-1 px-4"
              >
                <Image
                  width={150}
                  height={150}
                  src="/assets/images/business/launderettes/order/order.png"
                  alt="order"
                  className="mx-auto"
                />
                <p>
                  Step 3: A notification message will be sent to you once your
                  laundry is ready and then receive your own expense within a
                  short period of time, depending on your formula.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
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
