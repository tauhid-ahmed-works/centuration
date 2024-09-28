"use client";
import BusinessCards from "@/components/home/business-cards";
import Invitation from "@/components/home/invitation";
import Sustainability from "@/components/home/sustainability";
import Video from "@/components/home/video";
import Footer from "@/components/layout/footer";
import Banner from "@/components/feature/home/banner";
import ScrollSnap from "@/components/snapping";
import HomeCarousel from "@/components/feature/home/home-carousel";
import { ScrollSnapHome } from "@/components/shared/scroll-button";

export default function Page() {
  return (
    <div className="z-30">
      <ScrollSnap>
        <ScrollSnap.Group>
          {/* <Banner /> */}
          <HomeCarousel />
          <BusinessCards />
          <Sustainability />
          <Video />
          <Invitation />
          <div className="flex h-screen items-end w-full">
            <Footer />
          </div>
        </ScrollSnap.Group>
        <ScrollSnap.Indicators />
        <ScrollSnapHome />
      </ScrollSnap>
      <div className="z-500"></div>
    </div>
  );
}
