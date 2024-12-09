"use client";
import BusinessCards from "@/components/home/business-cards";
// import Invitation from "@/components/home/invitation";
// import Sustainability from "@/components/home/sustainability";
import Footer from "@/components/layout/footer";
import Banner from "@/components/feature/home/banner";
import ScrollSnap from "@/components/scroll-snap";
import { ScrollSnapHome } from "@/components/shared/scroll-button";
import Sustainability from "@/components/feature/home/sustainability";
import Innovation from "@/components/feature/home/innovation";
import CompanyResume from "@/components/feature/home/resume";
import { Carousel } from "@/components/carousel/carousel";

export default function Page() {
  return (
    <div className="z-30">
      <ScrollSnap>
        <ScrollSnap.Group>
          <Carousel
            data={[
              {
                id: 1,
                title: "Centurion Group Inc. 1",
                imageLink: "https://unsplash.it/id/555/1920/1080",
                videoLink: "/assets/video/homepage/laund.mp4",
                content:
                  "Anim fugiat ut nostrud laboris consequat est incididunt aliquip. Ipsum non quis mollit aliquip magna dolore elit reprehenderit velit.",
                detailsLink: "/",
              },
            ]}
          />
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
