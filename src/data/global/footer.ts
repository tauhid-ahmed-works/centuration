import * as path from "@/paths";

export const socialLinks = [
  { id: 1, name: "Facebook", url: path.facebookPath() },
  { id: 2, name: "Instagram", url: path.instagramPath() },
  { id: 3, name: "LinkedIn", url: path.linkedinPath() },
  { id: 4, name: "Twitter", url: path.twitterPath() },
  { id: 5, name: "YouTube", url: path.youtubePath() },
];

export const company = {
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
};

export const navigation = {
  title: "BUSINESSES",
  links: [
    { name: "Technologies", url: path.businessTechnologiesPath() },
    { name: "Medical Services", url: path.businessMedicalServicesPath() },
    { name: "Launderettes", url: path.businessLaunderettesPath() },
    { name: "Ice Ivoire", url: path.businessIceIvoirePath() },
    { name: "Commodities", url: path.businessCommoditiesPath() },
    { name: "Real Estate", url: path.businessRealEstatePath() },
    { name: "Fertilizer", url: path.businessFertilizerPath() },
    { name: "Logistics", url: path.businessLogisticsPath() },
    { name: "Petrochemicals", url: path.businessPetrochemicalsPath() },
  ],
};

export const generalInquiries = {
  email: "contact@groupcenturions.com",
  street: "2563 High street",
  city: "Los Angeles, California",
};
