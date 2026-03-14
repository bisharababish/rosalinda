// ─────────────────────────────────────────────────────────────
//  pages/HomePage.jsx
//  Sections: Hero → About → Mission → Testimonials →
//            Story → Beliefs → Pledge
// ─────────────────────────────────────────────────────────────

import { useRef, useEffect } from "react";
import { Rv } from "../hooks/useReveal";
import Slider          from "../components/Slider";
import Footer          from "../components/Footer";
import IMG             from "../constants/images";

export default function HomePage({ t, onNav }) {
  // Refs for story chapter scroll-reveal (handled manually for stagger)
  const chapRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    chapRefs.forEach((r) => {
      const el = r.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) el.classList.add("on"); },
        { threshold: 0.12 }
      );
      obs.observe(el);
    });
  }, [t]);

  const scrollTo = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="page-enter">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="home" className="hero">
        <div className="hbg" style={{ backgroundImage: `url(${IMG.hero})` }} />
        <div className="hov" />
        <div className="hcont">
          <p className="h-gr">{t.heroGreeting}</p>
          <h1 className="h-nm">{t.heroName}</h1>
          <p className="h-sb">{t.heroSub}</p>
          <p className="h-tg">{t.heroTagline}</p>
          <button className="h-btn" onClick={() => scrollTo("about")}>
            {t.heroBtn}
          </button>
        </div>
        <div className="h-sc">
          <div className="h-sc-ln" />
          <span>{t.heroScroll}</span>
        </div>
      </section>

      <div className="div" />

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section id="about" className="sec about">
        <div className="si">
          <div className="ag">
            <div>
              <Rv cls="rv-l">
                <div className="lbl">{t.aboutLbl}</div>
                <h2 className="ttl">{t.aboutTitle}</h2>
              </Rv>
              <Rv d={100}>
                <p className="a-q">{t.aboutIntro}</p>
              </Rv>
              <Rv d={180}>
                <div className="a-bd">{t.aboutBody}</div>
                <div className="a-tags">
                  {t.aboutTags.map((tag) => (
                    <span key={tag} className="a-tag">{tag}</span>
                  ))}
                </div>
              </Rv>
            </div>
            <Rv cls="rv-r" d={120}>
              <Slider imgs={IMG.slider} />
            </Rv>
          </div>
        </div>
      </section>

      <div className="div" />

      {/* ── MISSION ──────────────────────────────────────── */}
      <section className="sec mission">
        <div className="si" style={{ maxWidth: 720, textAlign: "center" }}>
          <Rv>
            <div className="lbl" style={{ justifyContent: "center", color: "rgba(201,168,130,.62)" }}>
              {t.missionLbl}
            </div>
            <div className="m-orn" />
            <h2 className="m-ttl">{t.missionTitle}</h2>
            <p className="m-sub">{t.missionSub}</p>
          </Rv>
          <Rv d={120}>
            <div className="m-body">
              <p>{t.missionBody1}</p>
              <div className="lbl" style={{marginTop:'1.2rem',marginBottom:'.5rem',justifyContent:'center'}}>{t.missionBody2.split(':')[0]}</div>
              <p>{t.missionBody2.split(':').slice(1).join(':').trim()}</p>
            </div>
            <button className="btn" onClick={() => scrollTo("about")}>
              {t.missionBtn}
            </button>
          </Rv>
        </div>
      </section>

      <div className="div" style={{ opacity: ".18" }} />

      {/* ── PNN INTERVIEW ────────────────────────────────── */}
      <section className="sec interview-sec">
        <div className="si">
          <div className="iv-g">
            <Rv cls="rv-l">
              <a
                href="https://www.facebook.com/watch/?v=308048339005209"
                target="_blank"
                rel="noopener noreferrer"
                className="iv-thumb-wrap"
                aria-label={t.interviewWatch}
              >
                <img src={IMG.interview} alt={t.interviewTitle} className="iv-thumb" loading="lazy" />
                <div className="iv-play">
                  <svg viewBox="0 0 24 24" fill="white" width="38" height="38">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="iv-badge">PNN</div>
              </a>
            </Rv>
            <div>
              <Rv>
                <div className="lbl">{t.interviewLbl}</div>
                <h2 className="ttl">{t.interviewTitle}</h2>
                <div className="iv-sub">{t.interviewSub}</div>
              </Rv>
              <Rv d={100}>
                <p className="iv-body">{t.interviewBody}</p>
                <p className="iv-note">{t.interviewNote}</p>
                <a
                  href="https://www.facebook.com/watch/?v=308048339005209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ marginTop: "1.8rem", display: "inline-block" }}
                >
                  {t.interviewWatch}
                </a>
              </Rv>
            </div>
          </div>
        </div>
      </section>

      <div className="div" />

      {/* ── STORY ────────────────────────────────────────── */}
      <section className="sec story">
        <div className="si">
          <div className="story-g">
            <div className="story-stk">
              <Rv>
                <img src={IMG.story} alt="Rosalinda" className="story-img" loading="lazy" />
                <div className="story-q">
                  <p>{t.storyQuote}</p>
                </div>
              </Rv>
            </div>
            <div>
              <div className="lbl" style={{ color: "rgba(201,168,130,.62)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                {t.storyLbl}
              </div>
              {t.storyChapters.map((ch, k) => (
                <div
                  key={k}
                  className="story-ch"
                  ref={chapRefs[k]}
                  style={{ transitionDelay: `${k * 90}ms` }}
                >
                  <p>{ch.b}</p>
                  <p>{ch.b2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <div className="div" />

      {/* ── PLEDGE ───────────────────────────────────────── */}
      <section className="sec pledge">
        <div className="si" style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Rv>
            <div className="lbl" style={{ justifyContent: "center" }}>{t.pledgeLbl}</div>
            <h2 className="pl-ttl">{t.pledgeTitle}</h2>
            <div className="pl-ln" />
          </Rv>
          <Rv d={100}>
            <p className="pl-tx">{t.pledgeBody}</p>
            <div className="pl-ln" />
            <div className="pl-sg">{t.pledgeSig}</div>
          </Rv>
        </div>
      </section>

      <Footer t={t} onNav={onNav} />
    </div>
  );
}
