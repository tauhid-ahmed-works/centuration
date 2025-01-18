import type { Metadata } from "next";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Poppins, Montserrat, Lato } from "next/font/google";
import ConfigProvider from "@/context/config-context";
import { Header } from "@/components/header";
import { ScrollButton } from "@/components/shared/scroll-button";
import { Slider } from "@/components/carousel/slider";

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

export const metadata: Metadata = {
  title: "Centuriaion",
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
        className={`${poppins.className} font-body antialiased flex flex-col min-h-screen  overflow-x-hidden w-full`}
      >
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
