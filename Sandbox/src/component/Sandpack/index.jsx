"use client";

import { useSandpack, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";
import { useEffect, useState, useMemo } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

function Toolbar({ onReset, isFullscreen, onToggleFullscreen }) {
    const { sandpack } = useSandpack();
    const { files } = sandpack;

    // Auto-save logic
    useEffect(() => {
        localStorage.setItem(`playground_autosave_v1`, JSON.stringify(files));
    }, [files]);

    const handleDownload = async () => {
        const zip = new JSZip();
        Object.keys(files).forEach((path) => {
            const fileName = path.replace(/^\//, ""); // Remove leading slash
            zip.file(fileName, files[path].code);
        });

        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, "frontend-forge-challenge.zip");
    };

    return (
        <div style={{ padding: '0.5rem', borderBottom: '1px solid #333', background: '#1e1e1e', display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', alignItems: 'center' }}>
            <button
                type="button"
                onClick={onToggleFullscreen}
                className="btn-outline"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', border: '1px solid #444', color: '#ccc', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
                {isFullscreen ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                    </svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                )}
            </button>
            <div style={{ width: '1px', height: '20px', background: '#444', margin: '0 0.25rem' }}></div>
            <button
                type="button"
                onClick={onReset}
                className="btn-outline"
                style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', border: '1px solid #444', color: '#ccc', background: 'transparent', cursor: 'pointer' }}
            >
                ↺ Reset
            </button>
            <button
                type="button"
                onClick={handleDownload}
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', border: 'none', background: '#4f46e5', color: 'white', cursor: 'pointer', borderRadius: '4px' }}
            >
                ⬇ Export Zip
            </button>
        </div>
    )
}

const SandpackPlayground = ({ code, files = {} }) => {
    // 1. Prepare initial files state with useMemo to ensure stability across re-renders
    const initialFiles = useMemo(() => ({
        "/App.js": code,
        ...Object.keys(files).reduce((acc, filename) => {
            const key = filename.startsWith('/') ? filename : `/${filename}`;
            if (filename === 'index.jsx' || filename === 'index.js') return acc;
            acc[key] = files[filename];
            return acc;
        }, {}),
        "/styles.css": {
            code: `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  -moz-font-smoothing: auto;
  background-color: #1e1e1e;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
.container {
    padding: 2rem;
    border: 1px solid #333;
    border-radius: 8px;
    background: #252526;
}
input, button, select {
    padding: 8px;
    margin: 4px;
    border-radius: 4px;
    border: 1px solid #444;
    background: #333;
    color: white;
}
button {
    cursor: pointer;
    background: #0e639c;
    border: none;
}
button:hover {
    background: #1177bb;
}
`
        }
    }), [code, files]);

    const [key, setKey] = useState(0);
    const [showResetConfirm, setShowResetConfirm] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Check for saved state on mount
    useEffect(() => {
        const saved = localStorage.getItem(`playground_autosave_v1`);
        if (saved) {
            try {
                // We could verify if the saved code belongs to this challenge, but for now we just load it
                // A better approach would be to key localstorage by challenge ID.
                // setFilesState(JSON.parse(saved));
            } catch (e) { }
        }
    }, []);

    const handleReset = (e) => {
        e?.preventDefault();
        e?.stopPropagation();
        setShowResetConfirm(true);
    };

    const confirmReset = () => {
        localStorage.removeItem(`playground_autosave_v1`);
        setKey(prev => prev + 1); // Force re-render of SandpackProvider
        setShowResetConfirm(false);
    };

    return (
        <div style={isFullscreen ? {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            background: '#1e1e1e',
            display: 'flex',
            flexDirection: 'column'
        } : { position: 'relative' }}>
            {showResetConfirm && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.7)',
                    zIndex: 10000, // Higher than fullscreen z-index
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{ background: '#252526', padding: '1.5rem', borderRadius: '8px', border: '1px solid #444', maxWidth: '400px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
                        <h3 style={{ marginTop: 0, color: '#fff' }}>Reset Challenge?</h3>
                        <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Are you sure you want to reset all your changes? This action cannot be undone.</p>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                            <button
                                onClick={() => setShowResetConfirm(false)}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid #444',
                                    padding: '0.5rem 1rem',
                                    color: '#ccc',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmReset}
                                style={{
                                    background: '#ef4444',
                                    border: 'none',
                                    padding: '0.5rem 1rem',
                                    color: 'white',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Yes, Reset
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <SandpackProvider
                key={key}
                theme={atomDark}
                template="react"
                files={initialFiles}
                options={{
                    resizablePanels: true,
                    classes: {
                        "sp-wrapper": "custom-sandpack-wrapper",
                        "sp-layout": "custom-sandpack-layout",
                    },
                }}
            >
                <div style={{ border: '1px solid #333', background: '#1e1e1e', borderBottom: 'none' }}>
                    <Toolbar
                        onReset={handleReset}
                        isFullscreen={isFullscreen}
                        onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
                    />
                </div>
                <SandpackLayout style={{
                    height: isFullscreen ? 'calc(100vh - 40px)' : '600px',
                    '--sp-layout-height': isFullscreen ? 'calc(100vh - 40px)' : '600px',
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0
                }}>
                    <SandpackCodeEditor
                        showLineNumbers
                        showTabs
                        closableTabs={false}
                        style={{ height: '100%' }}
                    />
                    <SandpackPreview
                        style={{ height: '100%' }}
                        showOpenInCodeSandbox={false}
                        showRefreshButton={true}
                    />
                </SandpackLayout>
            </SandpackProvider>
        </div>
    );
};

export default SandpackPlayground;
