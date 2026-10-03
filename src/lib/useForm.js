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
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch(`https://formsubmit.co/ajax/${author.email}`, {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: subject, _template: "table", _captcha: "false" }),
      });
      if (!res.ok) throw new Error("send failed");
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
