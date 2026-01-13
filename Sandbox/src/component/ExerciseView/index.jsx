"use client";

import { useState } from "react";
import CodeBlock from "@/component/CodeBlock";
import styles from "./ExerciseView.module.css";
import Link from "next/link";

const ExerciseView = ({ title, DemoComponent, sourceCode, demoProps }) => {
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
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {view === "demo" ? (
          <div className={styles.demoContainer}>
            <DemoComponent {...demoProps} />
          </div>
        ) : (
          <div className={styles.codeContainer}>
            <CodeBlock sourceCode={sourceCode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseView;

