import { Typography } from "@/components/typography";
import Link from "next/link";

export default function CenturionFondation() {
  return (
    <div className="h-screen bg-gray-950 grid place-items-center">
      <div className="text-white text-center space-y-6">
        <Typography.H1 className="text-5xl">Coming Soon</Typography.H1>
        <Link href="/" className="inline-block">
          Go Home
        </Link>
      </div>
    </div>
  );
}
