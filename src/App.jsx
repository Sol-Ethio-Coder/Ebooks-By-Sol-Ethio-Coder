import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
const BookDetail = lazy(() => import("./pages/BookDetail.jsx")); // code-split
const Legal = lazy(() => import("./pages/Legal.jsx"));

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) { requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" })); }
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button key="top" initial={{ opacity: 0, scale: 0.6, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -3 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
          className="glass fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full text-gold"><ArrowUp size={20} /></motion.button>
      )}
    </AnimatePresence>
  );
}
export default function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll(), scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded focus:bg-gold focus:px-3 focus:py-2">Skip to content</a>
      <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gold" />
      <Navbar /><ScrollManager /><BackToTop />
      <div id="main">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
            <Suspense fallback={<div className="min-h-screen" />}>
              <Routes location={location}><Route path="/" element={<Home />} /><Route path="/books/:slug" element={<BookDetail />} /><Route path="/privacy" element={<Legal type="privacy" />} /><Route path="/terms" element={<Legal type="terms" />} /><Route path="*" element={<BookDetail />} /></Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
