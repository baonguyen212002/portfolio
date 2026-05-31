"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  className?: string;
  /** Class cho thanh con trỏ — vd kích thước "w-1 h-12 sm:h-14" */
  caretClassName?: string;
  /** Tốc độ gõ mỗi ký tự (ms) */
  speed?: number;
  /** Tốc độ xoá mỗi ký tự (ms) */
  deleteSpeed?: number;
  /** Trễ trước khi bắt đầu gõ (ms) */
  startDelay?: number;
  /** Dừng lại bao lâu khi gõ xong trước khi xoá (ms) */
  pauseAfter?: number;
  /** Dừng lại bao lâu khi đã xoá hết trước khi gõ lại (ms) */
  pauseBefore?: number;
  /** Lặp vô hạn: gõ → xoá → gõ lại */
  loop?: boolean;
};

export default function Typewriter({
  text,
  className,
  caretClassName = "",
  speed = 150,
  deleteSpeed = 90,
  startDelay = 500,
  pauseAfter = 1600,
  pauseBefore = 500,
  loop = false,
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const full = count === text.length;
  const empty = count === 0;
  const done = !loop && full; // gõ một lần xong thì dừng hẳn

  useEffect(() => {
    if (done) return;

    let delay: number;
    if (!deleting) {
      delay = full ? pauseAfter : empty ? startDelay : speed;
    } else {
      delay = empty ? pauseBefore : deleteSpeed;
    }

    const id = setTimeout(() => {
      if (!deleting) {
        if (full) setDeleting(true);
        else setCount((c) => c + 1);
      } else {
        if (empty) setDeleting(false);
        else setCount((c) => c - 1);
      }
    }, delay);
    return () => clearTimeout(id);
  }, [
    count,
    deleting,
    done,
    full,
    empty,
    speed,
    deleteSpeed,
    startDelay,
    pauseAfter,
    pauseBefore,
  ]);

  // Con trỏ nhấp nháy khi đang dừng (gõ xong/giữ), đứng yên khi đang gõ/xoá.
  const blink = full && !deleting;

  return (
    <>
      <span className={className} aria-label={text}>
        {text.slice(0, count)}
      </span>
      <span
        aria-hidden
        className={`inline-block translate-y-1 bg-accent ml-1 ${caretClassName} ${
          blink ? "animate-blink" : ""
        }`}
      />
    </>
  );
}
