import { LucideLoaderCircle } from "lucide-react";

export default function PageLoader() {
  return (
    <section className="h-screen grid place-items-center bg-secondary-900 text-white">
      <LucideLoaderCircle className="size-6 md:size-8 lg:size-10 animate-spin" />
    </section>
  );
}
