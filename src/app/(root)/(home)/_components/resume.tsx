import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/heading";

export default function CompanyResume() {
  return (
    <div className="h-screen grid place-items-center bg-gray-300 overflow-x-hidden relative">
      <Image
        className="size-full absolute inset-0 block object-cover brightness-50"
        src="/assets/images/homepage/resume.png"
        alt="image"
        fill
      />
      <div className="md:p-10 w-full h-[600px] relative flex items-center">
        <div className="container z-10 relative rounded">
          <div className="py-14 px-10 md:px-20 bg-gray-100 backdrop-blur w-full max-w-[600px] space-y-4">
            <Image
              src="/assets/icons/logo.webp"
              alt="centurition"
              width={100}
              height={100}
            />
            <Heading as="h2" className="text-gray-800">
              Impacting <span className="text-red-600">lives</span>
            </Heading>
            <p className="text-sm">
              Since its incorporation in 1994, the Aliko Dangote Foundation has
              worked hard to enhance opportunities for social change through
              strategic investments that improve health and wellbeing, promote
              quality education, and broaden economic empowerment opportunities.
            </p>
            <p className="font-bold uppercase flex gap-1 flex-wrap">
              <span className="text-gray-700">HEALTH.</span>
              <span className="text-green-600">EDUCATION.</span>{" "}
              <span className="text-red-600">EMPOWERMENT.</span>
              <span className="text-orange-600">RELIEF.</span>
            </p>
            <Link className="inline-block" href="/">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
