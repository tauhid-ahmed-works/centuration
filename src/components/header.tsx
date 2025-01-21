"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "motion/react";
import { LucideAlignRight, LucideChevronRight, LucideX } from "lucide-react";
import { navigationLinks, type NavigationLink } from "@/data/global/navigation";
import { NavLink } from "./navlink";
import { UnitedStates } from "./icons";
import { cn } from "@/lib/utils";
import { useWindowSize, useClickAway } from "@/hooks";
import * as path from "@/paths";
import { Button } from "@/components/ui/button";
import { IconButton } from "./ui/icon-button";

const BREAKPOINT = 1024;

type NavigationMenuProps = {
  navigationLinks: NavigationLink[];
  className?: string;
  isDesktop?: boolean;
};

const sidebarVariants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "-100%",
  },
};

const subMenuVariants: Variants = {
  initial: (isDesktop: boolean) => ({
    height: !isDesktop ? 0 : "auto",
    y: isDesktop ? 20 : 0,
    opacity: 0,
  }),
  animate: {
    height: "auto",
    y: 0,
    opacity: 1,
  },
  exit: (isDesktop: boolean) => ({
    height: !isDesktop ? 0 : "auto",
    y: isDesktop ? 20 : 0,
    opacity: 0,
  }),
};

function Logo() {
  return (
    <Link href={path.home()}>
      <Image
        src="/assets/icons/logo.svg"
        width={200}
        height={60}
        alt="centurion"
      />
    </Link>
  );
}

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const { innerWidth } = useWindowSize();
  const isDesktop = innerWidth >= BREAKPOINT;
  const ref = React.useRef(null);

  useClickAway(ref, () => !isDesktop && setIsMobileNavOpen(false));

  React.useEffect(() => {
    setIsMobileNavOpen(isDesktop);
    setIsMobileNavOpen(false);
  }, [isDesktop]);

  return (
    <header
      ref={ref}
      className="bg-secondary-500 text-white z-300 fixed inset-x-0"
    >
      <nav className="flex gap-4 items-center h-20 container">
        <div className="w-32 mr-auto relative z-30 bg-inherit">
          <Logo />
        </div>
        <AnimatePresence>
          {!isDesktop && isMobileNavOpen && (
            <motion.div
              {...sidebarVariants}
              transition={{
                ease: "easeOut",
              }}
              className="max-lg:h-screen bg-secondary-500 max-lg:fixed top-0 left-0 max-lg:w-60 max-lg:pt-16 px-4 max-lg:shadow"
            >
              <NavigationMenu
                isDesktop={isDesktop}
                navigationLinks={navigationLinks}
              />
            </motion.div>
          )}
          {isDesktop && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <NavigationMenu
                isDesktop={isDesktop}
                navigationLinks={navigationLinks}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex gap-3">
          <IconButton className="hover:bg-white/10 hover:text-white">
            <UnitedStates className="size-6" />
          </IconButton>
          {!isDesktop && (
            <IconButton
              className="hover:bg-white/10 hover:text-white"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              {isMobileNavOpen ? (
                <LucideX className="size-full" />
              ) : (
                <LucideAlignRight className="size-full" />
              )}
            </IconButton>
          )}
        </div>
      </nav>
    </header>
  );
}

function NavigationMenu({
  navigationLinks,
  className,
  isDesktop,
}: NavigationMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = React.useState(-1);
  const pathname = usePathname();
  const ref = React.useRef(null);
  const handleActiveSubmenu = (index: number) =>
    setActiveSubmenu((prevIndex) => (prevIndex === index ? -1 : index));
  useClickAway(ref, () => isDesktop && setActiveSubmenu(-1));

  return (
    <ul className={cn("lg:flex lg:gap-3 xl:gap-4", className)}>
      {navigationLinks.map((path, index) => {
        const hasSubmenu = path.children;
        return (
          <motion.li
            ref={ref}
            className="relative max-lg:overflow-hidden"
            key={path.name}
          >
            {hasSubmenu ? (
              <button
                onClick={() => handleActiveSubmenu(index)}
                className={cn("flex items-center py-1", {
                  "text-primary-500": pathname.startsWith(path.href),
                })}
              >
                {path.name}{" "}
                <LucideChevronRight
                  className={cn("size-4 rotate-0", {
                    "rotate-90": activeSubmenu === index,
                  })}
                />
              </button>
            ) : (
              <NavLink
                className="py-1 inline-block whitespace-nowrap cursor-pointer"
                href={path.href}
              >
                {path.name}
              </NavLink>
            )}
            <AnimatePresence>
              {hasSubmenu && activeSubmenu === index && (
                <motion.div {...subMenuVariants} custom={isDesktop}>
                  <NavigationMenu
                    className="px-4 lg:absolute lg:grid lg:grid-cols-2 lg:bg-secondary-500 lg:top-full lg:w-96 lg:rounded lg:shadow-lg lg:gap-0 lg:p-6 xl:gap-0"
                    navigationLinks={path.children as NavigationLink[]}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </ul>
  );
}
