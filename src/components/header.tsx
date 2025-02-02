"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationLinks, type NavigationLink } from "@/data/global/navigation";
import * as path from "@/paths";
import { ActiveLink } from "./active-link";
import IntlSwitch from "./intl-switch";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  dropdownLinks?: NavigationLink[]; // Used `dropdownLinks` here
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
        className="py-6 inline-block align-middle relative"
        href={href}
      >
        {children}
      </ActiveLink>
      {isOpen && dropdownLinks && <DropdownMenu links={dropdownLinks} />}
    </li>
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
              dropdownLinks={link.children} // Passing the children to NavLink
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
