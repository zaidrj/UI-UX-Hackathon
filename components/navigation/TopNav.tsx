"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import UserNav from "./UserNav";

export default function TopNav() {
  return (
    <div className="flex h-16 items-center justify-between px-4 md:px-6">
      <div className="flex-1 items-center justify-start hidden lg:flex">
        <SearchBar />
      </div>

      {/* Centered Avion */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link href="/" className="text-2xl font-medium text-center">
          Avion
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-end">
        <UserNav />
      </div>
    </div>
  );
}
