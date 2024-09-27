import Wrapper from "./layout/wrapper";
import Button from "./shared/button";

export default function NewsLetter() {
  return (
    <div className="overflow-hidden">
      <div className="relative z-0 -mx-8 md:mx-0 py-10">
        <Wrapper>
          <div className="flex items-center justify-center h-48 md:h-56 lg:h-64 bg-pattern-1 rounded relative">
            {/* <Image
            className="object-cover absolute inset-0 w-full h-full"
            src="/assets/images/news-letter-pattern.webp"
            alt="newsletter"
            width={800}
            height={400}
          /> */}
            <div className="absolute inset-0 w-full h-full bg-black/30"></div>
            <div className="relative font-medium space-y-1 md:space-y-2 max-w-[500px] mx-auto px-8 md:px-0">
              <h2 className="text-2xl lg:text-3xl text-white font-semibold">
                Subscribe To Centurion
              </h2>
              <p className="pb-4 text-white">
                For receiving our news and updates in your inbox directly
              </p>
              <div className="relative bg-gray-100 outline-transparent outline focus-within:outline-brand-500 focus-within:ring-1 focus-within:shadow-lg rounded flex items-center transition-transform">
                <input
                  className="w-full focus:ring-0 border-transparent focus:border-transparent rounded text-gray-800 bg-transparent outline-transparent ring-transparent"
                  placeholder="Your email address"
                  type="text"
                />

                <Button variant="primary">Subscribe</Button>
              </div>
            </div>
          </div>
        </Wrapper>
        <div className="absolute top-0 w-full h-[50%] bg-white -z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}
