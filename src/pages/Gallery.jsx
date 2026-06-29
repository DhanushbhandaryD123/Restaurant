import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PageHeader from "../components/ui/PageHeader";

const ids = [
  "1414235077428-338989a2e8c0",
  "1517248135467-4c7edcad34c4",
  "1559339352-11d035aa65de",
  "1546069901-ba9599a7e63c",
  "1565958011703-44f9829ba187",
  "1540420773420-3366772f4999",
  "1466978913421-dad2ebd01d17",
  "1551218808-94e220e084d2",
  "1424847651672-bf20a4b0982b",
  "1559925393-8be0ec4767c8",
  "1504674900247-0877df9cc836",
  "1414235077428-338989a2e8c0",
];

const images = ids.map((id, i) => ({
  id: `${id}-${i}`,
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`,
  srcLarge: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=85`,
  tall: i % 3 === 0,
}));

export default function Gallery() {
  const [open, setOpen] = useState(null); // index into images array

  const prev = () => setOpen((i) => (i - 1 + images.length) % images.length);
  const next = () => setOpen((i) => (i + 1) % images.length);

  // Keyboard navigation inside lightbox
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll while lightbox open
  useEffect(() => {
    document.body.style.overflow = open !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <PageHeader
        eyebrow="In the Room"
        title="Gallery"
        sub="Food, fire, and the dining room at dusk. Tap any frame to enlarge."
      />

      <section className="py-12 md:py-20">
        <div className="container-luxe">
          <div className="columns-1 gap-4 xs:columns-2 xs:gap-5 lg:columns-3">
            {images.map((img, i) => (
              <motion.button
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.07 }}
                onClick={() => setOpen(i)}
                className="group mb-4 block w-full overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold xs:mb-5 xs:rounded-2xl"
                aria-label={`Open gallery image ${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={`AURÉLIA gallery image ${i + 1}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                  onError={(e) => {
                    e.currentTarget.parentElement.style.display = "none";
                  }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9997] flex items-center justify-center bg-noir/95 p-4 backdrop-blur-sm xs:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(null)}
              aria-label="Close lightbox"
              className="tap-target absolute right-3 top-3 rounded-full text-cream/70 hover:text-gold xs:right-5 xs:top-5"
            >
              <FiX size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="tap-target absolute left-2 top-1/2 -translate-y-1/2 rounded-full glass text-cream/70 hover:text-gold xs:left-4"
            >
              <FiChevronLeft size={24} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={open}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={images[open].srcLarge}
                alt={`AURÉLIA gallery image ${open + 1}`}
                className="max-h-[80vh] max-w-full rounded-xl object-contain xs:max-h-[85vh] xs:rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next image"
              className="tap-target absolute right-2 top-1/2 -translate-y-1/2 rounded-full glass text-cream/70 hover:text-gold xs:right-4"
            >
              <FiChevronRight size={24} />
            </button>

            {/* Counter */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-xs text-cream/40">
              {open + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
