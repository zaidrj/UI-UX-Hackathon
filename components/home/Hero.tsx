import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#f5e6db] text-gray-900">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-4 sm:p-8 lg:p-16 flex items-center justify-center text-center lg:text-left py-16">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Shop the new Spring 2022 collection today
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link href="/categories/ceramics">
                <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
                  View collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop&q=60"
            alt="Luxury furniture"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}