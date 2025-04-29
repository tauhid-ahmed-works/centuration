import Link from "next/link";
import Image from "next/image";
import * as path from "@/paths";
import AnimatedCard from "./animate-card";

const businessCardData = [
  {
    title: "Technology",
    mediaSrc: "/assets/images/business/technology/banner/banner-image-01.webp",
    path: path.businessTechnologiesPath(),
  },
  {
    title: "Medical Service",
    mediaSrc:
      "/assets/images/business/medical-service/banner/banner-image-1.webp",
    path: path.businessMedicalServicesPath(),
  },
  {
    title: "Launderettes",
    mediaSrc:
      "/assets/images/business/launderettes/banner/launderette-banner-1.webp",

    path: path.businessLaunderettesPath(),
  },
  {
    title: "Commodities",
    mediaSrc:
      "/assets/images/business/commodities/banner/commodities-banner-01.webp",
    path: path.businessCommoditiesPath(),
  },
  {
    title: "Fertilizer",
    mediaSrc: "/assets/images/business/fertilizer/banner/banner-image-01.webp",
    path: path.businessFertilizerPath(),
  },
  {
    title: "Ice Ivoire",
    mediaSrc: "/assets/images/business/ice-ivoire/banner/banner-image-1.webp",
    path: path.businessIceIvoirePath(),
  },

  {
    title: "Logistics",
    mediaSrc: "/assets/images/business/logistics/banner/image-01.webp",
    path: path.businessLogisticsPath(),
  },

  {
    title: "Petrochemicals",
    mediaSrc:
      "/assets/images/business/petrochemicals/banner/banner-image-01.webp",
    path: path.businessPetrochemicalsPath(),
  },
  {
    title: "Real State",
    mediaSrc: "/assets/images/business/real-estate/banner/banner-image-01.webp",
    path: path.businessRealEstatePath(),
  },
];

export function BusinessCard({
  limit = businessCardData.length,
}: {
  limit?: number;
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3">
      {businessCardData
        .slice(0, limit)
        .map(
          (
            item: { title: string; mediaSrc: string; path: string },
            index: number
          ) => (
            <AnimatedCard
              index={index}
              className="h-60 lg:h-72"
              key={item.title}
            >
              <Link
                href={item.path}
                className="relative block size-full rounded overflow-hidden after:absolute after:inset-0 after:bg-black/50 text-white max-w-96 mx-auto"
              >
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={item.mediaSrc}
                  alt={item.title}
                  fill
                  sizes="30vw"
                />
                <div className="absolute inset-0 flex flex-col justify-center p-8 z-10 space-y-4">
                  <h3 className="text-xl font-semibold px-4 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white">
                    {item.title?.toUpperCase()}
                  </h3>
                </div>
              </Link>
            </AnimatedCard>
          )
        )}
    </div>
  );
}
