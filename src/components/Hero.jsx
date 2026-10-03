import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import BookCover from "./BookCover.jsx";
import { featuredBook, primaryUrl } from "../data/books.js";
import { author } from "../data/site.js";
const words = "Stories, Ideas & Knowledge — Written to Inspire.".split(" ");
const dots = Array.from({ length: 14 }, (_, i) => ({ l: (i * 71) % 100, t: (i * 37) % 100, d: 6 + (i % 5) * 2 }));
export default function Hero() {
  const rm = useReducedMotion(), book = featuredBook();
  const { scrollY } = useScroll(), orbY = useTransform(scrollY, [0, 700], [0, rm ? 0 : 140]);
  return (
    <section id="top" className="grain relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div style={{ y: orbY }} className="absolute inset-0">
          <div className="orb -left-24 top-10 h-96 w-96 bg-iris/30" />
          <div className="orb right-0 top-1/3 h-[28rem] w-[28rem] bg-gold/25" style={{ animationDelay: "-6s" }} />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent,var(--bg)_75%)]" />
        {!rm && dots.map((p, i) => (
          <motion.span key={i} className="absolute hidden h-1 w-1 rounded-full bg-gold/60 md:block" style={{ left: `${p.l}%`, top: `${p.t}%` }}
            animate={{ y: [0, -24, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5 text-sm text-gold">{author.name} · {author.brand}</motion.p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] min-[400px]:text-5xl sm:text-6xl lg:text-7xl" aria-label={words.join(" ")}>
            {words.map((w, i) => (
              <motion.span aria-hidden key={i} className="mr-[.25em] inline-block" initial={rm ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-6 max-w-xl text-lg text-mute">
            Explore my published books, discover new perspectives, and find your next meaningful read.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-9 flex flex-wrap gap-3">
            <a href="/#books" className="btn btn-gold">Explore My Books</a>
            <a href="/#about" className="btn btn-ghost">About the Author</a>
          </motion.div>
        </div>
        <motion.div initial={rm ? false : { opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mx-auto w-56 sm:w-64 lg:w-80">
          <BookCover book={book} float href={primaryUrl(book)} />
        </motion.div>
      </div>
      <a href="/#featured" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-mute">
        <motion.span animate={rm ? undefined : { y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="block"><ArrowDown size={20} /></motion.span>
      </a>
    </section>
  );
}
