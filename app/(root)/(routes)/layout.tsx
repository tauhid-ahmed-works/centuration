import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SmoothScrolling from "@/components/smooth-scrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <SmoothScrolling> */}
      <Navbar />
      {children}
      <Footer />
      {/* </SmoothScrolling> */}
    </>
  );
}
