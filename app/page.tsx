// import Image from 'next/image'
// import Link from 'next/link'
// import { ArrowRight, Facebook, Instagram, Twitter, ArrowLeft, Star, Clock, Tag, Truck } from 'lucide-react'
// import Footer from './components/Footer'

// // New Arrivals Data
// const newArrivals = [
//   { id: 1, name: 'Premium Cotton Shirt', price: 89.99, image: '/shirt.jpg?height=400&width=300', tag: 'New' },
//   { id: 2, name: 'Designer Denim Jacket', price: 159.99, image: '/jacket.jpg?height=400&width=300', tag: 'Trending' },
//   { id: 3, name: 'Casual Sneakers', price: 79.99, image: '/Sneakers.jpg?height=400&width=300', tag: 'Best Seller' },
//   { id: 4, name: 'Urban Cargo Pants', price: 69.99, image: '/Pants.jpg?height=400&width=300', tag: 'New' },
// ]

// // Categories Data
// const categories = [
//   { name: 'Formal Wear', image: '/formal.jpg?height=600&width=400', count: '124 Items' },
//   { name: 'Casual Collection', image: '/casual.jpg?height=600&width=400', count: '248 Items' },
//   { name: 'Sports & Active', image: '/sports.jpg?height=600&width=400', count: '156 Items' },
// ]

// // Reviews Data
// const reviews = [
//   { id: 1, name: 'John D.', rating: 5, comment: 'Exceptional quality and style. The fit is perfect!', image: '/placeholder.svg?height=100&width=100' },
//   { id: 2, name: 'Michael R.', rating: 5, comment: 'Great collection and amazing customer service.', image: '/placeholder.svg?height=100&width=100' },
//   { id: 3, name: 'David S.', rating: 5, comment: 'The clothes are fantastic and delivery was quick.', image: '/placeholder.svg?height=100&width=100' },
// ]

// export default function Home() {
//   return (
//     <main className="min-h-screen pt-20">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
//         <div className="container-margin py-12 min-h-[calc(100vh-5rem)]">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             {/* Left Content */}
//             <div className="space-y-10">
//               <div className="space-y-6">
//                 <h2 className="text-6xl font-bold text-gray-300">
//                   ALL ITEMS SALE
//                 </h2>
//                 <div className="space-y-8">
//                 <h1 className="text-7xl font-black">
//                   <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
//                     EXPLOSIVE
//                   </span>
//                   <span className="block text-6xl font-script text-teal-400 mt-2">
//                     Big Sale
//                   </span>
//                 </h1>
//                 <Link
//                   href="/products"
//                   className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
//                 >
//                   BUY NOW
//                 </Link>
//               </div>
//               </div>

//               {/* Newsletter */}
//               <div className="max-w-md">
//                 <h3 className="text-lg font-semibold mb-4">Subscribe To Our Newsletter</h3>
//                 <div className="flex gap-2">
//                   <input
//                     type="email"
//                     placeholder="ENTER EMAIL ID"
//                     className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
//                   />
//                   <button className="bg-teal-400 text-white p-2 rounded-full hover:bg-teal-500 transition-colors">
//                     <ArrowRight className="w-6 h-6" />
//                   </button>
//                 </div>
//               </div>

