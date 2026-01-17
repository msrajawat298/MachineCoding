# Changelog

All notable changes to the "FrontendForge" (formerly Machine Coding Sandbox) project will be documented in this file.

## [Unreleased] - 2026-01-14

### 🚀 Major Architectural Refactor

#### Problem Statement
Previously, adding a new coding exercise was a manual and error-prone process. Developers had to:
1. Create a component in `src/component`.
2. Create a specific folder in `src/app/exercises`.
3. Create a `page.js` file and manually wire up the component and the source code fetcher.
4. Manually add the entry to the sidebar configuration.

This friction made it difficult to scale the platform and discouraged contributions.

#### Solution: Auto-Discovery System
We implemented a dynamic, file-system based routing architecture:
- **New Registry**: Created `src/challenges` directory as the single source of truth.
- **Dynamic Routing**: Implemented `src/app/exercises/[slug]/page.js` to automatically match URLs to folders in `src/challenges`.
- **Automatic Sidebar**: The sidebar now automatically scans the `src/challenges` directory to generate the navigation links.
- **Zero-Config Pages**: Adding a new exercise now only requires dropping a folder with an `index.jsx` file into `src/challenges`. The page wrapper, title, and source code viewer are generated automatically.

### 🎨 UI/UX & Mobile Responsiveness

#### Problem Statement
The landing page was designed primarily for desktop. On mobile devices:
- "Start Practicing" and "Learn More" buttons became squeezed and unclickable.
- The grid of exercises was compressed, making text unreadable.
- Font sizes were too large for small screens.

#### Solution: Responsive Design System
- **CSS Modules**: Migrated `page.js` styles to `page.module.css` for better maintainability and media query support.
- **Mobile-First Adjustments**:
  - Stacked buttons vertically on screens smaller than 768px.
  - Converted the multi-column grid to a single-column layout for easy scrolling on mobile.
  - Adusted typography scale for better readability on small devices.
- **Animations**: Added `fadeIn`, `slideUp`, and `float` animations to make the site feel more premium and "alive".

### 🏷️ Branding & Identity

#### Problem Statement
The project was generic and lacked a unique identity, confusing users about whether it was the main VitableTech site or a tool. It also lacked basic SEO assets like a favicon.

#### Solution: "FrontendForge" Rebrand
- **New Name**: Officially named the product **FrontendForge**.
- **Visual Identity**:
  - Generated modern SVG logo and favicon (`public/logo.svg`, `public/icon.svg`).
  - Updated the color palette to standardized Indigo/Cyan gradients.
  - Explicitly labeled the product as "A VitableTech Product" to maintain brand lineage while establishing independence.
- **SEO**:
  - Updated `layout.js` metadata with unique titles and descriptions.
  - Fixed Next.js 14+ specific warnings regarding `viewport` configuration.

### 📚 Developer Experience

#### Problem Statement
New contributors had no documentation on how to use the new system or where to add files.

#### Solution: Documentation
- **Developer Guide**: Created a dedicated guide at `/guide`.
- **Integration**: Added links to the guide in the Header, Footer, and Sidebar for easy access.
