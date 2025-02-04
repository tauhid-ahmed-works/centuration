import type { Metadata } from "next";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Poppins } from "next/font/google";
import ConfigProvider from "@/context/config-context";
import { Header } from "@/components/header";
import { ScrollButton } from "@/components/scroll-button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Centurions",
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
    <html lang={locale} suppressHydrationWarning>
      <link rel="icon" href="/favicon.webp" />
      <body
        className={`${poppins.className} ${poppins.variable} font-body antialiased flex flex-col min-h-screen  overflow-x-hidden w-full`}
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
