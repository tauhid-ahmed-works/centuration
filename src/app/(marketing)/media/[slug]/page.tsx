import { useLocale } from "next-intl";
import Image from "next/image";
import { mediaData } from "@/data/media";
import { Heading } from "@/components/heading";

export default function Media(props: { params: Promise<{ slug: string }> }) {
  const locale = useLocale();
  const media = mediaData(locale as "en" | "fr");
  const latestNews = media.find(
    (d) =>
      d.id ===
      Number(props.params.slug.slice(props.params.slug.lastIndexOf("-") + 1))
  );
  console.log(latestNews);
  return (
    <section className="section" data-padding="sm">
      <div className="container" data-size="sm">
        <div className="py-10">
          <span className="block">Posted by: By Admin</span>
          <span className="block">Posted on: 02 June, 2022</span>
          <Heading as="h1" size="3xl">
            {latestNews?.title}
          </Heading>
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
