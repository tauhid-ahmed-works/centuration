'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Wrapper from "../layout/wrapper";
import { cn } from "@/libs/utils/cn"
import { ChevronDown, ChevronUp } from "../icons"
import { useTranslations } from 'next-intl';




export default function Accordion() {

  const t = useTranslations("HomePage");

  const accordionsData = [
    {
      id: 1,
      title: t("career_page_our_value_title_faq_Ques_1"),
      description: t("career_page_our_value_title_faq_Ans_1")
    },
    {
      id: 2,
      title: t("career_page_our_value_title_faq_Ques_2"),
      description: t("career_page_our_value_title_faq_Ans_2")
    },
    {
      id: 3,
      title: t("career_page_our_value_title_faq_Ques_3"),
      description: t("career_page_our_value_title_faq_Ans_3")
    },
  ]



  const [openAccordion, setOpenAccordion] = useState(1);

  return (
    <Wrapper>
      <div className="max-w-3xl w-full mx-auto my-10 [&>:not(:last-child)]:border-b-2 border-gray-100">

        {
          accordionsData.map((accordion) =>
            <div className="" key={accordion.id}>
              <div onClick={() => openAccordion === accordion.id ? setOpenAccordion(-1) : setOpenAccordion(accordion.id)} className={cn(`flex items-center px-5 transition-colors bg-transparent duration-300`, openAccordion === accordion.id && "bg-gray-100 text-brand-500")}>
                <h3 className="text-xl font-medium pt-3 pb-5 w-full cursor-pointer">{accordion.title}</h3>

                <div>
                  {
                    openAccordion === accordion.id
                      ?
                      <ChevronUp className="size-5 cursor-pointer" />
                      :
                      <ChevronDown className="size-5 cursor-pointer" />
                  }
                </div>

              </div>

              <div className="py-3 px-5">
                <AnimatePresence mode="sync">
                  {
                    openAccordion === accordion.id && <motion.p
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                    >{accordion.description}</motion.p>
                  }
                </AnimatePresence>
              </div>
            </div>
          )
        }
      </div>
    </Wrapper>
  )
}
