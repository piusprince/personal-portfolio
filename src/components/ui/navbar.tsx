import React from "react";
import Link from "next/link";
import { Home01Icon, UserIcon, CodeCircleIcon, Mail01Icon } from "hugeicons-react";
import Logo from "@/components/logo";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 w-full grid grid-cols-3 items-start z-50 px-6">
      {/* Left — logo */}
      <div className="flex justify-start">
        <Link
          href="/"
          aria-label="Home"
          className="glass-panel p-2 rounded-xl text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
        >
          <Logo className="w-8 h-8" bgColor="oklch(14% 0.005 286)" />
        </Link>
      </div>

      {/* Center — nav pill, truly centered */}
      <div className="flex justify-center">
        <nav className="glass-panel px-6 py-3 rounded-[var(--radius-lg)] shadow-lg shadow-black/20">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="/"
                className="group flex flex-col items-center gap-1 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
              >
                <Home01Icon className="h-5 w-5" />
                <span className="text-xs font-medium tracking-wide">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="group flex flex-col items-center gap-1 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
              >
                <UserIcon className="h-5 w-5" />
                <span className="text-xs font-medium tracking-wide">About</span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="group flex flex-col items-center gap-1 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
              >
                <CodeCircleIcon className="h-5 w-5" />
                <span className="text-xs font-medium tracking-wide">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="group flex flex-col items-center gap-1 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
              >
                <Mail01Icon className="h-5 w-5" />
                <span className="text-xs font-medium tracking-wide">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right — empty spacer to balance the grid */}
      <div />
    </div>
  );
}
