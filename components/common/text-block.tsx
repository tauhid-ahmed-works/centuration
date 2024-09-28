import { cn } from "@/libs/utils/cn";

interface Props {
  text?: string;
  className?: string;
}

function Heading({ text, className }: Props) {
  return (
    <h2 className={cn("text-4xl lg:text-5xl font-semibold", className)}>
      {text}
    </h2>
  );
}

function Paragraph({ text, className }: Props) {
  return <p className={cn("text-lg", className)}>{text}</p>;
}

function Tagline({ text, className }: Props) {
  return <p className={cn("text-sm", className)}>{text}</p>;
}

export function BannerTextBlockOne({
  heading,
  paragraph,
  tagLine,
}: {
  heading: string;
  paragraph: string;
  tagLine: string;
}) {
  return (
    <div className="text-black">
      <Heading text={heading} />
      <Paragraph text={paragraph} />
      <Tagline text={tagLine} />
    </div>
  );
}

export function BannerTextBlockTwo({
  heading,
  paragraph,
  tagLine,
}: {
  heading: string;
  paragraph: string;
  tagLine: string;
}) {
  return (
    <div className="text-black">
      <Heading text={heading} />
      <Paragraph text={paragraph} />
      <Tagline text={tagLine} />
    </div>
  );
}
