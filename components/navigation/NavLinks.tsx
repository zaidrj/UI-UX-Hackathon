"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { name: "Plant pots", href: "/categories/plant-pots" },
  { name: "Ceramics", href: "/categories/ceramics" },
  { name: "Tables", href: "/categories/tables" },
  { name: "Chairs", href: "/categories/chairs" },
  { name: "Crockery", href: "/categories/crockery" },
  { name: "Tableware", href: "/categories/tableware" },
  { name: "Cutlery", href: "/categories/cutlery" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center justify-center space-x-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "text-sm text-gray-600 hover:text-gray-900 transition-colors",
            pathname === link.href && "text-gray-900"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}