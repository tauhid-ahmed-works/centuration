import Wrapper from "@/components/layout/wrapper";
import BannerAnimation from "@/components/shared/banner-animation";
import Button from "@/components/shared/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Banner() {
  const t = useTranslations("HomePage");
  return (
    <div className="h-screen relative flex items-center">
      <div className="absolute inset-0 after:absolute after:inset-0 after:bg-shade-1">
        <video className="object-cover size-full" muted loop autoPlay>
          <source src="/assets/video/home-video.mp4" type="video/mp4" />
        </video>
      </div>

      <Wrapper className="relative">
        <div className="max-w-[60ch] w-full text-white">
          <h1 className="h1">{t("home_title")}</h1>
          <p className="text-lg mt-6">{t("paragraph")}</p>
          <div className="space-x-4 mt-10">
            <Button>Learn More</Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
