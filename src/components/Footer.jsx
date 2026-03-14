// ─────────────────────────────────────────────────────────────
//  components/Footer.jsx
// ─────────────────────────────────────────────────────────────

import { SOCIALS, SocLink } from "../constants/socials";
import IMG from "../constants/images";

export default function Footer({ t, onNav }) {
  const [first, ...rest] = t.navName.split(" ");
  const last = rest.join(" ");
  const isAr = t.dir === "rtl";

  return (
    <footer className="footer">
      <div className="ft-main">

        {/* ── Col 1: Brand ── */}
        <div className="ft-col ft-brand">
          <div className="ft-logo" onClick={() => onNav("home")}>
            <img src={IMG.logo} alt="logo" className="ft-logo-img" />
            <span className="ft-logo-div" />
            <span className="ft-logo-text">
              <span className="ft-logo-first">{first}</span>
              {last && <span className="ft-logo-last">{last}</span>}
            </span>
          </div>
          <p className="ft-tagline">{t.footerTagline}</p>
          <div className="ft-soc">
            {SOCIALS.map((s) => (
              <SocLink key={s.key} s={s} className="ft-s" />
            ))}
          </div>
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div className="ft-col">
          <h4 className="ft-col-ttl">{isAr ? "روابط سريعة" : "Quick Links"}</h4>
          <ul className="ft-links">
            {t.links.map((lk) => (
              <li key={lk.id}>
                <span className="ft-link" onClick={() => onNav(lk.page, lk.anchor)}>
                  {lk.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Contact ── */}
        <div className="ft-col">
          <h4 className="ft-col-ttl">{isAr ? "تواصلي معنا" : "Get in Touch"}</h4>
          <ul className="ft-contact">
            <li>
              <span className="ft-ci">✉</span>
              <a href={`mailto:${t.conEmailVal}`} className="ft-ca">{t.conEmailVal}</a>
            </li>
            <li>
              <span className="ft-ci">☎</span>
              <a href={`tel:${t.conPhoneVal.replace(/\s/g,"")}`} className="ft-ca" dir="ltr">{t.conPhoneVal}</a>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="ft-bar">
        <span>{new Date().getFullYear()} © {t.footerCo}</span>
        <span>{t.footerRights}</span>
      </div>
    </footer>
  );
}
