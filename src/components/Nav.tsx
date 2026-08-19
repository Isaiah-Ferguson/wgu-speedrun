"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { pad2 } from "@/lib/format";

const links = [
  { href: "/", label: "Overview" },
  { href: "/programs", label: "Programs" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/courses", label: "Tracker" },
  { href: "/calculator", label: "Calculator" },
  { href: "/financial-aid", label: "Aid" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-base font-extrabold tracking-tight">
            Degree<span className="text-accent">SpeedRun</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {links.map((l, i) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className="group flex items-baseline gap-1.5"
              >
                <span className="label" style={{ letterSpacing: "0.1em" }}>
                  {pad2(i + 1)}
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    active
                      ? "text-accent underline decoration-accent decoration-2 underline-offset-[6px]"
                      : "text-ink/70 group-hover:text-ink"
                  }`}
                >
                  {l.label}
                </span>
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="label px-1 py-2 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-rule px-4 py-2 md:hidden">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-2 border-b border-rule py-2.5 last:border-0 ${
                pathname === l.href ? "text-accent" : ""
              }`}
            >
              <span className="label">{pad2(i + 1)}</span>
              <span className="text-sm font-semibold">{l.label}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
