import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-[#f4f2eb] text-stone-900 selection:bg-[#5C1616]/20 selection:text-[#5C1616] font-sans flex flex-col relative">
      {/* WCAG: Global Skip-link for screen readers & keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#5C1616] text-white px-4 py-2 rounded-sm font-medium text-sm z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C1616] focus:ring-offset-[#f4f2eb]"
      >
        Jump to main content
      </a>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/10  sm:hidden transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navigation Header */}
      <header className="w-full border-b border-stone-300 bg-[#5C1616] sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex items-center justify-between gap-4">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)} // Force close mobile menu if logo clicked
            className="text-4xl font-bold md:text-2xl font-serif tracking-widest text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded transition-transform active:scale-95"
            aria-label="Sara Al Portfolio Home"
          >
            Sara Al
          </Link>

          {/* Desktop Navigation Matrix */}
          <nav aria-label="Primary Navigation" className="hidden sm:block">
            <ul className="flex items-center gap-x-6 md:gap-x-8 text-sm uppercase tracking-[0.2em] font-semibold">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#5C1616] rounded px-1 py-0.5 ${
                        isActive
                          ? "text-yellow-500 font-semibold border-b-2 border-yellow-500"
                          : "text-white hover:text-yellow-300"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Accessible Mobile Menu Toggle Action Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded relative z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                /* Dynamic Icon Switch: Close "X" Mark */
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                /* Dynamic Icon Switch: Hamburger Stack Menu */
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Dynamic Mobile Dropdown Navigation Menu */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile Navigation Menu"
            className="sm:hidden border-t border-stone-400/30 bg-[#5C1616] px-4 pt-2 pb-6 relative z-50 shadow-md"
          >
            <ul className="flex flex-col gap-y-3 text-center text-sm uppercase tracking-[0.2em] font-semibold">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)} // Collapse menu drawer when link selected
                    className={({ isActive }) =>
                      `block py-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded ${
                        isActive
                          ? "text-yellow-500 font-bold"
                          : "text-white hover:text-yellow-300"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Dynamic Page Content Routing Frame */}
      <main id="main-content" className="grow relative z-10">
        {children}
      </main>

      {/* Global Application Footer */}
      <footer className="w-full border-t border-stone-300/60 py-8 text-center text-xs text-stone-500 uppercase tracking-widest bg-stone-200/30 mt-auto relative z-10">
        © {new Date().getFullYear()} Sara Al. All Rights Reserved.
      </footer>
    </div>
  );
}
