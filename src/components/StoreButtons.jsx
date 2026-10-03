import { ExternalLink } from "lucide-react";
import { storeLinks } from "../data/books.js";
// One button per store (currently Ye-Buna). Opens the store in a new tab.
export default function StoreButtons({ book, small = false }) {
  return storeLinks(book).map((s, i) => (
    <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer"
      className={`btn ${i === 0 ? "btn-gold" : "btn-ghost"} ${small ? "!px-4 !py-2 !text-sm" : ""}`}>
      Get on {s.name} <ExternalLink size={small ? 14 : 16} aria-hidden />
    </a>
  ));
}
