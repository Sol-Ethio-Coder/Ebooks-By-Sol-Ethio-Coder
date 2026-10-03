import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { legal } from "../data/legal.js";
import { author } from "../data/site.js";
import { useSEO } from "../lib/seo.js";
export default function Legal({ type }) {
  const doc = legal[type], other = type === "privacy" ? ["terms", "Terms of Use"] : ["privacy", "Privacy Policy"];
  useSEO({ title: `${doc.title} — ${author.brand}`, description: doc.intro });
  return (
    <main className="mx-auto max-w-3xl px-5 pb-20 pt-28">
      <nav aria-label="Breadcrumb" className="text-sm text-mute"><Link to="/" className="hover:text-gold">Home</Link> / <span aria-current="page">{doc.title}</span></nav>
      <Reveal>
        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">{doc.title}</h1>
        <p className="mt-2 text-sm text-gold">Last updated: {legal.updated}</p>
        <p className="mt-6 text-lg text-mute">{doc.intro}</p>
      </Reveal>
      {doc.sections.map((s, i) => (
        <Reveal key={s.h} className="mt-10">
          <h2 className="text-2xl font-semibold"><span className="mr-2 text-gold">{String(i + 1).padStart(2, "0")}</span>{s.h}</h2>
          {s.p.map((t) => <p key={t} className="mt-3 text-mute">{t}</p>)}
          {s.list && <ul className="mt-3 list-disc space-y-2 pl-5 text-mute">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
        </Reveal>
      ))}
      <Reveal className="glass mt-14 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Questions?</h2>
        <p className="mt-2 text-mute">
          Reach me through the <Link to="/#contact" className="text-gold hover:underline">contact form</Link>
          {author.email.includes("@") && <> or at <a href={`mailto:${author.email}`} className="text-gold hover:underline">{author.email}</a></>}.
          {" "}See also the <Link to={`/${other[0]}`} className="text-gold hover:underline">{other[1]}</Link>.
        </p>
      </Reveal>
    </main>
  );
}
