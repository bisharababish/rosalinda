// ─────────────────────────────────────────────────────────────
//  components/Footer.jsx
// ─────────────────────────────────────────────────────────────

import { SOCIALS, SocLink } from "../constants/socials";
import IMG from "../constants/images";

export default function Footer({ t, onNav }) {
  const [first, ...rest] = t.navName.split(" ");
  const last = rest.join(" ");

  return (
    <footer className="footer">
      <div className="ft-in">
        <div className="ft-logo" onClick={() => onNav("home")}>
          <img src={IMG.logo} alt="logo" className="ft-logo-img" />
          <span className="ft-logo-div" />
          <span className="ft-logo-text">
            <span className="ft-logo-first">{first}</span>
            {last && <span className="ft-logo-last">{last}</span>}
          </span>
        </div>

        <div className="ft-copy">
          {new Date().getFullYear()} © {t.footerCo} · {t.footerRights}
        </div>

        <div className="ft-soc">
          {SOCIALS.map((s) => (
            <SocLink key={s.key} s={s} className="ft-s" />
          ))}
        </div>
      </div>
    </footer>
  );
}
