import Reveal from "../../components/ui/Reveal";
import Counter from "../../components/ui/Counter";
import { stats } from "../../data/testimonials";

export default function Stats() {
  return (
    <section className="relative border-y border-gold/10 bg-charcoal py-14 md:py-20">
      <div className="container-luxe grid grid-cols-2 gap-y-10 xs:gap-y-12 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} i={i} className="text-center">
            <p className="font-display text-gold-gradient" style={{ fontSize: "clamp(2.2rem, 6vw, 3.5rem)" }}>
              <Counter to={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
            </p>
            <p className="mt-2 font-body text-[10px] uppercase tracking-widest text-cream/50 xs:mt-3 xs:text-xs">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
