"use client";
import BusinessCards from "@/components/home/business-cards";
import Footer from "@/components/footer";
import ScrollSnap from "@/components/scroll-snap";
import { ScrollSnapHome } from "@/components/shared/scroll-button";
import Sustainability from "@/components/home/sustainability";
import Innovation from "@/components/home/innovation";
import CompanyResume from "@/components/home/resume";
import { Carousel } from "@/components/carousel/carousel";
import { homepageBanner } from "@/data/home";

export default function Page() {
  return (
    <div className="z-30">
      <ScrollSnap>
        <ScrollSnap.Group>
          <Carousel duration={40} data={homepageBanner} />
          <BusinessCards />
          <Sustainability />
          {/* <Video /> */}
          <CompanyResume />
          {/* <Invitation /> */}
          <Innovation />
          <div className="flex min-h-screen items-end">
            <Footer />
          </div>
        </ScrollSnap.Group>
        <ScrollSnap.Indicators />
        <ScrollSnapHome />
      </ScrollSnap>
    </div>
  );
}
