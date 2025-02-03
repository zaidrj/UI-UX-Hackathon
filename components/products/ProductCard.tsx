"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { ProductQuickView } from './ProductQuickView';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-opacity group-hover:opacity-75"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <Button
              variant="secondary"
              onClick={() => setShowQuickView(true)}
              className="bg-white/90 hover:bg-white"
            >
              Quick View
            </Button>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-900">
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">${product.price}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </p>
            )}
          </div>
        </div>
      </div>

      <ProductQuickView 
        product={product}
        open={showQuickView}
        onOpenChange={setShowQuickView}
      />
    </>
  );
}