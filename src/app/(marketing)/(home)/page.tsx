import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centurion",
  description: "",
};

import BusinessCards from "./_components/business-cards";
import Sustainability from "./_components/sustainability";
import Innovation from "./_components/innovation";
import CompanyResume from "./_components/resume";
import ScrollDots from "./_components/scroll-dots";
import { Banner, type BannerType } from "@/components/banner";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("home");
  const bannerIntl = t.raw("banner");
  const bannerData: BannerType[] = [
    {
      mediaSrc: "/assets/images/homepage/banner/video-01.mp4",
      mediaType: "video",
      duration: 44,
      title: bannerIntl[1].title,
      content: bannerIntl[1].content,
      learn_more: "/",
    },
    // {
    //   mediaSrc: "https://www.youtube.com/watch?v=NO5yLm8Ggos",
    //   mediaType: "video",
    //   duration: 44,
    //   title: bannerIntl[1].title,
    //   content: bannerIntl[1].content,
    //   learn_more: "/",
    // },
    {
      mediaSrc: "/assets/images/homepage/banner/video-02.mp4",
      mediaType: "video",
      duration: 17,
      title: bannerIntl[2].title,
      content: bannerIntl[2].content,
      learn_more: "/",
    },
    {
      mediaSrc: "/assets/images/homepage/banner/video-03.mp4",
      mediaType: "video",
      duration: 33,
      title: bannerIntl[3].title,
      content: bannerIntl[3].content,
      learn_more: "/",
    },
  ];
  return (
    <>
      <Banner data={bannerData} data-section="1" />
      <BusinessCards data-section="2" />
      <Sustainability data-section="3" />
      <CompanyResume data-section="4" />
      <Innovation data-section="5" />
      <ScrollDots />
    </>
  );
}
