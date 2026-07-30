"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "https://app.stampogen.in/pricing", label: "Pricing" },
  { href: "/affiliate", label: "Affiliate Program" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAffiliate = pathname?.startsWith("/affiliate");

  const buttonText = isAffiliate ? "Login as affiliate →" : "Login as shop owner →";
  const buttonHref = isAffiliate ? "https://app.stampogen.in/affiliate/login" : "https://app.stampogen.in/";

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="relative flex h-[67px] items-center justify-between px-4 sm:px-6 md:pl-4 md:pr-5 lg:pr-16 xl:pr-24">
        {/* Logo - Relative flex container on mobile, absolute decoupled position on desktop (md+) */}
        <div className="flex items-center z-10 md:absolute md:left-2 lg:left-4 md:top-1/2 md:-translate-y-1/2">
          <a href="/">
            <img
              src="/logo.png"
              alt="Stampogen logo"
              className="h-9 sm:h-11 md:h-13 w-auto object-contain mix-blend-multiply"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-8 text-[15px] md:flex">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`py-1 transition-all ${
                  active
                    ? "text-ink-red font-black border-b-2 border-ink-red"
                    : "text-charcoal/80 font-medium border-b-2 border-transparent hover:text-ink-red hover:border-ink-red/50"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Right side Actions */}
        <div className="flex items-center gap-2 sm:gap-3 md:ml-auto">
          {/* Shown on desktop (md+) in header */}
          <a href={buttonHref} className="hidden md:inline-block">
            <Button variant="navy" size="sm" className="font-mono text-sm tracking-wide px-4 py-1.5 h-9">
              {buttonText}
            </Button>
          </a>

          {/* Hamburger toggle button for mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-charcoal hover:bg-card md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="border-b border-line bg-paper px-6 py-5 md:hidden shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2 font-medium text-charcoal text-base">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    active
                      ? "bg-ink-red/10 text-ink-red font-black border-l-4 border-ink-red"
                      : "text-charcoal hover:text-ink-red hover:bg-card border-b border-line/30"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}

            {/* Login button inside Mobile Menu */}
            <div className="pt-2">
              <a href={buttonHref} onClick={() => setMobileMenuOpen(false)}>
                <Button variant="navy" className="w-full font-mono text-sm tracking-wide py-3">
                  {buttonText}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
