import Reveal from "../../components/ui/Reveal";
import SectionHeading from "../../components/ui/SectionHeading";
import { FiAnchor, FiFeather, FiSun } from "react-icons/fi";

const pillars = [
  {
    icon: FiAnchor,
    title: "From the harbour",
    body: "We buy at the Malpe landing each dawn. If it wasn't swimming yesterday, it isn't on tonight's menu.",
  },
  {
    icon: FiFeather,
    title: "Classical fire",
    body: "Open flame, cast iron, and patience. French technique in service of the Konkan coast.",
  },
  {
    icon: FiSun,
    title: "An unhurried room",
    body: "Candlelight, low brass, and the sound of the sea. We pace the evening so you never feel rushed.",
  },
];

export default function Experience() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The Experience"
          title="Three things we refuse to compromise"
        />
        <div className="mt-10 grid gap-5 xs:mt-14 xs:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} i={i}>
              <div className="group h-full rounded-2xl glass p-6 transition-transform duration-500 hover:-translate-y-2 xs:p-8">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 text-xl text-gold transition-colors group-hover:bg-gold group-hover:text-noir xs:h-14 xs:w-14 xs:text-2xl">
                  <p.icon />
                </div>
                <h3 className="mt-5 font-display text-xl text-cream xs:mt-6 xs:text-2xl">{p.title}</h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-cream/55 xs:text-[15px] xs:mt-3">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
