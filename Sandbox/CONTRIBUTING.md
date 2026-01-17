# Contributing to FrontendForge

First off, thanks for taking the time to contribute! 🎉

FrontendForge is built to help developers learn and master frontend machine coding. Your contributions help make this platform better for everyone.

## 📋 How to Contribute

### 1. Reporting Bugs
If you find a bug, please create a new issue on GitHub describing:
- What happened?
- What did you expect to happen?
- Steps to reproduce the bug.
- Screenshots (if applicable).

### 2. Suggesting Enhancements
New challenge ideas or feature suggestions are always welcome. Open an issue to discuss your idea before implementing it.

### 3. Submitting Pull Requests
1. **Fork the repository** and clone it locally.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/my-new-challenge
   ```
3. **Commit your changes**:
   - Write clear, descriptive commit messages.
   - Example: `feat: Add new Timer challenge` or `fix: Mobile layout in Sidebar`.
4. **Push to your fork** and submit a Pull Request.

---

## 💻 Development Workflow

### Adding a New Challenge
Adding a new machine coding exercise is easy:

1.  **Navigate to** `src/challenges/`.
2.  **Create a new folder** with a kebab-case name (e.g., `infinite-scroll`).
3.  **Create your component**:
    - Add an `index.jsx` file inside your new folder.
    - Export your main component as `default`.
    - (Optional) Add CSS modules or other helper files in the same folder.
4.  **Test it locally**:
    - The sidebar will automatically pick up your new folder.
    - Go to `http://localhost:3000/exercises/infinite-scroll` to see it in action.

### Code Style
- Use **functional components** and React Hooks.
- Prefer **CSS Modules** (`styles.module.css`) for component-specific styling to avoid collisions.
- Keep components clean and modular.

---

## ⚖️ License
By contributing, you agree that your contributions will be licensed under its MIT License.
