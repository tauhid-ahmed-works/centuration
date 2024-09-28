import * as Typography from "@/components/shared/typography";
import { RouteRedirect } from "../route-redirect";

interface Props {
  tagLine?: string;
  heading?: string;
  paragraph?: string;
  path?: string;
}

export default function BannerTextBlock({
  tagLine,
  heading,
  paragraph,
  path,
}: Props) {
  console.log(path);
  return (
    <div className="text-white">
      <Typography.Tag as="h1" className="text-base">
        {tagLine}
      </Typography.Tag>
      <Typography.H2 className="">{heading}</Typography.H2>
      <Typography.P className="">{paragraph}</Typography.P>
      {path ? <RouteRedirect path={path} /> : null}
    </div>
  );
}
