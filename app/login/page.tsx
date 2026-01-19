'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = login(username, password);
    if (success) {
      router.push('/account');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="graffiti-heading mb-4">LOGIN</h1>
          <p className="text-gray-300">Welcome back to the reign</p>
        </div>

        <div className="card-graffiti">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-bold mb-2" htmlFor="username">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border-2 border-red-500 text-red-500 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button type="submit" className="graffiti-button w-full">
              LOGIN
            </button>

            <div className="text-center text-gray-400 text-sm">
              <p>Demo Admin Credentials:</p>
              <p className="text-graffiti-yellow">Username: nate, marco, jeff, or zion</p>
              <p className="text-graffiti-yellow">Password: admin123</p>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link href="/signup" className="text-graffiti-pink hover:text-graffiti-purple transition-colors font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
