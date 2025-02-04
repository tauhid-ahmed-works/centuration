"use client";
import { useTranslations } from "next-intl";

export function Banner() {
  const t = useTranslations("home");
  console.log(t("home_title"));
  return <></>;
}
