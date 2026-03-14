// ─────────────────────────────────────────────────────────────
//  pages/ContactPage.jsx
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { Rv }       from "../hooks/useReveal";
import Footer       from "../components/Footer";
import { SOCIALS, SocLink } from "../constants/socials";
import IMG          from "../constants/images";

export default function ContactPage({ t, onNav }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subj: "", msg: "" });

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const submit = () => {
    if (!form.name || !form.email) return;
    // TODO: wire up to email service / backend
    setSent(true);
  };

  return (
    <div className="page-enter">

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="con-hero" style={{ paddingTop: 68 }}>
        <div className="con-hbg" style={{ backgroundImage: `url(${IMG.conHero})` }} />
        <div className="con-hov" />
        <div className="con-hc">
          <h1>{t.conHeroTitle}</h1>
          <p>{t.conHeroSub}</p>
        </div>
      </div>

      {/* ── CONTACT BODY ─────────────────────────────────── */}
      <section className="sec contact">
        <div className="si">
          <div className="con-g">

            {/* Info column */}
            <Rv cls="rv-l">
              <div>
                <h2
                  className="ttl"
                  style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", marginBottom: "2rem" }}
                >
                  {t.conInfoTitle}
                </h2>

                <div className="ci-it">
                  <div className="ci-ic">✉</div>
                  <div>
                    <div className="ci-lbl">{t.conEmailLbl}</div>
                    <div className="ci-val">{t.conEmailVal}</div>
                  </div>
                </div>

                <div className="ci-it">
                  <div className="ci-ic">📞</div>
                  <div>
                    <div className="ci-lbl">{t.conPhoneLbl}</div>
                    <div className="ci-val">{t.conPhoneVal}</div>
                  </div>
                </div>

                <div className="ci-it">
                  <div className="ci-ic">🕐</div>
                  <div>
                    <div className="ci-lbl">{t.conAvailLbl}</div>
                    <div className="ci-val">{t.conAvailVal}</div>
                  </div>
                </div>

                <div style={{ marginTop: "1rem" }}>
                  <div className="ci-lbl">{t.conSocialLbl}</div>
                  <div className="soc-row">
                    {SOCIALS.map((s) => (
                      <SocLink key={s.key} s={s} className="soc-lk" />
                    ))}
                  </div>
                </div>
              </div>
            </Rv>

            {/* Form column */}
            <Rv cls="rv-r" d={150}>
              <div className="c-form">
                <h3 style={{ fontFamily: "'Amiri',serif", fontSize: "1.4rem", marginBottom: ".35rem", color: "var(--dk)" }}>
                  {t.conFormTitle}
                </h3>
                <p style={{ fontSize: ".85rem", color: "var(--tl)", marginBottom: "1.6rem" }}>
                  {t.conFormSub}
                </p>

                {sent ? (
                  <div className="form-success">
                    <span className="check">🌸</span>
                    {t.fSuccess}
                  </div>
                ) : (
                  <>
                    <div className="fg">
                      <label>{t.fName}</label>
                      <input type="text" placeholder={t.fNamePh} value={form.name} onChange={update("name")} />
                    </div>
                    <div className="fg">
                      <label>{t.fEmail}</label>
                      <input type="email" placeholder={t.fEmailPh} value={form.email} onChange={update("email")} />
                    </div>
                    <div className="fg">
                      <label>{t.fSubj}</label>
                      <input type="text" placeholder={t.fSubjPh} value={form.subj} onChange={update("subj")} />
                    </div>
                    <div className="fg">
                      <label>{t.fMsg}</label>
                      <textarea placeholder={t.fMsgPh} value={form.msg} onChange={update("msg")} />
                    </div>
                    <button
                      className="btn btn-f"
                      style={{ width: "100%", fontSize: ".93rem" }}
                      onClick={submit}
                    >
                      {t.fBtn}
                    </button>
                  </>
                )}
              </div>
            </Rv>

          </div>
        </div>
      </section>

      <Footer t={t} onNav={onNav} />
    </div>
  );
}
