import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bell, CalendarClock, Check, X } from "lucide-react";
import BookCover from "./BookCover.jsx";
import Reveal from "./Reveal.jsx";
import { useForm, statusText } from "../lib/useForm.js";
import { author, upcoming, upcomingStages } from "../data/site.js";

function NotifyDialog({ item, onClose }) {
  const { status, onSubmit } = useForm(`Notify me: ${item.title}`, `Thanks! I'll email you as soon as "${item.title}" is released. — Solomon (Sol Ethio Coder)`);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[80] grid place-items-center bg-black/60 p-4 backdrop-blur-sm">
      <motion.div role="dialog" aria-modal="true" aria-labelledby="notify-title" onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
        className="relative w-full max-w-md rounded-3xl border border-line bg-bg p-7 shadow-2xl">
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full hover:bg-card"><X size={18} /></button>
        <p className="text-sm text-gold">Coming soon</p>
        <h3 id="notify-title" className="mt-1 pr-8 text-2xl font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm text-mute">Leave your email and I'll let you know the day it's released.</p>
        <form onSubmit={onSubmit} className="mt-5 grid gap-3">
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
          <input type="hidden" name="book" value={item.title} />
          <label className="sr-only" htmlFor="notify-email">Email address</label>
          <input id="notify-email" name="email" type="email" required autoFocus placeholder="you@example.com" className="w-full rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-gold" />
          <button disabled={status === "sending"} className="btn btn-gold justify-center disabled:opacity-60"><Bell size={16} /> Notify me</button>
          <p role="status" className="min-h-5 text-sm text-gold">{statusText[status] ?? ""}</p>
        </form>
        <p className="text-xs text-mute">Used only for this notification. See the privacy policy in the footer.</p>
      </motion.div>
    </motion.div>
  );
}

export default function UpcomingBooks() {
  const [active, setActive] = useState(null);
  return (
    <section id="upcoming" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <Reveal>
        <h2 className="text-4xl font-semibold sm:text-5xl">Upcoming Books</h2>
        <p className="mt-3 max-w-xl text-mute">Books in the works. Leave your email and be the first to know when they're out.</p>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {upcoming.map((u, i) => (
          <Reveal key={u.title} delay={i * 0.12} className="h-full">
            <motion.article whileHover={{ y: -4 }} className="glass relative h-full overflow-hidden rounded-3xl p-6 sm:p-8">
              <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl" style={{ background: u.theme[1] }} />
              <div className="relative flex flex-col gap-7 sm:flex-row">
                <div className="relative mx-auto w-36 shrink-0 sm:mx-0 sm:w-40">
                  <div aria-hidden className="absolute -inset-6 -z-10 rounded-full opacity-40 blur-2xl" style={{ background: `linear-gradient(135deg, ${u.theme[0]}, ${u.theme[1]})` }} />
                  <BookCover book={{ title: u.short, subtitle: "", author: author.name, theme: u.theme }} float />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs text-gold">
                    <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/70 motion-reduce:animate-none" /><span className="relative h-2 w-2 rounded-full bg-gold" /></span>
                    Coming soon
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight">{u.title}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-mute">
                    <span className="inline-flex items-center gap-1.5"><CalendarClock size={14} aria-hidden /> {u.date}</span><span>{u.category}</span>
                  </p>
                  <p className="mt-4 text-mute">{u.text}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {u.highlights.map((h) => <li key={h} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden />{h}</li>)}
                  </ul>
                  <div className="mt-6" role="img" aria-label={`Progress: ${upcomingStages[u.stage]}, step ${u.stage + 1} of ${upcomingStages.length}`}>
                    <div className="flex gap-1.5">
                      {upcomingStages.map((s, k) => k <= u.stage
                        ? <motion.span key={s} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + k * 0.12, duration: 0.5 }} style={{ transformOrigin: "left" }} className="h-1.5 flex-1 rounded-full bg-gold" />
                        : <span key={s} className="h-1.5 flex-1 rounded-full bg-line" />)}
                    </div>
                    <p className="mt-2 text-xs text-mute">Now: <span className="text-gold">{upcomingStages[u.stage]}</span> · step {u.stage + 1} of {upcomingStages.length}</p>
                  </div>
                  <button onClick={() => setActive(u)} className="btn btn-gold mt-6"><Bell size={16} /> Notify me</button>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>{active && <NotifyDialog key="notify" item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
