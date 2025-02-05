import { Heading } from "@/components/heading";
import { useTranslations } from "next-intl";

export default function OurCommitment() {
  const t = useTranslations("sustainability");
  return (
    <section className="section" data-padding="md">
      <div className="container" data-size="md">
        <div className="space-y-4 text-center">
          <Heading size="3xl" as="h2">
            {t("commitments.title")}
          </Heading>
          <p>{t("commitments.content").split("\t")[0]}</p>
          <p>{t("commitments.content").split("\t")[1]}</p>
        </div>
      </div>
    </section>
  );
}
