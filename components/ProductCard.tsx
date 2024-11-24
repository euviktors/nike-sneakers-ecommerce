import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  tag?: 'black friday' | 'quase acabando'
  discount?: number
}

export function ProductCard({ id, name, price, image, tag, discount }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Link href={`/produto/${id}`}>
          <div className="relative aspect-square">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
            />
            {tag && (
              <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white ${tag === 'black friday' ? 'bg-red-600' : 'bg-yellow-500'}`}>
                {tag === 'black friday' ? 'Black Friday' : 'Quase Acabando'}
              </div>
            )}
            {discount && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
                -{discount}%
              </div>
            )}
          </div>
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">
              {discount ? (
                <>
                  <span className="line-through text-sm mr-2">R$ {price.toFixed(2)}</span>
                  <span className="font-bold">R$ {(price * (1 - discount / 100)).toFixed(2)}</span>
                </>
              ) : (
                <span>R$ {price.toFixed(2)}</span>
              )}
            </p>
          </div>
          <Button className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar ao Carrinho
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

