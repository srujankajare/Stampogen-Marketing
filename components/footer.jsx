import { Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0B1528] pt-14 pb-8 px-6 sm:px-10 lg:px-16 text-slate-300 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Top Prominent Centered Logo Banner matching reference image */}
        <div className="text-center pb-8 border-b border-slate-800/80">
          <a href="/" className="inline-block transition-transform hover:scale-[1.02] w-full">
            <img
              src="/logo.png"
              alt="Stampogen Logo"
              className="h-20 sm:h-28 md:h-36 lg:h-44 xl:h-52 max-h-[220px] w-auto object-contain brightness-0 invert mx-auto"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-14 pb-6">
          {/* Left Column: Description & Social Icons */}
          <div className="space-y-4">
            <p className="font-sans text-sm leading-relaxed text-slate-400">
              The simplest digital loyalty software for Indian local businesses. Scan, collect loyalty points, and repeat — all in one place.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/stampogen.in?igsh=OTYxbnpkeWMyc2Nv"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@stampogen"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-3 font-sans">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-200">
              PRODUCT
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="https://app.stampogen.in/pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/affiliate" className="hover:text-white transition-colors">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3 font-sans">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-200">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3 font-sans">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-200">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="/affiliate/terms" className="hover:text-white transition-colors">
                  Affiliate Terms
                </a>
              </li>
              <li>
                <a href="/affiliate/privacy" className="hover:text-white transition-colors">
                  Affiliate Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <span>© {new Date().getFullYear()} <strong className="font-semibold text-slate-400">Business Growth Services</strong>. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
