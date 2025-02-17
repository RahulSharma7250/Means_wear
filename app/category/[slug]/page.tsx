import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "../../components/ui/button"

// Mock product data (in a real app, this would come from a database or API)
const categoryProducts = {
  "t-shirts": [
    { id: 1, name: "Classic White T-Shirt", price: 29.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 2, name: "Graphic Print T-Shirt", price: 34.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 3, name: "V-Neck T-Shirt", price: 24.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 4, name: "Long Sleeve T-Shirt", price: 39.99, image: "/placeholder.svg?height=400&width=300" },
  ],
  hoodies: [
    { id: 5, name: "Zip-Up Hoodie", price: 49.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 6, name: "Pullover Hoodie", price: 54.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 7, name: "Lightweight Hoodie", price: 44.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 8, name: "Fleece-Lined Hoodie", price: 59.99, image: "/placeholder.svg?height=400&width=300" },
  ],
  mousepads: [
    { id: 9, name: "Gaming Mousepad", price: 19.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 10, name: "Ergonomic Mousepad", price: 24.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 11, name: "Extended Mousepad", price: 29.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 12, name: "RGB Mousepad", price: 34.99, image: "/placeholder.svg?height=400&width=300" },
  ],
  mugs: [
    { id: 13, name: "Ceramic Coffee Mug", price: 14.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 14, name: "Travel Mug", price: 19.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 15, name: "Insulated Mug", price: 24.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 16, name: "Enamel Mug", price: 17.99, image: "/placeholder.svg?height=400&width=300" },
  ],
  "water-bottles": [
    { id: 17, name: "Stainless Steel Water Bottle", price: 29.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 18, name: "Glass Water Bottle", price: 24.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 19, name: "Insulated Water Bottle", price: 34.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 20, name: "Collapsible Water Bottle", price: 19.99, image: "/placeholder.svg?height=400&width=300" },
  ],
  pillows: [
    { id: 21, name: "Decorative Throw Pillow", price: 24.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 22, name: "Memory Foam Pillow", price: 39.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 23, name: "Body Pillow", price: 49.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 24, name: "Neck Support Pillow", price: 34.99, image: "/placeholder.svg?height=400&width=300" },
  ],
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const products = categoryProducts[params.slug as keyof typeof categoryProducts]

  if (!products) {
    notFound()
  }

  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1).replace("-", " ")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
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

