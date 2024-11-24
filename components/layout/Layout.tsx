import { Header } from './Header'
import { Footer } from './Footer'
import { motion } from 'framer-motion'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-2 text-center text-sm font-medium"
      >
        <p>Black Friday Antecipada: Até 70% OFF + Frete Grátis em compras acima de R$300</p>
      </motion.div>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

