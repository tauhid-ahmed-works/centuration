import MediaCard from "./_card";

export default async function Media(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  return <MediaCard slug={slug} />;
}
