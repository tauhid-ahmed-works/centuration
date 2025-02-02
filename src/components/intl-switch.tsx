"use client";
import React from "react";
import * as Select from "@radix-ui/react-select";
import { setLocale } from "@/actions/i18n";
import { useLocale } from "next-intl";
import * as Icons from "./icons";

const lang = {
  en: "en",
  fr: "fr",
};

export default function IntlSwitch({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const locale = useLocale();
  const Flag =
    lang[locale as keyof typeof lang] === "en"
      ? Icons.UnitedStates
      : Icons.France;
  return (
    <li
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
      className="py-6 inline-block align-middle relative"
    >
      <button className="size-6 cursor-pointer translate-y-1">
        {<Flag />}
      </button>
      {open && (
        <ul className="absolute top-full right-0 xl:translate-x-1/2 size-24 bg-secondary-500 p-2 space-y-4 rounded-bl rounded-br">
          <li>
            <button
              className="cursor-pointer flex gap-1 pl-2 hover:text-primary-500"
              onClick={() => setLocale("en")}
            >
              <Icons.UnitedStates className="size-6" /> En
            </button>
          </li>
          <li>
            <button
              className="cursor-pointer flex gap-1 pl-2 hover:text-primary-500"
              onClick={() => setLocale("fr")}
            >
              {<Icons.France className="size-6" />} Fr
            </button>
          </li>
        </ul>
      )}
    </li>
  );
}

/*


<Select.Root onValueChange={async (e) => setLocale(e)}>
      <Select.Trigger className={className}>
        <Select.Value placeholder={<Flag className="size-6" />} />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="block text-white z-500 absolute top-full rounded bg-secondary-500 w-24 transition-all">
          <Select.Viewport className="space-y-2 p-2">
            <Select.Item value="en" className="cursor-pointer">
              <Select.ItemText>
                {<Icons.UnitedStates className="w-6" />}
              </Select.ItemText>
            </Select.Item>
            <Select.Item value="fr" className="cursor-pointer">
              <Select.ItemText>
                <Icons.France className="w-6" />
              </Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
*/
