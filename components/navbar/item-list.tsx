import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ItemsProps = {
  label: string;
  href: string;
};

function ItemList({ label, href }: ItemsProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} passHref scroll={false}>
      <p
        className={cn(
          "text-md font-light text-zinc-600 hover:text-zinc-900",
          isActive && "text-zinc-900"
        )}
      >
        {label}
      </p>
    </Link>
  );
}
export default ItemList;
