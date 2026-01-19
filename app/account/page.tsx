'use client';

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Account() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="graffiti-heading mb-4">MY ACCOUNT</h1>
        <p className="text-xl text-graffiti-yellow">Welcome back, {user.firstName}!</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* User Info */}
        <div className="lg:col-span-1">
          <div className="card-graffiti">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-graffiti-pink to-graffiti-purple flex items-center justify-center text-5xl">
                👤
              </div>
              <h2 className="text-2xl font-bold text-white graffiti-text">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-graffiti-yellow font-bold">{user.role.toUpperCase()}</p>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-400">Username:</span>
                <span className="text-white ml-2 font-bold">{user.username}</span>
              </div>
              <div>
                <span className="text-gray-400">Email:</span>
                <span className="text-white ml-2 font-bold">{user.email}</span>
              </div>
              <div>
                <span className="text-gray-400">Member Since:</span>
                <span className="text-white ml-2 font-bold">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <Link href="/settings" className="block mt-6">
              <button className="w-full px-4 py-2 bg-gray-800 hover:bg-graffiti-purple transition-colors rounded-lg font-bold">
                EDIT PROFILE
              </button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Links */}
          <div className="card-graffiti">
            <h2 className="text-2xl font-bold mb-6 graffiti-text text-white">QUICK LINKS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/orders" className="p-4 bg-gray-800 hover:bg-graffiti-purple transition-colors rounded-lg">
                <div className="text-3xl mb-2">📦</div>
                <h3 className="font-bold text-white">MY ORDERS</h3>
                <p className="text-sm text-gray-400">Track your purchases</p>
              </Link>
              <Link href="/settings" className="p-4 bg-gray-800 hover:bg-graffiti-purple transition-colors rounded-lg">
                <div className="text-3xl mb-2">⚙️</div>
                <h3 className="font-bold text-white">SETTINGS</h3>
                <p className="text-sm text-gray-400">Manage your account</p>
              </Link>
              <Link href="/wishlist" className="p-4 bg-gray-800 hover:bg-graffiti-purple transition-colors rounded-lg">
                <div className="text-3xl mb-2">❤️</div>
                <h3 className="font-bold text-white">WISHLIST</h3>
                <p className="text-sm text-gray-400">Save your favorites</p>
              </Link>
              {user.role === 'admin' && (
                <Link href="/admin" className="p-4 bg-gradient-to-br from-graffiti-pink to-graffiti-purple hover:opacity-90 transition-opacity rounded-lg">
                  <div className="text-3xl mb-2">👑</div>
                  <h3 className="font-bold text-white">ADMIN PANEL</h3>
                  <p className="text-sm text-white">Manage store</p>
                </Link>
              )}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="card-graffiti">
            <h2 className="text-2xl font-bold mb-6 graffiti-text text-white">RECENT ORDERS</h2>
            <div className="text-center py-8 text-gray-400">
              <div className="text-6xl mb-4">📦</div>
              <p>No orders yet. Start shopping!</p>
              <Link href="/shop">
                <button className="graffiti-button mt-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
