"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "./heading";
import Link from "next/link";
import { useIntl } from "@/lib/get-intl";

export default function NewsLetter() {
  const newsLetterData = useIntl("news_letter");
  return (
    <section className="h-72 md:h-96 relative flex items-center justify-center text-center">
      <div className="h-full w-full relative">
        <Image
          fill
          alt="news-letter-bg"
          src="/assets/images/news-letter.webp"
          className="absolute size-full inset-0 object-cover object-right"
        />
      </div>
      <div className="absolute z-10 flex flex-col justify-center">
        <div className="container">
          <Heading className="text-white" size="3xl">
            <span className="block">
              {newsLetterData("title").split("\n")[0]}
            </span>
            <span className="block">
              {newsLetterData("title").split("\n")[1]}
            </span>
          </Heading>
          <form className="mt-6 space-y-4">
            <div className="flex flex-col items-center justify-between sm:flex-row gap-4 border border-gray-500 rounded-full focus-within:border-primary-500">
              <input
                placeholder="Enter your email"
                type="text"
                className="rounded-full h-12 px-4 w-full sm:w-96 text-white bg-transparent focus:ring-0 focus:outline-0"
              />
              <Button
                asChild
                variant="primary"
                contrast="default"
                shape="pill"
                size="lg"
                className="bg-primary-500 text-secondary-500 hidden sm:inline-flex"
              >
                <Link href="#">Subscribe Now</Link>
              </Button>
            </div>
            <Button
              asChild
              variant="primary"
              contrast="default"
              shape="pill"
              className="bg-primary-500 text-secondary-500 w-full sm:hidden"
            >
              <Link href="#">Subscribe Now</Link>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
