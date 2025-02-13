"use client";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ sourceCode }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      customStyle={{
        margin: 0,
        padding: '1rem',
        fontSize: '14px',
      }}
      showLineNumbers={true}
    >
      {sourceCode}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
