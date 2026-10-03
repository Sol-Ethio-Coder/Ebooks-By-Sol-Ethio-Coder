import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
// Reusable physical-looking book. Uses book.cover image if set, else a generated cover from book.theme.
export default function BookCover({ book, tilt = true, float = false, className = "", href }) {
  const rm = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const spring = { stiffness: 120, damping: 16 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-28, 2]), spring);
  const shadowX = useTransform(x, [-0.5, 0.5], [30, -10]);
  const move = (e) => {
    if (rm || !tilt) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const leave = () => { x.set(0); y.set(0); };
  const [c1, c2] = book.theme ?? ["#222", "#555"];
  const Wrap = href ? "a" : "div";
  const link = href ? { href, target: "_blank", rel: "noopener noreferrer", "aria-label": `Buy ${book.title} (opens the store in a new tab)` } : {};
  return (
    <Wrap {...link} style={{ perspective: 1200 }} onPointerMove={move} onPointerLeave={leave} className={`block ${className}`}>
      <motion.div animate={float && !rm ? { y: [0, -12, 0] } : undefined} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative aspect-[2/3] w-full">
          <motion.div aria-hidden style={{ x: shadowX }} className="absolute inset-x-4 -bottom-6 h-8 rounded-full bg-black/60 blur-2xl" />
          <div className="absolute inset-0 overflow-hidden rounded-r-md rounded-l-sm" style={{ boxShadow: "var(--shadow)" }}>
            {book.cover ? (
              <img src={book.cover} alt={`Cover of ${book.title}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            ) : (
              <div role="img" aria-label={`Cover of ${book.title}`} className="flex h-full flex-col justify-between p-[9%] text-white"
                style={{ background: `linear-gradient(155deg, ${c1}, ${c2})` }}>
                <span className="text-[.65em] tracking-wide opacity-80" style={{ fontSize: "clamp(8px,1.1vw,12px)" }}>Sol Ethio Coder</span>
                <div>
                  <p className="font-display font-bold leading-[1.05]" style={{ fontSize: "clamp(18px,3.2vw,36px)" }}>{book.title}</p>
                  <p className="mt-2 line-clamp-3 opacity-80" style={{ fontSize: "clamp(8px,1.1vw,12px)" }}>{book.subtitle}</p>
                </div>
                <span style={{ fontSize: "clamp(9px,1.2vw,13px)" }}>{book.author}</span>
              </div>
            )}
            <span className="pointer-events-none absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/45 via-white/10 to-transparent" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
          </div>
        </motion.div>
      </motion.div>
    </Wrap>
  );
}
