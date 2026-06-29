import { useState } from "react";
import { motion } from "framer-motion";

const tagStyle = {
  Chef: "bg-gold/15 text-gold-soft border-gold/30",
  "Best Seller": "bg-wine/30 text-cream border-wine/40",
  New: "bg-forest/40 text-cream border-forest/50",
  Spicy: "bg-copper/20 text-copper border-copper/40",
  Vegan: "bg-emerald-900/40 text-emerald-200/90 border-emerald-700/40",
  Jain: "bg-amber-900/30 text-amber-200/80 border-amber-700/40",
  Coastal: "bg-sky-900/30 text-sky-200/80 border-sky-700/40",
};

export default function DishCard({ dish, i = 0 }) {
  const [broken, setBroken] = useState(false);
  const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass"
    >
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden xs:aspect-[4/3]">
        {!broken ? (
          <img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            onError={() => setBroken(true)}
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink via-charcoal to-noir">
            <span className="font-display text-2xl text-gold/40">AURÉLIA</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/10 to-transparent" />

        {/* Tags */}
        <div className="absolute left-2.5 top-2.5 flex flex-wrap gap-1.5 xs:left-3 xs:top-3 xs:gap-2">
          {dish.tags.map((t) => (
            <span
              key={t}
              className={`rounded-full border px-2 py-0.5 text-[9px] font-medium tracking-wide backdrop-blur-sm xs:px-2.5 xs:text-[10px] ${
                tagStyle[t] || "bg-white/10 text-cream border-white/20"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Price chip */}
        <div className="glass-strong absolute bottom-2.5 right-2.5 rounded-full px-2.5 py-0.5 text-xs font-medium text-gold-soft xs:bottom-3 xs:right-3 xs:px-3 xs:py-1 xs:text-sm">
          {inr(dish.price)}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 xs:p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg text-cream xs:text-xl">{dish.name}</h3>
          <span className="shrink-0 font-body text-[11px] text-cream/40">
            {dish.calories} kcal
          </span>
        </div>
        <p className="mt-1.5 font-serif text-sm leading-relaxed text-cream/55 xs:mt-2 xs:text-[15px]">
          {dish.desc}
        </p>

        <div className="mt-3 flex items-center justify-between xs:mt-4">
          <p className="font-body text-xs text-cream/40">
            {dish.ingredients.slice(0, 3).join(" · ")}
          </p>
          {dish.spice > 0 && (
            <span className="text-xs text-copper" aria-label={`Spice level ${dish.spice}`}>
              {"🌶".repeat(dish.spice)}
            </span>
          )}
        </div>

        {dish.allergens.length > 0 && (
          <p className="mt-3 border-t border-gold/10 pt-2.5 font-body text-[10px] uppercase tracking-wider text-cream/35 xs:pt-3 xs:text-[11px]">
            Allergens · {dish.allergens.join(", ")}
          </p>
        )}
      </div>

      {/* Glow border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition group-hover:ring-gold/30" />
    </motion.article>
  );
}
