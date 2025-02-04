"use client";
import { useTranslations } from "next-intl";

export function Banner() {
  const t = useTranslations("home");
  console.log(t.raw("banner")[0].id);
  return <></>;
}
