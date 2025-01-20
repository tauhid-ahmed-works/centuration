import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Centuriation",
  description: "Centuriation About Page",
};
import Image from "next/image";
import { aboutCards } from "@/data/about";
import BannerAnimation from "@/components/banner-animation";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { Intro } from "./_components/intro";

export default function Page() {
  return (
    <>
      <Intro />
      <section className="mt-20 mb-40 md:mb-0">
        <div className="container">
          <div className="text-center">
            <Heading as="h2" size="4.5xl">
              Our Mission & Vision
            </Heading>
            <p className="mt-4 max-w-[60ch] mx-auto">
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
        </div>
      </section>

      <section className="h-[80vh] flex items-end lg:items-center justify-center relative mt-20">
        <Image
          src="/assets/images/about/ceo.webp"
          className="w-full h-full object-cover object-center absolute inset-0"
          alt="about team"
          width="400"
          height="400"
        />
        <div className="container">
          <div className="bg-transparent ml-auto max-w-[60ch] p-10 relative z-10 rounded backdrop-blur-3xl mb-20 md:mb-0">
            <div className="text-white w-full relative">
              <Heading as="h2" size="4.5xl">
                CEO Biography
              </Heading>
              <p className="mt-4">
                Mr Bandeira is the CEO of Centurion Group, leading the
                organization with a vision for growth and innovation. With years
                of experience in the industry, He has successfully driven
                strategic initiatives, ensuring sustainable development and
                market leadership. Under his leadership, Centurion Group has
                achieved significant milestones and continues to pioneer new
                advancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <Heading as="h2" size="4xl">
              Centurion group leadership
            </Heading>
            <p className="mt-4 px-6">
              Our senior executives bring tremendous experience, visionary
              thinking and a shared commitment to excellence, creativity, and
              innovation to the day to day operation of the company.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="container">
          <div className="-mr-4 md:flex flex-wrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="basis-1/2 lg:basis-1/4 pr-4 pb-4">
                <Image
                  src="/assets/images/about/executive.webp"
                  className="w-full max-w-96 mx-auto object-cover"
                  alt="about team"
                  width="400"
                  height="400"
                />
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold">Sani Dangote</h3>
                  <p className="text-sm">Group Vice President</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary-500 text-white h-80 p-10 md:p-20 text-center mt-10 flex items-center">
        <div className="max-w-3xl mx-auto">
          <Heading as="h2" size="4xl">
            Strategic Tech Partner for Productivity and Growth
          </Heading>
          <p className="text-md leading-tight mt-4">
            We are a company that is at the forefront of technology, becoming a
            strategic ally for your company or business, providing you with the
            best solutions and services that ensure your productivity,
            competitiveness, permanence and excellent service for your clients.
          </p>
        </div>
      </section>

      <section className="my-20">
        <div className="container text-center space-y-2">
          <Heading as="h2" size="4.5xl">
            OUR VALUES
          </Heading>
          <p>
            Our values are the foundation of our company and define who we are
            and how we work.
          </p>
        </div>

        <div className="container mt-14 space-y-10">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className={`flex flex-col gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="md:flex-1 max-w-[60ch] space-y-6 self-center">
                <Heading as="h3" size="4xl">
                  {card.title}
                </Heading>
                <p>{card.description}</p>
                <Button>About Me</Button>
              </div>
              <div className="md:flex-1 overflow-hidden rounded">
                <Image
                  src="/assets/images/about/about-card.webp"
                  alt="about-card"
                  width={300}
                  height={300}
                  className="size-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
