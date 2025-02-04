"use client";
import React from "react";
import { setLocale } from "@/actions/i18n";
import { useLocale } from "next-intl";
import * as Icons from "./icons";
import { LucideChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const lang = {
  en: "en",
  fr: "fr",
};

export default function IntlSwitch({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const locale = useLocale();
  const Flag =
    lang[locale as keyof typeof lang] === "en"
      ? Icons.UnitedStates
      : Icons.France;
  return (
    <li
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
      className="py-6 inline-block align-middle relative"
    >
      <button className="cursor-pointer flex items-center gap-0.5">
        {<Flag className="size-5" />}
        <LucideChevronRight
          className={cn(
            "size-4 transition-transform duration-300",
            open ? "rotate-90" : "rotate-0"
          )}
        />
      </button>
      {open && (
        <motion.ul
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-full right-0 translate-x-1/2 size-24 bg-secondary-500 p-2 space-y-4 rounded-bl rounded-br"
        >
          <li>
            <button
              className="cursor-pointer flex gap-1 pl-2 hover:text-primary-500"
              onClick={() => setLocale("en")}
            >
              <Icons.UnitedStates className="size-5" /> En
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer flex gap-1 pl-2 hover:text-primary-500"
              onClick={() => setLocale("fr")}
            >
              {<Icons.France className="size-5" />} Fr
            </button>
          </li>
        </motion.ul>
      )}
    </li>
  );
}
