import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centurion",
  description: "",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
