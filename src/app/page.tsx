// src/app/page.tsx
'use client'

import ProductCard from '@/src/components/ProductCard'
import { useCart } from '@/src/context/CartContext'
import type { Product } from '@/src/types'

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Pizza de Calabresa',
    price: 38.50,
    description: 'Molho de tomate, calabresa fatiada, cebola e azeitonas.',
    image: '/images/pizza-calabresa.jpg' 
  },
  {
    id: '2',
    name: 'Pizza Margherita',
    price: 36.00,
    description: 'Molho de tomate, muçarela, manjericão fresco e azeite.',
    image: '/images/pizza-margherita.jpg' 
  },
  {
    id: '3',
    name: 'Esfirra de Carne',
    price: 5.00,
    description: 'Deliciosa esfirra com recheio de carne moída temperada.',
    image: '/images/esfirra-carne.jpg'
  },
]

export default function Home() {
  const { addItem, items } = useCart()

  console.log('Itens no carrinho:', items)

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Nosso Cardápio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {mockProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAdd={addItem} 
          />
        ))}
      </div>
    </section>
  )
}