"use client";
import BusinessCards from "@/app/(root)/(home)/_components/business-cards";
import Footer from "@/components/footer";
import ScrollSnap from "@/components/scroll-snap";
import { ScrollSnapHome } from "@/components/scroll-button";
import Sustainability from "@/app/(root)/(home)/_components/sustainability";
import Innovation from "@/app/(root)/(home)/_components/innovation";
import CompanyResume from "@/app/(root)/(home)/_components/resume";
import { bannerData } from "@/data/homepage";
import * as Banner from "@/components/carousel/banner";
import { ExternalLinkIcon } from "@/components/icons";

export default function Page() {
  return (
    <div className="z-30">
      <ScrollSnap>
        <ScrollSnap.Group>
          <>
            <Banner.Carousel
              data={bannerData}
              duration={40}
              render={(bannerData: Record<string, string>) => (
                <Banner.Item>
                  {bannerData.slide === "video" ? (
                    <Banner.MediaVideo mediaLink={bannerData.videoLink} />
                  ) : (
                    <Banner.MediaImage
                      alt={bannerData.title}
                      mediaLink={bannerData.imageLink}
                    />
                  )}
                  <Banner.Container>
                    <Banner.Title>{bannerData.title}</Banner.Title>
                    <Banner.Description>
                      {bannerData.content}
                    </Banner.Description>
                    <Banner.CTAGroup>
                      <Banner.CTA route="/">
                        Learn More <ExternalLinkIcon className="!size-3" />
                      </Banner.CTA>
                      <Banner.CTA variant="outline" route="/contact">
                        Contact Us
                      </Banner.CTA>
                    </Banner.CTAGroup>
                  </Banner.Container>
                </Banner.Item>
              )}
            />
          </>
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
