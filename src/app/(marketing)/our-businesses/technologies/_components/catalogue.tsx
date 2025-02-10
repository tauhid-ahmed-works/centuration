import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

export function Catalogue() {
  return (
    <section className="relative">
      <div className="container">
        <div className="flex h-60 md:h-[300px] z-10 text-white">
          <div className="flex-1 shrink-0 relative before:absolute before:inset-y-0 before:w-screen before:bg-secondary-500 before:right-0 flex items-center">
            <div className="relative z-10 pr-6 space-y-4 lg:space-y-8">
              <Heading size="3xl">Medical Catalogue</Heading>
              <Button size="md" className="bg-primary-500">
                Download PDF
              </Button>
            </div>
          </div>
          <div className="flex-1 shrink-0 relative before:absolute before:inset-y-0 before:w-screen before:bg-primary-500 before:left-0 flex items-center">
            <div className="relative z-10 pl-6 space-y-4 lg:space-y-8">
              <Heading size="3xl">SOLT products catalog</Heading>
              <Button size="md">Download PDF</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
