"use client";

import { useState, useEffect, useCallback } from 'react';
import { CartItem, Product, ProductVariant } from '@/lib/types';
import { products } from '@/lib/data/products';

const SHIPPING_THRESHOLD = 30;
const SHIPPING_FEE = 10;

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Error loading cart:', error);
      setError('Failed to load cart data');
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart:', error);
      setError('Failed to save cart data');
    }
  }, [items]);

  const findProduct = useCallback((productId: string): Product | undefined => {
    return products.find(p => p.id === productId);
  }, []);

  const validateQuantity = useCallback((quantity: number, stockLevel: number, maxQuantity?: number): number => {
    const max = maxQuantity || stockLevel;
    return Math.min(Math.max(1, quantity), max);
  }, []);

  const addItem = useCallback((productId: string, variantId?: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const product = findProduct(productId);
      if (!product) {
        throw new Error('Product not found');
      }

      const variant = variantId 
        ? product.variants.find(v => v.id === variantId)
        : product.variants[0];

      if (!variant?.inStock) {
        throw new Error('Product is out of stock');
      }

      setItems(current => {
        const existingItem = current.find(
          item => item.productId === productId && item.variantId === variantId
        );

        if (existingItem) {
          const newQuantity = validateQuantity(
            existingItem.quantity + 1,
            product.stockLevel,
            variant.maxQuantity
          );

          if (newQuantity === existingItem.quantity) {
            throw new Error('Maximum quantity reached');
          }

          return current.map(item =>
            item.productId === productId && item.variantId === variantId
              ? { ...item, quantity: newQuantity }
              : item
          );
        }

        return [...current, {
          productId,
          variantId,
          quantity: 1,
          price: product.price,
          name: product.name,
          image: product.images[0]
        }];
      });

      setIsOpen(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to add item to cart');
    } finally {
      setIsLoading(false);
    }
  }, [findProduct, validateQuantity]);

  const removeItem = useCallback((productId: string, variantId?: string) => {
    setItems(current =>
      current.filter(
        item => !(item.productId === productId && item.variantId === variantId)
      )
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number, variantId?: string) => {
    setError(null);
    
    try {
      const product = findProduct(productId);
      if (!product) {
        throw new Error('Product not found');
      }

      const variant = variantId 
        ? product.variants.find(v => v.id === variantId)
        : product.variants[0];

      if (!variant?.inStock) {
        throw new Error('Product is out of stock');
      }

      const validatedQuantity = validateQuantity(
        quantity,
        product.stockLevel,
        variant.maxQuantity
      );

      setItems(current =>
        current.map(item =>
          item.productId === productId && item.variantId === variantId
            ? { ...item, quantity: validatedQuantity }
            : item
        ).filter(item => item.quantity > 0)
      );
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to update quantity');
    }
  }, [findProduct, validateQuantity]);

  const calculateSummary = useCallback(() => {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal < SHIPPING_THRESHOLD ? SHIPPING_FEE : 0;
    const total = subtotal + shipping;

    return {
      subtotal,
      shipping,
      total,
      items
    };
  }, [items]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  return {
    items,
    isOpen,
    setIsOpen,
    isLoading,
    error,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    calculateSummary,
  };
}