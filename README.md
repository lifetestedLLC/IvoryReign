# IvoryReign - Premium Streetwear & Athleisure Brand

A modern, graffiti-inspired clothing brand website built with Next.js, React, TypeScript, and Tailwind CSS.

![IvoryReign Homepage](https://github.com/user-attachments/assets/d0c06b2b-3311-4dae-9ce4-53949d58e5fc)

## 🎨 Features

- **Modern Graffiti Art Style**: Bold colors, urban aesthetics, and street-inspired design
- **User Authentication**: Secure login system with admin and user roles
- **Product Management**: Full CRUD functionality for managing products
- **Admin Panel**: Comprehensive dashboard for managing products, users, orders, and integrations
- **Printing Store Integration**: Ready-to-connect with popular print-on-demand services (Printful, Printify, Custom)
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Multiple Pages**: Home, Shop, About, Contact, Account, Settings, and Admin

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x with custom graffiti theme
- **State Management**: React Context API for authentication
- **Deployment Ready**: Optimized for production builds

## 👥 Admin Users

The system comes with 4 pre-configured admin users:

| Username | Email | Password | Role |
|----------|-------|----------|------|
| nate | nate@ivoryreign.com | admin123 | Admin |
| marco | marco@ivoryreign.com | admin123 | Admin |
| jeff | jeff@ivoryreign.com | admin123 | Admin |
| zion | zion@ivoryreign.com | admin123 | Admin |

⚠️ **Note**: These are demo credentials. In production, use proper password hashing and secure authentication.

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/lifetestedLLC/IvoryReign.git
cd IvoryReign
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deploy

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 🎯 Key Pages

- **Home** (`/`): Hero section, featured products, brand values
- **Shop** (`/shop`): Product catalog with filtering
- **About** (`/about`): Brand story, team, values, and mission
- **Contact** (`/contact`): Contact form and information
- **Login** (`/login`): User authentication
- **Account** (`/account`): User profile and order history
- **Settings** (`/settings`): Account preferences and notifications
- **Admin** (`/admin`): Product management, user management, orders, and integrations

## 🎨 Design Theme

The website features a custom graffiti-inspired color palette:

- **Primary Colors**: Pink (#FF006E), Purple (#8338EC), Blue (#8338EC)
- **Accent Colors**: Yellow (#FFBE0B), Green (#06FFA5)
- **Base**: Dark theme with ivory tones for contrast

## 🔗 Integrations

The admin panel includes integration support for:
- **Printful**: On-demand printing and fulfillment
- **Printify**: Print-on-demand platform
- **Custom Print**: Your own printing solution

## 📱 Screenshots

### Login Page
![Login Page](https://github.com/user-attachments/assets/728e1a67-a250-4f77-81c4-a269de39aea6)

### Admin Panel - Products
![Admin Products](https://github.com/user-attachments/assets/f84d662f-9ff7-4385-b64f-2dd948f8d739)

### Admin Panel - Integrations
![Admin Integrations](https://github.com/user-attachments/assets/843ed7d9-c92e-4989-be1f-abebaec21cab)

## 🏗️ Project Structure

```
IvoryReign/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── account/           # User account page
│   ├── admin/             # Admin panel
│   ├── contact/           # Contact page
│   ├── login/             # Login page
│   ├── settings/          # Settings page
│   ├── shop/              # Shop page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ProductCard.tsx    # Product display card
├── lib/                   # Utilities and data
│   ├── auth.tsx           # Authentication context
│   └── data.ts            # Sample data (users, products)
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔐 Security Notes

- Current implementation uses localStorage for session management (demo purposes)
- Passwords are stored in plain text (for demo only)
- **For production**: Implement proper authentication (JWT, OAuth, NextAuth.js)
- **For production**: Use a database and secure password hashing (bcrypt, argon2)
- **For production**: Add HTTPS, CSRF protection, and rate limiting

## 🎯 Future Enhancements

- [ ] Shopping cart functionality
- [ ] Payment integration (Stripe, PayPal)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Email notifications
- [ ] Social media integration
- [ ] Advanced product filtering and search
- [ ] Backend API with database
- [ ] Real-time inventory management

## 📄 License

This project is licensed under the ISC License.

## 👏 Credits

Created for IvoryReign - Where Street Meets Elegance

Made with 💜 for the culture
