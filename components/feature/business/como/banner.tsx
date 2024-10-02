import { BannerTextBlock, Carousel } from '@/components/shared/banner'
import Button from '@/components/shared/button'

const data = [
  {
    tagLine: 'Our Bussiness',
    path: '',
    description: 'Our Bussiness',
    imageURL: '/assets/images/business/commo/image-2.webp',
    heading: 'Nutriagro Overseas',
    paragraph: 'Heritage of Quality . Purity . Trust',
  },
  {
    tagLine: 'Our Bussiness',
    path: '',
    description: 'Our Bussiness',
    imageURL: '/assets/images/business/commo/image-1.webp',
    heading: 'Nutriagro Overseas',
    paragraph: 'Heritage of Quality . Purity . Trust',
  },
  {
    tagLine: 'Our Bussiness',
    path: '',
    description: 'Our Bussiness',
    imageURL: '/assets/images/business/commo/image-3.webp',
    heading: 'Nutriagro Overseas',
    paragraph: 'Heritage of Quality . Purity . Trust',
  },
]

export default function ComoCarousel() {
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
                  <Button className="mt-8">Learn More</Button>
                </BannerTextBlock>
              )}
            ></Carousel.TextBlock>
          </>
        )}
      ></Carousel.Item>
    </Carousel>
  )
}
