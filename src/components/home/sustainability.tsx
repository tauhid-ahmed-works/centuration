import Wrapper from "../layout/wrapper";
import Image from "next/image";
import SectionTitle from "../shared/section-title";
import Button from "../shared/button";

export default function Sustainability() {
  return (
    <div className="h-screen grid place-items-center py-16 bg-black">
      <div className="relative w-full min-h-[60vh] grid place-items-center">
        <Image
          src="/assets/images/homepage/sustainability.webp"
          alt="sustainability"
          width={800}
          height={400}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-black/80"></div>

        <Wrapper size="sm" className="relative space-y-6">
          <SectionTitle className="text-white mb-6">
            Sustainability
          </SectionTitle>
          <div className="mx-auto max-w-[80ch] text-white">
            <p>
              In a rapidly changing post-Covid world, and with the challenges of
              climate change, we all need to react and adapt. Employees,
              customers, partners, and investors want companies to get involved
              and demonstrate their value to society. We are aware of our
              responsibilities and the Group is determined to meet these new
              challenges.
            </p>
            <Button className="mt-4">Learn More</Button>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
