import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability - Centuriation",
  description: "Generated by create next app",
};

import SustainabilityCommitment from "@/components/sustainability/sustainability-commitment";
import CenturionWay from "@/components/sustainability/centurion-way";
import OurCommitment from "@/components/sustainability/our-commitment";
import { Intro } from "./_components/intro";

export default function Sustainability() {
  return (
    <>
      <Intro />
      <SustainabilityCommitment />
      <CenturionWay />
      <OurCommitment />
    </>
  );
}
