"use client";
import * as Banner from "@/features/carousel/banner";
import { bannerData } from "@/data/business/technology";
import { ExternalLinkIcon } from "@/components/icons";

export default function BusinessTechnology() {
  return (
    <>
      <Banner.Carousel
        data={bannerData}
        duration={10}
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
              <Banner.CTA route="/">
                Learn More <ExternalLinkIcon className="!size-3" />
              </Banner.CTA>
            </Banner.Container>
          </Banner.Item>
        )}
      />
    </>
  );
}
