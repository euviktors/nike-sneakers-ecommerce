'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface ProductCarouselProps {
  title: string
  products: Product[]
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 4 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 4 : prevIndex - 1
    )
  }

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-1/4 flex-shrink-0 px-2">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">R$ {product.price.toFixed(2)}</p>
                      <Button className="w-full">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar ao Carrinho
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

