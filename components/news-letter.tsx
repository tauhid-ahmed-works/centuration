import Wrapper from "./layout/wrapper";
import Button from "./shared/button";
import * as Typography from "./shared/typography";

export default function NewsLetter() {
  return (
    <div className="overflow-hidden relative">
      <div className="relative -mx-8 md:mx-0 mb-10 before:absolute before:bg-white before:h-1/2 before:w-full before:inset-x-0 before:z-0">
        <Wrapper>
          <div className="flex items-center justify-center bg-pattern-1 rounded relative">
            <div className="relative font-medium space-y-1 md:space-y-2 max-w-[500px] mx-auto px-8 md:px-0 py-14 lg:py-20">
              <Typography.H2 className="text-white">
                Subscribe To Centurion
              </Typography.H2>
              <p className="pb-4 text-white">
                For receiving our news and updates in your inbox directly
              </p>
              <div className="relative bg-gray-100 outline-transparent outline focus-within:outline-brand-500 focus-within:ring-1 focus-within:shadow-lg rounded flex items-center transition-transform">
                <input
                  className="w-full focus:ring-0 border-transparent focus:border-transparent rounded text-gray-800 bg-transparent outline-transparent ring-transparent"
                  placeholder="Your email address"
                  type="text"
                />

                <Button variant="primary" className="self-stretch">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
