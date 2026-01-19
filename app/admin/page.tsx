'use client';

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SAMPLE_PRODUCTS, ADMIN_USERS } from '@/lib/data';

export default function Admin() {
  const { user, isAdmin } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'products' | 'users' | 'orders' | 'integration'>('products');
  const [showAddProduct, setShowAddProduct] = useState(false);

  useEffect(() => {
    if (!user || !isAdmin) {
      router.push('/login');
    }
  }, [user, isAdmin, router]);

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="graffiti-heading mb-4">ADMIN PANEL</h1>
        <p className="text-xl text-graffiti-yellow">Welcome, {user.firstName}! 👑</p>
      </section>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <button
          onClick={() => setActiveTab('products')}
          className={`px-6 py-3 font-bold rounded-lg transition-colors ${
            activeTab === 'products'
              ? 'bg-graffiti-pink text-white'
              : 'bg-gray-800 text-white hover:bg-graffiti-purple'
          }`}
        >
          📦 PRODUCTS
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-6 py-3 font-bold rounded-lg transition-colors ${
            activeTab === 'users'
              ? 'bg-graffiti-pink text-white'
              : 'bg-gray-800 text-white hover:bg-graffiti-purple'
          }`}
        >
          👥 USERS
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-6 py-3 font-bold rounded-lg transition-colors ${
            activeTab === 'orders'
              ? 'bg-graffiti-pink text-white'
              : 'bg-gray-800 text-white hover:bg-graffiti-purple'
          }`}
        >
          📋 ORDERS
        </button>
        <button
          onClick={() => setActiveTab('integration')}
          className={`px-6 py-3 font-bold rounded-lg transition-colors ${
            activeTab === 'integration'
              ? 'bg-graffiti-pink text-white'
              : 'bg-gray-800 text-white hover:bg-graffiti-purple'
          }`}
        >
          🔗 INTEGRATIONS
        </button>
      </div>

      {/* Products Tab */}
      {activeTab === 'products' && (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold graffiti-text text-white">PRODUCT MANAGEMENT</h2>
            <button
              onClick={() => setShowAddProduct(!showAddProduct)}
              className="graffiti-button"
            >
              {showAddProduct ? '✕ CANCEL' : '+ ADD PRODUCT'}
            </button>
          </div>

          {showAddProduct && (
            <div className="card-graffiti">
              <h3 className="text-2xl font-bold mb-6 graffiti-text text-white">ADD NEW PRODUCT</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-bold mb-2">PRODUCT NAME</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                      placeholder="e.g., Urban Hoodie"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-bold mb-2">PRICE</label>
                    <input
                      type="number"
                      step="0.01"
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                      placeholder="49.99"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-bold mb-2">DESCRIPTION</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                    placeholder="Product description..."
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-bold mb-2">CATEGORY</label>
                    <select className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors">
                      <option>T-Shirts</option>
                      <option>Hoodies</option>
                      <option>Bottoms</option>
                      <option>Accessories</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-bold mb-2">SIZES</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                      placeholder="S, M, L, XL, XXL"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-bold mb-2">COLORS</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                    placeholder="Black, White, Grey"
                  />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2">IMAGE URL</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                    placeholder="/images/product.jpg"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="inStock" defaultChecked className="w-5 h-5" />
                  <label htmlFor="inStock" className="text-white font-bold">IN STOCK</label>
                </div>
                <button type="submit" className="graffiti-button">
                  CREATE PRODUCT
                </button>
              </form>
            </div>
          )}

          <div className="card-graffiti">
            <h3 className="text-2xl font-bold mb-6 graffiti-text text-white">EXISTING PRODUCTS</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-graffiti-purple">
                    <th className="pb-4 text-graffiti-yellow">PRODUCT</th>
                    <th className="pb-4 text-graffiti-yellow">PRICE</th>
                    <th className="pb-4 text-graffiti-yellow">CATEGORY</th>
                    <th className="pb-4 text-graffiti-yellow">STATUS</th>
                    <th className="pb-4 text-graffiti-yellow">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_PRODUCTS.map((product) => (
                    <tr key={product.id} className="border-b border-gray-700">
                      <td className="py-4 text-white font-bold">{product.name}</td>
                      <td className="py-4 text-white">${product.price}</td>
                      <td className="py-4 text-white">{product.category}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          product.inStock ? 'bg-graffiti-green text-black' : 'bg-red-500 text-white'
                        }`}>
                          {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                        </span>
                      </td>
                      <td className="py-4">
                        <button className="text-graffiti-blue hover:text-graffiti-pink transition-colors mr-4">
                          ✏️ EDIT
                        </button>
                        <button className="text-red-500 hover:text-red-300 transition-colors">
                          🗑️ DELETE
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="card-graffiti">
          <h2 className="text-3xl font-bold mb-6 graffiti-text text-white">USER MANAGEMENT</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-graffiti-purple">
                  <th className="pb-4 text-graffiti-yellow">USERNAME</th>
                  <th className="pb-4 text-graffiti-yellow">NAME</th>
                  <th className="pb-4 text-graffiti-yellow">EMAIL</th>
                  <th className="pb-4 text-graffiti-yellow">ROLE</th>
                  <th className="pb-4 text-graffiti-yellow">JOINED</th>
                </tr>
              </thead>
              <tbody>
                {ADMIN_USERS.map((adminUser) => (
                  <tr key={adminUser.id} className="border-b border-gray-700">
                    <td className="py-4 text-white font-bold">{adminUser.username}</td>
                    <td className="py-4 text-white">{adminUser.firstName} {adminUser.lastName}</td>
                    <td className="py-4 text-white">{adminUser.email}</td>
                    <td className="py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-graffiti-purple text-white">
                        {adminUser.role.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 text-white">
                      {new Date(adminUser.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="card-graffiti">
          <h2 className="text-3xl font-bold mb-6 graffiti-text text-white">ORDER MANAGEMENT</h2>
          <div className="text-center py-12 text-gray-400">
            <div className="text-8xl mb-4">📦</div>
            <p className="text-xl">No orders yet</p>
            <p className="text-sm mt-2">Orders will appear here once customers start purchasing</p>
          </div>
        </div>
      )}

      {/* Integration Tab */}
      {activeTab === 'integration' && (
        <div className="space-y-8">
          <div className="card-graffiti">
            <h2 className="text-3xl font-bold mb-6 graffiti-text text-white">PRINTING STORE INTEGRATION</h2>
            <p className="text-gray-300 mb-6">
              Connect your printing store for seamless product upload and order management.
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-white font-bold mb-2">STORE API KEY</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                  placeholder="Enter your printing store API key"
                />
              </div>
              <div>
                <label className="block text-white font-bold mb-2">STORE URL</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                  placeholder="https://your-store.com"
                />
              </div>
              <div>
                <label className="block text-white font-bold mb-2">WEBHOOK URL</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                  placeholder="https://ivoryreign.com/webhook"
                  disabled
                />
              </div>
              <button className="graffiti-button">
                CONNECT STORE
              </button>
            </div>
          </div>

          <div className="card-graffiti">
            <h2 className="text-3xl font-bold mb-6 graffiti-text text-white">SUPPORTED INTEGRATIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-800 rounded-lg border-2 border-graffiti-purple hover:border-graffiti-pink transition-colors">
                <div className="text-5xl mb-4 text-center">🖨️</div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Printful</h3>
                <p className="text-gray-400 text-sm text-center mb-4">
                  On-demand printing and fulfillment
                </p>
                <button className="w-full px-4 py-2 bg-graffiti-purple hover:bg-graffiti-pink transition-colors rounded-lg font-bold">
                  CONNECT
                </button>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg border-2 border-graffiti-purple hover:border-graffiti-pink transition-colors">
                <div className="text-5xl mb-4 text-center">📦</div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Printify</h3>
                <p className="text-gray-400 text-sm text-center mb-4">
                  Print-on-demand platform
                </p>
                <button className="w-full px-4 py-2 bg-graffiti-purple hover:bg-graffiti-pink transition-colors rounded-lg font-bold">
                  CONNECT
                </button>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg border-2 border-graffiti-purple hover:border-graffiti-pink transition-colors">
                <div className="text-5xl mb-4 text-center">🎨</div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Custom Print</h3>
                <p className="text-gray-400 text-sm text-center mb-4">
                  Your custom printing solution
                </p>
                <button className="w-full px-4 py-2 bg-graffiti-purple hover:bg-graffiti-pink transition-colors rounded-lg font-bold">
                  CONNECT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
