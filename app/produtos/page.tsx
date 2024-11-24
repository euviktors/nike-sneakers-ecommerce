'use client'

import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { ProductCard } from '@/components/ProductCard'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const products = [
  { id: '1', name: 'Nike Air Max', price: 299.99, image: '/placeholder.svg?height=300&width=300&text=Nike+Air+Max', tag: 'black friday' as const, discount: 20 },
  { id: '2', name: 'Nike React', price: 249.99, image: '/placeholder.svg?height=300&width=300&text=Nike+React', tag: 'quase acabando' as const },
  { id: '3', name: 'Nike Zoom', price: 279.99, image: '/placeholder.svg?height=300&width=300&text=Nike+Zoom' },
  { id: '4', name: 'Nike Free', price: 199.99, image: '/placeholder.svg?height=300&width=300&text=Nike+Free', tag: 'black friday' as const, discount: 15 },
  { id: '5', name: 'Nike Pegasus', price: 289.99, image: '/placeholder.svg?height=300&width=300&text=Nike+Pegasus' },
]

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 300])
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = products.filter(product => 
    product.price >= priceRange[0] && product.price <= priceRange[1]
  ).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime()
    return 0
  })

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Nossos Produtos</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Filtros</h2>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Preço</h3>
              <Slider
                min={0}
                max={300}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2">
                <span>R${priceRange[0]}</span>
                <span>R${priceRange[1]}</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Ordenar por</h3>
              <select
                className="w-full p-2 border rounded"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Destaque</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
                <option value="newest">Mais Recentes</option>
              </select>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

