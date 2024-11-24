'use client'

import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Button } from "@/components/ui/button"
import { ProductCarousel } from '@/components/ProductCarousel'
import { ShoppingBag, Heart, Share2 } from 'lucide-react'

// This is a mock product. In a real application, you would fetch this data from an API
const product = {
  id: '1',
  name: 'Nike Air Max 2023',
  price: 299.99,
  description: 'As Nike Air Max 2023 oferecem um ajuste incrível com uma parte superior em malha respirável e suporte direcionado. O amortecimento Nike Air proporciona conforto o dia todo, enquanto os detalhes reflexivos adicionam um toque de estilo.',
  sizes: ['38', '39', '40', '41', '42', '43', '44'],
  images: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  ]
}

const recentlyViewed = [
  { id: '2', name: 'Nike React Infinity', price: 249.99, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  { id: '3', name: 'Nike Zoom Fly 5', price: 279.99, image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  { id: '4', name: 'Nike Air Zoom Pegasus', price: 259.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
]

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('')

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-4">R$ {product.price.toFixed(2)}</p>
            <p className="mb-4">{product.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Tamanho</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <Button className="w-full mb-4">
              <ShoppingBag className="mr-2 h-4 w-4" /> Adicionar ao Carrinho
            </Button>
            <div className="flex justify-between mb-4">
              <Button variant="outline">
                <Heart className="mr-2 h-4 w-4" /> Adicionar aos Favoritos
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" /> Compartilhar
              </Button>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Garantia de 7 dias</h3>
              <p className="text-sm text-gray-600">Se você não estiver satisfeito com sua compra, você pode devolver o produto em até 7 dias após o recebimento.</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Recentemente Visualizados</h2>
          <ProductCarousel products={recentlyViewed} />
        </div>
      </div>
    </Layout>
  )
}

