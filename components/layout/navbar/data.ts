interface NavigationItem {
  name: string;
  path: string;
  children: NavigationItem[];
}

import { businessCategories } from "@/data/business-category";

export const navigationData: NavigationItem[] = [
  {
    name: "About Us",
    path: "/about",
    children: [],
  },
  {
    name: "Our Businesses",
    path: "/businesses",
    children: [
      ...businessCategories.map((item) => ({
        name: item.businessName,
        path: item.path,
        children: [],
      })),
    ],
  },
  {
    name: "Sustainability",
    path: "/sustainability",
    children: [],
  },
  // {
  //   name: "Location",
  //   path: "/location",
  //   children: [],
  // },
  {
    name: "Media",
    path: "/media",
    children: [],
  },
  {
    name: "Career",
    path: "/career",
    children: [],
  },
  {
    name: "Contact",
    path: "/contact",
    children: [],
  },
];
