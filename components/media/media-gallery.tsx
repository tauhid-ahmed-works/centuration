"use client";
import Wrapper from "../layout/wrapper";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../shared/section-title";
import { useState } from "react";
import Image from "next/image";

const galleryData = [
  {
    id: "4fb0dd5c-a471-48c5-bff7-d8b9f6b967c1",
    imageUrl: "/assets/images/media/card-images/card-1.webp",
    title: "Recent Update",
    description:
      "This image showcases the latest updates and belongs to the 'Recent' category.",
    date: "2024-09-20T00:00:00Z",
    category: "recent",
    tabCategory: "Most Recent",
    tags: ["latest", "update"],
  },
  {
    id: "fc1b6bf6-dc86-4b8c-bdbc-d3c7efd20c3e",
    imageUrl: "/assets/images/media/card-images/card-4.webp",
    title: "Corporate Announcement",
    description:
      "A company-wide announcement related to new corporate policies.",
    date: "2024-09-19T00:00:00Z",
    category: "news",
    tabCategory: "Company News",
    tags: ["corporate", "announcement", "update"],
  },
  {
    id: "b1bdc185-c38e-4918-b60c-4ed3d8888cb5",
    imageUrl: "/assets/images/media/card-images/card-3.webp",
    title: "Tech Conference 2024",
    description: "Highlights from the annual Tech Conference held in 2024.",
    date: "2024-09-18T00:00:00Z",
    category: "event",
    tabCategory: "Events",
    tags: ["conference", "tech", "2024"],
  },
  {
    id: "43970ed2-c0c7-4907-8593-1a728bcb9bd8",
    imageUrl: "/assets/images/media/card-images/card-2.webp",
    title: "Networking Event",
    description:
      "An image capturing the key moments from the networking event.",
    date: "2024-09-17T00:00:00Z",
    category: "event",
    tabCategory: "Events",
    tags: ["networking", "business"],
  },
  {
    id: "f1c2e860-e5f4-40a6-8622-1a9b1b8bd422",
    imageUrl: "/assets/images/media/card-images/card-5.webp",
    title: "Serene Landscape",
    description: "A breathtaking view of a natural landscape.",
    date: "2024-09-16T00:00:00Z",
    category: "nature",
    tabCategory: "Nature",
    tags: ["landscape", "nature", "scenic"],
  },
  {
    id: "8bd08d33-5dcc-46d0-825e-1df12c641d8e",
    imageUrl: "/assets/images/media/card-images/card-6.webp",
    title: "Serene Landscape",
    description: "A breathtaking view of a natural landscape.",
    date: "2024-09-16T00:00:00Z",
    category: "nature",
    tabCategory: "Nature",
    tags: ["landscape", "nature", "scenic"],
  },
  {
    id: "1dc4744c-b3ad-4406-zf5b-5983b4d194da",
    imageUrl: "/assets/images/media/card-images/card-2.webp",
    title: "Serene Landscape",
    description: "A breathtaking view of a natural landscape.",
    date: "2024-09-16T00:00:00Z",
    category: "nature",
    tabCategory: "Nature",
    tags: ["landscape", "nature", "scenic"],
  },
  {
    id: "2f035e7f-58e8-471a-bdgd-c4181c205d8f",
    imageUrl: "/assets/images/media/card-images/card-1.webp",
    title: "Serene Landscape",
    description: "A breathtaking view of a natural landscape.",
    date: "2024-09-16T00:00:00Z",
    category: "nature",
    tabCategory: "Nature",
    tags: ["landscape", "nature", "scenic"],
  },
  {
    id: "2f035e7f-58e8-q71a-bdad-c4181c205d8f",
    imageUrl: "/assets/images/media/card-images/card-4.webp",
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
    <div className="py-10 relative">
      <Wrapper>
        <div className="rounded relative">
          <SectionTitle className="mb-6">Gallery</SectionTitle>
          <ul className="flex gap-8 justify-center mb-14 sticky lg:static top-20 z-20 backdrop-blur-3xl py-4 rounded">
            <li>
              <button
                className={`relative before:inset-x-px before:h-0.5 before:absolute before:bottom-0 before:bg-brand-500 before:rounded ${
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
                  className={`relative before:inset-x-px before:h-0.5 before:absolute before:bottom-0 before:bg-brand-500 before:rounded ${
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence initial={false} mode="popLayout">
              {filteredData.map((data) => (
                <motion.div
                  key={data.id}
                  className="rounded overflow-hidden min-h-72"
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    className="w-full block object-cover"
                    src={data.imageUrl}
                    alt="image"
                    width={400}
                    height={400}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
