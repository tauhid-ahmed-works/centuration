"use server";
import { cookies } from "next/headers";

export async function getLocale() {
  return cookies().get("i18n")?.value || "en";
}

export async function setLocale(locale: string) {
  cookies().set("i18n", locale);
}
