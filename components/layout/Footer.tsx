import Link from 'next/link'
import { Facebook, Instagram, Twitter, InstagramIcon as Tiktok } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre/nossa-historia">Nossa História</Link></li>
              <li><Link href="/">Nossas Lojas</Link></li>
              <li><Link href="/">Trabalhe Conosco</Link></li>
              <li><Link href="/">Seja Um Influenciador</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ajuda</h3>
            <ul className="space-y-2">
              <li><Link href="/">Rastrear Pedido</Link></li>
              <li><Link href="/ajuda/rastreio">Rastreio</Link></li>
              <li><Link href="/ajuda/devolucoes">Devoluções</Link></li>
              <li><Link href="/ajuda/entregas">Entregas</Link></li>
              <li><Link href="/ajuda/pagamentos">Pagamentos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><Link href="/contato">Fale Conosco</Link></li>
              <li><a href="#">WhatsApp</a></li>
              <li>Telefone: (11) 1234-5678</li>
              <li>Horário de Funcionamento: 09h às 18h, Seg-Sex</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="TikTok"><Tiktok /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-wrap justify-between items-center">
          <p>&copy; 2023 SNEAKERSHOP. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="/placeholder.svg?height=30&width=50&text=Secure" alt="Site Seguro" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50&text=Amex" alt="American Express" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50&text=Mastercard" alt="Mastercard" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50&text=Visa" alt="Visa" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  )
}

