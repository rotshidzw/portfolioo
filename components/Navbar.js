import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

const Navbar = ({ sections = [], activeSection, onToggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = useMemo(
    () =>
      sections.map((section) => ({
        id: section.id,
        label: section.label,
      })),
    [sections]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-slate-50/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Rotshidzwa Mavhungu
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-300 ${
                activeSection === link.id
                  ? 'text-teal-600 dark:text-teal-300'
                  : 'text-slate-600 dark:text-slate-200/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:text-white/80 dark:hover:border-teal-400 dark:hover:text-teal-200"
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:text-white/80 dark:hover:border-teal-400 dark:hover:text-teal-200 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d={
                menuOpen
                  ? 'M6.293 4.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 8 6.293 5.707a1 1 0 010-1.414z'
                  : 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              }
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200/60 bg-slate-50/95 px-4 py-4 dark:border-white/10 dark:bg-slate-950/95 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-300 ${
                  activeSection === link.id
                    ? 'text-teal-600 dark:text-teal-300'
                    : 'text-slate-600 dark:text-slate-200/80'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                onToggleTheme();
                setMenuOpen(false);
              }}
              className="self-start rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-white/20 dark:text-white/80 dark:hover:border-teal-400 dark:hover:text-teal-200"
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
