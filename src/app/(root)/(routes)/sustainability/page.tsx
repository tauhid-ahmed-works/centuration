import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability - Centuriation",
  description: "Generated by create next app",
};

import SustainabilityCommitment from "@/app/(root)/(routes)/sustainability/_components/sustainability-commitment";
import CenturionWay from "@/app/(root)/(routes)/sustainability/_components/centurion-way";
import OurCommitment from "@/app/(root)/(routes)/sustainability/_components/our-commitment";
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
