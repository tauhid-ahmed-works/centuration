import { Heading } from "@/components/heading";

export default function RootLoading() {
  return (
    <div className="h-screen grid place-items-center bg-secondary-900 text-white">
      <Heading as="h2" size="5xl">
        Loading...
      </Heading>
    </div>
  );
}
