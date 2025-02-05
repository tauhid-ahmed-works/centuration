import Link from "next/link";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <div className="h-screen grid place-items-center text-center bg-secondary-900 text-white">
        <div className="space-y-2">
          <Heading size="6xl" as="h2">
            Not Found
          </Heading>
          <Button asChild variant="secondary" size="md">
            <Link href="/" className="m-2 font-semibold text-sm">
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
