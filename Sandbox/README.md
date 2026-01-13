# NextGen Explorer

A modern Next.js application featuring interactive components and exercises including a file explorer and product listing system.

## Features

- 📁 Interactive File Explorer
- 📝 Todo Application
- 🛍️ Product Listing with Search
- 📤 Drag & Drop File Upload
- 🎨 Bootstrap UI Integration
- 💅 Custom CSS Modules

## Tech Stack

- Next.js 15.1.7
- React 19.0.0
- Bootstrap 5.3.3
- React Syntax Highlighter

## Getting Started

1. Clone the repository:
```bash
git clone git@github.com:msrajawat298/MachineCoding.git
cd nextgen-explorer
```

2. Install dependencies:

```npm install```

3. Run the development server:

```npm run dev```

4. Open ```http://localhost:3000``` in your browser

**Available Scripts**
- ```npm run dev``` - Start development server with Turbopack
- ```npm run build``` - Build for production
- ```npm run start``` - Start production server
- ```npm run lint``` - Run ESLint


**Project Structure**

nextgen-explorer/
├── src/
│   ├── app/              # Next.js app router
│   ├── component/        # React components
│   └── globals.css       # Global styles
├── public/              # Static assets
└── package.json         # Project dependencies

**Components**
- ExplorerView: Interactive file system explorer
- ListingProducts: Product listing with search functionality
- DragDropComponent: File upload interface
- CodeBlock: Syntax-highlighted code viewer


**License**
This project is private and not intended for public distribution.

**Author**
Mayank Singh Kushwah

## SEO changes made

- Added site-wide metadata in `src/app/layout.js` (title template, description, keywords, Open Graph, Twitter card, robots, icons).
- Injected JSON-LD structured data and a canonical link via `src/app/head.js`.
- Added `public/robots.txt` and `public/sitemap.xml` including key routes so search engines can crawl the site.

Notes:
- Replace `https://vitabletech.dev` in `src/app/layout.js`, `src/app/head.js`, and `public/sitemap.xml` with your production domain before deploying.
- Add an `og-image.png` at `public/og-image.png` (1200x630) to improve social shares.
- Run Lighthouse and `pnpm build` to verify no regressions.
