import { Heading } from "@/components/heading";
import Link from "next/link";

export default function PetrochemicalsPage() {
  return (
    <div className="h-screen bg-gray-950 grid place-items-center">
      <div className="text-white text-center space-y-6">
        <Heading as="h2" className="text-5xl">
          Coming Soon
        </Heading>
        <Link href="/" className="inline-block">
          Go Home
        </Link>
      </div>
    </div>
  );
}
