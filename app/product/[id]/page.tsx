"use client"

import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "../../components/ui/button"
import { useCart } from "@/app/contexts/CartContext"
import { useState, type ChangeEvent } from "react"
import { toast } from "react-hot-toast"
import { categoryProducts, type Product } from "@/app/data/products"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"

// Combine all products from different categories
const allProducts = Object.values(categoryProducts).flat()

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [customText, setCustomText] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const product = allProducts.find((p) => p.id === Number.parseInt(params.id)) as Product | undefined

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select color and size")
      return
    }

    setIsAdding(true)
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      color: selectedColor,
      size: selectedSize,
      customText,
      customImage: uploadedImage,
    })
    toast.success("Added to cart!")
    setTimeout(() => setIsAdding(false), 1000)
  }

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg"
          />
          {uploadedImage && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Uploaded Image:</h3>
              <Image
                src={uploadedImage || "/placeholder.svg"}
                alt="Uploaded custom image"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>

          {product.colors && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <RadioGroup value={selectedColor || ""} onValueChange={setSelectedColor}>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <div key={color}>
                      <RadioGroupItem value={color} id={`color-${color}`} className="sr-only" />
                      <Label
                        htmlFor={`color-${color}`}
                        className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                          selectedColor === color ? "border-black" : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {product.sizes && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Size:</h3>
              <RadioGroup value={selectedSize || ""} onValueChange={setSelectedSize}>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                      <Label
                        htmlFor={`size-${size}`}
                        className={`px-3 py-1 border rounded cursor-pointer ${
                          selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                        }`}
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {product.customizable && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Customization:</h3>
              <Textarea
                placeholder="Enter custom text here"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full mb-2"
              />
              <Input type="file" accept="image/*" onChange={handleImageUpload} className="w-full" />
            </div>
          )}

          <div className="flex space-x-4 mt-6">
            <Button size="lg" onClick={handleAddToCart} disabled={isAdding}>
              {isAdding ? "Adding..." : "Add to Cart"}
            </Button>
            <Button size="lg" variant="outline">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

