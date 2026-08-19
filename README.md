# PT. METINDO TECH INDONESIA - Company Profile Website

Website company profile untuk PT. METINDO TECH INDONESIA, perusahaan trading dan penyedia produk mesin-mesin industri.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animations
- **Swiper** - Product slideshow
- **Lucide React** - Icons

## Features

- ✅ Multi-page website (Home, About, Products, Contact)
- ✅ Product slideshow on homepage
- ✅ 6 product categories with 10 products each
- ✅ Animated UI elements with Framer Motion
- ✅ Responsive design for all devices
- ✅ No database required - all data is static
- ✅ Orange and white color theme

## Product Categories

1. Chemical Solutions
2. Mechanical Solutions
3. Special Tools
4. Filter
5. CBN
6. Superon

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to project directory:
   ```bash
   cd metindo-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Project Structure

```
metindo-website/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products listing page
│   │   └── [category]/    # Category detail page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── AnimatedSection.tsx
│   ├── CategoryCard.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProductDetail.tsx
│   └── ProductSlideshow.tsx
├── data/                  # Static data
│   └── products.ts        # Product categories & items
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Contact Information

- **Email:** info@metindo-tech.co.id
- **Phone:** +62 21-1234-5678
- **WhatsApp:** +62 812-3456-7890
- **Address:** Jl. Industri Raya No. 123, Jakarta, Indonesia

## License

© 2024 PT. METINDO TECH INDONESIA. All rights reserved.
