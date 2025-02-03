"use client";

import Link from "next/link";
import { ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/components/cart/CartProvider";

export default function UserNav() {
  const { items, setIsOpen } = useCartContext();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" className="relative" onClick={() => setIsOpen(true)}>
        <ShoppingBag className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            {itemCount}
          </span>
        )}
      </Button>
      <Link href="/account">
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
}