// ─────────────────────────────────────────────────────────────
//  pages/SessionsPage.jsx
// ─────────────────────────────────────────────────────────────

import { Rv }       from "../hooks/useReveal";
import ServiceCard  from "../components/ServiceCard";
import Footer       from "../components/Footer";
import IMG          from "../constants/images";

const PSY_CARDS = {
  ar: [
    { photoKey: "svcCourses",  tag: "جلسات نفسية", title: "فردية",       desc: "جلسات نفسية فردية مخصصة لاحتياجاتكِ الشخصية، تساعدكِ على فهم ذاتكِ وتجاوز التحديات النفسية.",  price: "$35" },
    { photoKey: "svcCouples",  tag: "جلسات نفسية", title: "الأزواج",     desc: "جلسات للأزواج تُعزّز التواصل وتُعالج الصراعات وتبني جسوراً أعمق من الفهم المتبادل والحب.",       price: "$50" },
    { photoKey: "svcTeens",    tag: "جلسات نفسية", title: "الجماعي",    desc: "جلسات علاجية أو إرشادية يجتمع فيها عدد من الأفراد في لقاء واحد، يشارك فيها أكثر من شخص في الوقت نفسه، وقد تشمل أفرادًا من العائلة، أصدقاء، أو أشخاصًا يمرّون بتجارب وظروف متشابهة.", price: "$45" },
  ],
  en: [
    { photoKey: "svcCourses",  tag: "Psychology Sessions", title: "Individual", desc: "One-on-one psychological sessions tailored to your personal needs, helping you understand yourself and overcome challenges with depth and professionalism.", price: "$35" },
    { photoKey: "svcCouples",  tag: "Psychology Sessions", title: "Couples",    desc: "Couples sessions that strengthen communication, address conflict, and build deeper bridges of mutual understanding and love.",                              price: "$50" },
    { photoKey: "svcTeens",    tag: "Psychology Sessions", title: "Group",      desc: "Therapeutic or counseling sessions where a number of individuals meet together, sharing the space with family members, friends, or people going through similar experiences.", price: "$45" },
  ],
};

export default function SessionsPage({ t, onNav }) {
  const isAr = t.dir === "rtl";
  const lang  = isAr ? "ar" : "en";
  const visaBtn = isAr ? "الدفع قريباً"      : "Payment Coming Soon";
  const visaSub = isAr ? "فيزا / ماستركارد" : "Visa / Mastercard";

  return (
    <div className="page-enter">

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="ses-hero" style={{ paddingTop: 68 }}>
        <div className="ses-hbg" style={{ backgroundImage: `url(${IMG.sesHero})` }} />
        <div className="ses-hov" />
        <div className="ses-hc">
          <h1>{t.sesHeroTitle}</h1>
          <p>{t.sesHeroSub}</p>
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="sec ses-how">
        <div className="si">
          <Rv>
            <div className="lbl" style={{ color: "rgba(201,168,130,.62)" }}>
              {isAr ? "كيف تعمل؟" : "How It Works"}
            </div>
          </Rv>
          <Rv d={80}>
            <h2 className="ttl" style={{ color: "white" }}>{t.sesHowTitle}</h2>
          </Rv>
          <div className="ses-steps">
            {t.sesSteps.map((s, k) => (
              <Rv key={k} d={k * 100}>
                <div className="ses-step">
                  <div className="ses-sn">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <div className="div" />

      {/* ── SERVICE 1 · PSYCHOLOGICAL SESSIONS ──────────── */}
      <section className="sec svc-sec" style={{ background: "var(--n1)" }}>
        <div className="si">
          <Rv>
            <div className="lbl">{isAr ? "خدمة ١" : "Service 1"}</div>
            <div className="svc-sec-hd">
              <span className="svc-sec-icon">🧠</span>
              <div>
                <h2 className="ttl" style={{ marginBottom: ".3rem" }}>
                  {isAr ? "جلسات نفسية فردية" : "Individual Psychological Sessions"}
                </h2>
                <p className="svc-sec-sub">
                  {isAr ? "اختاري النوع الذي يناسب احتياجكِ" : "Choose the type that suits your needs"}
                </p>
              </div>
            </div>
          </Rv>
          <div className="sp-grid" style={{ marginTop: "2.2rem" }}>
            {PSY_CARDS[lang].map((c, k) => (
              <Rv key={k} d={k * 110}>
                <ServiceCard
                  tag={c.tag} title={c.title} desc={c.desc}
                  price={c.price}
                  dur={isAr ? "/ جلسة" : "/ session"}
                  visaBtn={visaBtn} visaSub={visaSub}
                  accent="var(--g1)"
                />
              </Rv>
            ))}
          </div>
        </div>
      </section>

      <div className="div" />

      {/* ── SERVICE 2 · PSYCHOLOGICAL TESTS ─────────────── */}
      <section className="sec svc-sec" style={{ background: "var(--n2)" }}>
        <div className="si">
          <Rv>
            <div className="lbl">{isAr ? "خدمة ٢" : "Service 2"}</div>
            <div className="svc-sec-hd">
              <span className="svc-sec-icon">📋</span>
              <div>
                <h2 className="ttl" style={{ marginBottom: ".3rem" }}>
                  {isAr ? "اختبارات نفسية" : "Psychological Tests"}
                </h2>
                <p className="svc-sec-sub">
                  {isAr ? "اكتشفي نفسكِ من خلال اختبارات مُعتمَدة" : "Discover yourself through certified assessments"}
                </p>
              </div>
            </div>
          </Rv>
          <div className="sp-grid sp-grid-wide" style={{ marginTop: "2.2rem" }}>
            <Rv d={80}>
              <ServiceCard
                tag={isAr ? "اختبارات نفسية" : "Psychological Tests"}
                title={isAr ? "اختبارات نفسية متخصصة" : "Specialised Psychological Tests"}
                desc={
                  isAr
                    ? "اختبارات مُعتمَدة ومُصمَّمة لمساعدتكِ على فهم شخصيتكِ وأنماط تفكيركِ ومجالات النمو لديكِ. تشمل: اختبار الشخصية، اختبار الذكاء العاطفي، واختبار أنماط السلوك. نتائج مفصّلة مع جلسة تفسير شاملة."
                    : "Certified tests designed to help you understand your personality, thinking patterns, and growth areas. Includes: personality test, emotional intelligence, and behavioural patterns. Detailed results with a full interpretation session."
                }
                price="$30"
                dur={isAr ? "/ جلسة" : "/ session"}
                visaBtn={visaBtn} visaSub={visaSub}
                accent="#7a9e7e"
              />
            </Rv>
          </div>
        </div>
      </section>

      {/* ── BOOK CTA ─────────────────────────────────────── */}
      <div className="ses-book">
        <Rv>
          <h2>{t.sesBookTitle}</h2>
          <p>{t.sesBookSub}</p>
          <button className="btn" onClick={() => onNav("contact")}>
            {t.sesBookBtn}
          </button>
        </Rv>
      </div>

      <Footer t={t} onNav={onNav} />
    </div>
  );
}