//               {/* Social Links */}
//               <div className="flex gap-4">
//                 <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
//                   <Facebook className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
//                   <Instagram className="w-5 h-5" />
//                 </a>
//                 <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
//                   <Twitter className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             {/* Right Content - Hero Image */}
//             <div className="relative">
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-400 rounded-full opacity-20 blur-3xl"></div>
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-400 rounded-full"></div>
//               <Image
//                 src="/home2.png?height=600&width=600"
//                 alt="Fashion Model"
//                 width={400}
//                 height={400}
//                 className="relative z-10 mx-auto"
//                 priority
//               />
//               {/* Discount Badge */}
//               <div className="absolute top-10 right-10 z-20 bg-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl animate-float">
//                 <div className="text-xs text-teal-400">15TH AUG</div>
//                 <div className="text-3xl font-bold">SAVE</div>
//                 <div className="text-4xl font-black text-teal-400">50<span className="text-2xl">%</span></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* New Arrivals Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container-margin">
//           <h2 className="text-4xl font-bold mb-12 text-center">
//             New Arrivals
//             <span className="block text-2xl text-gray-500 mt-2 font-normal">Discover Our Latest Collection</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {newArrivals.map((item) => (
//               <div key={item.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
//                 <div className="relative h-80">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <span className="absolute top-4 left-4 bg-teal-400 text-white px-3 py-1 rounded-full text-sm">
//                     {item.tag}
//                   </span>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
//                   <p className="text-2xl font-bold text-teal-600">${item.price}</p>
//                   <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-teal-500 transition-colors">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-20">
//         <div className="container-margin">
//           <h2 className="text-4xl font-bold mb-12 text-center">
//             Shop by Category
//             <span className="block text-2xl text-gray-500 mt-2 font-normal">Find Your Perfect Style</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {categories.map((category, index) => (
//               <div key={index} className="group relative h-[600px] overflow-hidden rounded-2xl">
//                 <Image
//                   src={category.image}
//                   alt={category.name}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
//                   <div className="absolute bottom-8 left-8 text-white">
//                     <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
//                     <p className="text-gray-300">{category.count}</p>
//                     <Link 
//                       href="#" 
//                       className="inline-flex items-center mt-4 text-teal-400 hover:text-white transition-colors"
//                     >
//                       Shop Now <ArrowRight className="ml-2 w-4 h-4" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Special Offers Section */}
//       <section className="py-20 bg-gray-900 text-white">
//         <div className="container-margin">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold mb-6">
//                 Special Summer Collection
//                 <span className="block text-teal-400 mt-2">Up to 70% Off</span>
//               </h2>
//               <p className="text-gray-400 mb-8">
//                 Don't miss out on our exclusive summer collection. Limited time offer with amazing discounts on selected items.
//               </p>
//               <div className="grid grid-cols-4 gap-4 mb-8">
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-teal-400 mb-2">15</div>
//                   <div className="text-sm text-gray-400">Days</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-teal-400 mb-2">08</div>
//                   <div className="text-sm text-gray-400">Hours</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-teal-400 mb-2">45</div>
//                   <div className="text-sm text-gray-400">Minutes</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-teal-400 mb-2">30</div>
//                   <div className="text-sm text-gray-400">Seconds</div>
//                 </div>
//               </div>
//               <Link 
//                 href="/products" 
//                 className="inline-block bg-teal-400 text-white px-8 py-3 rounded-full hover:bg-teal-500 transition-colors"
//               >
//                 Shop Collection
//               </Link>
//             </div>
//             <div className="relative h-[600px]">
//               <Image
//                 src="/summer.jpg?height=600&width=400"
//                 alt="Summer Collection"
//                 fill
//                 className="object-cover rounded-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Style Guide Section */}
//       <section className="py-20">
//         <div className="container-margin">
//           <h2 className="text-4xl font-bold mb-12 text-center">
//             Style Guide
//             <span className="block text-2xl text-gray-500 mt-2 font-normal">Get Inspired</span>
//           </h2>
//           <div className="grid grid-cols-12 gap-4 h-[600px]">
//             <div className="col-span-8 relative rounded-2xl overflow-hidden group">
//               <Image
//                 src="/collection.jpg?height=400&width=400"
//                 alt="Style Guide 1"
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
//                 <div className="text-white">
//                   <h3 className="text-2xl font-bold mb-2">Summer Essentials</h3>
//                   <p className="text-gray-200">Discover the must-have pieces for this season</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-span-4 grid gap-4">
//               <div className="relative rounded-2xl overflow-hidden group">
//                 <Image
//                   src="/casual2.jpg?height=290&width=400"
//                   alt="Style Guide 2"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
//                   <div className="text-white">
//                     <h3 className="text-xl font-bold">Casual Wear</h3>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative rounded-2xl overflow-hidden group">
//                 <Image
//                   src="/formal2.jpg?height=290&width=400"
//                   alt="Style Guide 3"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
//                   <div className="text-white">
//                     <h3 className="text-xl font-bold">Formal Collection</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Customer Reviews Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container-margin">
//           <h2 className="text-4xl font-bold mb-12 text-center">
//             What Our Customers Say
//             <span className="block text-2xl text-gray-500 mt-2 font-normal">Real Reviews from Real Customers</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {reviews.map((review) => (
//               <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg">
//                 <div className="flex items-center mb-6">
//                   <Image
//                     src={review.image}
//                     alt={review.name}
//                     width={60}
//                     height={60}
//                     className="rounded-full"
//                   />
//                   <div className="ml-4">
//                     <h3 className="font-semibold">{review.name}</h3>
//                     <div className="flex text-yellow-400">
//                       {[...Array(review.rating)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 fill-current" />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-600">{review.comment}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-12 border-t">
//         <div className="container-margin">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="flex items-center justify-center">
//               <Truck className="w-8 h-8 text-teal-500 mr-4" />
//               <div>
//                 <h3 className="font-semibold">Free Shipping</h3>
//                 <p className="text-sm text-gray-500">On orders over $100</p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <Tag className="w-8 h-8 text-teal-500 mr-4" />
//               <div>
//                 <h3 className="font-semibold">Special Discounts</h3>
//                 <p className="text-sm text-gray-500">Save up to 70% off</p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <Clock className="w-8 h-8 text-teal-500 mr-4" />
//               <div>
//                 <h3 className="font-semibold">24/7 Support</h3>
//                 <p className="text-sm text-gray-500">Get help anytime</p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <ArrowLeft className="w-8 h-8 text-teal-500 mr-4" />
//               <div>
//                 <h3 className="font-semibold">Easy Returns</h3>
//                 <p className="text-sm text-gray-500">30-day return policy</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </main>
//   )
// }







