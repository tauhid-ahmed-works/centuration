import { useTranslations } from "next-intl";
import SectionTitle from "../section-title";
import Image from "next/image";
// import Button from "../shared/button";
import Link from "next/link";

import { mediaData } from "@/data/media-data";
import AnimatedCard from "../animate-card";

export default function MediaCard() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-10 md:pt-20 md:pb-14">
      <div className="container">
        <SectionTitle className="mb-10">
          {t("media_page_main_title_news_update")}
        </SectionTitle>
        <div className="grid gap-4 grid-cols-auto-fit-100 gap-y-20">
          {mediaData.map((data, index) => (
            // <div
            //   key={data.id}
            //   className="bg-white p-2 h-full relative shadow-xl"
            // >
            //   <div className="">
            //     <Image
            //       width={1000}
            //       height={1000}
            //       src={data.imageUrl}
            //       alt="media image"
            //       className="w-full h-[200px] object-cover"
            //     />
            //   </div>

            //   <div className="pl-5 pb-4">
            //     <time className="bg-brand-500 px-5 py-1 absolute right-2 bottom-[249px] rounded-tl-lg">
            //       02 June, 2022
            //     </time>
            //     <div>
            //       <h3 className="font-medium text-brand-500 my-2">By Admin</h3>
            //       <span className="font-medium text-lg text-gray-850">
            //         {data.title}
            //       </span>
            //       <p className="text-sm my-5 line-clamp-3">{data.content}</p>
            //     </div>
            //     <Link
            //       href={`/media/${data.id}`}
            //       className="text-xl font-medium text-brand-500"
            //     >
            //       Read More
            //     </Link>
            //     <div className="bg-brand-500 w-[14px] h-[1px]"></div>
            //   </div>
            // </div>
            <AnimatedCard key={data.id} index={index}>
              <div className="bg-white p-2 h-full relative shadow-xl">
                <div className="">
                  <Image
                    width={1000}
                    height={1000}
                    src={data.imageUrl}
                    alt="media image"
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                <div className="pl-5 pb-4">
                  <time className="bg-brand-500 text-white px-5 py-1 absolute right-2 bottom-[249px] rounded-tl-lg">
                    02 June, 2022
                  </time>
                  <div>
                    <h3 className="font-medium text-brand-500 my-2">
                      By Admin
                    </h3>
                    <span className="font-medium text-lg text-gray-850">
                      {data.title}
                    </span>
                    <p className="text-sm my-5 line-clamp-3">{data.content}</p>
                  </div>
                  <Link
                    href={`/media/${data.id}`}
                    className="text-xl font-medium text-brand-500"
                  >
                    Read More
                  </Link>
                  <div className="bg-brand-500 w-[14px] h-[1px]"></div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
