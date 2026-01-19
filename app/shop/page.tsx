import ProductCard from '@/components/ProductCard';
import { SAMPLE_PRODUCTS } from '@/lib/data';

export default function Shop() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="graffiti-heading mb-6">SHOP</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore our exclusive collection of streetwear and athleisure.
        </p>
      </section>

      {/* Filters */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-2 bg-graffiti-pink hover:bg-graffiti-purple transition-colors rounded-lg font-bold">
            ALL
          </button>
          <button className="px-6 py-2 bg-gray-800 hover:bg-graffiti-purple transition-colors rounded-lg font-bold">
            HOODIES
          </button>
          <button className="px-6 py-2 bg-gray-800 hover:bg-graffiti-purple transition-colors rounded-lg font-bold">
            T-SHIRTS
          </button>
          <button className="px-6 py-2 bg-gray-800 hover:bg-graffiti-purple transition-colors rounded-lg font-bold">
            BOTTOMS
          </button>
          <button className="px-6 py-2 bg-gray-800 hover:bg-graffiti-purple transition-colors rounded-lg font-bold">
            ACCESSORIES
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Duplicate for demonstration */}
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard key={`dup-${product.id}`} product={{...product, id: `dup-${product.id}`}} />
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="mt-20 spray-paint-border rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 graffiti-text text-white">
          CAN'T FIND WHAT YOU'RE LOOKING FOR?
        </h2>
        <p className="text-gray-300 mb-6">
          New drops coming soon! Subscribe to stay updated on our latest releases.
        </p>
        <button className="graffiti-button">
          NOTIFY ME
        </button>
      </section>
    </div>
  );
}
