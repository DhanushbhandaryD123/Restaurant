import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiUsers, FiCalendar, FiClock } from "react-icons/fi";
import PageHeader from "../components/ui/PageHeader";
import MagneticButton from "../components/ui/MagneticButton";

const times = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"];
const occasions = ["Just dinner", "Birthday", "Anniversary", "Corporate", "Wedding", "Proposal"];

export default function Reservation() {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: today,
    time: "7:30 PM",
    guests: 2,
    occasion: "Just dinner",
    note: "",
  });
  const [done, setDone] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const valid = form.name.trim() && form.phone.trim().length >= 8;

  const field =
    "w-full rounded-xl border border-gold/20 bg-charcoal/60 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/30 transition-colors";

  const label = "mb-2 block font-body text-xs uppercase tracking-widest text-cream/50";

  return (
    <>
      <PageHeader
        eyebrow="Reserve"
        title="Hold your table"
        sub="Thirty days ahead, twelve covers a night for the tasting. Weekends go fast."
      />

      <section className="py-12 md:py-16">
        <div className="container-luxe max-w-3xl">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass rounded-2xl p-5 xs:rounded-3xl xs:p-8 sm:p-12"
              >
                <div className="grid gap-5 xs:gap-6 sm:grid-cols-2">
                  <div>
                    <label className={label}>Name</label>
                    <input
                      className={field}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className={label}>Phone</label>
                    <input
                      className={field}
                      placeholder="+91 …"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 font-body text-xs uppercase tracking-widest text-cream/50">
                      <FiCalendar aria-hidden="true" /> Date
                    </label>
                    <input
                      type="date"
                      min={today}
                      className={`${field} [color-scheme:dark]`}
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 font-body text-xs uppercase tracking-widest text-cream/50">
                      <FiUsers aria-hidden="true" /> Guests
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => set("guests", Math.max(1, form.guests - 1))}
                        aria-label="Decrease guest count"
                        className="tap-target rounded-xl border border-gold/20 text-gold hover:bg-gold/10"
                      >
                        –
                      </button>
                      <span className="w-10 text-center font-display text-2xl text-cream">
                        {form.guests}
                      </span>
                      <button
                        onClick={() => set("guests", Math.min(20, form.guests + 1))}
                        aria-label="Increase guest count"
                        className="tap-target rounded-xl border border-gold/20 text-gold hover:bg-gold/10"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Time */}
                <div className="mt-5 xs:mt-6">
                  <label className="mb-2 flex items-center gap-2 font-body text-xs uppercase tracking-widest text-cream/50">
                    <FiClock aria-hidden="true" /> Time
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => set("time", t)}
                        className={`rounded-full border px-3 py-2 font-body text-xs transition xs:px-4 xs:text-sm ${
                          form.time === t
                            ? "border-gold bg-gold text-noir"
                            : "border-gold/20 text-cream/60 hover:border-gold/50"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Occasion */}
                <div className="mt-5 xs:mt-6">
                  <label className={label}>Occasion</label>
                  <div className="flex flex-wrap gap-2">
                    {occasions.map((o) => (
                      <button
                        key={o}
                        onClick={() => set("occasion", o)}
                        className={`rounded-full border px-3 py-2 font-body text-xs transition xs:px-4 xs:text-sm ${
                          form.occasion === o
                            ? "border-gold bg-gold/15 text-gold-soft"
                            : "border-gold/20 text-cream/60 hover:border-gold/50"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div className="mt-5 xs:mt-6">
                  <label className={label}>Special request</label>
                  <textarea
                    rows={3}
                    className={`${field} resize-none`}
                    placeholder="Allergies, a quiet corner, a candle on the cake…"
                    value={form.note}
                    onChange={(e) => set("note", e.target.value)}
                  />
                </div>

                <div className="mt-7 flex flex-col gap-4 xs:mt-8 xs:flex-row xs:items-center xs:justify-between">
                  <p className="font-body text-xs text-cream/40">
                    Demo only — no booking is sent.
                  </p>
                  <MagneticButton
                    variant="solid"
                    onClick={() => valid && setDone(true)}
                    className={!valid ? "opacity-40" : ""}
                    aria-disabled={!valid}
                  >
                    Confirm reservation
                  </MagneticButton>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 text-center xs:rounded-3xl xs:p-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                  className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-gold text-2xl text-gold xs:h-20 xs:w-20 xs:text-3xl"
                >
                  <FiCheck />
                </motion.div>
                <h2
                  className="mt-6 font-display text-cream xs:mt-7"
                  style={{ fontSize: "clamp(1.5rem, 5vw, 2.25rem)" }}
                >
                  We've got you, {form.name.split(" ")[0]}
                </h2>
                <p className="mx-auto mt-3 max-w-sm font-serif text-base text-cream/60 xs:mt-4 xs:max-w-md xs:text-lg">
                  A table for {form.guests} on{" "}
                  <span className="text-gold-soft">{form.date}</span> at{" "}
                  <span className="text-gold-soft">{form.time}</span>. Our host will
                  call {form.phone} to confirm.
                </p>
                <div className="mt-7 xs:mt-9">
                  <MagneticButton variant="ghost" onClick={() => setDone(false)}>
                    Make another reservation
                  </MagneticButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
