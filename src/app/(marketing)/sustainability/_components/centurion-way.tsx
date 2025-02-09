import { useTranslations } from "next-intl";
import { Icons } from "@/components/icons";
import AnimatedCard from "@/components/animate-card";
import { Heading } from "@/components/heading";

const centurionWayData = [
  <Icons.Financial key={1} className="size-32 mx-auto text-rose-500" />,
  <Icons.Institution key={2} className="size-32 mx-auto text-sky-500" />,
  <Icons.Values key={3} className="size-32 mx-auto text-orange-500" />,
  <Icons.Environmental key={4} className="size-32 mx-auto text-green-500" />,
  <Icons.LearningEnvironment
    key={5}
    className="size-32 mx-auto text-violet-500"
  />,
];

export default function CenturionWay() {
  const t = useTranslations("sustainability");
  return (
    <section className="section" data-padding="md">
      <div className="container">
        <AnimatedCard index={0}>
          <div className="md:flex md:gap-10 items-center py-10">
            <div className="md:flex-1 justify-center space-y-6 text-center md:px-32">
              <Heading size="3xl" as="h2">
                {t("centurion_way.title")}
              </Heading>
              <p>{t("centurion_way.description")}</p>
            </div>
          </div>
        </AnimatedCard>

        <div className="flex flex-wrap justify-center">
          {centurionWayData.map((icon, index) => (
            <AnimatedCard
              className="basis-1/2 px-4 min-h-60"
              key={index}
              index={2}
            >
              {icon}
              <p className="text-center">
                {t.raw("centurion_way.features")[index]}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
