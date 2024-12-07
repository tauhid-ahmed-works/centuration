"use client";
import React from "react";
import Image from "next/image";
import { type NavLinks, navLinks } from "@/data/global/navigation";
import { NavLink } from "./active-navlink";
import * as path from "@/paths";
import { LucideAlignRight, LucideChevronRight, LucideX } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { UnitedStates } from "./icons";
import { useWindowSize } from "@/hooks";
import Link from "next/link";
import { useClickAway } from "@/hooks";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { innerWidth } = useWindowSize();
  const desktop = innerWidth >= 1024;

  React.useEffect(() => {
    if (desktop) {
      setIsSidebarOpen(true);
    } else setIsSidebarOpen(false);
  }, [innerWidth]);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    if (!desktop) {
      setIsSidebarOpen(false);
    }
  });
  return (
    <header className="bg-secondary-500 py-4 shadow">
      <div className="container">
        <div className="flex items-center h-10">
          <Link className="z-30 relative" href={path.home()}>
            <Image
              src="/assets/icons/logo.svg"
              width="200"
              height="50"
              alt="Centurion"
              className="w-32 lg:w-44"
            />
          </Link>
          <AnimatePresence mode="wait" initial={false}>
            {isSidebarOpen && (
              <motion.nav
                ref={ref}
                transition={{
                  ease: "linear",
                  duration: 0.2,
                }}
                initial={{
                  x: desktop ? 0 : "-100%",
                }}
                animate={{ x: 0 }}
                exit={{
                  x: desktop ? 0 : "-100%",
                }}
                className={cn(
                  "max-lg:h-screen left-0 top-0 max-lg:pt-20 max-lg:fixed max-lg:bg-secondary-500 px-4 text-white h-full max-lg:w-60 lg:ml-auto flex"
                )}
              >
                <Navigation />
              </motion.nav>
            )}
          </AnimatePresence>

          <div className="ml-auto flex gap-4 items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="size-4 text-white relative z-30 ml-auto lg:hidden"
            >
              {isSidebarOpen ? <LucideX /> : <LucideAlignRight />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Navigation() {
  return <NavMenu navLinks={navLinks} />;
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
  const { innerWidth } = useWindowSize();
  const isDesktop = innerWidth >= 1024;
  const ref = React.useRef(null);
  useClickAway(ref, () => setIsMenuOpen(false));
  return (
    <ul
      ref={ref}
      className={cn(
        "max-lg:space-y-2 lg:flex lg:items-center lg:gap-4 max-lg:overflow-hidden",
        className
      )}
    >
      {navLinks.map((navLink) => {
        const hasSubmenu = Boolean(navLink.children);
        return (
          <li
            onClick={() => {
              if (innerWidth >= 1024 && isMenuOpen) {
                setIsMenuOpen(false);
              }
            }}
            className={cn("relative")}
            key={navLink.href}
          >
            {hasSubmenu ? (
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
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
            <AnimatePresence mode="wait">
              {hasSubmenu && isMenuOpen && (
                <motion.div
                  initial={{
                    height: !isDesktop ? 0 : "auto",
                    opacity: 0,
                    y: isDesktop && 20,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    height: !isDesktop ? 0 : "auto",
                    opacity: 0,
                    y: isDesktop && 20,
                  }}
                >
                  <NavMenu
                    className={cn(
                      "px-4 lg:absolute lg:w-96 lg:h-64 lg:bg-secondary-500 transition-all lg:grid lg:grid-cols-2 lg:rounded lg:top-[100%] lg:gap-2 lg:p-6 lg:shadow-lg",
                      isMenuOpen && "max-lg:mt-2 opacity-100"
                    )}
                    navLinks={navLink.children as NavLinks[]}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
