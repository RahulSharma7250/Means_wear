import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { categoryProducts } from "@/app/data/products"

// Combine all products from different categories
const allProducts = Object.values(categoryProducts).flat()

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <div className="flex justify-between items-center">
                <Link href={`/product/${product.id}`}>
                  <Button variant="outline">View Details</Button>
                </Link>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

