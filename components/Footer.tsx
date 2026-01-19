import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-graffiti-purple mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-graffiti-pink">Ivory</span>
              <span className="text-graffiti-purple">Reign</span>
            </h3>
            <p className="text-gray-400">
              Premium streetwear & athleisure for the modern urban lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-graffiti-pink transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-graffiti-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-graffiti-yellow transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-gray-400 hover:text-graffiti-green transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">CUSTOMER SERVICE</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-graffiti-pink transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-graffiti-purple transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-graffiti-yellow transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-graffiti-green transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">CONNECT WITH US</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-2xl hover:text-graffiti-pink transition-colors">
                📱
              </a>
              <a href="#" className="text-2xl hover:text-graffiti-purple transition-colors">
                📷
              </a>
              <a href="#" className="text-2xl hover:text-graffiti-blue transition-colors">
                🐦
              </a>
              <a href="#" className="text-2xl hover:text-graffiti-yellow transition-colors">
                💬
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for exclusive drops and updates.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 IvoryReign. All rights reserved.</p>
          <p className="text-sm mt-2">Made with 💜 for the culture</p>
        </div>
      </div>
    </footer>
  );
}
