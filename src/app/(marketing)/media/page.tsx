import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media - Centurion",
  description: "Generated by create next app",
};

import MediaCard from "./_components/media-card";
import MediaGallery from "./_components/media-gallery";
import { Banner, BannerType } from "@/components/banner";
import { useTranslations } from "next-intl";

export default function MediaPage() {
  const t = useTranslations("media");
  const bannerIntl = t.raw("banner");
  const bannerData: BannerType[] = [
    {
      mediaSrc: "/assets/images/media/banner/media-banner-1.webp",
      mediaType: "image",
      title: bannerIntl[1].title,
      content: bannerIntl[1].content,
      learn_more: "/",
    },
    {
      mediaSrc: "/assets/images/media/banner/media-banner-2.webp",
      mediaType: "image",
      title: bannerIntl[2].title,
      content: bannerIntl[2].content,
      learn_more: "/",
    },
    {
      mediaSrc: "/assets/images/media/banner/media-banner-3.webp",
      mediaType: "image",
      title: bannerIntl[3].title,
      content: bannerIntl[3].content,
      learn_more: "/",
    },
  ];
  return (
    <>
      <Banner data={bannerData} />
      <MediaCard />
      <MediaGallery />
    </>
  );
}
