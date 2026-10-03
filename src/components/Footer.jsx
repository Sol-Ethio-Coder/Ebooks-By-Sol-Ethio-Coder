import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ExternalLink, Mail } from "lucide-react";
import Logo from "./Logo.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { author, nav, storeProfiles } from "../data/site.js";
import { books } from "../data/books.js";
const link = "text-sm text-mute transition hover:text-gold";
const Col = ({ title, children }) => (<div><h3 className="font-sans text-sm font-semibold">{title}</h3><ul className="mt-4 space-y-3">{children}</ul></div>);
export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-line">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div aria-hidden className="orb -bottom-32 left-1/4 h-72 w-72 bg-iris/20" />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8 }}
        className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo size="h-12 w-12" />
          <span aria-hidden className="mt-4 flex h-1 w-20 overflow-hidden rounded-full"><i className="flex-1 bg-[#078930]" /><i className="flex-1 bg-[#fcdd09]" /><i className="flex-1 bg-[#da121a]" /></span>
          <p className="mt-4 max-w-xs text-sm text-mute">Books by {author.name}. {author.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {storeProfiles.map((s) => (
              <a key={s.id} href={s.home} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-0 !px-4 !py-2 !text-sm">{s.name} <ExternalLink size={14} aria-hidden /></a>
            ))}
          </div>
        </div>
        <Col title="Explore">{nav.map(([l, h]) => <li key={l}><Link to={h} className={link}>{l}</Link></li>)}</Col>
        <Col title="Books">{books.map((b) => <li key={b.id}><Link to={`/books/${b.slug}`} className={link}>{b.title}</Link></li>)}</Col>
        <Col title="Connect">
          <li><SocialLinks /></li>
          <li><Link to="/#contact" className={`${link} inline-flex items-center gap-2`}><Mail size={14} /> Send a message</Link></li>
        </Col>
      </motion.div>
      <p aria-hidden className="pointer-events-none mt-12 select-none whitespace-nowrap bg-gradient-to-b from-ink/15 to-transparent bg-clip-text text-center font-display text-[11vw] font-bold leading-none text-transparent">{author.brand}</p>
      <div className="relative border-t border-line px-5 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs text-mute">
          <p>© {new Date().getFullYear()} {author.name}. All Rights Reserved.</p>
          <p><Link to="/privacy" className="hover:text-gold">Privacy Policy</Link> · <Link to="/terms" className="hover:text-gold">Terms</Link></p>
        </div>
      </div>
    </footer>
  );
}
