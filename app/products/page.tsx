import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";

const products = [
  { id: 1, name: "Classic White Shirt", price: 59.99, image: "/shirt.jpg?height=400&width=300" },
  { id: 2, name: "Slim Fit Jeans", price: 79.99, image: "/jeans.jpg?height=400&width=300" },
  { id: 3, name: "Leather Jacket", price: 199.99, image: "/jackets.jpg?height=400&width=300" },
  { id: 4, name: "Cotton T-Shirt", price: 29.99, image: "/tshirt.jpg?height=400&width=300" },
  { id: 5, name: "Floral Summer Dress", price: 89.99, image: "/shorts.jpg?height=400&width=300" },
  { id: 6, name: "Formal Suit", price: 299.99, image: "/suit.jpg?height=400&width=300" },
  { id: 7, name: "Casual Sneakers", price: 69.99, image: "/shoes.jpg?height=400&width=300" },
  { id: 8, name: "Denim Shorts", price: 49.99, image: "/danim.jpg?height=400&width=300" },
];

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-16 lg:px-24">
      {/* Adjusted margin-top and increased spacing below the heading */}
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-20">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={product.image || "/shirt.jpg"}
                alt={product.name}
                width={300}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-lg text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                <div className="flex justify-between items-center">
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" className="bg-black text-white hover:bg-[rgb(20,184,166)]">View Details</Button>
                  </Link>
                  <Button className="bg-black text-white hover:bg-[rgb(20,184,166)]">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
