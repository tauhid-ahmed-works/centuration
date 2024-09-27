// "use client";
import Link from "next/link";
import { navigationData } from "@/data/main-navagation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/libs/utils/cn";
import * as Icons from "@/components/icons";

export default function MobileNavigation({ openMobileNav }: any) {
  return (
    <>
      <AnimatePresence>
        {openMobileNav && (
          <motion.div
            className="absolute left-0 h-[calc(100vh-56px)] bg-gray-950 top-full w-56"
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: -100,
              opacity: 0,
            }}
          >
            <div className="h-full flex justify-between text-white p-0">
              <ul className={cn("space-y-3  px-4")}>
                <Menu data={navigationData} />
              </ul>
            </div>
            <div className="px-4">{/* <LangSwitch /> */}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Menu({ data }: any) {
  return data.map((item: any) => {
    const [openSubmenu, setOpenSubmenu] = useState(false);

    return (
      <li className="mt-4" key={item.name}>
        {item.children?.length > 0 ? (
          <button
            className="flex items-center gap-1"
            onClick={() => setOpenSubmenu(!openSubmenu)}
          >
            {item.name}
            {openSubmenu ? (
              <Icons.ChevronUp className="size-4" />
            ) : (
              <Icons.ChevronDown className="size-4" />
            )}
          </button>
        ) : (
          <Link href="">{item.name}</Link>
        )}

        {item.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openSubmenu ? "auto" : 0,
              opacity: openSubmenu ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <ul className="pl-5 space-y-3">
              {item.children.length > 0 && (
                <li className="pt-3">
                  <Link href="">{item.name}</Link>
                </li>
              )}
              <Menu data={item.children} />
            </ul>
          </motion.div>
        )}
      </li>
    );
  });
}