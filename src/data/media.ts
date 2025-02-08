import { mediaEn, mediaFr } from "@/dictionaries/locales/media";

// Define the type for the 'latest' object in your media data
type MediaContent = {
  title: string;
  content: string;
};

type MediaData = {
  [key: string]: MediaContent; // We define the keys as strings to accommodate dynamic indexing
};

// Extend the structure of your data
const data = {
  en: mediaEn.latest as MediaData,
  fr: mediaFr.latest as MediaData,
};

export function mediaData(locale: "en" | "fr") {
  const mediaData = [
    "/assets/images/media/latest/media-image-01.webp",
    "/assets/images/media/latest/media-image-02.webp",
    "/assets/images/media/latest/media-image-03.webp",
    "/assets/images/media/latest/media-image-04.webp",
    "/assets/images/media/latest/media-image-05.webp",
    "/assets/images/media/latest/media-image-06.webp",
  ].map((item, index) => {
    const key = (index + 1).toString(); // Convert index to string
    const mediaContent = data[locale][key]; // Access the content using the string key
    return {
      imageSrc: item,
      id: index + 1,
      title: mediaContent?.title, // Safely access the title
      content: mediaContent?.content, // Safely access the content
    };
  });
  return mediaData;
}
