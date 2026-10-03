// Smaller page sections grouped in one file: FeaturedBook, AuthorSection, Quote, Timeline, UpcomingBooks, Stats, Testimonials, Newsletter, Contact, Footer.
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, animate, useReducedMotion } from "motion/react";
import { Star, Send, Mail } from "lucide-react";
import BookCover from "./BookCover.jsx";
import Reveal from "./Reveal.jsx";
import { useForm, statusText } from "../lib/useForm.js";
import StoreButtons from "./StoreButtons.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { featuredBook, primaryUrl } from "../data/books.js";
import { author, quote, timeline, reviews, stats, nav, stores } from "../data/site.js";

export function FeaturedBook() {
  const book = featuredBook(), ref = useRef(null), rm = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], rm ? [0, 0] : [60, -60]);
  const meta = [["Author", book.author], ["Category", book.category], ["Published", book.publicationDate], ["Pages", book.pages], ["Language", book.language]].filter(([, v]) => v);
  return (
    <section id="featured" ref={ref} className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:py-24 lg:grid-cols-2">
      <motion.div style={{ y }} className="relative mx-auto w-64 sm:w-80">
        <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-gold/20 blur-3xl" />
        <BookCover book={book} href={primaryUrl(book)} />
      </motion.div>
      <Reveal>
        <p className="text-sm text-gold">Featured book</p>
        <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">{book.title}</h2>
        <p className="mt-3 text-xl text-mute">{book.subtitle}</p>
        <p className="mt-5 max-w-xl text-mute">{book.description}</p>
        <dl className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-3">
          {meta.map(([k, v]) => <div key={k}><dt className="text-mute">{k}</dt><dd className="font-medium">{v}</dd></div>)}
        </dl>
        <div className="mt-9 flex flex-wrap gap-3">
          <StoreButtons book={book} />
          <Link to={`/books/${book.slug}`} className="btn btn-ghost">View Details</Link>
        </div>
      </Reveal>
    </section>
  );
}

export function AuthorSection() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[.8fr_1.2fr]">
      <Reveal>
        <div className="glass aspect-[4/5] overflow-hidden rounded-3xl">
          {author.photo ? <img src={author.photo} alt={author.name} loading="lazy" className="h-full w-full object-cover" />
            : <div className="grid h-full place-items-center p-6 text-center text-mute">[AUTHOR PHOTO]</div>}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-4xl font-semibold sm:text-5xl">Behind the Books</h2>
        <p className="mt-2 text-gold">{author.name} · {author.tagline}</p>
        <p className="mt-6 max-w-2xl text-lg text-mute">{author.bio}</p>
        <h3 className="mt-8 text-xl font-semibold">Writing philosophy</h3>
        <p className="mt-2 max-w-2xl text-mute">{author.philosophy}</p>
        <ul className="mt-8 flex flex-wrap gap-2">{author.interests.map((i) => <li key={i} className="rounded-full border border-line px-4 py-1.5 text-sm">{i}</li>)}</ul>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="/#contact" className="btn btn-gold">Contact the author</a>
          <SocialLinks />
        </div>
      </Reveal>
    </section>
  );
}

export function QuoteSection() {
  return (
    <section className="grain relative overflow-hidden py-20 md:py-32">
      <div aria-hidden className="orb left-1/4 top-0 h-80 w-80 bg-iris/25" />
      <Reveal className="relative mx-auto max-w-4xl px-5 text-center">
        <blockquote><p className="font-display text-3xl leading-snug sm:text-5xl">“{quote.text}”</p>
          <footer className="mt-6 text-mute">{quote.by}</footer></blockquote>
      </Reveal>
    </section>
  );
}

