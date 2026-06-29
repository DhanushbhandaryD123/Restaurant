import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticleField from "../components/common/ParticleField";
import MagneticButton from "../components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-noir to-noir" />
      <ParticleField density={50} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px] xs:h-80 xs:w-80 md:h-96 md:w-96 md:blur-[130px]" />

      <div className="container-luxe relative text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="font-display leading-none text-gold-shimmer"
          style={{ fontSize: "clamp(6rem, 28vw, 18rem)" }}
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto -mt-2 max-w-xs font-serif text-base text-cream/65 xs:-mt-4 xs:max-w-sm xs:text-lg md:max-w-md md:text-xl"
        >
          This table isn't on tonight's plan. Let's get you back to the dining room.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-7 xs:mt-9"
        >
          <MagneticButton as={Link} to="/" variant="solid">
            Back home
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
