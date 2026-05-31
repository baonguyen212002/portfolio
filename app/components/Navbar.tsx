"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]"
          : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#hero"
          className="group flex items-center gap-2 font-mono text-base font-semibold"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-cyan text-background shadow-[0_0_20px_-4px_rgba(56,189,248,0.7)] transition-transform group-hover:scale-110">
            S
          </span>
          <span className="text-foreground">
            shino<span className="text-accent">.dev</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)] md:flex"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          Available
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground transition-colors hover:bg-white/5 md:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 px-5 md:hidden">
          <ul className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-foreground-muted transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
