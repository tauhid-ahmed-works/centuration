import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/icons/logo.webp";
import * as Icons from "@/components/icons";
import { footerData } from "./data";
import Wrapper from "../wrapper";
import NewsLetter from "@/components/news-letter";

export default function Footer() {
  return (
    <div className="bg-gray-900 w-full">
      <NewsLetter />
      <Wrapper>
        <footer className="sm:flex sm:flex-wrap sm:justify-between sm:gap-8 py-8 space-y-8 sm:space-y-0">
          <div className="max-w-56 flex-1 space-y-4">
            <Link href="/" className="w-56 block mx-auto">
              <Image src={logo} alt="logo" className="w-full" />
            </Link>
            <div className="flex gap-1 justify-around">
              {footerData.socialLinks.map((item) => (
                <SocialIcon key={item.name} icon={item.name} />
              ))}
            </div>
            {/* <Link href="/">
          <Image className="w-40" src={playStore} alt="logo" />
        </Link> */}
          </div>
          {/* Links */}
          {footerData.sections.map((section) => (
            <div className="space-y-3" key={section.title}>
              <h3 className="text-lg text-gray-100">{section.title}</h3>
              <ul className="space-y-1 text-white/70">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="hover:text-brand-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="mb-2 text-lg text-gray-100">Contact Info</h3>
            <ul className="space-y-1 text-white/70">
              <li>{footerData.contactInfo.email}</li>
              <li>{footerData.contactInfo.street}</li>
              <li>{footerData.contactInfo.city}</li>
            </ul>
          </div>
        </footer>
      </Wrapper>
      <Copyright />
    </div>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const Icon = Icons[icon as keyof typeof Icons];
  return (
    <Link
      className="flex items-center justify-center rounded-full border border-gray-300 size-8 hover:bg-brand-500/50"
      href="/"
    >
      <Icon className="size-5 text-gray-300" />
    </Link>
  );
}

function Copyright() {
  return (
    <div className="text-gray-400 flex items-center gap-1 justify-center py-7 border-t border-t-white/20 text-sm">
      Copyright <Icons.Copyright className="size-4" />
      {new Date().getFullYear()} - Centurions
    </div>
  );
}
