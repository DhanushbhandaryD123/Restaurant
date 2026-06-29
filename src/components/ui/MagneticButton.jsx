import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// Magnetic effect only on devices with a fine pointer (mouse). Disabled on touch.
export default function MagneticButton({
  children,
  variant = "solid",
  className = "",
  as = "button",
  ...rest
}) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    // Only apply magnetic pull on fine-pointer devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.3;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.3;
    setT({ x, y });
  };
  const reset = () => setT({ x: 0, y: 0 });

  const styles =
    variant === "solid"
      ? "bg-gold text-noir hover:shadow-[0_0_40px_-6px_rgba(201,164,92,0.7)] active:scale-[0.97]"
      : variant === "ghost"
      ? "border border-gold/40 text-gold-soft hover:border-gold hover:bg-gold/5 active:scale-[0.97]"
      : "text-cream/80 hover:text-gold";

  const M = useMemo(() => {
    if (typeof as === "string") return motion[as] || motion.button;
    return typeof motion.create === "function" ? motion.create(as) : motion(as);
  }, [as]);

  return (
    <M
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      animate={{ x: t.x, y: t.y }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm tracking-wide transition-shadow duration-300 xs:px-7 xs:py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${styles} ${className}`}
      {...rest}
    >
      {children}
    </M>
  );
}
