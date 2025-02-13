import { useLocale } from "next-intl";
import Image from "next/image";
import { mediaData } from "@/data/media";
import { Heading } from "@/components/heading";

export default function MediaCard({ slug }: { slug: string }) {
  const locale = useLocale();
  const media = mediaData(locale as "en" | "fr");
  const latestNews = media.find(
    (d) => d.id === Number(slug.slice(slug.lastIndexOf("-") + 1))
  );
  return (
    <section className="section" data-padding="lg">
      <div className="container" data-size="md">
        <div className="py-10 space-y-4">
          <Heading as="h1" size="3xl">
            {latestNews?.title}
          </Heading>
          <div className="text-secondary-400">
            <span className="block">Posted by: By Admin</span>
            <span className="block">Posted on: 02 June, 2022</span>
          </div>
          <div className="relative h-96">
            <Image
              src={latestNews?.imageSrc as string}
              fill
              sizes="100vw"
              alt={latestNews?.title as string}
              className="size-full object-cover"
            />
          </div>
          <p>{latestNews?.content}</p>
        </div>
      </div>
    </section>
  );
}
