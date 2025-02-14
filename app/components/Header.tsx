'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ShoppingBag, ShoppingCart, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartCount(cart.length)
  }, [])

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container-margin">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-teal-400 rounded-full p-2">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              FASHION STORE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-500 transition-colors">HOME</Link>
            <Link href="/products" className="text-gray-700 hover:text-teal-500 transition-colors">PRODUCTS</Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-500 transition-colors">ABOUT</Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-500 transition-colors">CONTACT</Link>

            {/* Cart Icon with Count */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-teal-500 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-teal-500 transition-colors">HOME</Link>
            <Link href="/products" className="text-gray-700 hover:text-teal-500 transition-colors">PRODUCTS</Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-500 transition-colors">ABOUT</Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-500 transition-colors">CONTACT</Link>
            <Link href="/cart" className="text-gray-700 hover:text-teal-500 transition-colors">CART ({cartCount})</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
