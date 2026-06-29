import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, restaurant } from "../../data/navigation";
import MagneticButton from "../ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.2 }}
        className={`fixed inset-x-0 top-0 z-[9995] transition-all duration-500 ${
          scrolled ? "glass-strong py-3" : "bg-transparent py-4 xs:py-5"
        }`}
      >
        <nav className="container-luxe flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl text-cream xs:text-2xl"
            aria-label="AURÉLIA — Home"
          >
            AURÉLIA
            <span className="ml-1.5 align-top text-[9px] tracking-luxe text-gold/70 xs:ml-2 xs:text-[10px]">
              ·EST {restaurant.established}
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-sans text-sm tracking-wide transition-colors ${
                      isActive ? "text-gold" : "text-cream/70 hover:text-cream"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <MagneticButton as={Link} to="/reservation" variant="solid">
              Reserve a Table
            </MagneticButton>
          </div>

          {/* Mobile hamburger — 44×44 touch target */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="tap-target -mr-2 text-2xl text-cream lg:hidden"
          >
            <FiMenu />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9996] lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-noir/75 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="glass-strong absolute right-0 top-0 flex h-full w-[85%] max-w-[22rem] flex-col overflow-y-auto p-6 xs:p-8"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="font-display text-lg text-gold-soft xs:text-xl">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="tap-target -mr-2 text-2xl text-cream"
                >
                  <FiX />
                </button>
              </div>

              {/* Nav links */}
              <ul className="mt-8 flex flex-col gap-5 xs:mt-10 xs:gap-6">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.06 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block font-display text-2xl leading-tight xs:text-3xl ${
                          isActive ? "text-gold" : "text-cream/80"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Footer CTA */}
              <div className="mt-auto pt-8">
                <Link
                  to="/reservation"
                  className="block rounded-full bg-gold py-3.5 text-center font-sans text-sm font-medium text-noir transition hover:bg-gold-soft"
                >
                  Reserve a Table
                </Link>
                <p className="mt-5 font-body text-xs text-cream/40">
                  {restaurant.phone}
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
