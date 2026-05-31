"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  className?: string;
  /** Class cho thanh con trỏ — vd kích thước "w-1 h-12 sm:h-14" */
  caretClassName?: string;
  /** Thời gian giữa mỗi ký tự (ms) */
  speed?: number;
  /** Trễ trước khi bắt đầu gõ (ms) */
  startDelay?: number;
};

export default function Typewriter({
  text,
  className,
  caretClassName = "",
  speed = 170,
  startDelay = 350,
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (done) return;
    const delay = count === 0 ? startDelay : speed;
    const id = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(id);
  }, [count, done, speed, startDelay, text.length]);

  return (
    <>
      <span className={className} aria-label={text}>
        {text.slice(0, count)}
      </span>
      <span
        aria-hidden
        className={`inline-block translate-y-1 bg-accent ml-1 ${caretClassName} ${
          done ? "animate-blink" : ""
        }`}
      />
    </>
  );
}
