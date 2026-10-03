import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { author } from "../data/site.js";
// Profile photo (public/logo.webp) + brand name. Replace the file to change the logo.
export default function Logo({ size = "h-10 w-10", showName = true }) {
  return (
    <Link to="/#top" className="flex items-center gap-3" aria-label={`${author.brand} home`}>
      <motion.img whileHover={{ rotate: -8, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}
        src="/logo.webp" alt="" width="40" height="40" className={`${size} rounded-full object-cover ring-2 ring-gold/70`} />
      {showName && <span className="font-display text-lg font-semibold">{author.brand}</span>}
    </Link>
  );
}
