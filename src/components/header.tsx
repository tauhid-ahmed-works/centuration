"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationLinks, type NavigationLink } from "@/data/global/navigation";
import * as path from "@/paths";
import { ActiveLink } from "./active-link";
import IntlSwitch from "./intl-switch";
import { LucideChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  dropdownLinks?: NavigationLink[];
  className?: string;
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

// Header component
export function Header() {
  return (
    <header className="bg-secondary-500 text-white z-300 fixed inset-x-0">
      <nav className="flex gap-4 items-center justify-between container">
        <div className="w-32 mr-auto relative z-30 bg-inherit">
          <Logo />
        </div>
        <ul className="lg:items-center lg:gap-4 hidden lg:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              dropdownLinks={link.children}
            >
              {link.name}
            </NavLink>
          ))}
          <IntlSwitch />
        </ul>
      </nav>
    </header>
  );
}

// NavLink component
function NavLink({ children, href, dropdownLinks }: NavLinkProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handlePointerEnter = () => setIsOpen(true);
  const handlePointerLeave = () => setIsOpen(false);

  return (
    <li
      className="relative"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <ActiveLink
        className={cn(
          "py-6 inline-block align-middle relative",
          dropdownLinks && "flex gap-0.5 items-center"
        )}
        href={href}
      >
        {children}
        {dropdownLinks && (
          <LucideChevronRight
            className={cn(
              "size-4 transition-transform duration-300",
              isOpen ? "rotate-90" : "rotate-0"
            )}
          />
        )}
      </ActiveLink>
      {isOpen && dropdownLinks && <DropdownMenu links={dropdownLinks} />}
    </li>
  );
}

// DropdownMenu component
function DropdownMenu({ links }: { links: NavigationLink[] }) {
  return (
    <ul className="absolute top-full w-84 bg-secondary-500 shadow rounded-bl rounded-br py-2 px-6 grid grid-cols-2">
      {links.map((link) => (
        <li key={link.name}>
          <ActiveLink
            className="text-white py-1.5 inline-block align-middle"
            href={link.href}
          >
            {link.name}
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
}
