"use client";
import Link from "next/link";
import Image from "next/image";
import { navigationData } from "./data";
import logo from "/public/assets/icons/logo.webp";
import LangSwitch from "@/components/lang-switch";
import Wrapper from "../wrapper";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils/cn";
import { useScrollSnap } from "@/components/scroll-snap";
import { ChevronDown } from "@/components/icons";

const pathnames = ["/contact", "/privacy-policy", "/terms-and-conditions"];

export function DesktopNavbar() {
  const [openDropdow, setOpenDropdown] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [y, setY] = useState(0);
  scrollY.on("change", (change) => {
    if (change >= 100) {
      setY(100);
    } else setY(0);
  });

  const context = useScrollSnap();

  const activeRoute = pathnames.find((item) => item === pathname);

  return (
    <motion.div
      className={cn(
        "fixed hidden h-20 lg:flex items-center inset-x-0 top-0 z-100"
      )}
    >
      <div
        className={cn(
          "absolute w-full h-full inset-0",
          context && context?.activeIndex > 0 && "bg-gray-850"
        )}
      ></div>
      <div
        className={cn(
          "absolute w-full h-full inset-0",
          y >= 100 && "bg-gray-850"
        )}
      ></div>
      <div
        className={cn(
          "absolute w-full h-full inset-0",
          activeRoute && y < 100 && "bg-gray-700"
        )}
      ></div>
      <Wrapper>
        <nav className="flex justify-between gap-8 items-center relative z-300 text-white">
          <Link className="w-44 inline-block" href="/">
            <Image
              src={logo}
              alt="logo"
              width={180}
              height={20}
              className="cursor-pointer"
            />
          </Link>
          <ul
            className={cn(
              "flex items-center gap-4 h-full relative ml-auto text-sm font-bold"
            )}
          >
            {navigationData.map((item) => (
              <li
                className="h-16 flex items-center relative py-3"
                key={item.name}
                onPointerEnter={() => {
                  item.children.length > 0 && setOpenDropdown(true);
                }}
                onPointerLeave={() => {
                  item.children.length > 0 && setOpenDropdown(false);
                }}
              >
                <Link
                  className={cn(
                    "relative before:absolute before:-bottom-0.5 before:inset-x-0.5 before:h-0.5 before:bg-brand-500 before:transition-transform",
                    item.path === pathname || pathname?.includes(item.path)
                      ? "before:scale-100"
                      : "before:scale-0 hover:before:scale-100"
                  )}
                  href={item.path}
                >
                  {item.name}
                </Link>
                {item.children.length > 0 && (
                  <ChevronDown className="size-4 pl-1 pt-0.5" />
                )}
                {item.children.length > 0 && openDropdow && (
                  <ul className="absolute flex flex-wrap w-80 animate-slideup py-4 bg-white text-gray-850 shadow rounded top-full">
                    {item.children.map((child) => (
                      <li
                        className="basis-1/2 px-4 py-2 rounded relative"
                        key={child.name}
                      >
                        <div className="relative inline-block">
                          <Link
                            className={cn(
                              "relative before:absolute before:-bottom-0.5 before:inset-x-0.5 before:h-0.5 before:bg-brand-500 before:transition-transform",
                              item.path === pathname
                                ? "before:scale-100"
                                : "before:scale-0 hover:before:scale-100"
                            )}
                            href={child.path}
                          >
                            {child.name}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <LangSwitch />
        </nav>
      </Wrapper>
    </motion.div>
  );
}
