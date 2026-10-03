import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import BookCard from "./BookCard.jsx";
import Reveal from "./Reveal.jsx";
import { books } from "../data/books.js";
export default function BookGrid() {
  const [q, setQ] = useState(""), [cat, setCat] = useState("All");
  const cats = useMemo(() => ["All", ...new Set(books.map((b) => b.category))], []);
  const list = books.filter((b) => (cat === "All" || b.category === cat) && `${b.title} ${b.subtitle} ${b.description}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <section id="books" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <Reveal><h2 className="text-4xl font-semibold sm:text-5xl">Explore My Books</h2></Reveal>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label="Filter by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${cat === c ? "border-gold bg-gold text-[#0c0b10]" : "border-line hover:border-gold"}`}>{c}</button>
          ))}
        </div>
        <label className="glass flex items-center gap-2 rounded-full px-4 py-2 md:w-72">
          <Search size={16} className="text-mute" /><span className="sr-only">Search books</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search books" className="w-full bg-transparent text-sm outline-none" />
        </label>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((b, i) => <BookCard key={b.id} book={b} index={i} />)}
      </div>
      {!list.length && <p className="mt-10 text-mute">No books match. Clear the search or pick another category.</p>}
    </section>
  );
}
