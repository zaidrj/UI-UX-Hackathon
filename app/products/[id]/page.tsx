import { Button } from "@/components/ui/button";
import { products } from "@/lib/data/products";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((p) => p.id === params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <p className="mt-4 text-2xl font-medium text-gray-900">${product.price.toFixed(2)}</p>
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">Description</h2>
              <p className="mt-4 text-gray-600">{product.description}</p>
            </div>
            <div className="mt-8">
              <Button size="lg" className="w-full">Add to Basket</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}