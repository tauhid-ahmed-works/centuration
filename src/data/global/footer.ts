import * as path from "@/paths";

export const socialLinks = [
  { id: 1, name: "Facebook", url: path.facebook() },
  { id: 2, name: "Instagram", url: path.instagram() },
  { id: 3, name: "LinkedIn", url: path.linkedin() },
  { id: 4, name: "Twitter", url: path.twitter() },
  { id: 5, name: "YouTube", url: path.youtube() },
];

export const company = {
  title: "COMPANY",
  links: [
    { name: "About Us", url: path.aboutUs() },
    {
      name: "Centurion Foundation",
      url: path.centurionFoundation(),
    },
    { name: "Media", url: path.media() },
    { name: "Career", url: path.career() },
    { name: "Our Businesses", url: path.ourBusinesses() },
    { name: "Sustainability", url: path.sustainability() },
  ],
};

export const navigation = {
  title: "BUSINESSES",
  links: [
    { name: "Technologies", url: path.businessTechnologies() },
    { name: "Medical Services", url: path.businessMedicalServices() },
    { name: "Launderettes", url: path.businessLaunderettes() },
    { name: "Ice Ivoire", url: path.businessIceIvoire() },
    { name: "Commodities", url: path.businessCommodities() },
    { name: "Real Estate", url: path.businessRealEstate() },
    { name: "Fertilizer", url: path.businessFertilizer() },
    { name: "Logistics", url: path.businessLogistics() },
    { name: "Petrochemicals", url: path.businessPetrochemicals() },
  ],
};

export const generalInquiries = {
  email: "contact@groupcenturions.com",
  street: "2563 High street",
  city: "Los Angeles, California",
};
