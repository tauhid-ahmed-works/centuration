"use client";
import BusinessCards from "@/components/home/business-cards";
import Invitation from "@/components/home/invitation";
import Sustainability from "@/components/home/sustainability";
import Video from "@/components/home/video";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollSnap from "@/components/scroll-snap";
import Banner from "@/components/feature/home/banner";

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
      <ScrollSnap.Start content="end" height="responsive" index={5}>
        <Footer />
      </ScrollSnap.Start>
    </ScrollSnap>
  );
}
