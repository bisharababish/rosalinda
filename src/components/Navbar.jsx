// ─────────────────────────────────────────────────────────────
//  components/Navbar.jsx
// ─────────────────────────────────────────────────────────────

import IMG from "../constants/images";

export default function Navbar({ t, scrolled, currentPage, onNav, onToggleLang }) {
  const isActive = (link) => link.page === currentPage;
  const isAr = t.dir === "rtl";

  const [first, ...rest] = t.navName.split(" ");
  const last = rest.join(" ");

  return (
    <nav className={`nav${scrolled ? " sc" : ""}`}>
      {/* Logo lockup */}
      <span
        className="nav-logo"
        style={{ order: isAr ? 3 : 0 }}
        onClick={() => onNav("home")}
      >
        <span className="nav-logo-text">
          <span className="nav-logo-first">{first}</span>
          {last && <span className="nav-logo-last">{last}</span>}
        </span>
        <span className="nav-logo-div" />
        <img src={IMG.logo} alt="logo" className="nav-logo-img" />
      </span>

      <div className="nav-space" style={{ order: isAr ? 2 : 1 }} />

      {/* Nav links */}
      <ul className="nav-links" style={{ order: isAr ? 1 : 2 }}>
        {t.links.map((lk) => (
          <li key={lk.id}>
            {lk.soon ? (
              <span className="nav-link nav-link-soon">
                {lk.label}
                <span className="nav-soon-badge">{isAr ? "قريبًا" : "Soon"}</span>
              </span>
            ) : (
              <span
                className={`nav-link${isActive(lk) ? " act" : ""}`}
                onClick={() => onNav(lk.page, lk.anchor)}
              >
                {lk.label}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Language toggle */}
      <button
        className="nav-lang"
        style={{ order: isAr ? 0 : 3 }}
        onClick={onToggleLang}
      >
        {t.toggle}
      </button>
    </nav>
  );
}
