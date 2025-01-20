import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "./heading";
import Link from "next/link";

export default function NewsLetter() {
  return (
    <div className="h-84 relative flex items-center justify-center text-center before:absolute before:z-10 before:inset-0 before:bg-black/70">
      <Image
        width="1020"
        height="334"
        alt="news-letter-bg"
        src="/assets/images/news-letter.jpeg"
        className="absolute size-full inset-0 object-cover object-right"
      />
      <div className="absolute z-10">
        <Heading className="text-white" size="3.5xl">
          Get started to up your business <br /> with personal AI manager
        </Heading>
        <form className="flex gap-4 mt-6">
          <input
            placeholder="Enter your email"
            type="text"
            className="rounded-full w-60 lg:w-96 text-white bg-transparent"
          />
          <Button
            asChild
            className="rounded-full"
            variant="secondary"
            size="lg"
          >
            <Link href="#">Try Now</Link>
          </Button>
        </form>
      </div>
    </div>
  );
}
