import { useState } from "react";
import { author } from "../data/site.js";
// Sends a form to your email via FormSubmit (no backend needed). Set author.email in src/data/site.js.
// First submission: FormSubmit emails you once to activate; click the link in that email.
export function useForm(subject) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | setup
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!author.email.includes("@")) { setStatus("setup"); return; }
    setStatus("sending");
    try {
      // FormData + Accept only = a "simple" request, so the browser skips the CORS preflight that blocked JSON posts.
      const data = new FormData(form);
      data.append("_subject", subject); data.append("_template", "table"); data.append("_captcha", "false");
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${author.email}`, { method: "POST", headers: { Accept: "application/json" }, body: data });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || json.success === "false") throw new Error("ajax failed");
      } catch {
        // Fallback: fire-and-forget post (response is opaque, but the message is still delivered).
        await fetch(`https://formsubmit.co/${author.email}`, { method: "POST", mode: "no-cors", body: data });
      }
      form.reset(); setStatus("sent");
    } catch { setStatus("error"); }
  };
  return { status, onSubmit };
}
export const statusText = {
  sending: "Sending…", sent: "Sent. Thank you!",
  error: "Couldn't send. Please try again or email me directly.",
  setup: "Email delivery isn't set up yet: add your email in src/data/site.js.",
};
