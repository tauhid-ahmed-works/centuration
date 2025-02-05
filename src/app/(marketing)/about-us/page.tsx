import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Centuriation",
  description: "Centuriation About Page",
};
import Image from "next/image";
import { aboutCards } from "@/data/about";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { bannerData } from "@/data/about";
import { Hero } from "@/components/hero";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Hero data={bannerData} />
      <section className="section" data-padding="md">
        <div className="container" data-size="md">
          <div className="text-center space-y-4">
            <Heading as="h2" size="4xl">
              Our Mission & Vision
            </Heading>
            <p>
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

      <section className="section relative" data-padding="md">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/about/ceo.webp"
            className="size-full object-cover"
            alt="about team"
            fill
          />
        </div>
        <div className="container">
          <div className="flex justify-end min-h-96 items-center">
            <div className="p-10 max-w-md relative z-10 rounded inline-block text-white space-y-4 backdrop-blur-sm">
              <Heading className="text-white" as="h2" size="4xl">
                CEO Biography
              </Heading>
              <p>
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

      <section className="section space-y-12" data-padding="md">
        <div className="container" data-size="md">
          <div className="text-center space-y-4">
            <Heading as="h2" size="4xl">
              Centurion group leadership
            </Heading>
            <p>
              Our senior executives bring tremendous experience, visionary
              thinking and a shared commitment to excellence, creativity, and
              innovation to the day to day operation of the company.
            </p>
          </div>
        </div>
        <div className="container" data-size="md">
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

      <section className="bg-secondary-500 section" data-padding="md">
        <div className="container" data-size="sm">
          <div className="text-center text-white space-y-6">
            <Heading as="h2" size="3xl">
              Strategic Tech Partner for Productivity and Growth
            </Heading>
            <p>
              We are a company that is at the forefront of technology, becoming
              a strategic ally for your company or business, providing you with
              the best solutions and services that ensure your productivity,
              competitiveness, permanence and excellent service for your
              clients.
            </p>
          </div>
        </div>
      </section>

      <section className="section" data-padding="md">
        <div className="container">
          <div className="text-center">
            <Heading as="h2" size="4xl">
              OUR VALUES
            </Heading>
            <p>
              Our values are the foundation of our company and define who we are
              and how we work.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="pt-12 space-y-10">
            {aboutCards.map((card, index) => (
              <div
                key={card.title}
                className={`flex flex-col gap-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="md:flex-1 space-y-4 self-center">
                  <Heading as="h3" size="2xl">
                    {card.title}
                  </Heading>
                  <p>{card.description}</p>
                  <Link href="#">
                    <Button size="sm">About Me</Button>
                  </Link>
                </div>
                <div className="md:flex-1 h-96 md:aspect-square overflow-hidden rounded relative">
                  <Image
                    src="/assets/images/about/about-card.webp"
                    alt="about-card"
                    fill
                    className="size-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
