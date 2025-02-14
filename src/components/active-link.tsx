import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  exact?: boolean; // Optional exact match
};

export function ActiveLink({
  href,
  children,
  className = "",
  exact = false,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      prefetch
      className={cn(
        "hover:text-primary-500 transition-colors cursor-pointer",
        { "!text-primary-500": isActive },
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
