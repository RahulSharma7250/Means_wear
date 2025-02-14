"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Trash2 } from "lucide-react";

// Mock cart data
const initialCart = [
  { id: 1, name: "Classic White Shirt", price: 59.99, quantity: 1, image: "/shirt.jpg?height=100&width=100" },
  { id: 2, name: "Slim Fit Jeans", price: 79.99, quantity: 2, image: "/jeans.jpg?height=100&width=100" },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white min-h-screen px-6 md:px-16 lg:px-24 mb-12" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">
          Your cart is empty. {" "}
          <Link href="/products" className="text-blue-500 hover:underline">
            Continue shopping
          </Link>
        </p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-6 border-b pb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md shadow-sm"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600 text-lg">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </Button>
                  <Input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                    className="w-16 text-center border rounded-md py-1"
                  />
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </Button>
                </div>
                <Button variant="ghost" size="sm" onClick={() => updateQuantity(item.id, 0)}>
                  <Trash2 className="h-5 w-5 text-red-500" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-2xl font-semibold text-gray-800">Total: ${total.toFixed(2)}</p>
            <Link href="/checkout">
              <Button size="lg" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}