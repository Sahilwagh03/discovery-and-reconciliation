"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type FadeSequenceProps = {
  items: React.ReactNode[];
  interval?: number;
};

export function FadeSequence({
  items,
  interval = 3000,
}: FadeSequenceProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <div className="hello relative h-full w-full overflow-y-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-full flex flex-col items-center justify-center "
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
