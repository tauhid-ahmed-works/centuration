"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "@/components/icons";
import { useTranslations } from "next-intl";
import { Heading } from "@/components/heading";

export default function Accordion() {
  const t = useTranslations("HomePage");

  const accordionsData = [
    {
      id: 1,
      title: t("career_page_our_value_title_faq_Ques_1"),
      description: t("career_page_our_value_title_faq_Ans_1"),
    },
    {
      id: 2,
      title: t("career_page_our_value_title_faq_Ques_2"),
      description: t("career_page_our_value_title_faq_Ans_2"),
    },
    {
      id: 3,
      title: t("career_page_our_value_title_faq_Ques_3"),
      description: t("career_page_our_value_title_faq_Ans_3"),
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(1);

  return (
    <section className="section" data-padding="sm">
      <div className="container" data-size="md">
        <div className="divide-y-1">
          {accordionsData.map((accordion) => (
            <div className="w-full" key={accordion.id}>
              <button
                onClick={() =>
                  openAccordion === accordion.id
                    ? setOpenAccordion(-1)
                    : setOpenAccordion(accordion.id)
                }
                className={cn(
                  `flex justify-between w-full md:text-xl py-3 cursor-pointer font-medium hover:bg-gray-500`,
                  openAccordion === accordion.id && "bg-gray-100 text-brand-500"
                )}
              >
                {accordion.title}

                <span>
                  {openAccordion === accordion.id ? (
                    <ChevronUp className="size-5" />
                  ) : (
                    <ChevronDown className="size-5" />
                  )}
                </span>
              </button>

              {openAccordion === accordion.id && (
                <p className="py-4">{accordion.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
