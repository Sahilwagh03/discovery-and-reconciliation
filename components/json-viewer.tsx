"use client";

import { useState } from "react";

type JSONViewerProps = {
  data: any;
  className?: string;
};

const JSONViewer = ({ data, className }: JSONViewerProps) => {
  const highlighted = syntaxHighlight(JSON.stringify(data, null, 2));

  return (
    <pre
      className={`text-sm p-3 rounded-lg overflow-auto whitespace-pre-wrap font-mono 
      bg-muted text-muted-foreground max-h-[450px] ${className}`}
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  );
};

export default JSONViewer;

function syntaxHighlight(json: string) {
  // Highlight keys
  let result = json.replace(
    /"([^"]*)":/g,
    `<span class="text-blue-400 dark:text-blue-300">"$1"</span>:`
  );

  // Highlight string values (only those after colon)
  result = result.replace(
    /:\s*"([^"]*)"/g,
    `: <span class="text-green-500 dark:text-green-400">"$1"</span>`
  );

  // true / false
  result = result.replace(
    /\b(true|false)\b/g,
    `<span class="text-purple-500 dark:text-purple-400">$1</span>`
  );

  // null
  result = result.replace(
    /\bnull\b/g,
    `<span class="text-gray-400 dark:text-gray-500">null</span>`
  );

  // numbers
  result = result.replace(
    /:\s*([\d.]+)/g,
    `: <span class="text-orange-400 dark:text-orange-300">$1</span>`
  );

  return result;
}
