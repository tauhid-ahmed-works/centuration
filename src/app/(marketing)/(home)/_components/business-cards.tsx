import { BusinessCard } from "@/components/business-card";
import { useIntl } from "@/lib/get-intl";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BusinessCards({ ...props }) {
  const businessData = useIntl("businesses");
  const businessIntl = businessData("business");

  return (
    <section className="section" data-padding="md" {...props}>
      <div className="px-4 text-center max-w-4xl mx-auto py-10 md:py-20">
        <Heading as="h2" size="4xl" className="mb-4">
          {businessIntl.title}
        </Heading>
        <p>{businessIntl.description}</p>
      </div>
      <div className="container">
        <BusinessCard limit={6} />
        <div className="mx-auto pt-14 w-60">
          <Button size="md" variant="primary" className="w-full" asChild>
            <Link href="">See All</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
