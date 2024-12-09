import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={cn(
        "hover:text-primary-500 transition-colors",
        { "text-primary-500": isActive },
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
