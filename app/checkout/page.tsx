"use client";

import { useCartContext } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, calculateSummary } = useCartContext();
  const { subtotal, shipping, total } = calculateSummary();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <ShoppingBag className="h-12 w-12 text-gray-400 mb-4" />
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Add some items to your cart to checkout</p>
        <Link href="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Contact Information</h2>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="mt-1" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Shipping Address</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" className="mt-1" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal code</Label>
                    <Input id="postalCode" className="mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-lg bg-gray-50 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="flow-root">
              <ul className="-my-4 divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={`${item.productId}-${item.variantId}`} className="flex py-4">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="text-gray-600">Shipping</p>
                {shipping > 0 ? (
                  <p className="font-medium">${shipping.toFixed(2)}</p>
                ) : (
                  <p className="text-green-600 font-medium">Free</p>
                )}
              </div>

              <Separator />

              <div className="flex items-center justify-between text-base font-medium">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>

            <Button className="w-full mt-6" size="lg">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}