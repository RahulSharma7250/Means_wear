import ProductCard from '../components/product-card'

// This would typically come from an API or database
const products = [
  { id: 1, name: 'Classic White Tee', price: 29.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 2, name: 'Slim Fit Jeans', price: 59.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 3, name: 'Leather Jacket', price: 199.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 4, name: 'Floral Dress', price: 79.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 5, name: 'Sneakers', price: 89.99, image: '/placeholder.svg?height=300&width=300' },
  { id: 6, name: 'Denim Shorts', price: 49.99, image: '/placeholder.svg?height=300&width=300' },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

