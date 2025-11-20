import React from 'react';

interface CodeBlockProps {
  content: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ content, language }) => {
  return (
    <div className="bg-[#1a1a1a] border border-brand-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-brand-surface border-b border-brand-border">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-xs text-gray-400 font-mono uppercase">{language}</span>
      </div>
      <pre className="p-4 text-sm font-mono text-gray-200 overflow-x-auto">
        <code>{content}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
