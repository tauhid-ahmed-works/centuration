import { BannerTextBlock, Carousel } from '@/components/shared/banner'
import Button from '@/components/shared/button'

const data = [
  {
    tagLine: '',
    path: '',
    description: 'Our Bussiness',
    imageURL: '/assets/images/business/fertilizer/image-1.webp',
    heading: 'Boost Plant Growth with Quality Fertilizers',
    paragraph:
      'Enhance soil health and promote robust plant growth with nutrient-rich fertilizers. Whether organic or synthetic, fertilizers provide essential nutrients that ensure vibrant, healthy plants and higher crop yields.',
  },
  {
    tagLine: '',
    path: '',
    description: 'Our Bussiness',
    imageURL: '/assets/images/business/fertilizer/image-1.webp',
    heading: 'Boost Plant Growth with Quality Fertilizers',
    paragraph:
      'Enhance soil health and promote robust plant growth with nutrient-rich fertilizers. Whether organic or synthetic, fertilizers provide essential nutrients that ensure vibrant, healthy plants and higher crop yields.',
  },
  {
    tagLine: '',
    path: '',
    description: 'Our Bussiness',
    imageURL: '/assets/images/business/fertilizer/image-1.webp',
    heading: 'Boost Plant Growth with Quality Fertilizers',
    paragraph:
      'Enhance soil health and promote robust plant growth with nutrient-rich fertilizers. Whether organic or synthetic, fertilizers provide essential nutrients that ensure vibrant, healthy plants and higher crop yields.',
  },
]

export default function FertilizerCarousel() {
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
