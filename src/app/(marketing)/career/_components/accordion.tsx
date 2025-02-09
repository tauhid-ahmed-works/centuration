"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "@/components/icons";

export default function Accordion({
  data,
}: {
  data: { q: string; a: string }[];
}) {
  const [open, setOpen] = React.useState("");

  return (
    <section className="section" data-padding="sm">
      <div className="container" data-size="md">
        <div className="divide-y-1">
          {data.map((accordion) => (
            <div className="w-full" key={accordion.q}>
              <button
                onClick={() =>
                  open === accordion.q ? setOpen("") : setOpen(accordion.q)
                }
                className={cn(
                  `flex justify-between w-full md:text-xl py-3 cursor-pointer font-medium hover:bg-gray-500`,
                  open === accordion.q && "bg-gray-100 text-brand-500"
                )}
              >
                {accordion.q}

                <span>
                  {open === accordion.q ? (
                    <ChevronUp className="size-5" />
                  ) : (
                    <ChevronDown className="size-5" />
                  )}
                </span>
              </button>

              {open === accordion.q && <p className="py-4">{accordion.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
