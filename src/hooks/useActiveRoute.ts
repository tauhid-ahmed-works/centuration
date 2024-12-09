import { usePathname } from "next/navigation";

type ActivePathname = {
  href: string;
  className: string;
};

export function useActivePathname({ href }: ActivePathname) {
  const pathname = usePathname();
  return href.startsWith(pathname);
}
