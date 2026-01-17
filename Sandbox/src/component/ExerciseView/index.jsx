"use client";

import { useState } from "react";
import CodeEditor from "@/component/CodeEditor";
import SandpackPlayground from "@/component/Sandpack";
import styles from "./ExerciseView.module.css";
import Link from "next/link";

const ExerciseView = ({ title, DemoComponent, sourceCode, sandboxFiles = {}, demoProps }) => {
  const [view, setView] = useState("demo"); // 'demo' or 'code'

  return (
    <div className={styles.container}>
      <div className="mb-4">
        <Link href="/exercises" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          &larr; Back to Exercises
        </Link>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.controls}>
            <button
              className={`${styles.controlBtn} ${view === "demo" ? styles.controlBtnActive : ""}`}
              onClick={() => setView("demo")}
            >
              Live Demo
            </button>
            <button
              className={`${styles.controlBtn} ${view === "code" ? styles.controlBtnActive : ""}`}
              onClick={() => setView("code")}
            >
              Source Code
            </button>
            <button
              className={`${styles.controlBtn} ${view === "playground" ? styles.controlBtnActive : ""}`}
              onClick={() => setView("playground")}
              style={{ borderColor: '#10b981', color: view === 'playground' ? '#10b981' : 'var(--text-secondary)' }}
            >
              ⚡ Playground
            </button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {view === "demo" && (
          <div className={styles.demoContainer}>
            <DemoComponent {...demoProps} />
          </div>
        )}

        {view === "code" && (
          <div className={styles.codeContainer} style={{ height: "600px", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
            <CodeEditor code={sourceCode} />
          </div>
        )}

        <div style={{ display: view === "playground" ? "block" : "none", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
          <SandpackPlayground code={sourceCode} files={sandboxFiles} />
        </div>
      </div>
    </div>
  );
};


export default ExerciseView;

