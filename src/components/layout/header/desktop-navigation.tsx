// "use client";
import Link from "next/link";
import { navigationData, type NavigationItem } from "@/data/main-navagation";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/libs/utils/cn";
import * as Icons from "@/components/icons";
import { useClickAway } from "@/hooks";

export default function DesktopNavigation({
  isDesktop,
}: {
  isDesktop: boolean;
}) {
  return (
    <>
      {isDesktop && (
        <ul
          style={{ "--underline": "white" } as React.CSSProperties}
          className={cn(
            "px-4 h-full hidden lg:flex gap-1 lg:gap-4 items-center text-white p-0 text-md lg:text-base whitespace-nowrap"
          )}
        >
          <Menu data={navigationData} />
        </ul>
      )}
    </>
  );
}

function Menu({
  data,
  isSubmenu = false,
}: {
  data: NavigationItem[];
  isSubmenu?: boolean;
}) {
  // const [openSubmenu, setOpenSubmenu] = useState(false);
  // const ref = useRef(null);
  // useClickAway(ref, () => setOpenSubmenu(false));
  return data.map((item: NavigationItem) => {
    // return (
    //   <li
    //     key={item.name}
    //     ref={ref}
    //     onClick={() => setOpenSubmenu(false)}
    //     onPointerLeave={() => setOpenSubmenu(false)}
    //     className={cn(
    //       "flex items-center gap-1 relative h-full",
    //       isSubmenu && "basis-1/2 p-2"
    //     )}
    //   >
    //     <Link
    //       onPointerEnter={() => setOpenSubmenu(true)}
    //       href={item.path}
    //       className="relative after:absolute after:inset-x-0 after:h-px after:bg-[var(--underline)] after:bottom-0 after:scale-x-0 hover:after:scale-100 after:transition-transform after:duration-100 after:rounded"
    //     >
    //       {item.name}
    //     </Link>
    //     {item.children && item.children.length > 0 ? (
    //       openSubmenu ? (
    //         <Icons.ChevronUp className="size-4" />
    //       ) : (
    //         <Icons.ChevronDown className="size-4" />
    //       )
    //     ) : null}
    //     <AnimatePresence>
    //       {item.children && item.children?.length > 0 && openSubmenu && (
    //         <motion.ul
    //           initial={{ y: 20, opacity: 0 }}
    //           animate={{ y: 0, opacity: 1 }}
    //           exit={{ y: 20, opacity: 0 }}
    //           style={{ "--underline": "black" } as React.CSSProperties}
    //           className="p-5 absolute top-full w-96 bg-white text-gray-950 flex flex-wrap rounded shadow"
    //         >
    //           <Menu data={item.children!} isSubmenu={true} />
    //         </motion.ul>
    //       )}
    //     </AnimatePresence>
    //   </li>
    // );

    return <MenuList key={item.name} item={item} isSubmenu={isSubmenu} />;
  });
}

function MenuList({
  item,
  isSubmenu = false,
}: {
  item: NavigationItem;
  isSubmenu?: boolean;
}) {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpenSubmenu(false));
  return (
    <li
      key={item.name}
      ref={ref}
      onClick={() => setOpenSubmenu(false)}
      onPointerLeave={() => setOpenSubmenu(false)}
      className={cn(
        "flex items-center gap-1 relative h-full",
        isSubmenu && "basis-1/2 p-2"
      )}
    >
      <Link
        onPointerEnter={() => setOpenSubmenu(true)}
        href={item.path}
        className="relative after:absolute after:inset-x-0 after:h-px after:bg-[var(--underline)] after:bottom-0 after:scale-x-0 hover:after:scale-100 after:transition-transform after:duration-100 after:rounded"
      >
        {item.name}
      </Link>
      {item.children && item.children.length > 0 ? (
        openSubmenu ? (
          <Icons.ChevronUp className="size-4" />
        ) : (
          <Icons.ChevronDown className="size-4" />
        )
      ) : null}
      <AnimatePresence>
        {item.children && item.children?.length > 0 && openSubmenu && (
          <motion.ul
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            style={{ "--underline": "black" } as React.CSSProperties}
            className="p-5 absolute top-full w-96 bg-white text-gray-950 flex flex-wrap rounded shadow"
          >
            <Menu data={item.children!} isSubmenu={true} />
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
