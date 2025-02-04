import Image from "next/image";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Heading } from "@/components/heading";
import * as path from "@/paths";
import React from "react";
import { useTranslations } from "next-intl";

type Features = {
  icon: React.ReactNode;
  name: string;
};

type FeatureItemProps = {
  item: Features;
};

const features = [
  { icon: <Icons.Financial /> },
  { icon: <Icons.Institutional /> },
  { icon: <Icons.Economic /> },
  { icon: <Icons.Operational /> },
  { icon: <Icons.Environmental /> },
  { icon: <Icons.Social /> },
  { icon: <Icons.Cultural /> },
];

export default function Sustainability() {
  const t = useTranslations("home");
  const featuresData: Features[] = features.map((item, index) => ({
    ...item,
    name: t.raw("sustainability.features")[index],
  }));
  return (
    <section className="h-screen relative flex items-center justify-center before:absolute before:inset-0 before:bg-black/60 text-white before:z-10">
      <Image
        fill
        src="/assets/images/homepage/sustainability.webp"
        alt="sustainability"
      />
      <div className="max-w-lg md:max-w-4xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-8">
        <div className="max-md:border-b border-white pb-4 pr-4 md:border-r space-y-4 shrink-0 flex-1">
          <Heading as="h2" size="base">
            {t("sustainability.title")}
          </Heading>
          <Heading size="3xl" as="h3">
            {t("sustainability.subtitle")}
          </Heading>
          <p>{t("sustainability.description")}</p>
        </div>
        <div className="text-white flex flex-col flex-1">
          <Heading className="px-4" as="h3" size="base">
            {t("sustainability.feature_title")}
          </Heading>
          <ul className="flex flex-wrap">
            {featuresData.map((item) => (
              <FeatureItem key={item.name} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ item }: FeatureItemProps) {
  return (
    <li className="relative p-2 sm:p-4">
      <span className="flex items-center justify-center size-16 border rounded">
        {React.isValidElement(item.icon)
          ? React.cloneElement(
              item.icon as React.ReactElement<{ className?: string }>, // Explicitly typing props
              {
                className: "size-12 flex items-center justify-center",
              }
            )
          : item.icon}
      </span>
      <span className="absolute -bottom-0 left-4 text-xs hidden sm:block">
        {item.name}
      </span>
    </li>
  );
}
