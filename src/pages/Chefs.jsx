import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import { chefs } from "../data/chefs";

function ChefCard({ chef, i }) {
  const [broken, setBroken] = useState(false);

  return (
    <Reveal i={i}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-2xl glass xs:rounded-3xl"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          {!broken ? (
            <img
              src={chef.image}
              alt={chef.name}
              loading="lazy"
              onError={() => setBroken(true)}
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink to-noir">
              <span className="font-display text-5xl text-gold/30">
                {chef.name[0]}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-4 xs:p-6">
            <p className="eyebrow mb-1">{chef.role}</p>
            <h3 className="font-display text-xl text-cream xs:text-2xl">{chef.name}</h3>

            {/* On desktop — reveal on hover. On mobile — always visible */}
            <div className="mt-2 xs:mt-0 xs:grid xs:grid-rows-[0fr] xs:transition-all xs:duration-500 xs:group-hover:grid-rows-[1fr]">
              <div className="xs:overflow-hidden">
                <p className="xs:pt-3 font-serif text-[13px] text-cream/65 xs:text-[15px]">
                  {chef.note}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5 xs:mt-3 xs:gap-2">
                  {chef.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-gold/30 px-2 py-0.5 text-[10px] text-gold-soft xs:px-2.5 xs:text-[11px]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-2 font-body text-xs text-cream/40 xs:mt-3">
              {chef.years} years in the kitchen
            </p>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Chefs() {
  return (
    <>
      <PageHeader
        eyebrow="The Kitchen"
        title="The hands behind it"
        sub="Every plate passes through these four. Hover a portrait on desktop to learn more."
      />
      <section className="py-16 md:py-20">
        <div className="container-luxe grid gap-5 xs:grid-cols-2 xs:gap-6 lg:grid-cols-4">
          {chefs.map((chef, i) => (
            <ChefCard key={chef.id} chef={chef} i={i} />
          ))}
        </div>
      </section>
    </>
  );
}
