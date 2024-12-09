import * as path from "@/paths";

export type NavigationLink = {
  name: string;
  href: string;
  children?: NavigationLink[];
};

export const businessPaths = [
  {
    name: "Technologies",
    href: path.businessTechnologies(),
  },
  {
    name: "Medical Services",
    href: path.businessMedicalServices(),
  },
  {
    name: "Launderettes",
    href: path.businessLaunderettes(),
  },
  {
    name: "Ice Ivoire",
    href: path.businessIceIvoire(),
  },
  {
    name: "Commodities",
    href: path.businessCommodities(),
  },
  {
    name: "Real Estate",
    href: path.businessRealEstate(),
  },
  {
    name: "Fertilizer",
    href: path.businessFertilizer(),
  },
  {
    name: "Logistics",
    href: path.businessLogistics(),
  },
  {
    name: "Petrochemicals",
    href: path.businessPetrochemicals(),
  },
  {
    name: "All Businesses",
    href: path.ourBusinesses(),
  },
];

export const navigationLinks: NavigationLink[] = [
  {
    name: "About Us",
    href: path.aboutUs(),
  },
  {
    name: "Our Businesses",
    href: path.ourBusinesses(),
    children: businessPaths,
  },
  {
    name: "Sustainability",
    href: path.sustainability(),
  },
  {
    name: "Centurion Foundation",
    href: path.centurionFoundation(),
    children: businessPaths,
  },
  {
    name: "Media",
    href: path.media(),
  },
  {
    name: "Career",
    href: path.career(),
  },
  {
    name: "Contact",
    href: path.contact(),
  },
];
