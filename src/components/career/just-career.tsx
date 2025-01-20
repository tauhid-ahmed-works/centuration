import Image from "next/image";
import { Icons } from "../icons";

export default function JustCareer() {
  return (
    <section className="bg-gray-50 py-10 sm:px-10 md:px-0 md:py-16 md:mb-20">
      <div className="container">
        <div className="md:flex md:gap-10 items-center py-10">
          <div className="md:flex-1 w-full">
            <Image
              src="/assets/images/career/career-sec.webp"
              alt="image"
              width={590}
              height={590}
              className="rounded aspect-square w-full h-full object-cover"
            />
          </div>
          <div className="md:flex-1 space-y-6 my-5">
            <h3 className="text-xl lg:text-5xl font-medium font-title">
              More than just a career
            </h3>
            <p className="font-semibold text-base">
              Working with the Centurion Group is more than just a career; it’s
              meaningful work that improves the lives of millions of people.
            </p>

            <div className="md:flex-row flex-col flex gap-10 justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center bg-gray-100 p-5 rounded-full w-20 h-20">
                  <Icons.FlexibleWork className="size-16 text-brand-500" />
                </div>
                <span className="text-xl mt-5 block font-medium">
                  Flexible Work
                </span>
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
