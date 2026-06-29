import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeading from "../../components/ui/SectionHeading";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const go = (dir) =>
    setIdx((p) => (p + dir + testimonials.length) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px] xs:h-[30rem] xs:w-[30rem] xs:blur-[120px]" />
      <div className="container-luxe">
        <SectionHeading eyebrow="Guest Book" title="What the room remembers" />

        <div className="relative mx-auto mt-12 max-w-2xl text-center xs:mt-16">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-gold" aria-label={`${t.rating} stars`}>{"★".repeat(t.rating)}</p>
              <p
                className="mt-5 font-serif italic leading-relaxed text-cream/85 xs:mt-6"
                style={{ fontSize: "clamp(1.1rem, 3.5vw, 1.75rem)" }}
              >
                "{t.quote}"
              </p>
              <footer className="mt-6 xs:mt-8">
                <p className="font-display text-lg text-gold-soft xs:text-xl">{t.name}</p>
                <p className="mt-1 font-body text-xs uppercase tracking-widest text-cream/45">
                  {t.role}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4 xs:mt-12">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="tap-target rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-noir"
            >
              <FiChevronLeft />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-8 bg-gold" : "w-1.5 bg-cream/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="tap-target rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-noir"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
