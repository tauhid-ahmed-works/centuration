import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Centuriation',
  description: 'Centuriation About Page',
}
import Image from 'next/image'
import { aboutCards } from '@/data/about-card'

import Wrapper from '@/components/layout/wrapper'
import BannerAnimation from '@/components/shared/banner-animation'
import aboutBannerImage from '@/public/assets/images/about/about-team.webp'
import ceoImage from '@/public/assets/images/about/ceo.webp'
import executiveImage from '@/public/assets/images/about/executive.webp'
import Button from '@/components/shared/button'
import SectionTitle from '@/components/shared/section-title'

export default function Page() {
  return (
    <>
      <div className="h-screen text-white relative flex items-center">
        <Image
          src={aboutBannerImage}
          className="w-full h-full object-cover absolute"
          alt="about team"
        />
        <div className="absolute inset-0 w-full h-full bg-black/70"></div>
        <Wrapper className="relative text-white font-semibold z-10">
          <div className="max-w-[65ch] rounded bg-transparent backdrop-blur-sm">
            <h1 className="">About Us</h1>
            <h2 className="text-4.5xl mt-2 leading-none">
              Premier Service Provider
            </h2>
            <p className="text-md leading-tight mt-4">
              Providing Your Basic Needs With our transformational projects and
              businesses across food, shelter and construction, Centurion Group
              continues to grow its vision of becoming the leading provider of
              essential services and needs in Africa.
            </p>
          </div>
        </Wrapper>
        <BannerAnimation />
      </div>

      <section className="mt-20 mb-40 md:mb-0">
        <Wrapper>
          <div className="text-center">
            <SectionTitle>Our Mission & Vision</SectionTitle>
            <p className="mt-4 px-6 text-left lg:text-center">
              Centurion Group continues to grow its focus of becoming the
              leading provider of essential needs in Services, Technologies,
              Food and Shelter in Sub-Saharan Africa. Our vision is to be a
              world-class enterprise that is passionate about the quality of
              life of the general populace. Our mission is to touch the lives of
              people by providing their basic needs. We continue to sustain and
              improve on our market leadership in Technologies and medical
              services, Commodities, Self-service launderettes.
            </p>
          </div>
        </Wrapper>
      </section>

      <div className="h-[80vh] flex items-end lg:items-center justify-center relative mt-20">
        <Image
          src={ceoImage}
          className="w-full h-full object-cover object-[50%] md:object-[30%] lg:object-center absolute inset-0"
          alt="about team"
        />
        <Wrapper>
          <div className="bg-transparent ml-auto max-w-[60ch] p-10 relative z-10 rounded backdrop-blur-3xl mb-20 md:mb-0">
            <div className="text-white w-full relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl">
                CEO Biography
              </h2>
              <div className="mt-6">
                <p className="text-sm">
                  Mr Bandeira is the CEO of Centurion Group, leading the
                  organization with a vision for growth and innovation. With
                  years of experience in the industry, He has successfully
                  driven strategic initiatives, ensuring sustainable development
                  and market leadership. Under his leadership, Centurion Group
                  has achieved significant milestones and continues to pioneer
                  new advancements.
                </p>
                {/* <Button className="mt-4">About More</Button> */}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <section className="mt-20">
        <Wrapper>
          <div className="text-center">
            <SectionTitle>Centurion group leadership</SectionTitle>
            <p className="mt-4 px-6">
              Our senior executives bring tremendous experience, visionary
              thinking and a shared commitment to excellence, creativity, and
              innovation to the day to day operation of the company.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="mt-20">
        <Wrapper>
          <div className="-mr-4 md:flex flex-wrap">
            <div className="basis-1/2 lg:basis-1/4 pr-4 pb-4">
              <Image
                src={executiveImage}
                className="w-full max-w-96 mx-auto object-cover"
                alt="about team"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">Sani Dangote</h3>
                <p className="text-sm">Group Vice President</p>
              </div>
            </div>
            <div className="basis-1/2 lg:basis-1/4 pr-4 pb-4">
              <Image
                src={executiveImage}
                className="w-full max-w-96 mx-auto object-cover"
                alt="about team"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">Sani Dangote</h3>
                <p className="text-sm">Group Vice President</p>
              </div>
            </div>
            <div className="basis-1/2 lg:basis-1/4 pr-4 pb-4">
              <Image
                src={executiveImage}
                className="w-full max-w-96 mx-auto object-cover"
                alt="about team"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">Sani Dangote</h3>
                <p className="text-sm">Group Vice President</p>
              </div>
            </div>
            <div className="basis-1/2 lg:basis-1/4 pr-4 pb-4">
              <Image
                src={executiveImage}
                className="w-full max-w-96 mx-auto object-cover"
                alt="about team"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">Sani Dangote</h3>
                <p className="text-sm">Group Vice President</p>
              </div>
            </div>
            <div className="basis-1/2 lg:basis-1/4 pr-4 pb-4">
              <Image
                src={executiveImage}
                className="w-full max-w-96 mx-auto object-cover"
                alt="about team"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">Sani Dangote</h3>
                <p className="text-sm">Group Vice President</p>
              </div>
            </div>
            <div className="basis-1/2 lg:basis-1/4 pr-4 pb-4">
              <Image
                src={executiveImage}
                className="w-full max-w-96 mx-auto object-cover"
                alt="about team"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">Sani Dangote</h3>
                <p className="text-sm">Group Vice President</p>
              </div>
            </div>
            <div className="basis-1/2 lg:basis-1/4 pr-4 pb-4">
              <Image
                src={executiveImage}
                className="w-full max-w-96 mx-auto object-cover"
                alt="about team"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">Sani Dangote</h3>
                <p className="text-sm">Group Vice President</p>
              </div>
            </div>
            <div className="basis-1/2 lg:basis-1/4 pr-4 pb-4">
              <Image
                src={executiveImage}
                className="w-full max-w-96 mx-auto object-cover"
                alt="about team"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold">Sani Dangote</h3>
                <p className="text-sm">Group Vice President</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-20 md:py-32 bg-pattern-2 my-20 text-white">
        <Wrapper className="space-y-4">
          <SectionTitle className="text-white text-left" decorator={false}>
            Strategic Tech Partner for Productivity and Growth
          </SectionTitle>
          <p className="max-w-[80ch]">
            We are a company that is at the forefront of technology, becoming a
            strategic ally for your company or business, providing you with the
            best solutions and services that ensure your productivity,
            competitiveness, permanence and excellent service for your clients.
          </p>

          {/* <div className="max-w-[65ch] rounded bg-transparent backdrop-blur-sm">
            <h1 className="">OUR VALUES</h1>
            <h2 className="text-4.5xl mt-2 leading-none">
              Strategic Tech Partner for Productivity and Growth
            </h2>
            <p className="text-md leading-tight mt-4">
              We are a company that is at the forefront of technology, becoming a
              strategic ally for your company or business, providing you with the
              best solutions and services that ensure your productivity,
              competitiveness, permanence and excellent service for your clients.
            </p>
          </div> */}
        </Wrapper>
      </section>

      <section className="my-20">
        <div className="text-center">
          <SectionTitle>OUR VALUES</SectionTitle>
          <p className="mt-4 px-6">
            Our values are the foundation of our company and define who we are
            and how we work.
          </p>
        </div>

        <Wrapper className="mt-14 space-y-10">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className={`flex flex-col gap-10 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="md:flex-1 max-w-[60ch] space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold">{card.title}</h3>
                <p>{card.description}</p>
                <Button>About Me</Button>
              </div>
              <div className="md:flex-1 overflow-hidden rounded">
                <Image
                  src="/assets/images/about/about-card.webp"
                  alt="about-card"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Wrapper>
      </section>
    </>
  )
}
