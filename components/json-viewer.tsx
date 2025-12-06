"use client";

import { useState } from "react";

type JSONViewerProps = {
  data: any;
  className?: string;
};

const JSONViewer = ({ data, className }: JSONViewerProps) => {
  return (
    <pre
      className={`text-sm p-3 rounded-lg overflow-auto whitespace-pre-wrap font-mono 
      bg-muted text-muted-foreground ${className}`}
    >
      {syntaxHighlight(JSON.stringify(data, null, 2))}
    </pre>
  );
};

export default JSONViewer;

/* 🎨 Syntax Highlighter */
function syntaxHighlight(json: string) {
  const colored = json
    .replace(
      /"(.*?)":/g,
      (_match, p1) =>
        `<span class="text-blue-400 dark:text-blue-300">"${p1}"</span>:`
    )
    .replace(
      /"(.*?)"/g,
      `<span class="text-green-500 dark:text-green-400">"$1"</span>`
    )
    .replace(
      /\b(true|false)\b/g,
      `<span class="text-purple-500 dark:text-purple-400">$1</span>`
    )
    .replace(
      /\b(null)\b/g,
      `<span class="text-gray-400 dark:text-gray-500">$1</span>`
    )
    .replace(
      /\b([\d.]+)\b/g,
      `<span class="text-orange-400 dark:text-orange-300">$1</span>`
    );

  return <span dangerouslySetInnerHTML={{ __html: colored }} />;
}
