import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { SAMPLE_PRODUCTS } from '@/lib/data';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 text-9xl text-graffiti-pink rotate-12">★</div>
          <div className="absolute bottom-20 right-10 text-9xl text-graffiti-purple -rotate-12">♕</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] text-graffiti-blue opacity-10">IR</div>
        </div>
        
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="graffiti-heading mb-6">
            IVORYREIGN
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-bold tracking-wide">
            WHERE STREET MEETS ELEGANCE
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Premium streetwear & athleisure designed for those who reign supreme. 
            Bold graphics, quality materials, urban aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="graffiti-button text-lg">
              SHOP NOW
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 font-bold uppercase tracking-wider border-2 border-graffiti-purple text-white hover:bg-graffiti-purple transition-all duration-300 rounded-lg"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 graffiti-text">
          <span className="text-graffiti-pink">FEATURED</span>{' '}
          <span className="text-graffiti-purple">DROPS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/shop" className="graffiti-button">
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 graffiti-text">
            <span className="text-graffiti-yellow">WHY</span>{' '}
            <span className="text-graffiti-green">IVORYREIGN?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-graffiti text-center">
              <div className="text-6xl mb-4">👑</div>
              <h3 className="text-2xl font-bold text-white mb-3 graffiti-text">PREMIUM QUALITY</h3>
              <p className="text-gray-400">
                Only the finest materials and craftsmanship make it into our collection.
              </p>
            </div>
            <div className="card-graffiti text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3 graffiti-text">UNIQUE DESIGNS</h3>
              <p className="text-gray-400">
                Original artwork and graphics inspired by street culture and urban art.
              </p>
            </div>
            <div className="card-graffiti text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3 graffiti-text">LIMITED DROPS</h3>
              <p className="text-gray-400">
                Exclusive releases that keep you ahead of the curve. Never mass produced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto spray-paint-border rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 graffiti-text text-white">
            JOIN THE REIGN
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Be the first to know about new drops, exclusive deals, and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
            />
            <button className="graffiti-button">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
