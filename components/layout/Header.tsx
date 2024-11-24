'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Cart } from '@/components/Cart'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text"
            >
              SNEAKERSHOP
            </motion.span>
          </Link>
          <div className="flex items-center space-x-4">
            <form className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input type="search" placeholder="Pesquisar" className="pl-8 w-64 bg-gray-700 text-white" />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-800 text-white">
                <DropdownMenuItem>
                  <Link href="/conta/criar">Criar Conta</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/conta/login">Login</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Cart />
          </div>
        </div>
        <nav className="hidden md:flex justify-center space-x-6">
          {['Produtos', 'Ofertas', 'Lançamentos', 'Marcas'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`/${item.toLowerCase()}`} className="text-white hover:text-pink-500 transition-colors">
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden absolute top-4 right-4 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-800 border-t border-gray-700"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            {['Produtos', 'Ofertas', 'Lançamentos', 'Marcas'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-pink-500 py-2 transition-colors">
                {item}
              </Link>
            ))}
            <form className="py-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input type="search" placeholder="Pesquisar" className="pl-8 w-full bg-gray-700 text-white" />
              </div>
            </form>
          </div>
        </motion.nav>
      )}
    </header>
  )
}