export function Timeline() {
  return (
    <section id="journey" className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <Reveal><h2 className="text-4xl font-semibold sm:text-5xl">Reading Journey</h2></Reveal>
      <ol className="relative mt-12 border-l border-line pl-8">
        {timeline.map((t, i) => (
          <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} className="relative pb-12 last:pb-0">
            <span aria-hidden className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-bg" />
            <p className="text-sm text-gold">{t.year}</p>
            <h3 className="mt-1 text-2xl font-semibold">{t.title}</h3>
            <p className="mt-2 text-mute">{t.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

function Count({ to, suffix = "" }) {
  const ref = useRef(null), inView = useInView(ref, { once: true }), [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || typeof to !== "number") return;
    const c = animate(0, to, { duration: 1.6, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{typeof to === "number" ? n + suffix : to}</span>;
}
export function Stats() {
  return (
    <section aria-label="Statistics" className="border-y border-line py-14">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}><dd className="font-display text-5xl font-semibold text-gold"><Count to={s.to} suffix={s.suffix} /></dd><dt className="mt-1 text-sm text-mute">{s.label}</dt></div>
        ))}
      </dl>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-24" aria-label="Reader reviews">
      <h2 className="mx-auto max-w-7xl px-5 text-4xl font-semibold sm:text-5xl">Reader Reviews</h2>
      <ul className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]">
        {reviews.map((r, i) => (
          <li key={i} className="glass w-[85%] shrink-0 snap-start rounded-2xl p-6 sm:w-96">
            <div className="flex gap-1 text-gold" aria-label={`${r.rating} out of 5 stars`}>{Array.from({ length: r.rating }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}</div>
            <p className="mt-4 text-lg">“{r.quote}”</p>
            <p className="mt-5 text-sm font-medium">{r.name}</p><p className="text-sm text-mute">{r.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Newsletter() {
  const { status, onSubmit } = useForm("New newsletter subscriber");
  return (
    <section id="newsletter" className="mx-auto max-w-3xl px-5 py-16 md:py-24 text-center">
      <Reveal>
        <h2 className="text-4xl font-semibold sm:text-5xl">Stay Connected With My Writing</h2>
        <p className="mt-4 text-mute">Get updates about new books, articles, projects, and upcoming publications.</p>
        <form onSubmit={onSubmit} className="glass mx-auto mt-8 flex max-w-lg flex-col gap-2 rounded-3xl p-2 sm:flex-row sm:rounded-full">
          <label className="sr-only" htmlFor="nl-email">Email address</label>
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
          <input id="nl-email" name="email" required type="email" placeholder="you@example.com" className="flex-1 bg-transparent px-5 py-3 outline-none" />
          <button disabled={status === "sending"} className="btn btn-gold justify-center disabled:opacity-60">Subscribe</button>
        </form>
        <p role="status" className="mt-3 min-h-5 text-sm text-gold">{statusText[status] ?? ""}</p>
        <p className="text-xs text-mute">No spam. Unsubscribe any time. <Link to="/privacy" className="underline hover:text-gold">Privacy policy</Link></p>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const { status, onSubmit } = useForm("New message from your website");
  const f = "w-full rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-gold";
  return (
    <section id="contact" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 md:grid-cols-[.8fr_1.2fr]">
      <Reveal>
        <h2 className="text-4xl font-semibold sm:text-5xl">Get in touch</h2>
        <p className="mt-4 text-mute">Questions, collaborations or bulk orders — send a message.</p>
        {author.email.includes("@") && <p className="mt-4"><a href={`mailto:${author.email}`} className="inline-flex items-center gap-2 text-gold hover:underline"><Mail size={16} /> {author.email}</a></p>}
        <SocialLinks className="mt-6" />
      </Reveal>
      <Reveal delay={0.1}>
        <form onSubmit={onSubmit} className="grid gap-4">
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
          <div className="grid gap-4 sm:grid-cols-2">
            <label>Name<input required name="name" className={`${f} mt-1`} /></label>
            <label>Email<input required type="email" name="email" className={`${f} mt-1`} /></label>
          </div>
          <label>Subject<input required name="subject" className={`${f} mt-1`} /></label>
          <label>Message<textarea required rows={5} name="message" className={`${f} mt-1`} /></label>
          <div className="flex items-center gap-4"><button disabled={status === "sending"} className="btn btn-gold disabled:opacity-60"><Send size={16} /> Send Message</button>
            <span role="status" className="text-sm text-gold">{statusText[status] ?? ""}</span></div>
        </form>
      </Reveal>
    </section>
  );
}
