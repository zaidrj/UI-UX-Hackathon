"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product, ProductVariant } from "@/lib/types";
import { useCartContext } from "@/components/cart/CartProvider";
import { ShoppingBag } from "lucide-react";

interface ProductQuickViewProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductQuickView({ product, open, onOpenChange }: ProductQuickViewProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants.find(v => v.inStock) || null
  );
  const { addItem } = useCartContext();

  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem(product.id, selectedVariant.id);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm text-gray-500">{product.description}</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-2 flex gap-2">
                  {product.variants
                    .filter(v => v.type === 'color')
                    .map(variant => (
                      <button
                        key={variant.id}
                        className={`h-8 w-8 rounded-full border-2 ${
                          selectedVariant?.id === variant.id
                            ? 'border-primary'
                            : 'border-transparent'
                        }`}
                        style={{ backgroundColor: variant.value }}
                        onClick={() => setSelectedVariant(variant)}
                        disabled={!variant.inStock}
                      />
                    ))}
                </div>
              </div>
              <div>
                <p className="text-xl font-medium">${product.price}</p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </p>
                )}
              </div>
              <Button
                onClick={handleAddToCart}
                className="w-full"
                disabled={!selectedVariant}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}