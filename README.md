# FrontendForge ⚡

**FrontendForge** is an advanced interactive platform designed to help developers master frontend machine coding challenges. It provides a realistic environment to practice common interview questions, complete with live demos, code reviews, and an in-browser IDE.

![FrontendForge Banner](./Sandbox/public/logo.svg)

## 🚀 Features

- **Interactive Challenges**: Practice real-world problems like File Explorers, Drag & Drop, Debouncing, and more.
- **Live Playground**: Integrated **Sandpack** environment allowing you to edit and run code directly in the browser.
- **Dual Views**: Switch seamlessly between the **Live Demo** and **Source Code** (powered by Monaco Editor).
- **Mobile Responsive**: Fully optimized for learning on the go.
- **Developer Guide**: Comprehensive documentation on how to understand and approach each problem.
- **Persistent Progress**: Your playground changes are autosaved locally so you never lose your work.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: CSS Modules & Vanilla CSS Variables for theming (Dark Mode native).
- **Editor**: [Monaco Editor](https://github.com/microsoft/monaco-editor) for code viewing.
- **Sandpack**: [@codesandbox/sandpack-react](https://sandpack.codesandbox.io/) for the live execution environment.
- **Icons**: Custom SVG icons.

## 🏁 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vitabletech/FrontendForge.git
   cd FrontendForge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📁 Project Structure

```bash
src/
├── app/                 # Next.js App Router pages
│   ├── exercises/       # Dynamic routes for exercise pages
│   ├── playground/      # Standalone Playground page
│   └── page.js          # Landing page
├── challenges/          # Source code for each challenge
│   ├── file-explorer/
│   ├── todo-app/
│   └── ...
├── component/           # Shared UI components (Sidebar, Header, etc.)
│   ├── Sandpack/        # Online IDE configuration
│   └── ...
└── ...
```

## 🤝 Contributing

We welcome contributions from the community! Whether you want to add a new challenge, fix a bug, or improve the documentation, your help is appreciated.

Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines on how to get started.

### Adding a New Challenge

1. Create a new folder in `src/challenges/`.
2. Add your `index.jsx` (main component) and any style files.
3. The platform automatically detects the new folder and adds it to the sidebar!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by the <a href="https://github.com/VitableTech">VitableTech</a> Team
</p>
