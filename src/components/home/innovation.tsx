import Image from "next/image";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";

export default function Invitation() {
  return (
    <div className="py-16 grid place-items-center bg-gray-50 min-h-screen">
      <div className="container space-y-6">
        <SectionTitle className="mb-14 leading-tight">
          Join Our World of Innovation
        </SectionTitle>
        <div className="md:flex md:gap-10 items-center">
          <div className="md:flex-1 w-full">
            <Image
              src="/assets/images/homepage/invitation.webp"
              alt="image"
              width={590}
              height={590}
              className="rounded aspect-square w-full h-full object-cover"
            />
          </div>
          <div className="md:flex-1 mt-10 md:mt-0">
            <h3 className="text-xl lg:text-3xl font-semibold leading-tight font-title">
              A Digital Agency That Broadens Your Horizons
            </h3>
            <div className="text-sm mt-4 space-y-2">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
              <p>
                opposed to using &apos;Content here, content her making look
                like readable English. Many desktop publishing packages web page
                editors now use.
              </p>
            </div>
            <Button className="mt-4" variant="primary">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
