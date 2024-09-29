"use client";
import BusinessCards from "@/components/home/business-cards";
// import Invitation from "@/components/home/invitation";
// import Sustainability from "@/components/home/sustainability";
import Video from "@/components/home/video";
import Footer from "@/components/layout/footer";
import Banner from "@/components/feature/home/banner";
import ScrollSnap from "@/components/scroll-snap";
import { ScrollSnapHome } from "@/components/shared/scroll-button";
import Sustainability from "@/components/feature/home/sustainability";
import Innovation from "@/components/feature/home/innovation";
import CompanyResume from "@/components/feature/home/resume";

export default function Page() {
  return (
    <div className="z-30">
      <ScrollSnap>
        <ScrollSnap.Group>
          <Banner />
          <BusinessCards />
          <Sustainability />
          {/* <Video /> */}
          <CompanyResume />
          {/* <Invitation /> */}
          <Innovation />
          <div className="flex min-h-screen items-end w-screen">
            <Footer />
          </div>
        </ScrollSnap.Group>
        <ScrollSnap.Indicators />
        <ScrollSnapHome />
      </ScrollSnap>
    </div>
  );
}
