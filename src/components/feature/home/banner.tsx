// import Wrapper from "@/components/layout/wrapper";
// import BannerAnimation from "@/components/shared/banner-animation";
import { BannerTextBlock, Carousel } from '@/components/shared/banner'
import Button from '@/components/shared/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { homepageBanner } from '@/data/homepage-banner'

export default function HomeCarousel() {
  const t = useTranslations('HomePage')
  return (
    <Carousel data={homepageBanner} duration={15}>
      <Carousel.Item
        render={(item) => (
          <>
            <Carousel.Video videoURL={item.videoURL!} />
            <Carousel.TextBlock
              heading={t('home_title')}
              paragraph={t('paragraph')}
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
  )
}
