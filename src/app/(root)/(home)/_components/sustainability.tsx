import Image from "next/image";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Heading } from "@/components/heading";
import * as path from "@/paths";
import React from "react";

interface Feature {
  name: string;
  icon: React.ReactNode;
  href?: string;
}

const features: Feature[] = [
  { name: "Financial", icon: <Icons.Financial /> },
  { name: "Institutional", icon: <Icons.Institutional /> },
  { name: "Economic", icon: <Icons.Economic /> },
  { name: "Operational", icon: <Icons.Operational /> },
  { name: "Environment", icon: <Icons.Environmental /> },
  { name: "Social", icon: <Icons.Social /> },
  { name: "Cultural", icon: <Icons.Cultural /> },
  {
    name: "Read more",
    icon: <Icons.ChevronRight />,
    href: path.ourBusinesses(),
  },
];

export default function Sustainability() {
  return (
    <div className="h-screen relative flex items-center justify-center before:absolute before:inset-0 before:bg-black/70 text-white before:z-10">
      <Image
        fill
        src="/assets/images/homepage/sustainability.webp"
        alt="sustainability"
      />
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-8">
        <div className="max-w-[80ch] max-md:border-b border-white pb-4 pr-4 md:border-r space-y-4 shrink-0 flex-1">
          <Heading as="h2" size="base">
            Sustainability
          </Heading>
          <Heading size="3.5xl" as="h3">
            Building prosperity & self-sufficiency
          </Heading>
          <p>
            In a rapidly changing post-Covid world, and with the challenges of
            climate change, we all need to react and adapt. Employees,
            customers, partners, and investors want companies to get involved
            and demonstrate their value to society. We are aware of our
            responsibilities and the Group is determined to meet these new
            challenges.
          </p>
        </div>
        <div className="text-white flex items-center flex-col shrink-0 flex-1">
          <h4 className="mb-4 text-md self-start">7 SUSTAINABILITY PILLARS</h4>
          <ul className="flex flex-wrap gap-6 [&>*]:shrink-0 [&>*]:basis-16 whitespace-nowrap">
            {features.map((item) =>
              item.href ? (
                <Link key={item.name} href={item.href}>
                  <FeatureItem item={item} />
                </Link>
              ) : (
                <FeatureItem key={item.name} item={item} />
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
  item: Feature;
}

function FeatureItem({ item }: FeatureItemProps) {
  return (
    <li className="text-xs">
      {React.cloneElement(item.icon, {
        className: "size-16 rounded border flex items-center justify-center",
      })}
      {item.name}
    </li>
  );
}
