import { mediaData } from "@/data/media-data";
import { useTranslations } from "next-intl";
import Wrapper from "@/components/layout/wrapper";
import Image from "next/image";
import BannerAnimation from "@/components/shared/banner-animation";

export default function Media({ params }: { params: { mid: string } }) {
  const data = mediaData.find((item) => item.id == +params.mid);
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="h-screen relative w-full flex items-center">
        <div className="absolute w-full h-full">
          <Image
            width={2000}
            height={2000}
            src="/assets/images/media/media-page-coverd-photo.webp"
            className="w-full h-full object-cover"
            alt={""}
          ></Image>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black/60"></div>

        <div className="relative w-full">
          <Wrapper>
            <div className="max-w-screen-md w-full text-white space-y-4">
              <h1 className="text-5.5xl font-semibold font-title">
                {t("media_page_title")}
              </h1>
            </div>
          </Wrapper>
        </div>
        <BannerAnimation />
      </div>
      <Wrapper>
        <Image
          src={data?.imageUrl as string}
          width={1920}
          height={1080}
          alt={data?.title as string}
        />
        <span className="block">Posted by: By Admin</span>
        <span className="block">Posted on: 02 June, 2022</span>
        <h1 className="text-4.5xl font-title max-w-[40ch]">{data?.title}</h1>
        <p>{data?.content}</p>
      </Wrapper>
    </>
  );
}
