// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// 1. Importamos nossos componentes
import { CartProvider } from '@/src/context/CartContext'
import Header from '@/src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Pizzaria',
  description: 'Pizzas e Esfirras deliciosas!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <Header />

          <main className="max-w-5xl mx-auto px-4 py-8">
            {children}
          </main>
          
        </CartProvider>
      </body>
    </html>
  )
}