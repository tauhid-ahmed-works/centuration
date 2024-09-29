// import Wrapper from "@/components/layout/wrapper";
// import BannerAnimation from "@/components/shared/banner-animation";
import Button from "@/components/shared/button";
// import { useTranslations } from "next-intl";
import Link from "next/link";
import { Carousel } from "@/components/shared/banner";
import { BannerTextBlock } from "@/components/shared/banner";

export default function HomeCarousel() {
  // const t = useTranslations("HomePage");
  return (
    <Carousel data={[]}>
      <Carousel.Item
        render={(item) => (
          <>
            <Carousel.Image imageURL={item.imageURL!} />
            <Carousel.TextBlock
              tagLine={"Our Bussiness"}
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
