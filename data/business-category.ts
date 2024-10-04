export type BusinessCategory = {
  id: number;
  businessName: string;
  available: boolean;
  resume: string;
  thumbnailImage: string;
  bannerImage: string;
  bannerImages: string[];
  bannerVideo: string;
  descriptions: {
    short: string;
    long: {
      title: string;
      paragraphs: string[];
    };
  };
  path: string;
  businessCategory?: string;
};

export const businessCategories = [
  {
    id: 1,
    businessName: "Technologies",
    available: true,
    resume: "A brief guide to modern technological advancements.",
    thumbnailImage: "/assets/images/business/tec.webp",
    bannerImage: "/assets/images/business/tec.webp",
    bannerImages: [],
    bannerVideo:
      "https://player.vimeo.com/video/893303552?background=1&h=7f9e933e6f&autoplay=1&loop=1&title=0&byline=0&portrait=1",
    descriptions: {
      short: "An introduction to the latest trends and innovations in technology.",
      long: {
        title: "Innovations in Modern Technology",
        paragraphs: [
          "Technology is evolving at an unprecedented rate, reshaping industries and everyday life. Staying informed on these advancements is crucial for businesses looking to remain competitive in the digital age.",
          "In this guide, we will explore key areas of technological innovation, including artificial intelligence, cloud computing, cybersecurity, and blockchain. Each of these fields presents unique opportunities for businesses to streamline processes, improve security, and enhance customer experiences.",
          "The goal is to provide insights into how these technologies can be integrated into your organization, helping you stay ahead of the curve and capitalize on the digital transformation that is redefining the modern world.",
        ],
      },
    },
    path: "/businesses/technologies",
  },

  {
    id: 2,
    businessName: "Medical Services",
    available: true,
    resume: "A comprehensive guide to providing quality medical care.",
    thumbnailImage: "/assets/images/business/med.webp",
    bannerImage: "/assets/images/business/med/1.webp",
    bannerImages: [
      "/assets/images/business/med/1.webp",
      "/assets/images/business/med/2.webp",
      "/assets/images/business/med/3.webp",
    ],
    bannerVideo: "",
    descriptions: {
      short:
        "An overview of the exceptional medical care and facilities provided by our healthcare team.",
      long: {
        title: "PrimeCare Medical Center",
        paragraphs: [
          "At PrimeCare Medical Center, we are dedicated to offering the best healthcare services to our community. Our team of highly trained medical professionals is committed to ensuring your well-being through personalized and compassionate care. Whether you're in need of routine check-ups, emergency care, or specialized treatments, we have you covered.",
          "Founded in 2010, PrimeCare has quickly grown into one of the most trusted healthcare providers in the region. Our facilities are equipped with state-of-the-art technology to handle a wide range of medical needs, from diagnostics to complex surgeries. We offer services across various specialties, including pediatrics, cardiology, oncology, and orthopedics.",
          "Our mission is to provide affordable and accessible healthcare without compromising quality. We believe in empowering our patients by providing them with the knowledge and resources they need to maintain their health. Whether it's preventive care or chronic disease management, we stand by our commitment to excellence in medical care.",
        ],
      },
    },
    sections: {
      1: {
        title: "SIMPLY BUY OR RENT -CT SCANNER IN A CONTAINER",
        content: `The CT-CUBE is a modular, mobile CT unit with treatment room, switch room and
            patient entrance room. You can rent the CT-CUBE for your clinic or practice
            worldwide and according to your needs. The rental period is flexible &ndash; from
            just two weeks to over a year and longer. Just a few hours after delivery, the
            computer tomograph can be put into operation via plug and play. All that is
            needed is an electricity connection. In order to keep the risk of infection as
            low as during pandemic times possible, are also separate in all three rooms
            Air conditioning installed. Upon request, we can manufacture the size, floor
            plan and equipment of the CT-CUBE also individually according to your wishes.`,
      },

      2: {
        title: "YOU PROFIT FROM",
        content: [
          "Ready to use quickly (plug and play)",
          "Generous space of 35-48 square meters",
          "Maintenance costs included in the rental price",
          "Flexible rental period",
          "Patient-friendly interior design",
          "Visually appealing integration into the building landscape",
        ],
      },
      3: {
        title: "AMENITIES",
        content: [
          `Examination room with CTControl room with its own entrance Patient room with
            its own entrance Full radiation isolation Storage option for medical equipment
            Sink (requires water and sewage connection) Fully air-conditioned Underfloor
            heating.`,
        ],
        list: [
          "Take details till \t INFECTION PREVENTION \t SAFE PATIENT CARE GUARANTEE",
        ],
      },
    },

    path: "/businesses/medical-services",
  },
  {
    id: 3,
    businessName: "Laundreneets",
    available: true,
    resume: "A brief guide to hassle-free, modern laundry services.",
    thumbnailImage: "/assets/images/business/laun.webp",
    bannerImage: "/assets/images/business/laun.webp",
    bannerImages: [],
    bannerVideo: "",
    descriptions: {
      short: "An introduction to convenient and efficient laundry services.",
      long: {
        title: "Laundreneets: Revolutionizing Laundry Services",
        paragraphs: [
          "Laundreneets offers a modern approach to laundry, providing fast, reliable, and eco-friendly services tailored to meet the needs of busy individuals and families. Our advanced technology and streamlined processes ensure that your laundry is handled with the utmost care and efficiency.",
          "We offer a wide range of services including wash-and-fold, dry cleaning, and ironing. Customers can easily schedule pickups and deliveries through our app, making laundry day hassle-free. Our eco-conscious approach ensures that all our products and processes are environmentally friendly.",
          "Our goal is to save you time and effort, while ensuring your clothes receive the highest quality of care. Whether it’s everyday laundry or special garment cleaning, Laundreneets provides convenience, quality, and peace of mind.",
        ],
      },
    },
    path: "/businesses/self-service-launderettes",
  },
  {
    id: 4,
    businessName: "Ice Ivoire",
    available: true,
    resume: "A brief guide to premium handcrafted ice cream.",
    thumbnailImage: "/assets/images/business/ice.webp",
    bannerImage: "/assets/images/business/ice.webp",
    bannerImages: [],
    bannerVideo: "",
    descriptions: {
      short: "An introduction to delicious, artisanal ice cream creations.",
      long: {
        title: "Our ice vending machine",
        paragraphs: [
          "Our ice vending machine is easy to handle and accepts all forms of payment, including credit cards, bills, coins, cashless and more.It makes ice cubes from purified water, resulting in 100% fresh and safe ice cubes.",
          "Our ice vending machine is safer than packaged ice, as there is no human factor in the production process.",
          "To get the ice, customers can fetch a bag that is available at the machine, or use their own icebox.",
        ],
      },
    },
    path: "/businesses/ice-ivoire",
  },
  {
    id: 5,
    businessName: "Commodities",
    available: true,
    resume: "A brief guide to global commodities trading and management.",
    thumbnailImage: "/assets/images/business/como.webp",
    bannerImage: "/assets/images/business/como.webp",
    bannerImages: [],
    bannerVideo: "",
    descriptions: {
      short: "An introduction to commodities markets and trading strategies.",
      long: {
        title: "Global Commodities Trading and Management",
        paragraphs: [
          "Commodities play a crucial role in the global economy, serving as the building blocks for production and manufacturing. Understanding the dynamics of commodities trading can help businesses and investors hedge against risks and capitalize on market opportunities.",
          "This guide delves into the essential aspects of trading key commodities such as oil, gold, agricultural products, and industrial metals. We will explore market trends, pricing mechanisms, and the impact of geopolitical events on commodity prices.",
          "Our aim is to provide a comprehensive overview of the commodities market, offering insights into trading strategies, risk management, and how businesses can leverage these markets to enhance their operations and investments.",
        ],
      },
    },
    path: "/businesses/commodities",
  },

  {
    id: 6,
    businessName: "Real Estate",
    available: true,
    resume: "A brief guide to creating a scalable design system.",
    thumbnailImage: "/assets/images/business/real-estate.webp",
    bannerImage: "/assets/images/business/real-estate.webp",
    bannerImages: [],
    bannerVideo: "",
    descriptions: {
      short: "An introduction to design systems and their importance.",
      long: {
        title: "MHF Properties",
        paragraphs: [
          "Our goal at MHF is to ensure your living experience in Lagos is luxurious, comfortable and ultimately stress-free! We are a service-oriented company specializing in managing, developing and or renovating luxury properties and apartment homes. We also provide long and short term residential leases in our exquisite list of deluxe properties spread across Ikoyi and Victoria Island, Lagos.",
          "The company was founded in 2011 and offers one of the largest floor areas in the market. Each of our luxury apartments provides spaces to create beautiful memories, extraordinary customer service, with the highest focus on excellence. MHF also offers tailored facility management services to homes, shopping malls, office spaces, schools, sports clubs and more. MHF has overseen major renovation works for clients and is an integral part of the team handling the development of the new Dangote Oil Refinery office located in Ikoyi, Lagos.",
          "Our portfolio of services is constantly growing and we have recently introduced a highly sought function of interior decoration. We will work with you to transform your space into the best version of your imagination. We provide a distinctive level of standard in our facilities as well as excellence in all our services, earning the trust and confidence of our clients as pioneers in luxury apartments in Nigeria.",
        ],
      },
    },
    path: "/businesses/real-estate",
  },
  {
    id: 7,
    businessName: "Fertilizer",
    available: true,
    resume: "A brief guide to creating a scalable design system.",
    thumbnailImage: "/assets/images/business/real-estate.webp",
    bannerImage: "/assets/images/business/real-estate.webp",
    bannerImages: [],
    bannerVideo: "",
    descriptions: {
      short: "An introduction to design systems and their importance.",
      long: {
        title: "MHF Properties",
        paragraphs: [
          "Our goal at MHF is to ensure your living experience in Lagos is luxurious, comfortable and ultimately stress-free! We are a service-oriented company specializing in managing, developing and or renovating luxury properties and apartment homes. We also provide long and short term residential leases in our exquisite list of deluxe properties spread across Ikoyi and Victoria Island, Lagos.",
          "The company was founded in 2011 and offers one of the largest floor areas in the market. Each of our luxury apartments provides spaces to create beautiful memories, extraordinary customer service, with the highest focus on excellence. MHF also offers tailored facility management services to homes, shopping malls, office spaces, schools, sports clubs and more. MHF has overseen major renovation works for clients and is an integral part of the team handling the development of the new Dangote Oil Refinery office located in Ikoyi, Lagos.",
          "Our portfolio of services is constantly growing and we have recently introduced a highly sought function of interior decoration. We will work with you to transform your space into the best version of your imagination. We provide a distinctive level of standard in our facilities as well as excellence in all our services, earning the trust and confidence of our clients as pioneers in luxury apartments in Nigeria.",
        ],
      },
    },
    businessCategory: "FERTILIZER",
    path: "/businesses/fertilizer",
  },
  {
    id: 8,
    businessName: "Logistics",
    available: true,
    resume:
      "A big part of manufacturing is products finding their ways into the consumer hands, the Group makes sure that this is handled end to end.",
    thumbnailImage: "/assets/images/business/logistics/1.webp",
    bannerImage: "/assets/images/business/logistics/1.webp",
    bannerImages: [
      "/assets/images/business/logistics/1.webp",
      "/assets/images/business/logistics/2.webp",
      "/assets/images/business/logistics/3.webp",
    ],
    bannerVideo: "",
    descriptions: {
      short: "An introduction to design systems and their importance.",
      long: {
        // dummy
        title: "MHF Properties",
        paragraphs: [
          // dummy
          "Our goal at MHF is to ensure your living experience in Lagos is luxurious, comfortable and ultimately stress-free! We are a service-oriented company specializing in managing, developing and or renovating luxury properties and apartment homes. We also provide long and short term residential leases in our exquisite list of deluxe properties spread across Ikoyi and Victoria Island, Lagos.",
          "The company was founded in 2011 and offers one of the largest floor areas in the market. Each of our luxury apartments provides spaces to create beautiful memories, extraordinary customer service, with the highest focus on excellence. MHF also offers tailored facility management services to homes, shopping malls, office spaces, schools, sports clubs and more. MHF has overseen major renovation works for clients and is an integral part of the team handling the development of the new Dangote Oil Refinery office located in Ikoyi, Lagos.",
          "Our portfolio of services is constantly growing and we have recently introduced a highly sought function of interior decoration. We will work with you to transform your space into the best version of your imagination. We provide a distinctive level of standard in our facilities as well as excellence in all our services, earning the trust and confidence of our clients as pioneers in luxury apartments in Nigeria.",
        ],
      },
    },
    sections: {
      1: {
        title: "Centurion Logistics",
        content: `The biggest challenge for manufacturing is to tackle logistics and distribution costs, as products will have to be moved to newer markets from production centers. Apart from ramping up production capabilities across Africa by adding new greenfield projects, clinker grinding plants, and import terminals, we accord top priority to scientific logistics. Our Fleet is a fast and very reliable service provider to thousands of customers nationwide. Our finished products are delivered to our markets nationwide. With a professional team that has a minimum of 15 years of industry experience, our goal is to be the best by helping our customers achieve their delivery schedules and timelines.`,
      },
    },

    path: "/businesses/logistics",
  },
  {
    id: 9,
    businessName: "Petrochemicals",
    available: false,
    resume: "A brief guide to creating a scalable design system.",
    thumbnailImage: "/assets/images/business/logistics/1.webp",
    bannerImage: "/assets/images/business/logistics/1.webp",
    bannerImages: [
      "/assets/images/business/logistics/1.webp",
      "/assets/images/business/logistics/2.webp",
      "/assets/images/business/logistics/3.webp",
    ],
    bannerVideo: "",
    descriptions: {
      short: "An introduction to design systems and their importance.",
      long: {
        title: "MHF Properties",
        paragraphs: [
          "Our goal at MHF is to ensure your living experience in Lagos is luxurious, comfortable and ultimately stress-free! We are a service-oriented company specializing in managing, developing and or renovating luxury properties and apartment homes. We also provide long and short term residential leases in our exquisite list of deluxe properties spread across Ikoyi and Victoria Island, Lagos.",
          "The company was founded in 2011 and offers one of the largest floor areas in the market. Each of our luxury apartments provides spaces to create beautiful memories, extraordinary customer service, with the highest focus on excellence. MHF also offers tailored facility management services to homes, shopping malls, office spaces, schools, sports clubs and more. MHF has overseen major renovation works for clients and is an integral part of the team handling the development of the new Dangote Oil Refinery office located in Ikoyi, Lagos.",
          "Our portfolio of services is constantly growing and we have recently introduced a highly sought function of interior decoration. We will work with you to transform your space into the best version of your imagination. We provide a distinctive level of standard in our facilities as well as excellence in all our services, earning the trust and confidence of our clients as pioneers in luxury apartments in Nigeria.",
        ],
      },
    },
    path: "/businesses/petrochemicals",
  },
];
