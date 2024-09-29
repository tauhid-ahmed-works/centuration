import * as Typography from "@/components/shared/typography";
// import { RouteRedirect } from "./route-redirect";

interface Props {
  tagLine?: string;
  heading?: string;
  paragraph?: string;
  children?: React.ReactNode;
}

export function TextBlock({ tagLine, heading, paragraph, children }: Props) {
  return (
    <>
      <Typography.Tag as="h1" className="text-base text-white">
        {tagLine}
      </Typography.Tag>
      <Typography.H2 className="text-white">{heading}</Typography.H2>
      <Typography.P className="text-white">{paragraph}</Typography.P>
      {children}
    </>
  );
}

export function BannerTextBlock({
  tagLine,
  heading,
  paragraph,
  children,
}: Props) {
  return (
    <TextBlock tagLine={tagLine} heading={heading} paragraph={paragraph}>
      {children}
    </TextBlock>
  );
}
