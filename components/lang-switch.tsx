"use client";
import * as Select from "@radix-ui/react-select";
import { setLocale } from "@/actions/i18n";
import { useLocale } from "next-intl";
import * as Icons from "./icons";

const lang = {
  en: "en",
  fr: "fr",
};

export default function LangSwitch() {
  const locale = useLocale();
  const Flag =
    lang[locale as keyof typeof lang] === "en"
      ? Icons.UnitedStates
      : Icons.France;
  return (
    <Select.Root onValueChange={async (e) => setLocale(e)}>
      <Select.Trigger className="data-[state=open]:outline-none text-sm font-semibold">
        <Select.Value placeholder={<Flag className="size-6" />} />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="block text-white z-[200] mt-10 rounded bg-black/40 backdrop-blur-3xl w-24">
          <Select.Viewport className="space-y-2 p-2">
            <Select.Item
              value="en"
              className="cursor-pointer text-xs font-semibold"
            >
              <Select.ItemText>
                {
                  <Icons.UnitedStates className="w-6 inline-block align-middle" />
                }{" "}
                EN
              </Select.ItemText>
            </Select.Item>
            <Select.Item
              value="fr"
              className="cursor-pointer text-xs font-semibold"
            >
              <Select.ItemText>
                <Icons.France className="w-6 inline-block align-middle" /> FR
              </Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
