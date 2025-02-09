import { useTranslations } from "next-intl";

export function useIntl(page: string) {
  const t = useTranslations(page);
  return (section: string) => t.raw(section);
}
