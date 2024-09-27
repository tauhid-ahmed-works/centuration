// "use client";
import Link from "next/link";
import { navigationData } from "@/data/main-navagation";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/libs/utils/cn";
import * as Icons from "@/components/icons";
import { useClickAway } from "@/hooks";

export default function DesktopNavigation({ isDesktop }: any) {
  return (
    <>
      {isDesktop && (
        <ul
          className={cn(
            "px-4 h-full hidden md:flex gap-3 lg:gap-4 ml-auto items-center text-white p-0 text-sm lg:text-base"
          )}
        >
          <Menu data={navigationData} />
        </ul>
      )}
    </>
  );
}

function Menu({ data, isSubmenu = false }: any) {
  return data.map((item: any) => {
    const [openSubmenu, setOpenSubmenu] = useState(false);
    const ref = useRef(null);
    useClickAway(ref, () => setOpenSubmenu(false));
    return (
      <li
        ref={ref}
        onPointerEnter={() => setOpenSubmenu(true)}
        onClick={() => setOpenSubmenu(false)}
        className={cn("flex items-center gap-1", isSubmenu && "basis-1/2 p-2")}
        key={item.name}
      >
        <Link href="">{item.name}</Link>
        {item.children.length > 0 ? (
          openSubmenu ? (
            <Icons.ChevronUp className="size-4" />
          ) : (
            <Icons.ChevronDown className="size-4" />
          )
        ) : null}
        <AnimatePresence>
          {item.children.length > 0 && openSubmenu && (
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="p-5 absolute top-full w-96 bg-white text-gray-950 flex flex-wrap rounded shadow"
            >
              <Menu data={item.children} isSubmenu={true} />
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  });
}
