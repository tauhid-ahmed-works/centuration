interface Link {
  name: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: Link[];
}

interface ContactInfo {
  email: string;
  city: string;
  street: string;
}

interface FooterData {
  socialLinks: Link[];
  sections: FooterSection[];
  contactInfo: ContactInfo;
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
      title: "Menu",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Media", url: "/media" },
        { name: "Career", url: "/career" },
        { name: "Our Businesses", url: "/businesses" },
        { name: "Sustainability", url: "/sustainability" },
      ],
    },
    {
      title: "Privacy",
      links: [
        { name: "FAQ", url: "/faq" },
        { name: "Contact Us", url: "/contact" },
        { name: "Terms & Conditions", url: "/terms-and-conditions" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
  ],
  contactInfo: {
    email: "contact@groupcenturions.com",
    street: "2563 High street",
    city: "Los Angeles, California",
  },
};
