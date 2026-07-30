const quotes = [
  {
    name: "Farida, runs a 2-chair salon in Khar",
    rotate: "-rotate-1",
    body:
      "I tried a punch-card app before this that wanted my customers to make an account first. Nobody did it. This one they just scan and it's done, so I actually use it now.",
  },
  {
    name: "Rohan, regular at a car wash in Powai",
    rotate: "rotate-1",
    body:
      "Not gonna lie, I forgot I even had a card going until it told me I was one wash from free. Wasn't expecting that but I'm not complaining.",
  },
  {
    name: "Suresh, gym owner, Chembur",
    rotate: "-rotate-1",
    body:
      "The dashboard is the part I actually check. Told me half my 'regulars' hadn't shown up in three weeks — I wouldn't have noticed otherwise.",
  },
];

export function Testimonials() {
  return (
    <section className="page-section py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <span className="mb-2.5 block font-mono text-[22px] xs:text-[28px] sm:text-[36px] md:text-[40px] font-bold uppercase tracking-widest text-ink-red leading-tight">
          from the pilot shops
        </span>
        <h2 className="mb-8 sm:mb-11 max-w-[520px] font-display text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-charcoal">
          Unedited, mostly.
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {quotes.map((q) => (
            <div
              key={q.name}
              className={`rotate-0 md:${q.rotate} rounded-2xl md:rounded-lg border border-line bg-card p-6 sm:p-7 shadow-md md:shadow-panel transition-all`}
            >
              <p className="mb-4 text-[14.5px] sm:text-[15px] leading-relaxed text-[#3d3733] font-sans">
                “{q.body}”
              </p>
              <span className="font-hand text-[15px] sm:text-[16px] text-brass block">— {q.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
