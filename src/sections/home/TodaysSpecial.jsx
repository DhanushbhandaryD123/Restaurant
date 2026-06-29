import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../../components/ui/Reveal";
import MagneticButton from "../../components/ui/MagneticButton";

export default function TodaysSpecial() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-2xl glass xs:rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
            alt="Tonight's special course"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/80 via-noir/70 to-noir/60 xs:bg-gradient-to-r xs:from-noir xs:via-noir/80 xs:to-noir/30" />

          <div className="relative grid gap-8 p-6 xs:p-10 md:grid-cols-2 md:p-16">
            {/* Left — content */}
            <div>
              <Reveal>
                <p className="eyebrow mb-3 xs:mb-4">Tonight only · 7 PM onward</p>
              </Reveal>
              <Reveal i={1}>
                <h2
                  className="font-display leading-tight text-cream"
                  style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
                >
                  The Lighthouse Tasting
                </h2>
              </Reveal>
              <Reveal i={2}>
                <p className="mt-4 max-w-sm font-serif text-base text-cream/65 xs:mt-5 xs:text-lg">
                  Seven coastal courses paced over two hours, each poured with a
                  matched wine from our cellar. Limited to twelve covers a night.
                </p>
              </Reveal>
              <Reveal i={3}>
                <div className="mt-6 flex flex-wrap items-baseline gap-3 xs:mt-8 xs:gap-4">
                  <span className="font-display text-3xl text-gold xs:text-4xl">₹4,800</span>
                  <span className="font-body text-sm text-cream/40 line-through">
                    ₹6,200
                  </span>
                  <span className="rounded-full bg-wine/40 px-3 py-1 text-xs text-cream">
                    Seasonal
                  </span>
                </div>
              </Reveal>
              <Reveal i={4}>
                <div className="mt-7 xs:mt-9">
                  <MagneticButton as={Link} to="/reservation" variant="solid">
                    Hold my seat
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            {/* Right — covers remaining accent */}
            <div className="flex items-end justify-start md:justify-end">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass-strong rounded-2xl p-5 text-left xs:p-6 xs:text-right"
              >
                <p className="font-body text-xs uppercase tracking-widest text-cream/50">
                  Covers remaining
                </p>
                <p className="font-display text-5xl text-gold-shimmer xs:text-6xl">04</p>
                <p className="font-body text-xs text-cream/40">of 12 tonight</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
