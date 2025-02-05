import { useTranslations } from "next-intl";
import { Heading } from "@/components/heading";
import Image from "next/image";
import Link from "next/link";

import { mediaData } from "@/data/media";
import AnimatedCard from "@/components/animate-card";
import { Button } from "@/components/ui/button";

export default function MediaCard() {
  const t = useTranslations("HomePage");
  return (
    <section className="section" data-padding="md">
      <div className="container">
        <div className="space-y-6">
          <Heading size="3xl" as="h2">
            {t("media_page_main_title_news_update")}
          </Heading>
          <div className="grid gap-4 grid-cols-auto-fit-100 gap-y-20">
            {mediaData.map((data, index) => (
              <AnimatedCard key={data.id} index={index}>
                <div className="bg-white p-2 h-full relative shadow-xl">
                  <div className="relative h-72 aspect-video w-full rounded overflow-hidden">
                    <Image
                      fill
                      src={data.imageUrl}
                      alt="media image"
                      className="object-cover"
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
                      <p className="text-sm my-5 line-clamp-3">
                        {data.content}
                      </p>
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/media/${data.id}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
