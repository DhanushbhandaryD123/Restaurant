import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import PageHeader from "../components/ui/PageHeader";
import DishCard from "../components/ui/DishCard";
import { dishes, categories } from "../data/dishes";

export default function Menu() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return dishes.filter((d) => {
      const inCat = active === "All" || d.category === active;
      const q = query.trim().toLowerCase();
      const inQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.ingredients.join(" ").toLowerCase().includes(q) ||
        d.tags.join(" ").toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [active, query]);

  return (
    <>
      <PageHeader
        eyebrow="À la carte & Tasting"
        title="The Menu"
        sub="Coastal ingredients, classical technique. Prices in ₹, dietary notes on every card."
      />

      <section className="relative py-12 md:py-16">
        <div className="container-luxe">
          {/* Controls */}
          <div className="flex flex-col gap-4 xs:gap-5 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* Category chips — scroll horizontally on mobile */}
            <div
              className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`shrink-0 rounded-full border px-3.5 py-2 font-body text-xs transition xs:px-4 xs:text-sm ${
                    active === c
                      ? "border-gold bg-gold text-noir"
                      : "border-gold/20 text-cream/60 hover:border-gold/50 hover:text-cream"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72 lg:shrink-0">
              <FiSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40"
                aria-hidden="true"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes, ingredients…"
                aria-label="Search the menu"
                className="w-full rounded-full border border-gold/20 bg-charcoal/60 py-3 pl-11 pr-10 font-body text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/30"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="tap-target absolute right-1 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream"
                >
                  <FiX size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="mt-8 grid gap-5 xs:mt-10 xs:gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
            <AnimatePresence mode="popLayout">
              {filtered.map((dish, i) => (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <DishCard dish={dish} i={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center font-serif text-lg text-cream/45 xs:mt-20 xs:text-xl">
              Nothing matches that yet. Try another ingredient — or ask the chef.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
