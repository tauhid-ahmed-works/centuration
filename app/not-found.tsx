import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="h-screen flex flex-col gap-4 items-center justify-center">
        <span className="text-5xl">Not Found</span>
        <Link href="/" className="m-2 font-bold text-blue-600 text-sm">
          Go Home
        </Link>
      </div>
    </>
  );
}
