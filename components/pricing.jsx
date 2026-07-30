import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    period: "/month",
    desc: "For one shop testing the idea.",
    features: [
      "1 counter QR code",
      "1 reward rule",
      "Up to 150 stamps / month",
      "Basic weekly summary",
    ],
    cta: "Start free",
    variant: "ghost",
  },
  {
    name: "Growth",
    price: "₹499",
    period: "/month",
    desc: "For a shop that's ready to rely on it.",
    features: [
      "Unlimited stamps",
      "Up to 5 reward rules",
      "Returning-customer analytics",
      "SMS nudge near a full card",
    ],
    cta: "Get early access",
    variant: "primary",
    featured: true,
  },
  {
    name: "Multi-location",
    price: "Custom",
    period: "",
    desc: "For chains — one dashboard, every branch.",
    features: [
      "Everything in Growth",
      "Per-branch QR & reporting",
      "Shared wallet across branches",
      "Priority support",
    ],
    cta: "Talk to us",
    variant: "ghost",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="page-section py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-11 max-w-[560px]">
          <span className="mb-2.5 block font-mono text-[14px] sm:text-[18px] lg:text-[22px] font-bold uppercase tracking-widest text-ink-red">
            pricing
          </span>
          <h2 className="mb-3 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-charcoal">
            Free to try. Cheap to keep.
          </h2>
          <p className="text-sm sm:text-[16px] leading-relaxed text-[#4a443f]">
            No setup fee, no long contract. Pay more only once more than one
            counter needs a QR.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl md:rounded-lg border bg-card p-6 sm:p-7 shadow-sm md:shadow-none ${
                p.featured ? "border-2 border-ink-navy shadow-md" : "border-line"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-6 rounded-sm bg-ink-navy px-3 py-1 font-mono text-[11px] font-bold tracking-widest uppercase text-paper shadow-sm">
                  MOST STAMPED
                </span>
              )}
              <h4 className="mb-1.5 font-display text-lg sm:text-xl font-extrabold">{p.name}</h4>
              <div className="mb-1 font-display text-[28px] sm:text-[32px] font-black">
                {p.price}
                <span className="font-mono text-[13px] font-normal text-[#78716a]"> {p.period}</span>
              </div>
              <p className="mb-4 text-xs sm:text-sm text-[#57514a]">{p.desc}</p>
              <ul className="mb-6 flex-1 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="text-xs sm:text-sm text-[#3d3733] before:mr-1.5 before:text-brass before:content-['—']">
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#join">
                <Button variant={p.variant} className="w-full justify-center text-sm font-bold py-3">
                  {p.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
