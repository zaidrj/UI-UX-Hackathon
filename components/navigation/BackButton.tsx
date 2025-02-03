"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function BackButton() {
  return (
    <Link 
      href="/" 
      className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 absolute left-4 top-4"
    >
      <ChevronLeft className="h-4 w-4 mr-1" />
      Home
    </Link>
  );
}