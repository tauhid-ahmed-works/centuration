"use client";
import { AnimatePresence, motion } from "motion/react";
import { Heading } from "@/components/heading";
import { useState } from "react";
import Image from "next/image";

const galleryData = [
  {
    id: "4fb0dd5c-a471-48c5-bff7-d8b9f6b967c1",
    imageUrl: "/assets/images/media/latest/media-image-10.webp",
    title: "Recent Update",
    description:
      "This image showcases the latest updates and belongs to the 'Recent' category.",
    date: "2024-09-20T00:00:00Z",
    category: "recent",
    tabCategory: "Most Recent",
    tags: ["latest", "tech", "update"],
  },
  {
    id: "fc1b6bf6-dc86-4b8c-bdbc-d3c7efd20c3e",
    imageUrl: "/assets/images/media/latest/media-image-09.webp",
    title: "Corporate Announcement",
    description:
      "A company-wide announcement related to new corporate policies.",
    date: "2024-09-19T00:00:00Z",
    category: "news",
    tabCategory: "Company News",
    tags: ["corporate", "latest", "announcement", "update"],
  },
  {
    id: "b1bdc185-c38e-4918-b60c-4ed3d8888cb5",
    imageUrl: "/assets/images/media/latest/media-image-08.webp",
    title: "Tech Conference 2024",
    description: "Highlights from the annual Tech Conference held in 2024.",
    date: "2024-09-18T00:00:00Z",
    category: "event",
    tabCategory: "Events",
    tags: ["conference", "tech", "2024"],
  },
  {
    id: "43970ed2-c0c7-4907-8593-1a728bcb9bd8",
    imageUrl: "/assets/images/media/latest/media-image-07.webp",
    title: "Networking Event",
    description:
      "An image capturing the key moments from the networking event.",
    date: "2024-09-17T00:00:00Z",
    category: "event",
    tabCategory: "Events",
    tags: ["networking", "event", "business"],
  },
  {
    id: "f1c2e860-e5f4-40a6-8622-1a9b1b8bd422",
    imageUrl: "/assets/images/media/latest/media-image-05.webp",
    title: "Serene Landscape",
    description: "A breathtaking view of a natural landscape.",
    date: "2024-09-16T00:00:00Z",
    category: "nature",
    tabCategory: "Nature",
    tags: ["landscape", "nature", "scenic"],
  },
  {
    id: "8bd08d33-5dcc-46d0-825e-1df12c641d8e",
    imageUrl: "/assets/images/media/latest/media-image-04.webp",
    title: "Serene Landscape",
    description: "A breathtaking view of a natural landscape.",
    date: "2024-09-16T00:00:00Z",
    category: "nature",
    tabCategory: "Nature",
    tags: ["landscape", "nature", "scenic"],
  },
  {
    id: "1dc4744c-b3ad-4406-zf5b-5983b4d194da",
    imageUrl: "/assets/images/media/latest/media-image-06.webp",
    title: "Serene Landscape",
    description: "A breathtaking view of a natural landscape.",
    date: "2024-09-16T00:00:00Z",
    category: "nature",
    tabCategory: "Nature",
    tags: ["landscape", "nature", "scenic"],
  },
  {
    id: "2f035e7f-58e8-471a-bdgd-c4181c205d8f",
    imageUrl: "/assets/images/media/latest/media-image-01.webp",
    title: "Serene Landscape",
    description: "A breathtaking view of a natural landscape.",
    date: "2024-09-16T00:00:00Z",
    category: "nature",
    tabCategory: "Nature",
    tags: ["landscape", "latest", "scenic"],
  },
  {
    id: "2f035e7f-58e8-q71a-bdad-c4181c205d8f",
    imageUrl: "/assets/images/media/latest/media-image-03.webp",
    title: "Serene Landscape",
    description: "A breathtaking view of a natural landscape.",
    date: "2024-09-16T00:00:00Z",
    category: "nature",
    tabCategory: "Nature",
    tags: ["landscape", "event", "scenic"],
  },
  {
    id: "2f035e7f-58e8-q71a-bdad-544181c205d8f",
    imageUrl: "/assets/images/media/latest/media-image-02.webp",
    title: "Serene Landscape",
    description: "A breathtaking view of a natural landscape.",
    date: "2024-09-16T00:00:00Z",
    category: "nature",
    tabCategory: "Nature",
    tags: ["landscape", "nature", "scenic"],
  },
];

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState("");
  const tabs = Array.from(new Set(galleryData.map((data) => data.tabCategory)));
  const filteredData = galleryData.filter((data) =>
    activeTab ? data.tabCategory === activeTab : data.tabCategory !== ""
  );

  return (
    <section className="section relative" data-padding="md">
      <div className="container">
        <div className="rounded relative text-center space-y-4">
          <Heading size="3xl" as="h2">
            Gallery
          </Heading>
          <ul className="flex gap-2 justify-center py-4 rounded sm:text-md md:text-base sticky">
            <li>
              <button
                className={`relative before:inset-x-px before:h-0.5 before:absolute before:bottom-0 before:bg-brand-500 before:rounded px-2 rounded border cursor-pointer ${
                  activeTab === ""
                    ? "before:block before:bg-brand-500"
                    : "before:hidden"
                }`}
                onClick={() => setActiveTab("")}
              >
                All
              </button>
            </li>
            {tabs.map((tab) => (
              <li key={tab}>
                <button
                  className={`px-2 rounded border cursor-pointer ${
                    activeTab === tab
                      ? "before:block before:bg-brand-500"
                      : "before:hidden"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence initial={false}>
              {filteredData.map((data) => (
                <motion.div
                  key={data.id}
                  className="rounded overflow-hidden min-h-72"
                  transition={{ duration: 0.3 }}
                  layoutId={`image-${data.id}`}
                >
                  <div className="relative w-full h-72 aspect-video">
                    <Image
                      className="w-full block object-cover"
                      src={data.imageUrl}
                      alt="image"
                      fill
                      sizes="30vw"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
