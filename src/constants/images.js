// ─────────────────────────────────────────────────────────────
//  images.js
//  Centralised image references.
// ─────────────────────────────────────────────────────────────

import rosa1      from "../pics/rosa1.jpeg";
import rosa2      from "../pics/rosa2.jpeg";
import rosa3      from "../pics/rosa3.jpeg";
import rosa4      from "../pics/rosa4.jpeg";
import interview  from "../pics/interview.jpeg";
import logo       from "../pics/logo.jpeg";
import couples    from "../pics/couples.jpeg";
import teenagers  from "../pics/teenagers.jpeg";
import individual from "../pics/individual .jpeg";
import sofa       from "../pics/sofa prec recorded.avif";
import contact    from "../pics/contact.avif";

const IMG = {
  // ── Page heroes ───────────────────────────────────────────
  hero:    rosa2,
  sesHero: sofa,
  conHero: contact,

  // ── About section ─────────────────────────────────────────
  story:  rosa1,
  slider: [rosa1, rosa3, rosa4],

  // ── Interview ─────────────────────────────────────────────
  interview,

  // ── Logo ──────────────────────────────────────────────────
  logo,

  // ── Service card photos ───────────────────────────────────
  svcElderly:   individual,
  svcCouples:   couples,
  svcTeens:     teenagers,
  svcTests:     rosa3,
  svcCourses:   individual,
};

export default IMG;
