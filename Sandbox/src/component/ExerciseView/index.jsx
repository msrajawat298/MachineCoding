"use client";

import { useState } from "react";
import CodeBlock from "@/component/CodeBlock";

const ExerciseView = ({ title, DemoComponent, sourceCode }) => {
  const [view, setView] = useState("demo"); // 'demo' or 'code'

  return (
    <div className="container-fluid py-4">
      <h1 className="mb-4">{title}</h1>

      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group" role="group">
          <button
            className={`btn ${view === "demo" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setView("demo")}
          >
            Demo View
          </button>
          <button
            className={`btn ${view === "code" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setView("code")}
          >
            Source Code
          </button>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">{view === "demo" ? "Demo" : "Source Code"}</h5>
            </div>
            <div className="card-body p-0">
              {view === "demo" ? (
                <div className="p-3">
                  <DemoComponent />
                </div>
              ) : (
                <div className="code-container">
                  <CodeBlock sourceCode={sourceCode} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseView;
