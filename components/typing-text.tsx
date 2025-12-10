'use client'
import { useState, useEffect, useRef } from 'react';

const LOADER_TEXTS = [
  "Thinking...",
  "Working on it...",
  "Almost there...",
  "Analyzing your data...",
  "Fetching results...",
  "One moment please..."
];

const CYCLE_INTERVAL = 2000; // Change text every 2 seconds

export const TypingText = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isOnLastText, setIsOnLastText] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (textIndex >= LOADER_TEXTS.length - 1) {
      setIsOnLastText(true);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTextIndex((prev) => {
        const next = prev + 1;
        if (next >= LOADER_TEXTS.length - 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          setIsOnLastText(true);
          return LOADER_TEXTS.length - 1;
        }
        return next;
      });
    }, CYCLE_INTERVAL);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [textIndex, isOnLastText]);

  return <span className="typingText">{LOADER_TEXTS[textIndex]}</span>;
};
