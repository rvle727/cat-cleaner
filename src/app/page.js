
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-[#fefaf5] text-[#1a1a1a] min-h-screen">
      <header className="bg-[#fef3dc] p-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Cat Cleaner</h1>
          <nav className="space-x-4">
            <a href="#features" className="hover:text-[#ffc107]">Why Us</a>
            <a href="#how" className="hover:text-[#ffc107]">How It Works</a>
            <a href="#shop" className="hover:text-[#ffc107]">Shop</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-20 bg-[#fff8e1]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-4">The Smarter Way to Clean Your Cat’s Litter</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Say goodbye to daily scooping — the Cat Cleaner 3000 does it for you.
          </p>
          <Button className="bg-[#ffc107] text-[#1a1a1a] hover:bg-[#ffb300]">Shop Now</Button>
        </div>
      </section>

      <section id="features" className="py-20 container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-12">Why Cat Owners Love Us</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card><CardContent className="p-6"><h4 className="text-xl font-semibold mb-2">😺 Hassle-Free Cleaning</h4><p>Automatically scoops and stores waste. No more scooping!</p></CardContent></Card>
          <Card><CardContent className="p-6"><h4 className="text-xl font-semibold mb-2">♻️ Odor Control Technology</h4><p>Sealed drawer and filter keeps smells away.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h4 className="text-xl font-semibold mb-2">📱 App-Connected (Coming Soon)</h4><p>Get alerts and maintenance reminders.</p></CardContent></Card>
        </div>
      </section>

      <section id="how" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card><CardContent className="p-6">1. Your cat does its business.</CardContent></Card>
            <Card><CardContent className="p-6">2. The Cat Cleaner 3000 scoops it away in minutes.</CardContent></Card>
            <Card><CardContent className="p-6">3. You relax — no scooping required!</CardContent></Card>
          </div>
        </div>
      </section>

      <section id="shop" className="py-20 container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-12">Meet the Cat Cleaner 3000</h3>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <img src="/cat-cleaner-3000.jpg" alt="Cat Cleaner 3000" className="rounded-xl mb-4" />
            <h4 className="text-2xl font-bold mb-2">Cat Cleaner 3000</h4>
            <p className="text-lg font-semibold text-[#ffc107] mb-4">$299</p>
            <p className="mb-4">A smart, odor-free, self-scooping litter box for modern cat owners. Includes sealed waste drawer, quiet motor, and app integration (coming soon).</p>
            <Button className="bg-[#ffc107] text-[#1a1a1a] hover:bg-[#ffb300]">Add to Cart</Button>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-[#fef3dc] text-center py-8 mt-20 border-t border-[#e0d6c5]">
        <p>&copy; 2025 Cat Cleaner. All rights reserved.</p>
      </footer>
    </div>
  );
}
