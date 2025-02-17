import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import { CartProvider } from "./contexts/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fashion Store - Explosive Sale",
  description: "Discover the latest trends in fashion with amazing discounts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

