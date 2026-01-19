'use client';

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Settings() {
  const { user } = useAuth();
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
        <h1 className="graffiti-heading mb-4">SETTINGS</h1>
        <p className="text-xl text-gray-300">Manage your account preferences</p>
      </section>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Settings */}
        <div className="card-graffiti">
          <h2 className="text-2xl font-bold mb-6 graffiti-text text-white">PROFILE INFORMATION</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-bold mb-2">FIRST NAME</label>
                <input
                  type="text"
                  defaultValue={user.firstName}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-bold mb-2">LAST NAME</label>
                <input
                  type="text"
                  defaultValue={user.lastName}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-white font-bold mb-2">EMAIL</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
              />
            </div>
            <div>
              <label className="block text-white font-bold mb-2">USERNAME</label>
              <input
                type="text"
                defaultValue={user.username}
                disabled
                className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 text-gray-400 rounded-lg cursor-not-allowed"
              />
            </div>
            <button type="submit" className="graffiti-button">
              SAVE CHANGES
            </button>
          </form>
        </div>

        {/* Password Settings */}
        <div className="card-graffiti">
          <h2 className="text-2xl font-bold mb-6 graffiti-text text-white">CHANGE PASSWORD</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-white font-bold mb-2">CURRENT PASSWORD</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
              />
            </div>
            <div>
              <label className="block text-white font-bold mb-2">NEW PASSWORD</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
              />
            </div>
            <div>
              <label className="block text-white font-bold mb-2">CONFIRM NEW PASSWORD</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
              />
            </div>
            <button type="submit" className="graffiti-button">
              UPDATE PASSWORD
            </button>
          </form>
        </div>

        {/* Notification Settings */}
        <div className="card-graffiti">
          <h2 className="text-2xl font-bold mb-6 graffiti-text text-white">NOTIFICATIONS</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-white">Email notifications for new drops</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-white">Order status updates</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-white">Promotional emails</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-white">Account security alerts</span>
            </label>
          </div>
          <button className="graffiti-button mt-6">
            SAVE PREFERENCES
          </button>
        </div>
      </div>
    </div>
  );
}
