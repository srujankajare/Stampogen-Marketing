export function FounderNote() {
  return (
    <section id="story" className="page-section py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl sm:rounded-3xl border border-line bg-card p-5 sm:p-8 md:p-12 shadow-sm sm:shadow-panel relative overflow-hidden">
        {/* Top Right Vintage "OUR STORY" Circular Seal Logo */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 shrink-0 pointer-events-none select-none z-10">
          <img
            src="/our-story-seal.png"
            alt="Our Story Vintage Stamp Seal"
            className="w-full h-full object-contain drop-shadow-sm"
          />
        </div>

        <div className="pr-16 sm:pr-24 md:pr-36">
          <span className="mb-2 sm:mb-3 block font-mono text-sm sm:text-lg lg:text-xl font-extrabold uppercase tracking-widest text-ink-red">
            THE ORIGIN STORY
          </span>
          <h2 className="mb-3 sm:mb-4 font-display text-xl sm:text-3xl font-extrabold text-charcoal leading-tight">
            Born in a Hostel Room, Built for Indian Hustle
          </h2>
        </div>

        <div className="mt-2">
          <p className="mb-5 sm:mb-6 w-full font-hand text-base sm:text-2xl lg:text-3xl leading-relaxed text-charcoal">
            Every idea has an origin story. It all started in our engineering college days in a hostel room — with tight pockets, endless chai, and dreams bigger than our budgets.
          </p>
          <p className="w-full text-xs sm:text-base lg:text-lg leading-relaxed text-[#4a443f]">
            We saw the small shops around us using paper loyalty cards that customers would usually lose or forget. That small everyday pain point sparked something for us. Why not make this simple and digital? We started talking to chaiwala uncles, café owners, stationery shops, trying to understand what actually worked on the ground.
            <br /><br />
            The first version was literally manual cards and stamps, but we kept seeing the same hurdles. Cards getting lost or getting spoiled in rain, quite common here, right? So, with that jugaad mindset, we built a simple digital flow that any small shop could use without expensive hardware.
            <br /><br />
            That&apos;s how Stampogen was born. Not in a fancy boardroom, but through real chats with real shopkeepers. Built for Indian hustle, tested in the chaos we live in, and designed to make loyalty effortless.
          </p>
        </div>
      </div>
    </section>
  );
}
