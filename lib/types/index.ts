export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  variants: ProductVariant[];
  features: string[];
  stockLevel: number;
  specifications: Record<string, string>;
}

export interface ProductVariant {
  id: string;
  name: string;
  type: 'color' | 'size';
  value: string;
  inStock: boolean;
  maxQuantity?: number;
}

export interface CartItem {
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
}

export interface CartSummary {
  subtotal: number;
  tax: number;
  total: number;
  items: CartItem[];
}