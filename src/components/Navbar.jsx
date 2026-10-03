import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";
import Logo from "./Logo.jsx";
import { nav } from "../data/site.js";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5">
        <Logo />
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {nav.map(([l, h]) => <li key={l}><Link to={h} className="relative text-mute transition hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">{l}</Link></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="glass grid h-10 w-10 place-items-center rounded-full md:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-4 md:hidden">
            {nav.map(([l, h], i) => (
              <motion.li key={l} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }}>
                <Link onClick={() => setOpen(false)} to={h} className="block rounded-lg px-3 py-3 text-lg hover:bg-card">{l}</Link>
              </motion.li>
            ))}
            <li className="h-4" />
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
