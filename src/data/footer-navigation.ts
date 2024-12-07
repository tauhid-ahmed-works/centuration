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

export const footerData: FooterData = {
  socialLinks: [
    {
      name: "Facebook",
      url: "https://facebook.com/groupcenturions",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/groupcenturions",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/groupcenturions",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/groupcenturions",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/groupcenturions",
    },
  ],
  sections: [
    {
      title: "COMPANY",
      links: [
        { name: "About Us", url: "/about" },
        {
          name: "Centurion Fondation",
          url: "/centurion-fondation",
        },
        { name: "Media", url: "/media" },
        { name: "Career", url: "/career" },
        { name: "Our Businesses", url: "/businesses" },
        { name: "Sustainability", url: "/sustainability" },
      ],
    },
    {
      title: "BUSINESSES",
      links: [
        { name: "Technologies", url: "/businesses/technologies" },
        { name: "Medical Services", url: "/businesses/medical-services" },
        { name: "Laundreneets", url: "/businesses/self-service-launderettes" },
        { name: "Ice Ivoire", url: "/businesses/ice-ivoire" },
        { name: "Commodities", url: "/businesses/commodities" },
        { name: "Real Estate", url: "/businesses/real-estate" },
        { name: "Fertilizer", url: "/businesses/fertilizer" },
        { name: "Logistics", url: "/businesses/logistics" },
        { name: "Petrochemicals", url: "/businesses/petrochemicals" },
      ],
    },
  ],
  "General Inquiries": {
    email: "contact@groupcenturions.com",
    street: "2563 High street",
    city: "Los Angeles, California",
  },
};

/*

{
      title: "BUSINESSES",
      links: [
        { name: "FAQ", url: "/faq" },
        { name: "Contact Us", url: "/contact" },
        { name: "Terms & Conditions", url: "/terms-and-conditions" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },

*/
