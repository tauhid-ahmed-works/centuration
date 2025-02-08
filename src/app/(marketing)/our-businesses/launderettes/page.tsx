import Image from "next/image";
import { Heading } from "@/components/heading";
import Underline from "@/components/decorate-line";
import { Button } from "@/components/ui/button";
import { Banner, BannerType } from "@/components/banner";
import { useTranslations } from "next-intl";

export default function LaunderettesPage() {
  const t = useTranslations("business_launderettes");
  const bannerIntl = t.raw("banner");
  const bannerData: BannerType[] = [
    {
      mediaSrc:
        "/assets/images/business/launderettes/banner/launderette-banner-1.webp",
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
      mediaSrc:
        "/assets/images/business/launderettes/banner/launderette-banner-3.webp",
      mediaType: "image",
      title: bannerIntl[3].title,
      content: bannerIntl[3].content,
      learn_more: "/",
    },
  ];
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
      {/*  */}
      <section className="section" data-padding="lg">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="relative min-h-96 flex-1">
              <Image
                src="/assets/images/business/launderettes/banner/store-point.jpg"
                fill
                alt="store point"
                className="object-cover"
              />
            </div>
            <div className="space-y-10 flex-1 text-center lg:text-left">
              <Heading as="h2" size="5xl" className="text-primary-500">
                Save time, save money.
              </Heading>
              <p>
                Chap-chap is the only self-service industrial industrial washing
                machine in Côte d’Ivoire. You can find us in Abidjan and soon in
                more than 100 locations everywhere in Côte d’Ivoire.
              </p>
              <Button>FIND A CHAP-CHAP POINT</Button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="section bg-gray-300" data-padding="lg">
        <div className="container">
          <div className="text-center space-y-6 text-secondary-300">
            <Heading as="h2" size="4xl" className="text-primary-500">
              LA LAVERIE DONE HIS
            </Heading>
            <Heading
              className="font-medium"
              as="h3"
              size="2xl"
              underline={<Underline align="center" variant="primary" />}
            >
              Revolution And it&apos;s cheaper.
            </Heading>
            <p className="font-medium">
              Automatic laundry service available at all times throughout Côte
              d&apos;Ivoire.
            </p>
            <p className="font-normal">Open 24 hours a day, 7 days a week.</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 text-center text-primary-500 mt-10 lg:mt-20">
            <div className="font-semibold text-[150px] xl:text-[200px] aspect-square bg-white flex-1 px-16 py-10 flex justify-center flex-col leading-none">
              <span className="relative">
                09
                <span className="size-10 bg-white inline-block rounded-full absolute right-0 top-0 text-2xl">
                  kg
                </span>
              </span>
              <div className="h-2 bg-primary-500"></div>
              <span className="uppercase font-medium text-4xl xl:text-6xl">
                Lave
              </span>
            </div>
            <div className="font-semibold text-[150px] xl:text-[200px] aspect-square bg-white flex-1 px-16 py-10 flex justify-center flex-col leading-none">
              <span className="relative">
                20
                <span className="size-10 bg-white inline-block rounded-full absolute right-0 top-0 text-2xl">
                  kg
                </span>
              </span>
              <div className="h-2 bg-primary-500"></div>
              <span className="uppercase font-medium text-4xl xl:text-6xl">
                Lave
              </span>
            </div>
            <div className="font-semibold text-[150px] xl:text-[200px] aspect-square bg-white flex-1 px-16 py-10 flex justify-center flex-col leading-none">
              <span className="relative">
                20
                <span className="size-10 bg-white inline-block rounded-full absolute right-0 top-0 text-2xl">
                  kg
                </span>
              </span>
              <div className="h-2 bg-primary-500"></div>
              <span className="uppercase font-medium text-4xl xl:text-6xl">
                SECHE
              </span>
            </div>
          </div>
        </div>
      </section>
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

            <div className="aspect-video w-full">
              <iframe
                className="size-full"
                src="https://www.youtube.com/embed/Q9s4HiaRDaA?si=DyEG-pGvbyG6mYG-"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
      {/*  */}
      <section className="section bg-secondary-500/60" data-padding="md">
        <div className="text-center">
          <Heading className="text-white" as="h2" size="4xl">
            How it Works?
          </Heading>
        </div>
        <div className="container mt-14">
          <div className="flex gap-4">
            <div className="border border-white bg-white/10 backdrop-blur p-5 space-y-4">
              <Image
                src="/assets/images/business/launderettes/banner/how-it-works/1.png"
                width="300"
                height="300"
                alt="image"
                className="w-full"
              />
              <Heading as="h3" size="3xl">
                <span className="text-primary-500">ETAPE</span>{" "}
                <span className="text-white">6</span>
              </Heading>
              <p className="text-sm text-white">
                EFFECTUEZ LE PALEMENT EN ESPECES PARCARTE OU MOBILE MONEY
              </p>
            </div>
            <div className="border border-white bg-white/10 backdrop-blur p-5 space-y-4">
              <Image
                src="/assets/images/business/launderettes/banner/how-it-works/2.png"
                width="300"
                height="300"
                alt="image"
                className="w-full"
              />
              <Heading as="h3" size="3xl">
                <span className="text-primary-500">ETAPE</span>{" "}
                <span className="text-white">7</span>
              </Heading>
              <p className="text-sm text-white">
                EFFECTUEZ LE PALEMENT EN ESPECES PARCARTE OU MOBILE MONEY
              </p>
            </div>
            <div className="border border-white bg-white/10 backdrop-blur p-5 space-y-4">
              <Image
                src="/assets/images/business/launderettes/banner/how-it-works/3.png"
                width="300"
                height="300"
                alt="image"
                className="w-full"
              />
              <Heading as="h3" size="3xl">
                <span className="text-primary-500">ETAPE</span>{" "}
                <span className="text-white">1</span>
              </Heading>
              <p className="text-sm text-white">
                EFFECTUEZ LE PALEMENT EN ESPECES PARCARTE OU MOBILE MONEY
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-10 justify-center">
            <div className="size-2 rounded-full bg-secondary-400"></div>
            <div className="size-2 rounded-full bg-secondary-400"></div>
            <div className="size-2 rounded-full bg-secondary-400"></div>
            <div className="size-2 rounded-full bg-secondary-400"></div>
            <div className="size-2 rounded-full bg-secondary-400"></div>
            <div className="size-2 rounded-full bg-secondary-400"></div>
          </div>
        </div>
      </section>
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
              <div className="space-y-6 md:space-y-8 text-center flex-1 px-4">
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
              </div>
              <div className="space-y-6 md:space-y-8 text-center flex-1 px-4">
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
              </div>
              <div className="space-y-6 md:space-y-8 text-center flex-1 px-4">
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
              </div>
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
      <section className="section" data-padding="md">
        <div className="container">
          <div className="text-center">
            <Heading className="text-primary-500" size="5xl" as="h2">
              Our partners
            </Heading>
            <Underline align="center" className="mt-6" />
            <p className="text-secondary-300 mt-10">
              Present in more than 20 countries with world-renowned partnerships
            </p>
            <div className="relative mt-20 h-20">
              <Image
                src="/assets/images/business/launderettes/sponsors.png"
                fill
                alt="sponsor"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
