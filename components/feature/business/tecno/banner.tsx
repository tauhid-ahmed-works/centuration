import { BannerTextBlock, Carousel } from '@/components/shared/banner'

const data = [
  {
    tagLine: '',
    path: '',
    description: '',
    imageURL: '',
    videoURL: '/assets/video/homepage/tecnology.mp4',
    heading: 'Technologies',
    paragraph: 'A brief guide to modern technological advancements.',
  },
  {
    tagLine: '',
    path: '',
    description: '',
    imageURL: '',
    videoURL: '/assets/video/homepage/tecnology.mp4',
    heading: 'Technologies',
    paragraph: 'A brief guide to modern technological advancements.',
  },
]

export default function TecnoCarousel() {
  return (
    <Carousel data={data}>
      <Carousel.Item
        render={(item) => (
          <>
            <Carousel.Video videoURL={item.videoURL!} />
            <Carousel.TextBlock
              heading={item.heading}
              paragraph={item.paragraph}
              path={item.path}
              render={(props) => <BannerTextBlock {...props}></BannerTextBlock>}
            ></Carousel.TextBlock>
          </>
        )}
      ></Carousel.Item>
    </Carousel>
  )
}
