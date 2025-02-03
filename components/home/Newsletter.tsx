"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
  };

  return (
    <section className="py-16 bg-[#2A254B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
        <p className="text-gray-300 mb-8">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
          <Button className="bg-white text-gray-900 hover:bg-gray-100 w-full sm:w-auto">
            Sign up
          </Button>
        </div>
        <div className="mt-8 flex justify-center gap-8">
          <div>✓ Exclusive offers</div>
          <div>✓ Free events</div>
          <div>✓ Large discounts</div>
        </div>
      </div>
    </section>
  );
}