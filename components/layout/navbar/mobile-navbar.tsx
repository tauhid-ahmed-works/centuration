"use client";
import Link from "next/link";
import { navigationData } from "./data";
import LangSwitch from "@/components/lang-switch";
import { cn } from "@/libs/utils/cn";
import { useState } from "react";
import Image from "next/image";
import logo from "/public/assets/icons/logo.webp";
import * as Icons from "@/components/icons";

export function MobileNavbar() {
  const [openItem, setOpenItem] = useState("");
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <header className="h-16 lg:hidden fixed w-full top-0 z-300">
      <div className="absolute inset-0 w-full h-full bg-gray-850 backdrop-blur-lg z-[10] flex items-center px-4">
        <Link className="w-32" href="/">
          <Image
            src={logo}
            alt="logo"
            width={140}
            height={30}
            className="cursor-pointer w-full"
          />
        </Link>
        <div className="ml-auto flex items-center gap-3 text-white">
          <LangSwitch />
          {/* <button
            onClick={() => setOpenMobileNav(!openMobileNav)}
            className="text-white"
          >
            {openMobileNav ? (
              <Icons.MenuClose className="w-6 h-6" />
            ) : (
              <Icons.Menu className="w-6 h-6" />
            )}
          </button> */}
          {openMobileNav ? (
            <button
              onClick={() => setOpenMobileNav(false)}
              className="text-white"
            >
              <Icons.MenuClose className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={() => setOpenMobileNav(true)}
              className="text-white"
            >
              <Icons.Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
      {
        <nav
          className={cn(
            "absolute top-16 p-4 h-[calc(100vh-4rem)] bg-gray-850 backdrop-blur-lg w-60 text-white z-300 overflow-y-scroll",
            openMobileNav ? "animate-slideIn" : "animate-slideOut"
          )}
        >
          <ul className="space-y-4 font-bold text-sm">
            {navigationData.map((item) => (
              <li
                className="transition-all duration-300 relative"
                key={item.name}
                onPointerEnter={() => {
                  if (item.children.length > 0) {
                    setOpenItem(item.name);
                  }
                }}
                onPointerLeave={() => {
                  setOpenItem("");
                }}
              >
                <Link
                  className="font-medium flex items-center gap-2"
                  href={item.path}
                >
                  {item.name}
                  {item.children.length > 0 && (
                    <Icons.ChevronDown className="size-4" />
                  )}
                </Link>

                {item.children.length > 0 && (
                  <div
                    className={cn(
                      "grid transition-all duration-500",
                      openItem === item.name
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    )}
                  >
                    <ul className="overflow-hidden">
                      {item.children.map((child) => (
                        <li
                          className="transition-all duration-500 py-2 pl-4"
                          key={child.name}
                        >
                          <Link className="font-medium" href={child.path}>
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      }
    </header>
  );
}
