import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import { restaurant } from "../data/navigation";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const field =
    "w-full rounded-xl border border-gold/20 bg-charcoal/60 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/35 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/30 transition-colors";

  const info = [
    { icon: FiMapPin, label: "Find us", value: restaurant.address, href: null },
    { icon: FiPhone, label: "Call", value: restaurant.phone, href: `tel:${restaurant.phone}` },
    { icon: FiMail, label: "Email", value: restaurant.email, href: `mailto:${restaurant.email}` },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Say Hello"
        title="Contact"
        sub="Reservations, private events, press — we read every message."
      />

      <section className="py-12 md:py-16">
        <div className="container-luxe grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Info + map */}
          <div className="space-y-6 xs:space-y-8">
            {info.map((item, i) => (
              <Reveal key={item.label} i={i}>
                <div className="flex items-start gap-4">
                  <div className="tap-target shrink-0 rounded-full border border-gold/30 text-gold">
                    <item.icon aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="eyebrow mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-serif text-base text-cream/80 hover:text-gold transition break-all xs:text-lg"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-serif text-base text-cream/80 xs:text-lg">{item.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal i={3}>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-green-600/40 px-4 py-2.5 font-body text-sm text-green-300/90 transition hover:bg-green-600/10 xs:px-5"
              >
                <FiMessageCircle aria-hidden="true" /> WhatsApp the host
              </a>
            </Reveal>

            <Reveal i={4}>
              <div className="relative overflow-hidden rounded-xl border border-gold/15 xs:rounded-2xl">
                <div className="grid aspect-[16/10] place-items-center bg-gradient-to-br from-ink via-charcoal to-noir">
                  <div className="text-center">
                    <FiMapPin className="mx-auto text-2xl text-gold/60 xs:text-3xl" aria-hidden="true" />
                    <p className="mt-3 font-display text-base text-cream/70 xs:text-lg">
                      Malpe Beach, Udupi
                    </p>
                    <p className="font-body text-xs text-cream/40">
                      Map placeholder — drop an embed here
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal i={1}>
            <div className="glass rounded-2xl p-5 xs:rounded-3xl xs:p-8 sm:p-10">
              {!sent ? (
                <>
                  <h2
                    className="font-display text-cream"
                    style={{ fontSize: "clamp(1.3rem, 4vw, 1.75rem)" }}
                  >
                    Send a note
                  </h2>
                  <div className="mt-5 space-y-3 xs:mt-6 xs:space-y-4">
                    <input
                      className={field}
                      placeholder="Name"
                      autoComplete="name"
                      aria-label="Your name"
                    />
                    <input
                      className={field}
                      placeholder="Email"
                      type="email"
                      autoComplete="email"
                      aria-label="Your email"
                    />
                    <input
                      className={field}
                      placeholder="Subject"
                      aria-label="Subject"
                    />
                    <textarea
                      rows={5}
                      className={`${field} resize-none`}
                      placeholder="Your message"
                      aria-label="Your message"
                    />
                  </div>
                  <div className="mt-5 flex flex-col gap-4 xs:mt-6 xs:flex-row xs:items-center xs:justify-between">
                    <p className="font-body text-xs text-cream/40">Demo — nothing is sent.</p>
                    <MagneticButton variant="solid" onClick={() => setSent(true)}>
                      Send message
                    </MagneticButton>
                  </div>
                </>
              ) : (
                <div className="grid min-h-[18rem] place-items-center text-center xs:min-h-[20rem]">
                  <div>
                    <p className="font-display text-3xl text-gold-shimmer xs:text-4xl">Thank you</p>
                    <p className="mt-3 font-serif text-base text-cream/60 xs:text-lg">
                      We'll be in touch shortly.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-5 font-body text-sm text-gold underline-offset-4 hover:underline xs:mt-6"
                    >
                      Send another
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
