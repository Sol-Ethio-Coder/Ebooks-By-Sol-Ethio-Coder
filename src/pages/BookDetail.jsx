import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ChevronDown, Link2, Check } from "lucide-react";
import BookCover from "../components/BookCover.jsx";
import BookCard from "../components/BookCard.jsx";
import Reveal from "../components/Reveal.jsx";
import StoreButtons from "../components/StoreButtons.jsx";
import { getBook, books, primaryUrl } from "../data/books.js";
import { useSEO } from "../lib/seo.js";

function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-line rounded-2xl border border-line">
      {items.map((c, i) => (
        <div key={i}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
            <span className="font-medium">{c.title}</span>
            <ChevronDown size={18} className={`transition ${open === i ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <p className="px-5 pb-4 text-mute">{c.summary}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function BookDetail() {
  const { slug } = useParams(), book = getBook(slug), [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll(), progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  useSEO({
    title: book ? `${book.title} — ${book.author}` : "Book not found",
    description: book?.description ?? "",
    jsonLd: book && { "@context": "https://schema.org", "@type": "Book", name: book.title, author: { "@type": "Person", name: book.author },
      inLanguage: book.language, numberOfPages: book.pages || undefined, genre: book.category, description: book.description },
  });
  if (!book) return <main className="grid min-h-screen place-items-center px-5 text-center"><div><h1 className="text-4xl">Book not found</h1><Link to="/#books" className="btn btn-gold mt-6">Back to all books</Link></div></main>;
  const copy = async () => { try { await navigator.clipboard.writeText(location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {} };
  const related = books.filter((b) => b.id !== book.id).slice(0, 3);
  return (
    <main className="pt-24">
      <motion.div aria-hidden style={{ scaleX: progress }} className="fixed inset-x-0 top-16 z-40 h-0.5 origin-left bg-gold" />
      <div className="mx-auto max-w-6xl px-5">
        <nav aria-label="Breadcrumb" className="text-sm text-mute"><Link to="/" className="hover:text-gold">Home</Link> / <Link to="/#books" className="hover:text-gold">Books</Link> / <span aria-current="page">{book.title}</span></nav>
        <section className="mt-10 grid items-center gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div className="mx-auto w-56 sm:w-72"><BookCover book={book} float href={primaryUrl(book)} /></div>
          <div>
            <p className="text-sm text-gold">{book.category} · {book.publicationDate}</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-6xl">{book.title}</h1>
            <p className="mt-3 text-xl text-mute">{book.subtitle}</p>
            <p className="mt-2 text-sm">By {book.author}{book.pages ? ` · ${book.pages} pages` : ""} · {book.language}</p>
            <p className="mt-5 max-w-xl text-mute">{book.description}</p>
            <button onClick={copy} className="btn btn-ghost mt-6">{copied ? <Check size={16} /> : <Link2 size={16} />} {copied ? "Link copied" : "Copy link"}</button>
          </div>
        </section>
        <Reveal><section className="mt-24"><h2 className="text-3xl font-semibold">About this book</h2><p className="mt-4 max-w-3xl text-mute">{book.description}</p></section></Reveal>
        <section className="mt-16"><h2 className="text-3xl font-semibold">What you'll learn</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {book.learn.map((l) => <div key={l.title} className="glass rounded-2xl p-5"><h3 className="text-lg font-semibold">{l.title}</h3><p className="mt-2 text-sm text-mute">{l.text}</p></div>)}
          </div></section>
        <section className="mt-16"><h2 className="mb-6 text-3xl font-semibold">Table of contents</h2><Accordion items={book.chapters} /></section>
        <section className="glass mt-16 rounded-3xl p-8 text-center sm:p-12"><h2 className="text-3xl font-semibold">Get Your Copy</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <StoreButtons book={book} />
            <a href={book.previewUrl} className="btn btn-ghost">Read Preview</a>
            <a href="/#contact" className="btn btn-ghost">Contact Author</a>
          </div></section>
        {related.length > 0 && <section className="mt-24 pb-24"><h2 className="text-3xl font-semibold">You may also like</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((b) => <BookCard key={b.id} book={b} />)}</div></section>}
      </div>
    </main>
  );
}
