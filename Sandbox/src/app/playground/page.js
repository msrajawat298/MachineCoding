"use client";

import SandpackPlayground from "@/component/Sandpack";
import styles from "./playground.module.css";

const helloWorldCode = `import React from 'react';

export default function App() {
  return (
    <div className="container">
      <h1>Hello World 🌍</h1>
      <p>Start coding your React app here!</p>
      
      <div className="card">
        <h2>Features:</h2>
        <ul>
          <li>✨ Live Preview</li>
          <li>📦 Auto-dependency handling</li>
          <li>🌑 Dark Mode theme</li>
        </ul>
      </div>
      
      <button onClick={() => alert('Button clicked!')}>
        Click Me
      </button>
    </div>
  );
}
`;

const extraFiles = {
  "/styles.css": {
    code: `body {
  font-family: 'Inter', sans-serif;
  background-color: #111;
  color: #fff;
  margin: 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.container {
  max-width: 600px;
  width: 100%;
  text-align: center;
}

h1 {
  background: linear-gradient(to right, #4f46e5, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.card {
  background: #222;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: left;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #4f46e5;
}

button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.9;
}
`
  }
};

export default function PlaygroundPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>FrontendForge Playground</h1>
        <p className={styles.subtitle}>A dedicated space to experiment with React code in real-time.</p>
      </header>
      
      <div className={styles.editorWrapper}>
        <SandpackPlayground code={helloWorldCode} files={extraFiles} />
      </div>
    </div>
  );
}
