import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centurion",
  description: "",
};

import BusinessCards from "@/app/(marketing)/(home)/_components/business-cards";
import Sustainability from "@/app/(marketing)/(home)/_components/sustainability";
import Innovation from "@/app/(marketing)/(home)/_components/innovation";
import CompanyResume from "@/app/(marketing)/(home)/_components/resume";
import { bannerData } from "@/data/homepage";
import { Hero } from "@/components/hero";
import ScrollDots from "./_components/scroll-dots";
import { Banner } from "@/components/banner";

export default function Page() {
  return (
    <>
      <section data-section="1">
        <Banner />
      </section>
      {/* <Banner /> */}
      <BusinessCards data-section="2" />
      <Sustainability data-section="3" />
      <CompanyResume data-section="4" />
      <Innovation data-section="5" />
      <ScrollDots />
    </>
  );
}
