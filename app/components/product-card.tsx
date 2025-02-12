import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Link href={`/products/${product.id}`} className="block w-full text-center bg-indigo-600 text-white hover:bg-indigo-700 font-semibold py-2 px-4 rounded-md transition-colors duration-200">
          View Details
        </Link>
      </div>
    </div>
  )
}

