import { Heading } from "./heading";

export default function PageInformation({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="section" data-padding="lg">
      <div className="container">
        <div className="space-y-4">
          <Heading
            className="text-secondary-500 text-center"
            as="h2"
            size="3xl"
          >
            {title}
          </Heading>
          <p className="text-secondary-400">{content}</p>
        </div>
      </div>
    </section>
  );
}
