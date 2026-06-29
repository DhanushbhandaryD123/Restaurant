import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import ParticleField from "../../components/common/ParticleField";
import MagneticButton from "../../components/ui/MagneticButton";

const line = {
  hidden: { opacity: 0, y: "110%" },
  show: (i) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 1, delay: 2.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Layered gradient lighting */}
      <div className="absolute inset-0 bg-noir" />
      <motion.div
        style={{ y }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[-10%] top-[10%] h-[22rem] w-[22rem] rounded-full bg-gold/10 blur-[120px] animate-glowpulse xs:h-[28rem] xs:w-[28rem] lg:h-[36rem] lg:w-[36rem] lg:blur-[140px]" />
        <div className="absolute right-[-5%] top-[30%] h-[18rem] w-[18rem] rounded-full bg-wine/20 blur-[100px] animate-glowpulse xs:h-[24rem] xs:w-[24rem] lg:h-[30rem] lg:w-[30rem] lg:blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[40%] h-[16rem] w-[16rem] rounded-full bg-copper/10 blur-[100px] lg:h-[28rem] lg:w-[28rem] lg:blur-[130px]" />
      </motion.div>

      {/* Particle signature */}
      <ParticleField density={70} />

      {/* Noise overlay */}
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.05]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container-luxe relative z-10 py-24 text-center xs:py-28 md:py-32"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="eyebrow mb-5 xs:mb-7"
        >
          Malpe Beach · Udupi — Est. 2011
        </motion.p>

        {/* Fluid typography: clamp from 2.8rem (tiny phones) to 9rem (4K) */}
        <h1
          className="font-display leading-[0.9] text-cream"
          style={{ fontSize: "clamp(2.8rem, 12vw, 9rem)" }}
        >
          <span className="block overflow-hidden">
            <motion.span
              custom={0}
              variants={line}
              initial="hidden"
              animate="show"
              className="block"
            >
              A table by
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              custom={1}
              variants={line}
              initial="hidden"
              animate="show"
              className="block text-gold-shimmer italic"
            >
              the lighthouse
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 1 }}
          className="mx-auto mt-6 max-w-sm font-serif text-base leading-relaxed text-cream/65 xs:max-w-md xs:mt-8 sm:text-lg sm:max-w-xl"
        >
          Coastal ingredients, classical fire, and a room that hums with
          candlelight. Dinner here is an evening, not a meal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 xs:mt-11 xs:gap-4"
        >
          <MagneticButton as={Link} to="/reservation" variant="solid">
            Reserve a Table <FiArrowRight />
          </MagneticButton>
          <MagneticButton as={Link} to="/menu" variant="ghost">
            View the Menu
          </MagneticButton>
          <MagneticButton variant="text" className="hidden xs:inline-flex">
            <FiPlay className="text-gold" /> Watch our story
          </MagneticButton>
        </motion.div>

        {/* Rating row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-2 font-body text-xs text-cream/50 xs:mt-14 xs:flex-row xs:flex-wrap xs:justify-center xs:gap-x-6 xs:gap-y-2"
        >
          <span className="text-gold">★★★★★ 4.9 · 2,300+ reviews</span>
          <span className="hidden h-px w-8 bg-cream/20 xs:block xs:h-3 xs:w-px" />
          <span>Featured · Karnataka Gourmet Guild</span>
          <span className="hidden h-3 w-px bg-cream/20 sm:block" />
          <span className="hidden sm:block">Sommelier's Choice 2022</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 xs:bottom-8"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[10px] uppercase tracking-luxe text-cream/40">
            Scroll
          </span>
          <div className="h-10 w-px overflow-hidden bg-cream/15">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-b from-transparent via-gold to-transparent"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
