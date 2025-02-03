"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { CATEGORIES } from "@/lib/constants/categories";

export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <>
      <Separator className="hidden lg:block" />
      <nav className="hidden lg:block">
        <div className="flex items-center justify-center py-4 space-x-12">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className={cn(
                "text-sm text-gray-600 hover:text-gray-900 transition-colors",
                pathname === `/categories/${category.id}` && "text-gray-900 font-medium"
              )}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </nav>
      <Separator className="hidden lg:block" />
    </>
  );
}