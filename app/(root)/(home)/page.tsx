"use client";
import BusinessCards from "@/components/home/business-cards";
import Invitation from "@/components/home/invitation";
import Sustainability from "@/components/home/sustainability";
import Video from "@/components/home/video";
import Wrapper from "@/components/layout/wrapper";
import Button from "@/components/shared/button";
import { useTranslations } from "next-intl";
import BannerAnimation from "@/components/shared/banner-animation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollSnap from "@/components/scroll-snap";
import { useScrollSnap } from "@/components/scroll-snap";
import Link from "next/link";

export default function Page() {
  return (
    <ScrollSnap>
      <Navbar />
      <ScrollSnap.Start index={0}>
        <Banner />
      </ScrollSnap.Start>
      <ScrollSnap.Start index={1}>
        <BusinessCards />
      </ScrollSnap.Start>
      <ScrollSnap.Start index={2}>
        <Sustainability />
      </ScrollSnap.Start>
      <ScrollSnap.Start index={3}>
        <Video />
      </ScrollSnap.Start>
      <ScrollSnap.Start index={4}>
        <Invitation />
      </ScrollSnap.Start>
      {/* <ScrollSnap.Start index={5}>
        <OurProjects />
      </ScrollSnap.Start> */}
      <ScrollSnap.Start content="end" height="responsive" index={5}>
        <Footer />
      </ScrollSnap.Start>
    </ScrollSnap>
  );
}

function Banner() {
  const t = useTranslations("HomePage");
  const context = useScrollSnap();
  return (
    <div className="h-screen relative flex items-center">
      <video
        className="block absolute inset-0 object-cover w-full h-full contrast-more brightness-150"
        muted
        loop
        autoPlay
      >
        <source src="/assets/video/home-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 w-full h-full bg-black/50"></div>

      <BannerAnimation onClick={() => context?.handleScrollIntoView(1)} />

      <div className="relative w-full">
        <Wrapper>
          <div className="max-w-[60ch] w-full text-white">
            <h1 className="h1">{t("home_title")}</h1>
            <p className="text-lg leading-tight mt-4">{t("paragraph")}</p>
            <div className="space-x-4 mt-10">
              <Button>Learn More</Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