"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Facebook, Instagram, Twitter, ArrowLeft, Star, Clock, Tag, Truck } from "lucide-react"
import Footer from "./components/Footer"
import { useCart } from "./contexts/CartContext"


import { toast } from "react-hot-toast"

const newArrivals = [
  { id: 1, name: 'Premium Cotton Shirt', price: 89.99, image: '/shirt.jpg?height=400&width=300', tag: 'New' },
  { id: 2, name: 'Designer Denim Jacket', price: 159.99, image: '/jacket.jpg?height=400&width=300', tag: 'Trending' },
  { id: 3, name: 'Casual Sneakers', price: 79.99, image: '/Sneakers.jpg?height=400&width=300', tag: 'Best Seller' },
  { id: 4, name: 'Urban Cargo Pants', price: 69.99, image: '/Pants.jpg?height=400&width=300', tag: 'New' },
]

// Categories Data
const categories = [
  { name: "T-shirts", image: "/t-shirt.jpg?height=600&width=400", count: "124 Items", slug: "t-shirts" },
  { name: "Hoodies", image: "/hoodies.jpg?height=600&width=400", count: "98 Items", slug: "hoodies" },
  { name: "Mousepads", image: "/mousepad.jpg?height=600&width=400", count: "56 Items", slug: "mousepads" },
  { name: "Mugs", image: "/cup.jpg?height=600&width=400", count: "78 Items", slug: "mugs" },
  { name: "Water Bottles", image: "/waterbottel.jpg?height=600&width=400", count: "45 Items", slug: "water-bottles" },
  { name: "Pillows", image: "/pillo.jpg?height=600&width=400", count: "67 Items", slug: "pillows" },
]


// Reviews Data
const reviews = [
  { id: 1, name: 'John D.', rating: 5, comment: 'Exceptional quality and style. The fit is perfect!', image: '/placeholder.svg?height=100&width=100' },
  { id: 2, name: 'Michael R.', rating: 5, comment: 'Great collection and amazing customer service.', image: '/placeholder.svg?height=100&width=100' },
  { id: 3, name: 'David S.', rating: 5, comment: 'The clothes are fantastic and delivery was quick.', image: '/placeholder.svg?height=100&width=100' },
]


