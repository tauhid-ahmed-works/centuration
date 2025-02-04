import * as path from "@/paths";

export type NavigationLink = {
  name: string;
  href: string;
  children?: NavigationLink[];
};

export const businessPaths = [
  {
    name: "Technologies",
    href: path.businessTechnologiesPath(),
  },
  {
    name: "Medical Services",
    href: path.businessMedicalServicesPath(),
  },
  {
    name: "Launderettes",
    href: path.businessLaunderettesPath(),
  },
  {
    name: "Ice Ivoire",
    href: path.businessIceIvoirePath(),
  },
  {
    name: "Commodities",
    href: path.businessCommoditiesPath(),
  },
  {
    name: "Real Estate",
    href: path.businessRealEstatePath(),
  },
  {
    name: "Fertilizer",
    href: path.businessFertilizerPath(),
  },
  {
    name: "Logistics",
    href: path.businessLogisticsPath(),
  },
  {
    name: "Petrochemicals",
    href: path.businessPetrochemicalsPath(),
  },
];

export const navigationLinks: NavigationLink[] = [
  {
    name: "About Us",
    href: path.aboutUsPath(),
  },
  {
    name: "Our Businesses",
    href: path.ourBusinessesPath(),
    children: businessPaths,
  },
  {
    name: "Sustainability",
    href: path.sustainabilityPath(),
  },
  {
    name: "Centurion Foundation",
    href: path.centurionFoundationPath(),
  },
  {
    name: "Media",
    href: path.mediaPath(),
  },
  {
    name: "Career",
    href: path.careerPath(),
  },
  {
    name: "Contact",
    href: path.contactPath(),
  },
];
