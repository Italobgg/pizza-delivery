// src/components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          My Pizzaria 🍕
        </Link>
        
        <nav className="flex gap-4 items-center">
          <Link href="/menu/pizzas" className="hover:underline">Pizzas</Link>
          <Link href="/menu/esfirras" className="hover:underline">Esfirras</Link>
          <Link href="/menu/promocoes" className="hover:underline">Promoções</Link>
        </nav>
      </div>
    </header>
  )
}