// ─────────────────────────────────────────────────────────────
//  components/TestiCarousel.jsx
//  Horizontally scrolling testimonial carousel.
//  RTL-aware: arrow directions and offset sign flip automatically.
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import IMG from "../constants/images";

const CARD_WIDTH_PX = 366; // must match .t-card width in CSS

export default function TestiCarousel({ items, dir }) {
  const [index, setIndex] = useState(0);

  const isRtl  = dir === "rtl";
  const offset = isRtl ? index * CARD_WIDTH_PX : -(index * CARD_WIDTH_PX);

  const prev = () => setIndex((n) => Math.max(0, n - 1));
  const next = () => setIndex((n) => Math.min(items.length - 1, n + 1));

  return (
    <>
      <div className="t-wrap">
        <div
          className="t-track"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {items.map((item, k) => (
            <div key={k} className="t-card">
              <div className="t-qi">"</div>
              <p className="t-tx">{item.text}</p>
              <div className="t-per">
                <img
                  src={IMG.avatars[k % IMG.avatars.length]}
                  alt={item.name}
                  className="t-av"
                />
                <div>
                  <div className="t-nm">{item.name}</div>
                  <div className="t-rl">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="t-navs" style={{ marginTop: "1.6rem" }}>
        {/* In RTL, left arrow = next; in LTR, left arrow = prev */}
        <button className="t-arr" onClick={isRtl ? next : prev}>←</button>
        <button className="t-arr" onClick={isRtl ? prev : next}>→</button>
      </div>
    </>
  );
}
