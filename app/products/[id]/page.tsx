import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "../../components/ui/button"

// Mock product data (in a real app, this would come from a database or API)
const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 59.99,
    image: "/shirt.jpg?height=600&width=600",
    description:
      "A timeless classic, this white shirt is perfect for any occasion. Made from high-quality cotton for comfort and durability.",
    features: [
      "100% premium cotton",
      "Breathable and lightweight",
      "Available in multiple sizes",
      "Perfect for formal and casual wear",
    ],
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 79.99,
    image: "/jeans.jpg?height=600&width=600",
    description:
      "These slim fit jeans offer both style and comfort. Made from a stretchy denim blend for the perfect fit.",
    features: [
      "Stretchy denim blend",
      "Slim fit design",
      "Fades and washes well",
      "Pairs well with any outfit",
    ],
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen px-6 md:px-16 lg:px-24 mb-12" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      {/* Product Details */}
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500} // Reduced size
            height={500} // Reduced size
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-900 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Product Features */}
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            {product.features?.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>

          <div className="flex space-x-4">
            <Button className="bg-black text-white hover:bg-[rgb(20,184,166)] px-6 py-3 text-lg rounded-lg shadow-md transition">
              Add to Cart
            </Button>
            <Button className="bg-black text-white hover:bg-[rgb(20,184,166)] px-6 py-3 text-lg rounded-lg shadow-md transition" variant="outline">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="container mx-auto mt-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Customer Reviews</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <p className="text-lg font-semibold text-gray-700">"Amazing quality! The fit is perfect and the fabric feels great."</p>
          <p className="text-gray-600 mt-2">- John Doe</p>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto mt-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            item.id !== product.id && (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="flex justify-center">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={250}  // Smaller width
                    height={250} // Smaller height
                    className="w-full h-40 object-cover" // Adjusted height for a smaller card
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>
                  <Button className="bg-black text-white hover:bg-[rgb(20,184,166)] w-full mt-4">View Details</Button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}
