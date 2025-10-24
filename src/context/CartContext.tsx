// src/context/CartContext.tsx
'use client' 
import { createContext, useContext, useState, ReactNode } from 'react'
import type { Product } from '@/src/types'

type CartItem = Product & { quantity: number }

type CartContextType = {
  items: CartItem[]
  addItem: (p: Product) => void
  removeItem: (id: string) => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(product: Product) {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) {
        return prev.map(i => 
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function removeItem(id: string) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart deve ser usado dentro de um CartProvider')
  return ctx
}