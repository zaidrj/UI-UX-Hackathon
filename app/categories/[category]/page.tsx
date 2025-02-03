import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/lib/data/products";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/lib/constants/categories";
import { BackButton } from "@/components/navigation/BackButton";
import type { Metadata } from 'next';

type Props = {
  params: {
    category: string;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const category = CATEGORIES.find(c => c.id === params.category);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} - Avion`,
    description: `Browse our collection of ${category.name.toLowerCase()}`,
  };
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.id,
  }));
}

export default function CategoryPage({ params }: Props) {
  // Verify the category exists
  const category = CATEGORIES.find(c => c.id === params.category);
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(p => p.category === params.category);

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <BackButton />
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize mb-8">
        {category.name}
      </h1>
      <ProductGrid products={categoryProducts} />
    </div>
  );
}