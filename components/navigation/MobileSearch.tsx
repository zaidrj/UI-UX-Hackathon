"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function MobileSearch() {
  return (
    <div className="px-4 py-6 border-t">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full pl-10 bg-gray-50"
        />
      </div>
    </div>
  );
}