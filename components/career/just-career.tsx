import Image from "next/image";
import Wrapper from "../layout/wrapper";

export default function JustCareer() {
  return (
    <section className="bg-gray-50 py-10 sm:px-10 md:px-0 md:py-16 md:mb-20">
      <Wrapper>
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
            <p className="font-bold text-base">
              Working with the Centurion Group is more than just a career; it’s
              meaningful work that improves the lives of millions of people.
            </p>

            <div className="md:flex-row flex-col flex gap-10 justify-center items-center">
              {[...Array(3)].map((item) => (
                <div className="flex flex-col items-center" key={item}>
                  <div className="flex items-center justify-center bg-gray-100 p-5 rounded-full w-20 h-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#98c73d"
                      className="size-12"
                    >
                      <path
                        strokeLinecap="round"
                        d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                      />
                    </svg>
                  </div>
                  <span className="text-xl mt-5 block font-medium">
                    Flexible Work
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
