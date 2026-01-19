export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // In production, this would be hashed
  role: 'admin' | 'user';
  firstName: string;
  lastName: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes: string[];
  colors: string[];
  images: string[];
  inStock: boolean;
  createdAt: string;
}

export const ADMIN_USERS: User[] = [
  {
    id: '1',
    username: 'nate',
    email: 'nate@ivoryreign.com',
    password: 'admin123', // In production, use proper password hashing
    role: 'admin',
    firstName: 'Nate',
    lastName: 'Admin',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    username: 'marco',
    email: 'marco@ivoryreign.com',
    password: 'admin123',
    role: 'admin',
    firstName: 'Marco',
    lastName: 'Admin',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    username: 'jeff',
    email: 'jeff@ivoryreign.com',
    password: 'admin123',
    role: 'admin',
    firstName: 'Jeff',
    lastName: 'Admin',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    username: 'zion',
    email: 'zion@ivoryreign.com',
    password: 'admin123',
    role: 'admin',
    firstName: 'Zion',
    lastName: 'Admin',
    createdAt: new Date().toISOString(),
  },
];

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'IvoryReign Street Hoodie',
    description: 'Premium heavyweight hoodie with graffiti-style graphics',
    price: 89.99,
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Ivory', 'Purple'],
    images: ['/images/hoodie-1.jpg'],
    inStock: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Urban Reign Joggers',
    description: 'Comfortable athleisure joggers for everyday wear',
    price: 69.99,
    category: 'Bottoms',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Olive'],
    images: ['/images/joggers-1.jpg'],
    inStock: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Graffiti Crown Tee',
    description: 'Signature crown logo with street art aesthetic',
    price: 39.99,
    category: 'T-Shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Pink', 'Blue'],
    images: ['/images/tee-1.jpg'],
    inStock: true,
    createdAt: new Date().toISOString(),
  },
];
