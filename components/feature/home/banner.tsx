import Wrapper from "@/components/layout/wrapper";
import BannerAnimation from "@/components/shared/banner-animation";
import Button from "@/components/shared/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Carousel, TextBlock } from "@/components/shared/banner";
import { ReactNode } from "react";

export default function HomeCarousel() {
  const t = useTranslations("HomePage");
  return (
    <Carousel
      data={[
        {
          imageURL: "/assets/images/home-banner.png",
          heading: t("home_title"),
          paragraph: t("paragraph"),
          tagLine: "tagLine",
        },
        {
          imageURL: "/assets/images/home-banner.png",
          heading: t("home_title"),
          paragraph: t("paragraph"),
          tagLine: "tagLine",
        },
        {
          imageURL: "/assets/images/home-banner.png",
          heading: t("home_title"),
          paragraph: t("paragraph"),
          tagLine: "tagLine",
        },
        {
          imageURL: "/assets/images/home-banner.png",
          heading: t("home_title"),
          paragraph: t("paragraph"),
          tagLine: "tagLine",
        },
      ]}
    >
      <Carousel.Item
        render={(item, index) => (
          <>
            <Carousel.Image imageURL={item.imageURL!} />
            <Carousel.TextBlock
              tagLine={"Our Bussiness"}
              heading={item.heading}
              paragraph={item.paragraph}
              render={(props) => <TextBlock.Banner {...props} />}
            >
              <div className="space-x-4 mt-10">
                <Button>Learn More</Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </Carousel.TextBlock>
          </>
        )}
      />
    </Carousel>
  );
}
