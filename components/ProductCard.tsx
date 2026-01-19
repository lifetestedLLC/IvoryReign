import Link from 'next/link';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card-graffiti group cursor-pointer">
      <Link href={`/shop/${product.id}`}>
        <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
          {product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-6xl">👕</div>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 graffiti-text group-hover:text-graffiti-pink transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-graffiti-yellow">${product.price}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            product.inStock ? 'bg-graffiti-green text-black' : 'bg-red-500 text-white'
          }`}>
            {product.inStock ? 'IN STOCK' : 'SOLD OUT'}
          </span>
        </div>
      </Link>
    </div>
  );
}
