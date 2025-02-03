"use client";

import { useCartContext } from '@/components/cart/CartProvider';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartContext();
  const total = items.reduce((sum, item) => sum + (item.quantity * 99.99), 0);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Your Cart</h1>
          <p className="mt-4 text-gray-500">Your cart is empty</p>
          <Link href="/products">
            <Button className="mt-8">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

      <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-7">
          <div className="divide-y divide-gray-200">
            {items.map((item) => (
              <div key={item.productId} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                  <img
                    src="https://source.unsplash.com/random/400x400?product"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>Product Name</h3>
                    <p className="ml-4">${(99.99 * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.productId)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-sm font-medium text-gray-900">${total.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <p className="text-base font-medium text-gray-900">Order total</p>
              <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
            </div>
          </div>

          <Button className="mt-6 w-full" size="lg">
            Checkout
          </Button>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <Link href="/products" className="font-medium text-primary hover:text-primary/90">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}