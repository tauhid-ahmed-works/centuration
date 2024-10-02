import { BannerTextBlock, Carousel } from '@/components/shared/banner'
import { businessCategories } from '@/data/business-category'

const carouselData = businessCategories.map((item) => ({
  tagLine: item.businessName,
  path: item.path,
  description: item.descriptions.long.paragraphs[0],
  imageURL: item.bannerImage,
  heading: item.businessName,
  paragraph: item.descriptions.long.paragraphs[0],
  render: () => null,
}))

export default function BusinessCarousel() {
  return (
    <Carousel data={carouselData.slice(0, 6)}>
      <Carousel.Item
        render={(item) => (
          <>
            <Carousel.Image imageURL={item.imageURL!} />
            <Carousel.TextBlock
              tagLine={'Our Bussiness'}
              heading={item.heading}
              paragraph={item.paragraph}
              path={item.path}
              render={(props) => <BannerTextBlock {...props} />}
            />
          </>
        )}
      />
    </Carousel>
  )
}
