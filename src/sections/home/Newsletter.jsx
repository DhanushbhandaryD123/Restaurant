import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!email.includes("@")) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section className="relative py-16 md:py-24">
      <div className="container-luxe">
        <div className="glass relative overflow-hidden rounded-2xl px-6 py-12 text-center xs:rounded-3xl xs:px-8 xs:py-14 md:px-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-[80px] xs:-right-20 xs:-top-20 xs:h-64 xs:w-64 xs:blur-[100px]" />
          <p className="eyebrow mb-3 xs:mb-4">The Letter</p>
          <h2
            className="mx-auto max-w-xs font-display text-cream xs:max-w-md xs:text-4xl sm:max-w-xl"
            style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.25rem)" }}
          >
            Seasonal menus, private dinners, and the occasional secret pop-up
          </h2>

          <div className="mx-auto mt-7 flex max-w-md flex-col gap-3 xs:mt-9 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="your@email.com"
              aria-label="Email address for newsletter"
              className="w-full rounded-full border border-gold/20 bg-noir/60 px-5 py-3 font-body text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
            />
            <button
              onClick={submit}
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-sans text-sm text-noir transition hover:shadow-[0_0_30px_-6px_rgba(201,164,92,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span
                    key="ok"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <FiCheck /> Subscribed
                  </motion.span>
                ) : (
                  <motion.span
                    key="go"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    Subscribe <FiArrowRight />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
          <p className="mt-3 font-body text-xs text-cream/35 xs:mt-4">
            No spam. Unsubscribe whenever. (Demo — nothing is sent.)
          </p>
        </div>
      </div>
    </section>
  );
}
