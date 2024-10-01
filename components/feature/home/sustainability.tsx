import Wrapper from "@/components/layout/wrapper";
// import Image from "next/image";
// import SectionTitle from "@/components/shared/section-title";
// import Button from "@/components/shared/button";
import { ImageShade } from "@/components/shared/media-shade";
import { TextBlock } from "@/components/shared/text-block";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Sustainability() {
  return (
    <div className="h-screen relative grid place-items-center">
      <ImageShade
        src="/assets/images/homepage/sustainability.webp"
        alt="sustainability"
      />

      <Wrapper
        size="sm"
        className="relative flex flex-col md:flex-row md:items-center"
      >
        <div className="font-semibold  max-w-[40ch] border-b-2 md:border-b-0 md:border-r-2 md:pr-6 mr-9 pb-6 mb-6 md:pb-0 md:mb-0">
          <TextBlock
            tagLine="Sustainability"
            heading="Building prosperity & self-sufficiency"
            paragraph="In a rapidly changing post-Covid world, and with the challenges of
              climate change, we all need to react and adapt. Employees,
              customers, partners, and investors want companies to get involved
              and demonstrate their value to society. We are aware of our
              responsibilities and the Group is determined to meet these new
              challenges."
          />
        </div>
        <div className="text-white  font-semibold">
          <h4 className="mb-2 text-md">7 SUSTAINABILITY PILLARS</h4>
          <div className="max-w-96 grid grid-rows-[repeat(80px)] grid-cols-4 gap-4 uppercase flex-1 h-full text-[10px]">
            <div className="">
              <div className="size-16 border rounded grid place-items-center text-white">
                <Icons.Financial className="size-12" />
              </div>
              <span>Financial</span>
            </div>
            <div className="">
              <div className="size-16 border rounded grid place-items-center">
                <Icons.Institutional className="size-12" />
              </div>
              <span>INSTITUTIONAL</span>
            </div>
            <div className="">
              <div className="size-16 border rounded grid place-items-center">
                <Icons.Economic className="size-12" />
              </div>
              <span>ECONOMIC</span>
            </div>
            <div className="">
              <div className="size-16 border rounded grid place-items-center">
                <Icons.Operational className="size-12" />
              </div>
              <span>OPERATIONAL</span>
            </div>
            <div className="">
              <div className="size-16 border rounded grid place-items-center">
                <Icons.Environmental className="size-12" />
              </div>
              <span>ENVIRONMENTAL</span>
            </div>
            <div className="">
              <div className="size-16 border rounded grid place-items-center">
                <Icons.Social className="size-12" />
              </div>
              <span>SOCIAL</span>
            </div>
            <div className="">
              <div className="size-16 border rounded grid place-items-center">
                <Icons.Cultural className="size-12" />
              </div>
              <span>CULTURAL</span>
            </div>
            <div className="">
              <Link
                href="/businesses"
                className="size-16 border rounded grid place-items-center"
              >
                <Icons.ChevronRight className="size-8" />
              </Link>
              <span>Read more</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
