import { useEffect, useRef } from "react";

/**
 * ParticleField — the signature element.
 * A drifting field of warm, candlelit motes rendered on a single canvas.
 * Particles gently rise (like embers), shimmer, and lean toward the cursor.
 * Pure canvas + rAF, no dependencies, and it bows out under reduced-motion.
 */
export default function ParticleField({ density = 60, className = "" }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const make = () =>
      Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.4,
        d: Math.random() * 0.4 + 0.1, // drift / rise speed
        a: Math.random() * 0.5 + 0.2,
        tw: Math.random() * Math.PI * 2, // twinkle phase
      }));

    resize();
    particles = make();

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        // rise + slow horizontal sway
        p.y -= p.d;
        p.x += Math.sin(p.y * 0.01) * 0.2;
        p.tw += 0.02;

        // cursor lean
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130) {
          p.x += (dx / dist) * 0.4;
          p.y += (dy / dist) * 0.4;
        }

        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }

        const flicker = p.a + Math.sin(p.tw) * 0.18;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(227, 197, 133, ${Math.max(0, flicker)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(201, 164, 92, 0.6)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    if (!reduce) raf = requestAnimationFrame(draw);
    else {
      // static sprinkle for reduced-motion users
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(227, 197, 133, ${p.a})`;
        ctx.fill();
      }
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onResize = () => {
      resize();
      particles = make();
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
