import { Link } from "react-router-dom";
import { navLinks, restaurant } from "../../data/navigation";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-charcoal">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[30rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[100px] md:w-[40rem] md:blur-[120px]" />

      {/* Main grid */}
      <div className="container-luxe relative py-14 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-4">
            <h3 className="font-display text-2xl text-cream xs:text-3xl">AURÉLIA</h3>
            <p className="mt-3 max-w-xs font-serif text-sm leading-relaxed text-cream/55 xs:mt-4 xs:text-base">
              A candlelit dining house where the Konkan coast meets classical
              technique. Reserve early — the good tables go fast.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 xs:mt-6">
              {restaurant.socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="font-body text-xs text-cream/50 transition hover:text-gold"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div className="md:col-span-2">
            <p className="eyebrow mb-4 xs:mb-5">Explore</p>
            <ul className="space-y-2.5 xs:space-y-3">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="font-body text-sm text-cream/60 transition hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit column */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-4 xs:mb-5">Visit</p>
            <ul className="space-y-3 xs:space-y-4 font-body text-sm text-cream/60">
              <li className="flex gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-gold/70" aria-hidden="true" />
                <span>{restaurant.address}</span>
              </li>
              <li className="flex gap-3">
                <FiPhone className="mt-0.5 shrink-0 text-gold/70" aria-hidden="true" />
                <a href={`tel:${restaurant.phone}`} className="hover:text-gold transition">
                  {restaurant.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <FiMail className="mt-0.5 shrink-0 text-gold/70" aria-hidden="true" />
                <a href={`mailto:${restaurant.email}`} className="hover:text-gold transition">
                  {restaurant.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours column */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-4 xs:mb-5">Hours</p>
            <ul className="space-y-2.5 xs:space-y-3 font-body text-sm">
              {restaurant.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-cream/60">{h.day}</span>
                  <span className="text-cream/40">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-luxe relative flex flex-col items-center justify-between gap-2 border-t border-gold/10 py-5 text-center xs:gap-3 md:flex-row md:text-left">
        <p className="font-body text-xs text-cream/40">
          © {new Date().getFullYear()} AURÉLIA · {restaurant.city}. All rights
          reserved.
        </p>
        <p className="font-body text-xs text-cream/30">
          Crafted with intention. Frontend demo.
        </p>
      </div>
    </footer>
  );
}
