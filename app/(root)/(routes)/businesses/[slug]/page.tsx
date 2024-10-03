'use client'

import { notFound } from 'next/navigation'
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string }
// }) {
//   return {
//     title:
//       'Business - ' +
//       removeDash(params.slug)
//         .split(' ')
//         .map((item) => item[0].toUpperCase() + item.slice(1))
//         .join(' '),
//   }
// }

const routes = [
  'technologies',
  'sustainability',
  'commodities',
  'petrochemicals',
  'real-estate',
  'logistics',
  'fertilizer',
  'ice-ivoire',
  'medical-services',
  'self-service-launderettes',
]

import ComoCarousel from '@/components/feature/business/como/banner'
import FertilizerCarousel from '@/components/feature/business/fertilizer/banner'
import TecnoCarousel from '@/components/feature/business/tecno/banner'
import { ArrowLong } from '@/components/icons'
import Wrapper from '@/components/layout/wrapper'
import BannerAnimation from '@/components/shared/banner-animation'
import { Typography } from '@/components/shared/typography'
import { businessCategories } from '@/data/business-category'
import Image from 'next/image'
import Link from 'next/link'
import { removeDash } from '@/libs/utils/removeDash'

export default function Business({ params }: { params: { slug: string } }) {
  if (!routes.includes(params.slug)) notFound()
  const data = businessCategories.find((item) =>
    item.path.includes(params.slug)
  )
  if (!data?.available) return <ComingSoon />
  return (
    <>
      <div className="h-screen">
        {params.slug === 'fertilizer' && <FertilizerCarousel />}
        {params.slug === 'commodities' && (
          <>
            <ComoCarousel />
          </>
        )}
        {params.slug === 'technologies' && (
          <>
            <TecnoCarousel />
          </>
        )}

        {params.slug !== 'commodities' &&
        params.slug !== 'fertilizer' &&
        params.slug !== 'technologies' ? (
          <>
            <Image
              src={data.bannerImage as string}
              alt={data.businessName}
              width={1920}
              height={1080}
              className="object-cover w-full h-full block"
            />
          </>
        ) : null}
        {params.slug !== 'commodities' &&
        params.slug !== 'fertilizer' &&
        params.slug !== 'technologies' ? (
          <div className="absolute flex items-center inset-0 w-full h-full">
            <Wrapper className=" text-white animate-revealin">
              <Typography.H1 className="mb-4">
                {data?.businessName}
              </Typography.H1>
              <p>{data?.resume}</p>
            </Wrapper>
          </div>
        ) : null}

        <BannerAnimation />
      </div>
      <Wrapper className="space-y-4 max-w-3xl pt-20 mb-10">
        <div>
          {params.slug === 'technologies' && (
            <div>
              <Typography.H2 className=" mb-6">
                Wireless call system
              </Typography.H2>

              <p className="max-w-[80ch] space-y-2 text-sm  mb-10">
                An effective tool for optimizing and analyzing staff work End at
                product catalog not included
              </p>

              <Typography.H2 className="mb-6">
                {data?.descriptions.long.title}
              </Typography.H2>

              <div className="max-w-[80ch] space-y-2 text-sm">
                {data.descriptions.long.paragraphs.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <div className="inline-block overflow-hidden rounded shadow-xl group mt-10 mb-5">
                <Link
                  className="bg-white text-gray-850 inline-flex justify-between"
                  href="https://soltrussia.ru/"
                  target="_blank"
                >
                  <span className="inline-flex px-4 items-center text-sm font-semibold">
                    See All
                  </span>
                  <span className="inline-flex items-center justify-center shrink-0 bg-gray-850 text-white size-14">
                    <ArrowLong className="size-5 group-hover:animate-bouncex" />
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* medical-services */}

        <div>
          {params.slug === 'medical-services' && (
            <div>
              <Typography.H2 className=" mb-6">
                SIMPLY BUY OR RENT -CT SCANNER IN A CONTAINER
              </Typography.H2>

              <p className="max-w-[80ch] space-y-2 mb-10">
                The CT-CUBE is a modular, mobile CT unit with treatment room,
                switch room and patient entrance room. You can rent the CT-CUBE
                for your clinic or practice worldwide and according to your
                needs. The rental period is flexible – from just two weeks to
                over a year and longer. Just a few hours after delivery, the
                computer tomograph can be put into operation via plug and play.
                All that is needed is an electricity connection. In order to
                keep the risk of infection as low as during pandemic times
                possible, are also separate in all three rooms Air conditioning
                installed. Upon request, we can manufacture the size, floor plan
                and equipment of the CT-CUBE also individually according to your
                wishes.
              </p>

              <div className="inline-block overflow-hidden rounded shadow-xl group mt-10 mb-5">
                <Link
                  className="bg-white text-gray-850 inline-flex justify-between"
                  href="/contact"
                  target="_blank"
                >
                  <span className="inline-flex px-4 items-center text-sm font-semibold">
                    See All
                  </span>
                  <span className="inline-flex items-center justify-center shrink-0 bg-gray-850 text-white size-14">
                    <ArrowLong className="size-5 group-hover:animate-bounce" />
                  </span>
                </Link>
              </div>

              <Typography.H3 className=" mt-6">YOU PROFIT FROM</Typography.H3>

              <div className="max-w-[80ch] space-y-2 ml-4">
                <ul className="pt-8 pb-10 space-y-1 pl-6">
                  <li className="before:absolute before:size-2.5 before:bg-gray-950 before:rounded-full before:-ml-4 before:mt-[7px]">
                    Ready to use quickly (plug and play)
                  </li>
                  <li className="before:absolute before:size-2.5 before:bg-gray-950 before:rounded-full before:-ml-4  before:mt-[7px]">
                    Generous space of 35–48 square meters
                  </li>
                  <li className="before:absolute before:size-2.5 before:bg-gray-950 before:rounded-full before:-ml-4  before:mt-[7px]">
                    Maintenance costs included in the rental price
                  </li>
                  <li className="before:absolute before:size-2.5 before:bg-gray-950 before:rounded-full before:-ml-4  before:mt-[7px]">
                    Flexible rental period
                  </li>
                  <li className="before:absolute before:size-2.5 before:bg-gray-950 before:rounded-full before:-ml-4  before:mt-[7px]">
                    Patient-friendly interior design
                  </li>
                  <li className="before:absolute before:size-2.5 before:bg-gray-950 before:rounded-full before:-ml-4  before:mt-[7px]">
                    Visually appealing integration into the building landscape
                  </li>
                </ul>
              </div>

              <Typography.H2 className=" mt-6">AMENITIES</Typography.H2>

              <p className="max-w-[80ch] space-y-2 mt-5">
                Examination room with CTControl room with its own entrance
                Patient room with its own entrance Full radiation isolation
                Storage option for medical equipment Sink (requires water and
                sewage connection) Fully air-conditioned Underfloor heating.
              </p>

              <div className="max-w-[80ch] space-y-2 text-sm font-normal ml-4">
                <ul className="text-left pt-8 pb-10 md:text-lg text-base font-normal">
                  <li className="before:absolute before:size-2.5 before:bg-gray-950 before:rounded-full before:-ml-4  before:mt-2">
                    Take details till{' '}
                    <span className="font-bold">INFECTION PREVENTION:</span>{' '}
                    SAFE PATIENT CARE GUARANTEE
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* self-service-launderettes */}
        <div>
          {params.slug === 'self-service-launderettes' && (
            <div>
              <Typography.H2 className="mb-6">
                {data?.descriptions.long.title}
              </Typography.H2>

              <div className="max-w-[80ch] space-y-2 text-sm">
                {data.descriptions.long.paragraphs.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <div className="inline-block overflow-hidden rounded shadow-xl group mt-10 mb-5">
                <Link
                  className="bg-white text-gray-850 inline-flex justify-between"
                  href="https://chap-chap.ci"
                  target="_blank"
                >
                  <span className="inline-flex px-4 items-center text-sm font-semibold">
                    See All
                  </span>
                  <span className="inline-flex items-center justify-center shrink-0 bg-gray-850 text-white size-14">
                    <ArrowLong className="size-5 group-hover:animate-bouncex" />
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* ice-ivoire */}
        <div>
          {params.slug === 'ice-ivoire' && (
            <div>
              <Typography.H2 className="mb-6">
                {data?.descriptions.long.title}
              </Typography.H2>

              <div className="max-w-[80ch] space-y-2 text-sm">
                {data.descriptions.long.paragraphs.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <div className="inline-block overflow-hidden rounded shadow-xl group mt-10 mb-5">
                <Link
                  className="bg-white text-gray-850 inline-flex justify-between"
                  href="#/"
                  target="_blank"
                >
                  <span className="inline-flex px-4 items-center text-sm font-semibold">
                    See All
                  </span>
                  <span className="inline-flex items-center justify-center shrink-0 bg-gray-850 text-white size-14">
                    <ArrowLong className="size-5 group-hover:animate-bouncex" />
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* real-estate */}
        <div>
          {params.slug === 'real-estate' && (
            <div>
              <h2 className="text-4.5xl font-semibold font-title text-gray-850 leading-none mb-6">
                {data?.descriptions.long.title}
              </h2>

              <div className="max-w-[80ch] space-y-2 text-sm">
                {data.descriptions.long.paragraphs.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <div className="inline-block overflow-hidden rounded shadow-xl group mt-10 mb-5">
                <Link
                  className="bg-white text-gray-850 inline-flex justify-between"
                  href="/contact"
                  target="_blank"
                >
                  <span className="inline-flex px-4 items-center text-sm font-semibold">
                    See All
                  </span>
                  <span className="inline-flex items-center justify-center shrink-0 bg-gray-850 text-white size-14">
                    <ArrowLong className="size-5 group-hover:animate-bouncex" />
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* fertilizer */}
        <div>
          {params.slug === 'fertilizer' && (
            <div>
              <h2 className="text-4.5xl font-semibold font-title text-gray-850 leading-none mb-6">
                Unlock the Power of Growth with Fertilizer
              </h2>

              <div className="max-w-[80ch] space-y-2 text-sm">
                <p>
                  Enhance your soil’s nutrients and boost plant vitality with
                  the right fertilizer. From nurturing roots to promoting lush,
                  healthy greenery, fertilizers are the key to flourishing
                  gardens and thriving crops.
                </p>
              </div>

              <div className="inline-block overflow-hidden rounded shadow-xl group mt-10 mb-5">
                <Link
                  className="bg-white text-gray-850 inline-flex justify-between"
                  href="#/"
                  target="_blank"
                >
                  <span className="inline-flex px-4 items-center text-sm font-semibold">
                    See All
                  </span>
                  <span className="inline-flex items-center justify-center shrink-0 bg-gray-850 text-white size-14">
                    <ArrowLong className="size-5 group-hover:animate-bouncex" />
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </>
  )
}

function ComingSoon() {
  return (
    <div className="h-screen bg-gray-900 text-white lg:text-6xl md:text-4xl text-2xl flex items-center justify-center font-semibold">
      Coming Soon
    </div>
  )
}
