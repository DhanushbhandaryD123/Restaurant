import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../../components/ui/Reveal";
import MagneticButton from "../../components/ui/MagneticButton";
import ParticleField from "../../components/common/ParticleField";

export default function ReservationBanner() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-noir via-charcoal to-noir" />
      <ParticleField density={40} />
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[24rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[100px] xs:h-64 xs:w-[36rem] xs:blur-[110px] md:h-72 md:w-[40rem] md:blur-[120px]" />

      <div className="container-luxe relative text-center">
        <Reveal>
          <p className="eyebrow mb-4 xs:mb-5">The table is set</p>
        </Reveal>
        <Reveal i={1}>
          <h2
            className="mx-auto max-w-sm font-display leading-tight text-cream xs:max-w-xl md:max-w-3xl"
            style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
          >
            Spend an evening
            <span className="text-gold-shimmer"> on the coast</span>
          </h2>
        </Reveal>
        <Reveal i={2}>
          <p className="mx-auto mt-5 max-w-xs font-serif text-base text-cream/60 xs:mt-6 xs:max-w-sm sm:max-w-xl sm:text-lg">
            Tables open thirty days ahead and fill quickly on weekends. Reserve
            yours, or call us — we love a good occasion.
          </p>
        </Reveal>
        <Reveal i={3}>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-3 xs:mt-10 xs:gap-4">
            <MagneticButton as={Link} to="/reservation" variant="solid">
              Reserve a Table
            </MagneticButton>
            <MagneticButton as={Link} to="/contact" variant="ghost">
              Call the host
            </MagneticButton>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
