"use client";
import React from "react";
import Image from "next/image";
import { type NavLinks, navLinks } from "@/data/global/navigation";
import { NavLink } from "./active-navlink";
import * as path from "@/paths";
import { LucideChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  return (
    <header className="bg-secondary-500 py-4">
      <div className="container lg:flex lg:items-center">
        <NavLink className="z-30 relative" href={path.home()}>
          <Image
            src="/assets/icons/logo.svg"
            width="200"
            height="50"
            alt="Centurion"
            className="w-32 lg:w-44"
          />
        </NavLink>
        <Navigation />
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <nav
      className={cn(
        "text-white max-lg:h-screen max-lg:py-16 max-lg:fixed max-lg:bg-secondary-500 left-0 top-0 max-lg:w-60 px-4 lg:ml-auto"
      )}
    >
      <NavMenu navLinks={navLinks} />
    </nav>
  );
}

function NavMenu({
  navLinks,
  className,
}: {
  navLinks: NavLinks[];
  className?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  return (
    <ul
      className={cn(
        "max-lg:space-y-2 lg:flex lg:items-center lg:gap-4 max-lg:overflow-hidden",
        className
      )}
    >
      {navLinks.map((navLink) => {
        const hasSubmenu = Boolean(navLink.children);
        return (
          <li
            className={cn("relative", {
              "grid grid-rows-[24px_0fr] transition-all": navLink.children,
              "grid-rows-[24px_1fr]": isMenuOpen,
            })}
            key={navLink.href}
          >
            {hasSubmenu ? (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn("flex justify-between items-center w-full", {
                  "text-primary-500":
                    isMenuOpen || pathname.startsWith(navLink.href),
                  "hover:text-primary-500": !isMenuOpen,
                })}
              >
                {navLink.name}

                <LucideChevronRight
                  className={cn("size-4  transition-transform", {
                    "rotate-90": isMenuOpen,
                  })}
                />
              </button>
            ) : (
              <NavLink
                className={cn({
                  "flex items-center justify-between": navLink.children,
                })}
                href={navLink.href}
              >
                {navLink.name}
              </NavLink>
            )}
            {hasSubmenu && isMenuOpen && (
              <NavMenu
                className={cn(
                  "px-4 lg:absolute lg:w-96 lg:h-64 lg:bg-secondary-500 transition-all lg:grid lg:grid-cols-2 lg:rounded lg:top-[100%] lg:gap-2 lg:p-6 shadow-lg",
                  isMenuOpen && "max-lg:mt-2 opacity-100"
                )}
                navLinks={navLink.children as NavLinks[]}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
