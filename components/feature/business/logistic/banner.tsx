import { BannerTextBlock, Carousel } from "@/components/shared/banner";
import { businessCategories } from "@/data/business-category";

const logistics = businessCategories[7];
const data = [
  {
    tagLine: "",
    path: "",
    paragraph: logistics.resume,
    imageURL: logistics.bannerImages[0],
    heading: logistics.businessName,
  },
  {
    tagLine: "",
    path: "",
    paragraph: logistics.resume,
    imageURL: logistics.bannerImages[1],
    heading: logistics.businessName,
  },
  {
    tagLine: "",
    path: "",
    paragraph: logistics.resume,
    imageURL: logistics.bannerImages[2],
    heading: logistics.businessName,
  },
];

export default function LogisticsCarousel() {
  return (
    <Carousel data={data}>
      <Carousel.Item
        render={(item) => (
          <>
            <Carousel.Image imageURL={item.imageURL!} />
            <Carousel.TextBlock
              heading={item.heading}
              paragraph={item.paragraph}
              path={item.path}
              render={(props) => (
                <BannerTextBlock {...props}>
                  {/* <Button className="mt-8">Learn More</Button> */}
                </BannerTextBlock>
              )}></Carousel.TextBlock>
          </>
        )}></Carousel.Item>
    </Carousel>
  );
}
