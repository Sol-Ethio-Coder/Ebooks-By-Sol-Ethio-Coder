import { motion } from "motion/react";
import { Github, Linkedin, Youtube, Send, Globe } from "lucide-react";
import { author } from "../data/site.js";
const icons = { github: Github, linkedin: Linkedin, youtube: Youtube, telegram: Send, website: Globe };
// Round icon buttons for every social in author.socials that has a URL (edit them in src/data/site.js).
export default function SocialLinks({ className = "" }) {
  const items = author.socials.filter((s) => s.href && s.href !== "#");
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((s) => {
        const Icon = icons[s.id] ?? Globe;
        return (
          <li key={s.id}>
            <motion.a whileHover={{ y: -3 }} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}
              className="glass grid h-10 w-10 place-items-center rounded-full text-mute transition hover:text-gold"><Icon size={18} /></motion.a>
          </li>
        );
      })}
    </ul>
  );
}
