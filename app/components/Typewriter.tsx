"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  className?: string;
  /** Class for the caret bar — e.g. sizing "w-1 h-12 sm:h-14" */
  caretClassName?: string;
  /** Typing speed per character (ms) */
  speed?: number;
  /** Deleting speed per character (ms) */
  deleteSpeed?: number;
  /** Delay before typing starts (ms) */
  startDelay?: number;
  /** How long to pause when fully typed, before deleting (ms) */
  pauseAfter?: number;
  /** How long to pause when emptied, before typing again (ms) */
  pauseBefore?: number;
  /** Loop forever: type → delete → retype */
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
  const done = !loop && full; // type once, then stop for good

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

  // Caret blinks while paused (fully typed/holding), stays solid while typing/deleting.
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
