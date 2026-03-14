// ─────────────────────────────────────────────────────────────
//  App.jsx
//  Root component.
//  Owns: language state, page routing, scroll detection.
//  Renders: global CSS, Navbar, and the active page component.
// ─────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from "react";

import translations   from "./constants/translations";
import Navbar         from "./components/Navbar";
import HomePage       from "./pages/HomePage";
import SessionsPage   from "./pages/SessionsPage";
import ContactPage    from "./pages/ContactPage";

import "./styles/global.css";

export default function App() {
  const [lang, setLang]   = useState("ar");    // "ar" | "en"
  const [page, setPage]   = useState("home");  // "home" | "sessions" | "contact"
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  // ── Navbar scroll effect ────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Navigation helper ────────────────────────────────────────
  // target  – page key ("home" | "sessions" | "contact")
  // anchor  – optional element id to smooth-scroll to after navigation
  const navigate = useCallback((target, anchor) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setPage(target);
    if (anchor) {
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  return (
    <div dir={t.dir} lang={t.lang}>
      <Navbar
        t={t}
        scrolled={scrolled}
        currentPage={page}
        onNav={navigate}
        onToggleLang={toggleLang}
      />

      {page === "home"     && <HomePage     key={`home-${lang}`}    t={t} onNav={navigate} />}
      {page === "sessions" && <SessionsPage key={`ses-${lang}`}     t={t} onNav={navigate} />}
      {page === "contact"  && <ContactPage  key={`con-${lang}`}     t={t} onNav={navigate} />}
    </div>
  );
}
