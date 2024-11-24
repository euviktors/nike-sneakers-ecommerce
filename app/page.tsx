import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/components/Hero'
import { ProductCarousel } from '@/components/ProductCarousel'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import Image from 'next/image'

const featuredProducts = [
  { id: '1', name: 'Nike Air Max 2023', price: 299.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  { id: '2', name: 'Nike React Infinity', price: 249.99, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  { id: '3', name: 'Nike Zoom Fly 5', price: 279.99, image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  { id: '4', name: 'Nike Free', price: 199.99, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80' },
  { id: '5', name: 'Nike Pegasus', price: 289.99, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80' },
]

const categories = [
  { name: 'Tênis de Corrida', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80' },
  { name: 'Tênis Casual', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80' },
  { name: 'Tênis de Basquete', image: 'https://images.unsplash.com/photo-1518656306295-aa28b28b2504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { name: 'Tênis de Futebol', image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80' },
]

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <ProductCarousel title="Os Mais Vendidos" products={featuredProducts} />
        <ProductCarousel title="Os Mais Procurados" products={featuredProducts} />
        <ProductCarousel title="Coleção Jordan" products={featuredProducts} />
        <ProductCarousel title="Acessórios" products={featuredProducts} />
        
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Categorias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <Image src={category.image} alt={category.name} width={500} height={300} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold"
>{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg p-12 text-white text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Black Friday
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Até 70% de desconto em produtos selecionados
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" variant="secondary" asChild>
              <a href="/ofertas">Aproveitar Ofertas</a>
            </Button>
          </motion.div>
        </section>
      </div>
    </Layout>
  )
}

