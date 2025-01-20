import Image from "next/image";
import { Typography } from "@/components/typography";
import Link from "next/link";

export default function CompanyResume() {
  return (
    <div className="h-screen grid place-items-center bg-gray-300 overflow-x-hidden">
      <div className="md:p-10 w-full h-[600px] relative flex items-center">
        <Image
          className="size-full absolute inset-0 block object-cover"
          src="/assets/images/resume.webp"
          alt="image"
          width={1920}
          height={1080}
        />
        <div className="container z-10 relative rounded">
          <div className="py-14 px-10 md:px-20 bg-gray-100 w-full max-w-[600px] space-y-4">
            <Image
              src="/assets/icons/logo.webp"
              alt="centurition"
              width={100}
              height={100}
            />
            <Typography.H2 className="text-gray-800">
              Impacting <span className="text-red-600">lives</span>
            </Typography.H2>
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
