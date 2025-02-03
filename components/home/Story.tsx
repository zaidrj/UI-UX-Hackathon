import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Story() {
  return (
    <div className="grid lg:grid-cols-2 py-16">
      <div className="bg-[#2A254B] text-white p-8 lg:p-16 flex items-center justify-center min-h-[400px] lg:min-h-[400px]">
        <div className="max-w-md mx-auto text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            It started with a small idea
          </h2>
          <p className="text-gray-300 mb-8">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/categories/ceramics">
              <Button 
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                View collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative min-h-[400px] lg:min-h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60"
          alt="Our story"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}