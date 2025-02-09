"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "./heading";
import Link from "next/link";
import { getIntl } from "@/lib/get-intl";

export default function NewsLetter() {
  const newsLetterData = getIntl("news_letter");
  return (
    <section className="h-72 md:h-96 relative flex items-center justify-center text-center">
      <div className="h-full w-full relative">
        <Image
          fill
          alt="news-letter-bg"
          src="/assets/images/news-letter.png"
          className="absolute size-full inset-0 object-cover object-right"
        />
      </div>
      <div className="absolute z-10 flex flex-col justify-center">
        <Heading className="text-white" size="3xl">
          <span className="block">
            {newsLetterData("title").split("\n")[0]}
          </span>
          <span className="block">
            {newsLetterData("title").split("\n")[1]}
          </span>
        </Heading>
        <form className="mt-6">
          <div className="flex flex-col items-center sm:flex-row gap-4">
            <input
              placeholder="Enter your email"
              type="text"
              className="rounded-full h-12 px-4 w-full sm:w-96 text-white bg-transparent border border-gray-500"
            />
            <Button
              asChild
              variant="primary"
              contrast="default"
              shape="pill"
              size="md"
              className="bg-primary-500 text-secondary-500"
            >
              <Link href="#">Subscribe Now</Link>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
