# Sandbox — React / Next exercises

Short project holding React / Next small exercises and components used for interview practice and demos.

## Overview

- Framework: Next.js (app dir)
- React 19
- Purpose: collection of small exercises (debounce, throttle, drag-drop, file explorer, product listing, virtualized list, todo app, etc.) and reusable components under `src/component`.

## Prerequisites

- Node 18+ (or Node compatible with Next 16)
- npm, pnpm or yarn

## Install & run

Install dependencies at repository root (Sandbox):

```bash
npm install
# or pnpm install
```

Run dev server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Start production:

```bash
npm start
```

## Project structure (high level)

- `src/app` — Next app routes and pages (including `exercises` pages)
- `src/component` — reusable UI components and demo components
- `src/utils` — utility functions (e.g., `debounce.js`, `throttle.js`)
- `public` — static files
- `package.json` — scripts and dependencies

Example notable folders:

- `src/app/exercises/*` — each exercise has its own folder and `page.js` (server or client) that imports a demo component
- `src/component/ExerciseView` — layout wrapper used for exercise pages

## How to add a new component

1. Create a folder under `src/component` named for the component, e.g. `MyFancyComponent`.
2. Add an `index.jsx` (or `.js`) exporting the component as default and any subcomponents if needed.
3. Keep component UI self-contained and add a client directive at top when using hooks: `"use client"`.
4. Export any demo variants (if relevant) from an index file so other parts of the app can import easily.
5. Import and use the component where needed.

Checklist when adding a component:

- [ ] Folder: `src/component/MyFancyComponent`
- [ ] File: `src/component/MyFancyComponent/index.jsx`
- [ ] Exported as default and named exports as necessary
- [ ] Add CSS/module if required under same folder

## How to add a new exercise page

1. Create a folder under `src/app/exercises` with a short kebab-case name, e.g. `my-exercise`.
2. Add `page.js` inside that folder. Example minimal page:

```jsx
import ExerciseView from "@/component/ExerciseView";
import MyDemo from "@/component/MyFancyComponent";

export default function Page() {
  return <ExerciseView title="My Exercise Demo" DemoComponent={MyDemo} />;
}
```

3. If you need to show source code in the exercise page (existing pattern), use `getSourceCode` from `@/component/CodeBlock/CodeBlockServer` as used in other exercises.
4. Update any central index or navigation if you want the exercise discoverable from a sidebar.

## Conventions

- Files using React hooks / browser APIs: add `"use client"` at top.
- Keep components small and focused.
- Prefer descriptive component folder names and `index.jsx` exports.
- Use module CSS (e.g., `Component.module.css`) for component-scoped styles.

## Developer workflow

1. Create a branch off `main` (or `master`): `git checkout -b feat/my-exercise`.
2. Make small commits with descriptive messages.
3. Run the dev server and verify the exercise/page works.
4. Push branch and open a PR describing the change, screenshots, and any notes.

Commands:

```bash
# create branch
git checkout -b feat/my-exercise

# run dev
npm run dev
```

## Where to look for examples

- See `src/component/TodoApp` for a small client-side demo and `src/app/exercises/debounce` for an exercise page that loads source code.

## License

This repository is for personal/demo use. Add a license file if you plan to publish.
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
- Replace `https://sandbox.vitabletech.in` in `src/app/layout.js`, `src/app/head.js`, and `public/sitemap.xml` with your production domain before deploying.
- Add an `og-image.png` at `public/og-image.png` (1200x630) to improve social shares.
- Run Lighthouse and `pnpm build` to verify no regressions.
