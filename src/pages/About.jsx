import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { awards } from "../data/testimonials";

const timeline = [
  { year: "2011", title: "A small room by the water", body: "AURÉLIA opens with sixteen covers and a single tasting menu." },
  { year: "2015", title: "The cellar arrives", body: "We build out a 400-label cellar and bring on our first sommelier." },
  { year: "2019", title: "Excellence in Plating", body: "Recognised by The Coastal Plate for our seafood presentation." },
  { year: "2022", title: "Sommelier's Choice", body: "Wine & Dine India names our pairing flight among the year's best." },
  { year: "2024", title: "Coastal Restaurant of the Year", body: "South India Hospitality Awards — the room we always dreamed of." },
];

const values = [
  { title: "Seasonality", body: "The tide writes the menu. We follow it." },
  { title: "Restraint", body: "Three perfect elements over twelve competing ones." },
  { title: "Hospitality", body: "We remember your name, your table, your celebration." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A house on the coast"
        sub="Fourteen years of cooking the sea we grew up beside."
      />

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container-luxe grid items-center gap-10 xs:gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl xs:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                alt="The AURÉLIA dining room at dusk"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow mb-3 xs:mb-4">Mission</p>
            </Reveal>
            <Reveal i={1}>
              <h2
                className="font-display leading-tight text-cream"
                style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
              >
                To make an evening worth remembering
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-5 font-serif text-base leading-relaxed text-cream/60 xs:mt-6 xs:text-lg">
                We started with a borrowed stove and a conviction that the Konkan
                coast deserved a dining room as serious as its produce. We've
                grown, but the conviction hasn't moved: source honestly, cook with
                restraint, and treat every guest like the most important person in
                the room — because for that evening, they are.
              </p>
            </Reveal>
            <Reveal i={3}>
              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-gold/15 pt-7 xs:mt-8 xs:gap-4 xs:pt-8">
                <div>
                  <p className="font-display text-2xl text-gold xs:text-3xl">2011</p>
                  <p className="mt-1 font-body text-xs text-cream/50">Founded</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-gold xs:text-3xl">38</p>
                  <p className="mt-1 font-body text-xs text-cream/50">Dishes</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-gold xs:text-3xl">9</p>
                  <p className="mt-1 font-body text-xs text-cream/50">Awards</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="container-luxe">
          <SectionHeading eyebrow="Our Journey" title="A timeline by the tide" />
          <div className="relative mx-auto mt-12 max-w-2xl pl-8 xs:mt-16 xs:pl-10">
            {/* Vertical line */}
            <div className="absolute left-[4px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent xs:left-[5px]" />
            {timeline.map((item, i) => (
              <Reveal key={item.year} i={i}>
                <div className="relative mb-6 xs:mb-8">
                  {/* Timeline dot */}
                  <span className="absolute -left-[33px] top-[18px] h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-gold/15 xs:-left-[37px] xs:top-[22px] xs:h-3 xs:w-3" />
                  <div className="glass rounded-xl p-4 xs:rounded-2xl xs:p-6">
                    <p className="font-display text-xl text-gold-soft xs:text-2xl">{item.year}</p>
                    <h3 className="mt-1 font-display text-base text-cream xs:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-serif text-sm text-cream/55 xs:mt-2 xs:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <SectionHeading eyebrow="What we stand on" title="Three values" />
          <div className="mt-10 grid gap-5 xs:mt-14 xs:gap-6 sm:grid-cols-2 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} i={i}>
                <div className="h-full rounded-2xl glass p-6 xs:p-8">
                  <p className="font-display text-4xl text-gold/30 xs:text-5xl">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-xl text-cream xs:mt-4 xs:text-2xl">{v.title}</h3>
                  <p className="mt-2 font-serif text-sm text-cream/55 xs:text-base">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="container-luxe">
          <SectionHeading eyebrow="Recognition" title="On the shelf" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-gold/15 xs:mt-14 sm:grid-cols-2">
            {awards.map((a, i) => (
              <Reveal key={a.title} i={i}>
                <div className="flex items-start gap-4 bg-noir/40 p-5 xs:gap-5 xs:p-7">
                  <span className="font-display text-2xl text-gold xs:text-3xl">{a.year}</span>
                  <div>
                    <h3 className="font-display text-lg text-cream xs:text-xl">{a.title}</h3>
                    <p className="mt-1 font-body text-sm text-cream/50">{a.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
