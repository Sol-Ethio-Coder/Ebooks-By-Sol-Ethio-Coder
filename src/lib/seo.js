import { useEffect } from "react";
// Sets title/meta/JSON-LD per page. For crawlers that don't run JS, add prerendering later (see README notes).
export function useSEO({ title, description, jsonLd }) {
  useEffect(() => {
    document.title = title;
    const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el && val) el.setAttribute(attr, val); };
    set('meta[name="description"]', "content", description);
    set('meta[property="og:title"]', "content", title);
    set('meta[property="og:description"]', "content", description);
    let s = document.getElementById("ld-json");
    if (!s) { s = document.createElement("script"); s.id = "ld-json"; s.type = "application/ld+json"; document.head.appendChild(s); }
    s.textContent = jsonLd ? JSON.stringify(jsonLd) : "";
  }, [title, description, jsonLd]);
}
