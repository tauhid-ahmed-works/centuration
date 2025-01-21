"use client";
import * as Banner from "@/components/carousel/carousel";
import { ExternalLinkIcon } from "@/components/icons";

type HeroProps = {
  data: {
    id: string;
    title: string;
    content: string;
    imageLink?: string;
    videLink?: string;
    slide?: string;
    href: string;
  }[];
};

export function Hero({ data }: HeroProps) {
  return (
    <>
      <Banner.Carousel
        data={data}
        duration={3}
        render={(data: Record<string, string>) => (
          <Banner.Item>
            {data.slide === "video" ? (
              <Banner.MediaVideo mediaLink={data.videoLink} />
            ) : (
              <Banner.MediaImage alt={data.title} mediaLink={data.imageLink} />
            )}
            <Banner.Container>
              <Banner.Title>{data.title}</Banner.Title>
              <Banner.Description>{data.content}</Banner.Description>
              <Banner.CTA route={data.href}>
                Learn More <ExternalLinkIcon className="!size-3" />
              </Banner.CTA>{" "}
            </Banner.Container>
          </Banner.Item>
        )}
      />
    </>
  );
}
