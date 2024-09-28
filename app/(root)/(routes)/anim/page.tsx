"use client";
import BusinessCards from "@/components/home/business-cards";
import Invitation from "@/components/home/invitation";
import Sustainability from "@/components/home/sustainability";
import Video from "@/components/home/video";
import ScrollSnap from "@/components/snap2";
import Banner from "@/components/feature/home/banner";
import Wrapper from "@/components/layout/wrapper";
import Button from "@/components/shared/button";
import Link from "next/link";
import * as Typography from "@/components/shared/typography";
import BannerTextBlock from "@/components/shared/banner/text-block";
import Carousel from "@/components/shared/banner/bussiness-carouselv2";
import { businessCategories } from "@/data/business-category";
import Header from "@/components/common/header";

const cats = businessCategories.map((item) => ({
  tagLine: item.businessName,
  path: item.path,
  description: item.descriptions.long.paragraphs[0],
  imageURL: item.bannerImage,
  heading: item.businessName,
  paragraph: item.descriptions.long.paragraphs[0],
}));

export default function AnimaPage() {
  return (
    <div className="h-screen relative bg-black z-[50000]">
      <Header />
    </div>
    // <Carousel data={cats.slice(0, 2)} duration={5}>
    //   <Carousel.Item
    //     render={(item, index) => (
    //       <>
    //         <Carousel.Image imageURL={item.imageURL!} />
    //         <Carousel.TextBlock
    //           tagLine={"Bussineess"}
    //           heading={item.heading}
    //           paragraph={item.paragraph}
    //           path={item.path}
    //           render={(props) => <BannerTextBlock {...props} />}
    //         />
    //       </>
    //     )}
    //   />
    // </Carousel>
  );
}
