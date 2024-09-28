"use client";
import { useEffect, useState, useRef } from "react";
import MobileNavigation from "./mobile-navigation";
import DesktopNavigation from "./desktop-navigation";
import { useWindowSize, useClickAway } from "@/hooks";
import * as Icons from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/icons/logo.webp";
import Wrapper from "@/components/layout/wrapper";
import HeaderBackground from "./header-background";

export default function Header() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const { innerWidth } = useWindowSize();
  const ref = useRef(null);
  const isDesktop = innerWidth >= 768;
  useClickAway(ref, () => setOpenMobileNav(false));
  useEffect(() => {
    if (isDesktop) setOpenMobileNav(false);
  }, [innerWidth]);

  return (
    <header ref={ref} className={"fixed h-header w-full z-100"}>
      <HeaderBackground />
      <Wrapper className="h-full items-center flex relative z-200">
        <div className="mr-auto">
          <Link className="w-44 flex items-center" href="/">
            <Image
              src={logo}
              alt="logo"
              priority
              sizes="20vw"
              className="object-cover"
            />
          </Link>
        </div>
        <MobileNavigation openMobileNav={openMobileNav} />
        <DesktopNavigation isDesktop={isDesktop} />
        <div className="ml-auto md:ml-0">
          <button
            className="md:hidden"
            onClick={() => setOpenMobileNav(!openMobileNav)}
          >
            {openMobileNav ? (
              <Icons.MenuClose className="size-4 text-white" />
            ) : (
              <Icons.Menu className="size-4 text-white" />
            )}
          </button>
        </div>
      </Wrapper>
    </header>
  );
}
