import { motion } from "framer-motion";
import { fadeUp } from "../../constants/motion";

// Scroll-triggered reveal wrapper used across every section.
export default function Reveal({ children, i = 0, className = "", as = "div" }) {
  const M = motion[as] || motion.div;
  return (
    <M
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </M>
  );
}
