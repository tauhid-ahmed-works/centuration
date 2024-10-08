import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career - Centuriation",
  description: "Generated by create next app",
};

import Wrapper from "@/components/layout/wrapper";
// import { useTranslations } from "next-intl";
import Image from "next/image";
import coverImage from "/public/assets/images/career/career-coverd-photo.webp";
import CareerWork from "@/components/career/career-work";
import JustCareer from "@/components/career/just-career";
import Accordion from "@/components/career/accordion";
import BannerAnimation from "@/components/shared/banner-animation";

export default function businesses() {
  // const t = useTranslations("HomePage");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "We win and lose as teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are the market leader with a reputation for quality equipment supported by excellent service. All our employees are crucial to the success of the company.",
        },
      },
      {
        "@type": "Question",
        name: "We are proud to sign our names on our products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you have questions about the application or suggestions for If you have questions about the application or suggestions forIf you have questions about the application or suggestions for If you have questions about the application or suggestions for.",
        },
      },
      {
        "@type": "Question",
        name: "We seek feedback early and often?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you have questions about the application or suggestions for If you have questions about the application or suggestions forIf you have questions about the application or suggestions for If you have questions about the application or suggestions for.",
        },
      },
    ],
  };

  return (
    <>
      <div className="h-screen relative w-full flex items-center">
        <div className="absolute w-full h-full">
          <Image
            width={2000}
            height={2000}
            src={coverImage}
            className="w-full h-full object-cover"
            alt="career-cover-photo"
          ></Image>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black/60"></div>

        <Wrapper className="relative text-white font-semibold">
          <div className="max-w-[65ch] rounded font-semibold">
            <h1 className="">Career</h1>
            <h2 className="text-4.5xl mt-2 leading-none">
              Join our world of innovation
            </h2>
            <p className="mt-4 text-md leading-tight">
              Explore limitless career opportunities where innovation and
              teamwork shape the future
            </p>
          </div>
        </Wrapper>
        <BannerAnimation />
      </div>

      <CareerWork />
      <JustCareer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Accordion />
    </>
  );
}
