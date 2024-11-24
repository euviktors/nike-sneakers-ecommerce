'use client'

import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically validate the credentials with your backend
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
  }

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Login</h1>
          <form onSubmit={handleLogin} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">Senha</label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Minha Conta</h1>
        <div className="max-w-md mx-auto">
          <p className="mb-4">Bem-vindo, {email}!</p>
          <Button onClick={handleLogout}>Sair</Button>
        </div>
      </div>
    </Layout>
  )
}

