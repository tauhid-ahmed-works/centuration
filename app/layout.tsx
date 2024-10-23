import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Poppins, Montserrat, Lato } from "next/font/google";
import ConfigProvider from "@/context/config-context";
import Header from "@/components/layout/header";
import { ScrollButton } from "@/components/shared/scroll-button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const monserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Centuriation",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <link rel="icon" href="/favicon.webp" />
      <body
        className={`${poppins.variable} ${monserrat.variable} ${lato.variable} font-body antialiased flex flex-col min-h-screen text-gray-900 overflow-x-hidden font-normal w-full`}>
        <NextIntlClientProvider messages={messages}>
          <ConfigProvider>
            <Header />
            <ScrollButton />
            <main className="flex-1">{children}</main>
          </ConfigProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
