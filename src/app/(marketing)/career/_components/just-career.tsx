import Image from "next/image";
import { Icons } from "@/components/icons";
import { Heading } from "@/components/heading";

export default function JustCareer() {
  return (
    <section className="section" data-padding="md">
      <div className="container">
        <div className="md:flex md:gap-10 items-center space-y-4">
          <div className="md:flex-1 w-full relative h-72">
            <Image
              src="/assets/images/career/career-sec.webp"
              alt="image"
              fill
              className="rounded aspect-square w-full h-full object-cover"
            />
          </div>
          <div className="md:flex-1 space-y-4">
            <Heading size="2xl" as="h2">
              More than just a career
            </Heading>
            <p>
              Working with the Centurion Group is more than just a career; it’s
              meaningful work that improves the lives of millions of people.
            </p>

            <div className="sm:flex-row flex gap-10 justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-gray-100 p-5 rounded-full w-20 h-20">
                  <Icons.FlexibleWork className="size-16 text-brand-500" />
                </div>
                <span className="text-xl block font-medium">Flexible Work</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-gray-100 p-5 rounded-full w-20 h-20">
                  <Icons.Tour className="size-16 text-brand-500" />
                </div>
                <span className="text-xl mt-5 block font-medium">
                  Yearly Tour
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-gray-100 p-5 rounded-full w-20 h-20">
                  <Icons.Holiday className="size-16 text-brand-500" />
                </div>
                <span className="text-xl mt-5 block font-medium">
                  Free Holiday
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
