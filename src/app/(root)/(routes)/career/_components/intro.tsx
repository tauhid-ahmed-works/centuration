"use client";
import * as Banner from "@/components/carousel/banner";
import { bannerData } from "@/data/career";
import { ExternalLinkIcon } from "@/components/icons";

export function Intro() {
  return (
    <>
      <Banner.Carousel
        data={bannerData}
        duration={3}
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
              <Banner.Description>{bannerData.content}</Banner.Description>
              <Banner.CTA route={bannerData.href}>
                Learn More <ExternalLinkIcon className="!size-3" />
              </Banner.CTA>{" "}
            </Banner.Container>
          </Banner.Item>
        )}
      />
    </>
  );
}
