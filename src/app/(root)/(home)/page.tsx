"use client";
import BusinessCards from "@/app/(root)/(home)/_components/business-cards";
import Footer from "@/components/footer";
import ScrollSnap from "@/components/scroll-snap";
import { ScrollSnapHome } from "@/components/scroll-button";
import Sustainability from "@/app/(root)/(home)/_components/sustainability";
import Innovation from "@/app/(root)/(home)/_components/innovation";
import CompanyResume from "@/app/(root)/(home)/_components/resume";
import { bannerData } from "@/data/homepage";
import { Hero } from "@/components/hero";

export default function Page() {
  return (
    <div className="z-30">
      <ScrollSnap>
        <ScrollSnap.Group>
          <Hero data={bannerData} />
          <BusinessCards />
          <Sustainability />
          {/* <Video /> */}
          <CompanyResume />
          {/* <Invitation /> */}
          <Innovation />
          <div className="flex min-h-screen items-end bg-secondary-500">
            <Footer />
          </div>
        </ScrollSnap.Group>
        <ScrollSnap.Indicators />
        <ScrollSnapHome />
      </ScrollSnap>
    </div>
  );
}
