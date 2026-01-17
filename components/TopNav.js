import Link from 'next/link';
import { useState } from 'react';

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-white md:px-6">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Rotshidzwa Mavhungu
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
          aria-label="Toggle navigation menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
        <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-emerald-300 transition-colors">
            Home
          </Link>
          <Link href="/#Expriance" className="hover:text-emerald-300 transition-colors">
            Experience
          </Link>
          <Link href="/#Work" className="hover:text-emerald-300 transition-colors">
            Projects
          </Link>
          <Link href="/lab" className="hover:text-emerald-300 transition-colors">
            Dev Lab
          </Link>
          <Link href="/contact" className="hover:text-emerald-300 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
      {menuOpen ? (
        <div className="md:hidden border-t border-white/10 bg-black/95 px-4 py-4 text-white">
          <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.2em]">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-emerald-300 transition-colors">
              Home
            </Link>
            <Link
              href="/#Expriance"
              onClick={() => setMenuOpen(false)}
              className="hover:text-emerald-300 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/#Work"
              onClick={() => setMenuOpen(false)}
              className="hover:text-emerald-300 transition-colors"
            >
              Projects
            </Link>
            <Link href="/lab" onClick={() => setMenuOpen(false)} className="hover:text-emerald-300 transition-colors">
              Dev Lab
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-emerald-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default TopNav;
