'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/lib/auth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAdmin } = useAuth();

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b-4 border-graffiti-pink sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold graffiti-text">
              <span className="text-graffiti-pink">Ivory</span>
              <span className="text-graffiti-purple">Reign</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-graffiti-pink transition-colors font-bold">
              HOME
            </Link>
            <Link href="/shop" className="text-white hover:text-graffiti-purple transition-colors font-bold">
              SHOP
            </Link>
            <Link href="/about" className="text-white hover:text-graffiti-yellow transition-colors font-bold">
              ABOUT
            </Link>
            <Link href="/contact" className="text-white hover:text-graffiti-green transition-colors font-bold">
              CONTACT
            </Link>
            {isAdmin && (
              <Link href="/admin" className="text-graffiti-blue hover:text-graffiti-purple transition-colors font-bold">
                ADMIN
              </Link>
            )}
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/account" className="text-white hover:text-graffiti-pink transition-colors font-bold">
                  <span className="text-graffiti-yellow">👤</span> {user.firstName}
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-graffiti-pink hover:bg-graffiti-purple transition-colors rounded-lg font-bold"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <Link href="/login" className="graffiti-button">
                LOGIN
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-graffiti-pink transition-colors font-bold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/shop"
              className="block text-white hover:text-graffiti-purple transition-colors font-bold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-graffiti-yellow transition-colors font-bold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-graffiti-green transition-colors font-bold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className="block text-graffiti-blue hover:text-graffiti-purple transition-colors font-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ADMIN
              </Link>
            )}
            {user ? (
              <>
                <Link
                  href="/account"
                  className="block text-white hover:text-graffiti-pink transition-colors font-bold py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MY ACCOUNT
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-white hover:text-graffiti-pink transition-colors font-bold py-2"
                >
                  LOGOUT
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block text-white hover:text-graffiti-pink transition-colors font-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                LOGIN
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
