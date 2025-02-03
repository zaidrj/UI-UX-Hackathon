import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image: "https://source.unsplash.com/random/400x400?product=1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    image: "https://source.unsplash.com/random/400x400?product=2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 49.99,
    image: "https://source.unsplash.com/random/400x400?product=3",
  },
  // Add more products as needed
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Products</h1>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                <div className="mt-4">
                  <Button className="w-full">Add to Basket</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}