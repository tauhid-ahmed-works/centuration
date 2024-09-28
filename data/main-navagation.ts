import { businessCategories } from "./business-category";

interface NavigationItem {
  name: string;
  path: string;
  children?: NavigationItem[];
  hasChildren?: boolean;
}

export const navigationData: NavigationItem[] = [
  {
    name: "About Us",
    path: "/about",
    children: [],
  },
  {
    name: "Our Businesses",
    path: "/businesses",
    children: businessCategories.map((item) => ({
      name: item.businessName,
      path: item.path,
      children: [],
    })),
  },
  {
    name: "Sustainability",
    path: "/sustainability",
    children: [],
  },
  {
    name: "Centurion Fondation",
    path: "/centurion-fondation",
    children: [],
  },
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
