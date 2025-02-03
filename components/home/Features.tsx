import { Truck, CheckCircle, CreditCard, Recycle } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
  },
  {
    icon: CheckCircle,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    icon: CreditCard,
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere",
  },
  {
    icon: Recycle,
    title: "Recycled packaging",
    description: "We use 100% recycled to ensure our footprint is more manageable",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">What makes our brand different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="text-center p-6 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}