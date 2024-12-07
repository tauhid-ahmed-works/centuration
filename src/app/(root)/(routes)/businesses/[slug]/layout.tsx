import { removeDash } from "@/libs/utils/removeDash";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  return {
    title:
      "Business - " +
      removeDash(params.slug)
        .split(" ")
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(" "),
  };
}
export default function BussinessSlugRoute({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
