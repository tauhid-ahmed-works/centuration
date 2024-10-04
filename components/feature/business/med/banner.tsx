import { BannerTextBlock, Carousel } from "@/components/shared/banner";
import { businessCategories } from "@/data/business-category";

const data = [
  {
    tagLine: "",
    path: "",
    paragraph: "A comprehensive guide to providing quality medical care.",
    imageURL: businessCategories[1].bannerImage[0],
    heading: "Medical Services",
  },
  {
    tagLine: "",
    path: "",
    paragraph: "A comprehensive guide to providing quality medical care.",
    imageURL: businessCategories[1].bannerImage[1],
    heading: "Medical Services",
  },
  {
    tagLine: "",
    path: "",
    paragraph: "A comprehensive guide to providing quality medical care.",
    imageURL: businessCategories[1].bannerImage[2],
    heading: "Medical Services",
  },
];

export default function MedCarousel() {
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
              render={(props) => <BannerTextBlock {...props} />}></Carousel.TextBlock>
          </>
        )}></Carousel.Item>
    </Carousel>
  );
}
