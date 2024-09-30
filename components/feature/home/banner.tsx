// import Wrapper from "@/components/layout/wrapper";
// import BannerAnimation from "@/components/shared/banner-animation";
import Button from "@/components/shared/button";
// import { useTranslations } from "next-intl";
import Link from "next/link";
import { Carousel } from "@/components/shared/banner";
import { BannerTextBlock } from "@/components/shared/banner";

import { homepageBanner } from "@/data/homepage-banner";

export default function HomeCarousel() {
  // const t = useTranslations("HomePage");
  return (
    <Carousel data={homepageBanner} duration={15}>
      <Carousel.Item
        render={(item) => (
          <>
            <Carousel.Video videoURL={item.videoURL!} />
            <Carousel.TextBlock
              heading={item.heading}
              paragraph={item.paragraph}
              render={(props) => (
                <BannerTextBlock {...props}>
                  <div className="space-x-4 mt-10">
                    <Button>Learn More</Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </BannerTextBlock>
              )}
            ></Carousel.TextBlock>
          </>
        )}
      />
    </Carousel>
  );
}
