"use client";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { footerData } from "@/data/footer-navigation";
import NewsLetter from "@/components/news-letter";
import { Heading } from "@/components/heading";
import { BrandLogo } from "./brand-logo";

export default function Footer() {
  return (
    <div className="bg-secondary-500 w-full">
      <NewsLetter />
      <footer className="container text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-10 py-10">
        <div className="space-y-4 max-w-52 -mt-2">
          <Link href="/">
            <BrandLogo width={180} />
          </Link>
          <p className="mt-4">
            CENTURION is a trusted company based in Abidjan, delivering
            reliable, quality-driven solutions with a focus on innovation and
            customer satisfaction.
          </p>
        </div>
        {footerData.sections.map((section) => (
          <div className="space-y-3" key={section.title}>
            <Heading as="h3" size="sm" className="uppercase text-primary-500">
              {section.title}
            </Heading>
            <ul className="space-y-2">
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
          <Heading
            size="sm"
            as="h3"
            className="mb-2 text-brand-500 uppercase text-primary-500"
          >
            General Inquiries
          </Heading>
          <ul className="space-y-2 text-xs md:text-base">
            <li>
              Name:{" "}
              <span className="font-semibold">
                {footerData["General Inquiries"].company_name}
              </span>
            </li>
            <li>
              Address Line:{" "}
              <span className="font-semibold">
                {footerData["General Inquiries"].address_line}
              </span>
            </li>
            <li>
              City:{" "}
              <span className="font-semibold">
                {footerData["General Inquiries"].city}
              </span>
            </li>
            <li>
              Country:{" "}
              <span className="font-semibold">
                {footerData["General Inquiries"].country}
              </span>
            </li>
          </ul>
        </div>
      </footer>
      <Copyright />
    </div>
  );
}

type IconName = keyof typeof Icons;

interface SocialIconProps {
  icon: IconName;
}

export function SocialIcon({ icon }: SocialIconProps) {
  const Icon = Icons[icon] as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <Link
      className="flex items-center justify-center rounded-full border border-gray-300 size-5 md:size-8 hover:bg-brand-500/50"
      href="/"
    >
      <Icon className="size-3 md:size-5 text-gray-300" />
    </Link>
  );
}

function Copyright() {
  return (
    <div className="text-gray-400 gap-1  py-7 border-t border-t-white/20 text-sm">
      <div className="container flex items-center justify-between">
        <span className="inline-flex text-xs md:text-md">
          Copyright <Icons.Copyright className="size-4" />
          {new Date().getFullYear()}{" "}
          <span className="hidden md:block">- Centurions</span>
        </span>
        <span className="flex gap-2 md:gap-4">
          {footerData.socialLinks.map((item) => (
            <SocialIcon
              key={item.name}
              icon={item.name as keyof typeof Icons}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