export default function Home() {
  const { addToCart } = useCart()

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
    toast.success("Added to cart!")
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
        <div className="container-margin py-12 min-h-[calc(100vh-5rem)]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-6xl font-bold text-gray-300">
                  ALL ITEMS SALE
                </h2>
                <div className="space-y-8">
                <h1 className="text-7xl font-black">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    EXPLOSIVE
                  </span>
                  <span className="block text-6xl font-script text-teal-400 mt-2">
                    Big Sale
                  </span>
                </h1>
                <Link
                  href="/products"
                  className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  BUY NOW
                </Link>
              </div>
              </div>

              {/* Newsletter */}
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Subscribe To Our Newsletter</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="ENTER EMAIL ID"
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <button className="bg-teal-400 text-white p-2 rounded-full hover:bg-teal-500 transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-400 rounded-full"></div>
              <Image
                src="/home2.png?height=600&width=600"
                alt="Fashion Model"
                width={400}
                height={400}
                className="relative z-10 mx-auto"
                priority
              />
              {/* Discount Badge */}
              <div className="absolute top-10 right-10 z-20 bg-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl animate-float">
                <div className="text-xs text-teal-400">15TH AUG</div>
                <div className="text-3xl font-bold">SAVE</div>
                <div className="text-4xl font-black text-teal-400">50<span className="text-2xl">%</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Categories Section */}
            <section className="py-20">
         <div className="container-margin">
           <h2 className="text-4xl font-bold mb-12 text-center">
             Shop by Category
             <span className="block text-2xl text-gray-500 mt-2 font-normal">Find Your Perfect Style</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {categories.map((category, index) => (
              <Link
                href={`/category/${category.slug}`}
                key={index}
                className="group relative h-[600px] overflow-hidden rounded-2xl"
              >
                 <Image
                   src={category.image}
                   alt={category.name}
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                   <div className="absolute bottom-8 left-8 text-white">
                     <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                     <p className="text-gray-300">{category.count}</p>
                     <span className="inline-flex items-center mt-4 text-teal-400 group-hover:text-white transition-colors">
                      Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                   </div>
                 </div>
              </Link>
             ))}
           </div>
         </div>
       </section>


      {/* New Arrivals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-margin">
          <h2 className="text-4xl font-bold mb-12 text-center">
            New Arrivals
            <span className="block text-2xl text-gray-500 mt-2 font-normal">Discover Our Latest Collection</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-teal-400 text-white px-3 py-1 rounded-full text-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-teal-600">${item.price}</p>
                  <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-teal-500 transition-colors" onClick={() => handleAddToCart(item)} >
                    Add to Cart
                  </button>
                  {/* <Button className="mt-4 w-full" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
        <section className="py-20">
         <div className="container-margin">
           <h2 className="text-4xl font-bold mb-12 text-center">
             Shop by Category
             <span className="block text-2xl text-gray-500 mt-2 font-normal">Find Your Perfect Style</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {categories.map((category, index) => (
              <Link
                href={`/category/${category.slug}`}
                key={index}
                className="group relative h-[600px] overflow-hidden rounded-2xl"
              >
                 <Image
                   src={category.image}
                   alt={category.name}
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                   <div className="absolute bottom-8 left-8 text-white">
                     <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                     <p className="text-gray-300">{category.count}</p>
                     <span className="inline-flex items-center mt-4 text-teal-400 group-hover:text-white transition-colors">
                      Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                   </div>
                 </div>
              </Link>
             ))}
           </div>
         </div>
       </section>




      {/* <section className="py-20">
        <div className="container-margin">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Shop by Category
            <span className="block text-2xl text-gray-500 mt-2 font-normal">Find Your Perfect Style</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                href={`/category/${category.slug}`}
                key={index}
                className="group relative h-[400px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-300">{category.count}</p>
                    <span className="inline-flex items-center mt-4 text-teal-400 group-hover:text-white transition-colors">
                      Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Special Offers Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-margin">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Special Summer Collection
                <span className="block text-teal-400 mt-2">Up to 70% Off</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Don't miss out on our exclusive summer collection. Limited time offer with amazing discounts on selected
                items.
              </p>
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">15</div>
                  <div className="text-sm text-gray-400">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">08</div>
                  <div className="text-sm text-gray-400">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">45</div>
                  <div className="text-sm text-gray-400">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">30</div>
                  <div className="text-sm text-gray-400">Seconds</div>
                </div>
              </div>
              <Link
                href="/products"
                className="inline-block bg-teal-400 text-white px-8 py-3 rounded-full hover:bg-teal-500 transition-colors"
              >
                Shop Collection
              </Link>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Summer Collection"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Style Guide Section */}
      <section className="py-20">
        <div className="container-margin">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Style Guide
            <span className="block text-2xl text-gray-500 mt-2 font-normal">Get Inspired</span>
          </h2>
          <div className="grid grid-cols-12 gap-4 h-[600px]">
            <div className="col-span-8 relative rounded-2xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Style Guide 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Summer Essentials</h3>
                  <p className="text-gray-200">Discover the must-have pieces for this season</p>
                </div>
              </div>
            </div>
            <div className="col-span-4 grid gap-4">
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=290&width=400"
                  alt="Style Guide 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Casual Wear</h3>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=290&width=400"
                  alt="Style Guide 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Formal Collection</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-margin">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What Our Customers Say
            <span className="block text-2xl text-gray-500 mt-2 font-normal">Real Reviews from Real Customers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 border-t">
        <div className="container-margin">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center">
              <Truck className="w-8 h-8 text-teal-500 mr-4" />
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-gray-500">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Tag className="w-8 h-8 text-teal-500 mr-4" />
              <div>
                <h3 className="font-semibold">Special Discounts</h3>
                <p className="text-sm text-gray-500">Save up to 70% off</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="w-8 h-8 text-teal-500 mr-4" />
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-gray-500">Get help anytime</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ArrowLeft className="w-8 h-8 text-teal-500 mr-4" />
              <div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-sm text-gray-500">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

