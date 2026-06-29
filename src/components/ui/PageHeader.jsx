import { motion } from "framer-motion";
import ParticleField from "../common/ParticleField";

export default function PageHeader({ eyebrow, title, sub }) {
  return (
    <header className="relative flex min-h-[48vh] items-center overflow-hidden pt-20 xs:min-h-[52vh] xs:pt-24 md:min-h-[58vh] lg:min-h-[62vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-noir to-noir" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-48 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-[100px] xs:h-64 xs:w-[28rem] md:h-72 md:w-[36rem] md:blur-[130px]" />
      <ParticleField density={45} />

      <div className="container-luxe relative text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow mb-4 xs:mb-5"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-cream"
          style={{ fontSize: "clamp(2.2rem, 8vw, 5rem)" }}
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xs font-serif text-base text-cream/60 xs:mt-6 xs:max-w-sm sm:max-w-xl sm:text-lg"
          >
            {sub}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent xs:mt-8 xs:w-24"
        />
      </div>
    </header>
  );
}
