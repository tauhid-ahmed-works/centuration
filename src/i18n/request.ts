"use server";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { defaultLocale } from "./config";

export default getRequestConfig(async () => {
  const locale = (await cookies()).get("i18n")?.value || defaultLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
