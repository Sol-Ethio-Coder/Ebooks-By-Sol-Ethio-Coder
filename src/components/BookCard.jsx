import { Link } from "react-router-dom";
import { motion } from "motion/react";
import BookCover from "./BookCover.jsx";
import StoreButtons from "./StoreButtons.jsx";
import { primaryUrl } from "../data/books.js";
export default function BookCard({ book, index = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, delay: index * 0.1 }}>
    <motion.article layout whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 24 }} className="glass group relative rounded-2xl p-5 transition-shadow hover:shadow-[0_20px_60px_-25px_var(--gold)]">
      <div className="mx-auto w-40 transition-transform duration-500 group-hover:scale-105"><BookCover book={book} tilt={false} href={primaryUrl(book)} /></div>
      <div className="mt-6 flex items-center justify-between text-xs text-mute"><span>{book.category}</span><span>{book.publicationDate}</span></div>
      <h3 className="mt-2 text-xl font-semibold"><Link to={`/books/${book.slug}`} className="hover:text-gold">{book.title}</Link></h3>
      <p className="mt-2 line-clamp-2 text-sm text-mute">{book.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="rounded-full border border-line px-3 py-1 text-xs">{book.status}</span>
        <Link to={`/books/${book.slug}`} className="text-gold">View details</Link>
      </div>
      <div className="mt-4 flex flex-wrap gap-2"><StoreButtons book={book} small /></div>
    </motion.article>
    </motion.div>
  );
}
