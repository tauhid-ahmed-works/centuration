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
  company_name: string;
  address_line: string;
  city: string;
  country: string;
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
      url: path.facebookPath(),
    },
    {
      name: "Instagram",
      url: path.instagramPath(),
    },
    {
      name: "LinkedIn",
      url: path.linkedinPath(),
    },
    {
      name: "Twitter",
      url: path.twitterPath(),
    },
    {
      name: "YouTube",
      url: path.youtubePath(),
    },
  ],
  sections: [
    {
      title: "COMPANY",
      links: [
        { name: "About Us", url: path.aboutUsPath() },
        {
          name: "Centurion Foundation",
          url: path.centurionFoundationPath(),
        },
        { name: "Media", url: path.mediaPath() },
        { name: "Career", url: path.careerPath() },
        { name: "Our Businesses", url: path.ourBusinessesPath() },
        { name: "Sustainability", url: path.sustainabilityPath() },
      ],
    },
    {
      title: "BUSINESSES",
      links: [
        { name: "Technologies", url: path.businessTechnologiesPath() },
        { name: "Medical Services", url: path.businessMedicalServicesPath() },
        { name: "Launderettes", url: path.businessLaunderettesPath() },
        { name: "Ice Ivoire", url: path.businessIceIvoirePath() },
        { name: "Commodities", url: path.businessCommoditiesPath() },
        { name: "Real Estate", url: path.businessRealEstatePath() },
        { name: "Fertilizer", url: path.businessRealEstatePath() },
        { name: "Logistics", url: path.businessLogisticsPath() },
        { name: "Petrochemicals", url: path.businessPetrochemicalsPath() },
      ],
    },
  ],
  "General Inquiries": {
    company_name: "CENTURION",
    address_line: "01 Bp 581",
    city: "Abidjan",
    country: "Côte d’Ivoire (Ivory Coast)",
  },
};
