"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, language = "javascript", readOnly = true }) => {
  return (
    <div style={{ height: "100%", width: "100%", minHeight: "600px" }}>
      <Editor
        height="100%"
        defaultLanguage={language}
        defaultValue={code}
        value={code}
        theme="vs-dark"
        options={{
          readOnly: readOnly,
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          padding: { top: 16, bottom: 16 },
          fontFamily: "'Geist Mono', monospace",
        }}
      />
    </div>
  );
};

export default CodeEditor;
