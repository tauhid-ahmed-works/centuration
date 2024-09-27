import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export default function Navbar() {
  return (
    <header>
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
