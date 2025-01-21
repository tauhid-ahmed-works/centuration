import { ArrowLong } from "@/components/icons";
import Link from "next/link";
import { Intro } from "./_components/intro";
import { Heading } from "@/components/heading";

export default function FertilizerPage() {
  return (
    <>
      <Intro />
      <section className="section">
        <div className="container">
          <div className="text-center space-y-4 md:space-y-8 text-sm">
            <Heading as="h2">
              Unlock the Power of Growth with Fertilizer
            </Heading>

            <p>
              Enhance your soil&apos;s nutrients and boost plant vitality with
              the right fertilizer. From nurturing roots to promoting lush,
              healthy greenery, fertilizers are the key to flourishing gardens
              and thriving crops.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
