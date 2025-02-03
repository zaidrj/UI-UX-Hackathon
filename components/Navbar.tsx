"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import TopNav from "./navigation/TopNav";
import CategoryNav from "./navigation/CategoryNav";
import Link from "next/link";

const mobileLinks = [
  { name: "Plant pots", href: "/categories/plant-pots" },
  { name: "Ceramics", href: "/categories/ceramics" },
  { name: "Tables", href: "/categories/tables" },
  { name: "Chairs", href: "/categories/chairs" },
  { name: "Crockery", href: "/categories/crockery" },
  { name: "Tableware", href: "/categories/tableware" },
  { name: "Cutlery", href: "/categories/cutlery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        {/* Mobile Menu */}
        <div className="lg:hidden absolute left-4 top-5">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Top Navigation */}
        <TopNav />

        {/* Category Navigation - Hidden on Mobile */}
        <div className="hidden lg:block">
          <CategoryNav />
        </div>
      </div>
    </header>
  );
}