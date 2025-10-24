// src/components/ProductCard.tsx
import type { Product } from '@/src/types' 

type ProductCardProps = {
  product: Product
  onAdd: (p: Product) => void
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white flex flex-col">
      <div className="h-40 flex items-center justify-center bg-gray-100 mb-4 rounded">
        <img 
          src={product.image ? product.image : '/images/pizza-placeholder.png'} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      <div className="flex-1"> 
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 my-2">{product.description}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <strong className="text-xl">R$ {product.price.toFixed(2)}</strong>
        <button 
          onClick={() => onAdd(product)} 
          className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          Adicionar
        </button>
      </div>
    </div>
  )
}