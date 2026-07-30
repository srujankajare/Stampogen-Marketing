import { Smartphone, Store } from "lucide-react";

const customerPoints = [
  {
    title: "No download, no signup wall",
    body: "A scan opens a web card. If they want it saved, they add a phone number — that's the whole 'install.'",
  },
  {
    title: "Progress feels physical",
    body: "Every scan lands an ink-stamp animation — the same small satisfaction as a paper card, minus the paper.",
  },
  {
    title: "Nothing gets lost",
    body: "The card lives against a phone number, not a wallet. Skip three weeks, come back, it's still 5 of 8.",
  },
  {
    title: "Discovery, not just retention",
    body: "One card can hold stamps from every nearby shop on Stampogen — a reason to try the next one over.",
  },
];

const ownerPoints = [
  {
    title: "Setup is one printed QR",
    body: "No POS integration, no hardware, no staff training beyond 'ask them to scan on the way out.'",
  },
  {
    title: "Rewards you control",
    body: "Set the stamp count and the reward per rule — a cost you decide, not a blanket discount you regret.",
  },
  {
    title: "Repeat-visit data, finally",
    body: "See who's close to a reward, who's gone quiet, and whether the offer is actually bringing anyone back.",
  },
  {
    title: "Cheaper than the alternative",
    body: "A stamp costs nothing until it's redeemed. Compare that to an ad that runs whether anyone returns or not.",
  },
];

export function TwoSides() {
  return (
    <section id="customer" className="page-section py-20">
      <div className="mx-auto w-full">
        <div className="mb-11 max-w-[640px]">
          <span className="mb-2.5 block font-mono text-[12.5px] uppercase tracking-widest text-ink-red">
            the idea, both sides of the counter
          </span>
          <h2 className="mb-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            One QR code. Two very different problems solved.
          </h2>
          <p className="text-[16.5px] leading-relaxed text-[#4a443f]">
            A stamp card only works if it's effortless for whoever's paying,
            and worth setting up for whoever's selling. We built Stampogen
            sitting on both sides of that counter.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-line md:grid-cols-2">
          <div className="border-b border-line bg-card p-8 md:border-b-0 md:border-r">
            <span className="mb-4 inline-flex -rotate-1 items-center gap-1.5 rounded-sm border border-ink-navy px-2.5 py-1 font-hand text-[15px] text-ink-navy">
              <Smartphone className="h-3.5 w-3.5" /> the customer
            </span>
            <h3 className="mb-3.5 font-display text-2xl font-extrabold">
              Why they'll actually use it
            </h3>
            <ul>
              {customerPoints.map((p, i) => (
                <li
                  key={p.title}
                  className={`py-2.5 text-[15px] leading-relaxed text-[#3d3733] ${
                    i !== 0 ? "border-t border-dashed border-line" : ""
                  }`}
                >
                  <strong className="mb-0.5 block font-semibold text-charcoal">
                    {p.title}
                  </strong>
                  {p.body}
                </li>
              ))}
            </ul>
          </div>

          <div id="owner" className="bg-card p-8">
            <span className="mb-4 inline-flex -rotate-1 items-center gap-1.5 rounded-sm border border-ink-red px-2.5 py-1 font-hand text-[15px] text-ink-red">
              <Store className="h-3.5 w-3.5" /> the business owner
            </span>
            <h3 className="mb-3.5 font-display text-2xl font-extrabold">
              Why they'll actually pay for it
            </h3>
            <ul>
              {ownerPoints.map((p, i) => (
                <li
                  key={p.title}
                  className={`py-2.5 text-[15px] leading-relaxed text-[#3d3733] ${
                    i !== 0 ? "border-t border-dashed border-line" : ""
                  }`}
                >
                  <strong className="mb-0.5 block font-semibold text-charcoal">
                    {p.title}
                  </strong>
                  {p.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
