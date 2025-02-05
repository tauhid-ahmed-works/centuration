"use client";
import { useTranslations } from "next-intl";

export function Banner({ ...props }) {
  const t = useTranslations("home");
  console.log(t.raw("banner")[0].id);
  return <div {...props}></div>;
}
