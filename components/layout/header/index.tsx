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
import LangSwitch from "@/components/lang-switch";

export default function Header() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const { innerWidth } = useWindowSize();
  const ref = useRef(null);
  const isDesktop = innerWidth >= 1024;
  useClickAway(ref, () => setOpenMobileNav(false));
  useEffect(() => {
    if (isDesktop) setOpenMobileNav(false);
  }, [innerWidth, isDesktop]);

  return (
    <header ref={ref} className={"fixed top-0 left-0 h-header w-full z-300"}>
      <HeaderBackground />
      <Wrapper className="h-full items-center flex relative z-200">
        <div className="mr-auto">
          <Link className="flex w-44 items-center" href="/">
            <Image
              src={logo}
              alt="logo"
              priority
              className="object-cover size-full"
            />
          </Link>
        </div>
        <MobileNavigation openMobileNav={openMobileNav} />
        <DesktopNavigation isDesktop={isDesktop} />
        <div className="ml-auto lg:ml-0 flex gap-2 items-center pl-4">
          <LangSwitch />
          <button
            className="lg:hidden"
            onClick={() => setOpenMobileNav(!openMobileNav)}
          >
            {openMobileNav ? (
              <Icons.MenuClose className="size-6 text-white" />
            ) : (
              <Icons.Menu className="size-6 text-white" />
            )}
          </button>
        </div>
      </Wrapper>
    </header>
  );
}
