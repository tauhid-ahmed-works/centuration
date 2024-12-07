"use server";
import { cookies } from "next/headers";

export async function getLocale() {
  return (await cookies()).get("i18n")?.value || "en";
}

export async function setLocale(locale: string) {
  (await cookies()).set("i18n", locale);
}
