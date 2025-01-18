interface SocialLink {
  name: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: Array<{
    name: string;
    url: string;
  }>;
}

interface GeneralInquiries {
  email: string;
  city: string;
  street: string;
}

interface FooterData {
  socialLinks: SocialLink[];
  sections: FooterSection[];
  "General Inquiries": GeneralInquiries;
}

import * as path from "@/paths";

export const footerData: FooterData = {
  socialLinks: [
    {
      name: "Facebook",
      url: path.facebook(),
    },
    {
      name: "Instagram",
      url: path.instagram(),
    },
    {
      name: "LinkedIn",
      url: path.linkedin(),
    },
    {
      name: "Twitter",
      url: path.twitter(),
    },
    {
      name: "YouTube",
      url: path.youtube(),
    },
  ],
  sections: [
    {
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
    },
    {
      title: "BUSINESSES",
      links: [
        { name: "Technologies", url: path.businessTechnologies() },
        { name: "Medical Services", url: path.businessMedicalServices() },
        { name: "Launderettes", url: path.businessLaunderettes() },
        { name: "Ice Ivoire", url: path.businessIceIvoire() },
        { name: "Commodities", url: path.businessCommodities() },
        { name: "Real Estate", url: path.businessRealEstate() },
        { name: "Fertilizer", url: path.businessRealEstate() },
        { name: "Logistics", url: path.businessLogistics() },
        { name: "Petrochemicals", url: path.businessPetrochemicals() },
      ],
    },
  ],
  "General Inquiries": {
    email: "contact@groupcenturions.com",
    street: "2563 High street",
    city: "Los Angeles, California",
  },
};
