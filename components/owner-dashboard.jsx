export function OwnerDashboard() {
  return (
    <section className="page-section py-20 bg-[#FBF7EE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[45%_55%]">
          {/* Left Content Side */}
          <div>
            <span className="mb-3 block whitespace-nowrap font-mono text-[16px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-extrabold uppercase tracking-wider text-[#B54A28] leading-tight">
              FOR INDEPENDENT BUSINESSES
            </span>
            <h2 className="mb-5 font-display text-[30px] sm:text-[42px] lg:text-[48px] font-black leading-[1.08] text-[#1E3350] tracking-tight">
              Built for the people behind <span className="text-[#B54A28]">every counter.</span>
            </h2>
            <p className="mb-8 text-[15px] sm:text-[16px] leading-relaxed text-[#57514A]">
              Launch your loyalty program in minutes. Print a QR, set your rewards, and let Stampogen track repeat customers and redemptions for you.
            </p>

            {/* Feature List (No cards, no borders, matching screenshot) */}
            <div className="mb-10 space-y-7">
              {/* Print once */}
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 flex items-center justify-center pt-0.5">
                  <svg className="h-12 w-12 sm:h-14 sm:w-14" viewBox="0 0 48 48" fill="none">
                    <rect x="2" y="2" width="14" height="14" rx="2" fill="black" />
                    <rect x="5" y="5" width="8" height="8" fill="white" />
                    <rect x="7" y="7" width="4" height="4" fill="black" />

                    <rect x="32" y="2" width="14" height="14" rx="2" fill="black" />
                    <rect x="35" y="5" width="8" height="8" fill="white" />
                    <rect x="37" y="7" width="4" height="4" fill="black" />

                    <rect x="2" y="32" width="14" height="14" rx="2" fill="black" />
                    <rect x="5" y="35" width="8" height="8" fill="white" />
                    <rect x="7" y="37" width="4" height="4" fill="black" />

                    <rect x="20" y="4" width="4" height="4" fill="black" />
                    <rect x="26" y="4" width="4" height="4" fill="black" />
                    <rect x="20" y="10" width="4" height="4" fill="black" />
                    <rect x="26" y="10" width="4" height="4" fill="black" />
                    <rect x="4" y="20" width="4" height="4" fill="black" />
                    <rect x="10" y="20" width="4" height="4" fill="black" />
                    <rect x="4" y="26" width="4" height="4" fill="black" />
                    <rect x="16" y="20" width="4" height="4" fill="black" />
                    <rect x="22" y="20" width="4" height="4" fill="black" />
                    <rect x="28" y="20" width="4" height="4" fill="black" />
                    <rect x="36" y="20" width="4" height="4" fill="black" />
                    <rect x="42" y="20" width="4" height="4" fill="black" />
                    <rect x="20" y="26" width="4" height="4" fill="black" />
                    <rect x="32" y="26" width="4" height="4" fill="black" />
                    <rect x="40" y="26" width="4" height="4" fill="black" />
                    <rect x="20" y="32" width="4" height="4" fill="black" />
                    <rect x="26" y="36" width="4" height="4" fill="black" />
                    <rect x="20" y="42" width="4" height="4" fill="black" />
                    <rect x="34" y="34" width="4" height="4" fill="black" />
                    <rect x="40" y="34" width="4" height="4" fill="black" />
                    <rect x="34" y="40" width="4" height="4" fill="black" />
                    <rect x="40" y="42" width="4" height="4" fill="black" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-black">Print once</h3>
                  <p className="mt-1 text-base sm:text-lg leading-relaxed text-[#333]">
                    Generate a unique QR for each counter and start rewarding instantly.
                  </p>
                </div>
              </div>

              {/* Flexible rewards */}
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 flex items-center justify-center pt-0.5">
                  <svg className="h-12 w-12 sm:h-14 sm:w-14 overflow-visible" viewBox="0 0 50 60" fill="none">
                    <path d="M15 30 L15 54 L22 47 L29 54 L29 30 Z" fill="#DC2626" />
                    <path d="M23 30 L23 54 L30 47 L37 54 L37 30 Z" fill="#B91C1C" />

                    <circle cx="25" cy="22" r="19" fill="#B45309" />
                    <circle cx="25" cy="22" r="17" fill="url(#bronze-grad)" />
                    <circle cx="25" cy="22" r="13" fill="url(#inner-seal)" />
                    <circle cx="25" cy="22" r="10" fill="#78350F" opacity="0.4" />
                    
                    <defs>
                      <radialGradient id="bronze-grad" cx="40%" cy="35%" r="60%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="50%" stopColor="#B45309" />
                        <stop offset="100%" stopColor="#78350F" />
                      </radialGradient>
                      <linearGradient id="inner-seal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#92400E" />
                        <stop offset="100%" stopColor="#451A03" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-black">Flexible rewards</h3>
                  <p className="mt-1 text-base sm:text-lg leading-relaxed text-[#333]">
                    Offer free items, discounts, or custom rewards based on visits or spending
                  </p>
                </div>
              </div>

              {/* Actionable insights */}
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 flex items-center justify-center pt-0.5">
                  <svg className="h-11 w-12 sm:h-12 sm:w-14" viewBox="0 0 54 48" fill="none">
                    <line x1="2" y1="44" x2="52" y2="44" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
                    <line x1="2" y1="28" x2="52" y2="28" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="2 2" />
                    
                    <rect x="4" y="20" width="9" height="24" rx="1.5" fill="#3B82F6" />
                    <rect x="16" y="26" width="9" height="18" rx="1.5" fill="#A855F7" />
                    <rect x="28" y="10" width="9" height="34" rx="1.5" fill="#F97316" />
                    <rect x="40" y="32" width="9" height="12" rx="1.5" fill="#FACC15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-black">Actionable insights</h3>
                  <p className="mt-1 text-base sm:text-lg leading-relaxed text-[#333]">
                    Track returning customers, reward usage, and campaign performance in real-time.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button & Badges */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://app.stampogen.in/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#B54A28] px-6 py-3.5 font-display text-[14px] font-bold text-white transition-all hover:bg-[#9E3E20] shadow-md"
              >
                Start Now →
              </a>
              <div className="flex items-center gap-4 text-[13px] font-medium text-[#57514A]">
                <span className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> No app download</span>
                <span className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> No customer signup</span>
              </div>
            </div>
            
          </div>

          {/* Right Side - Loyalty Card Image */}
          <div className="flex justify-center items-center">
            <img
              src="/loyalty card.png"
              alt="Stampogen Loyalty Card"
              className="h-auto w-full rounded-3xl object-cover shadow-2xl transition-all duration-300 hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
