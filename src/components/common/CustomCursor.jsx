import { useEffect, useRef, useState } from "react";

// A soft gold ring that trails the pointer with a magnetic lag.
// Only mounts on devices with a fine pointer (skips touch).
export default function CustomCursor() {
  const ring = useRef(null);
  const dot = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    document.body.classList.add("has-custom-cursor");

    let rx = 0, ry = 0, mx = 0, my = 0;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
      const el = e.target;
      setActive(!!el.closest("a, button, [data-cursor]"));
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    let raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] -ml-5 -mt-5 hidden h-10 w-10 rounded-full border border-gold/70 transition-[width,height,opacity] duration-300 md:block ${
          active ? "h-14 w-14 -ml-7 -mt-7 bg-gold/10" : ""
        }`}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 hidden h-2 w-2 rounded-full bg-gold md:block"
      />
    </>
  );
}
