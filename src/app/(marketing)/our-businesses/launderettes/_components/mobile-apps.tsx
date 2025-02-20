import Underline from "@/components/decorate-line";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MobileApps() {
  return (
    <section className="section bg-secondary-500" data-padding="md">
      <div className="container">
        <div className="flex gap-20">
          <div className="flex-1">
            <Image
              width={350}
              height={700}
              src="/assets/images/business/launderettes/our-app/phone.png"
              alt="order"
              className="mx-auto"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center text-white">
            <Heading className="text-primary-500" as="h2" size="base">
              Try on mobile
            </Heading>
            <Underline className="mt-2" size="md" />
            <Heading className="mt-6" as="h3" size="3xl">
              Your laundry collected, washed, dried and delivered with the
              Chap-Chap Laundry App
            </Heading>
            <p className="mt-6">
              Place an order in 2 minutes chrono, don&apos;t move anymore, we
              take care of everything
            </p>
            <p className="text-primary-500 text-3xl mt-6">Soon available</p>
            <div className="flex gap-4 mt-10">
              <Button className="border-white rounded cursor-pointer" size="md">
                App Store
              </Button>
              <Button className="border-white rounded cursor-pointer" size="md">
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
