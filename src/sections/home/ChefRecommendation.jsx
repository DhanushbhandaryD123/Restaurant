import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../../components/ui/Reveal";
import MagneticButton from "../../components/ui/MagneticButton";

export default function ChefRecommendation() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-wine/15 blur-[100px] md:h-96 md:w-96 md:blur-[130px]" />
      <div className="container-luxe grid items-center gap-10 xs:gap-14 lg:grid-cols-2">

        {/* Image */}
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl xs:rounded-3xl">
              <motion.img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
                alt="Chef plating a signature course"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/3] w-full object-cover xs:aspect-[4/5]"
              />
            </div>
            {/* Chef nameplate — repositioned for mobile so it doesn't overlap badly */}
            <div className="glass-strong absolute -bottom-4 left-3 max-w-[13rem] rounded-2xl p-4 xs:-bottom-6 xs:left-4 xs:max-w-[14rem] xs:p-5 sm:left-6">
              <p className="font-display text-xl text-gold-soft xs:text-2xl">Arjun Rao</p>
              <p className="mt-1 font-body text-[11px] text-cream/55 xs:text-xs">
                Executive Chef · 18 years on the coast
              </p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div className="pt-6 xs:pt-4 lg:pt-0">
          <Reveal>
            <p className="eyebrow mb-4">From the Pass</p>
          </Reveal>
          <Reveal i={1}>
            <h2
              className="font-display leading-tight text-cream"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
            >
              "We don't cook the sea.
              <span className="text-gold-gradient"> We translate it."</span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-5 font-serif text-base leading-relaxed text-cream/60 xs:mt-6 xs:text-lg">
              Every morning begins at the Malpe fish landing before sunrise. What
              the boats bring decides the menu — not the other way around. The
              tasting flight changes with the tide, the season, and the chef's
              mood that night.
            </p>
          </Reveal>
          <Reveal i={3}>
            <div className="mt-7 grid grid-cols-2 gap-6 border-t border-gold/15 pt-7 xs:mt-8 xs:pt-8">
              <div>
                <p className="font-display text-3xl text-gold">07</p>
                <p className="mt-1 font-body text-xs text-cream/50">
                  Course tasting menu
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">Daily</p>
                <p className="mt-1 font-body text-xs text-cream/50">
                  Catch from Malpe harbour
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal i={4}>
            <div className="mt-8 xs:mt-9">
              <MagneticButton as={Link} to="/chefs" variant="solid">
                Meet the kitchen
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
