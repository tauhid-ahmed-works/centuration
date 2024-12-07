"use client";

import Link from "next/link";
import Image from "next/image";
// import logo from "@/../assets/icons/logo.webp";
import { Icons } from "@/components/icons";
import { footerData } from "@/data/footer-navigation";
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
              <Image
                src="/assets/icons/logo.webp"
                width={200}
                height={100}
                alt="logo"
                className="w-full"
              />
            </Link>
            <div className="flex gap-1 justify-around">
              {footerData.socialLinks.map((item) => (
                <SocialIcon
                  key={item.name}
                  icon={item.name as keyof typeof Icons}
                />
              ))}
            </div>
          </div>
          {footerData.sections.map((section) => (
            <div className="space-y-3" key={section.title}>
              <h3 className="text-lg text-gray-100 uppercase">
                {section.title}
              </h3>
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
            <h3 className="mb-2 text-lg text-gray-100 uppercase">
              General Inquiries
            </h3>
            <ul className="space-y-1 text-white/70">
              <li>{footerData["General Inquiries"].email}</li>
              <li>{footerData["General Inquiries"].street}</li>
              <li>{footerData["General Inquiries"].city}</li>
            </ul>
          </div>
        </footer>
      </Wrapper>
      <Copyright />
    </div>
  );
}

// function SocialIcon({ icon }: { icon: string }) {
//   const Icon = Icons[icon as keyof typeof Icons];
//   console.log(Icon);
//   return (
//     <Link
//       className="flex items-center justify-center rounded-full border border-gray-300 size-8 hover:bg-brand-500/50"
//       href="/"
//     >
//       {Icon && <Icon className="size-5 text-gray-300" />}
//     </Link>
//   );
// }

type IconName = keyof typeof Icons;

interface SocialIconProps {
  icon: IconName;
}

export function SocialIcon({ icon }: SocialIconProps) {
  const Icon = Icons[icon] as React.FC<React.SVGProps<SVGSVGElement>>;

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
    <div className="text-gray-400 gap-1  py-7 border-t border-t-white/20 text-sm">
      <Wrapper className="flex items-center justify-between">
        <div className="flex items-center">
          Copyright <Icons.Copyright className="size-4" />
          {new Date().getFullYear()} - Centurions
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/terTerms & Conditions"
            className="hover:text-brand-500 transition-colors"
          >
            Terms of Use
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-brand-500 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}
