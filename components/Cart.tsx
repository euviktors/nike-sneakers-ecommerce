'use client'

import { useState, useEffect } from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        <ShoppingBag className="mr-2 h-4 w-4" />
        Carrinho ({cartItems.length})
      </Button>
      {isOpen && (
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsOpen(false)} />
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Carrinho de Compras</h2>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="sr-only">Fechar painel</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {cartItems.map((item) => (
                            <li key={item.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{item.name}</h3>
                                    <p className="ml-4">R${(item.price * item.quantity).toFixed(2)}</p>
                                  </div>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <div className="flex items-center">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                      <Minus className="h-4 w-4" />
                                    </button>
                                    <p className="mx-2 text-gray-500">Qtd {item.quantity}</p>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                      <Plus className="h-4 w-4" />
                                    </button>
                                  </div>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={() => removeItem(item.id)}
                                    >
                                      Remover
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>R${total.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Frete e impostos calculados no checkout.</p>
                    <div className="mt-6">
                      <Link href="/checkout">
                        <Button className="w-full">
                          Finalizar Compra
                        </Button>
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        ou{' '}
                        <button
                          type="button"
                          className="text-indigo-600 font-medium hover:text-indigo-500"
                          onClick={() => setIsOpen(false)}
                        >
                          Continuar Comprando<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

