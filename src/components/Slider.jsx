// ─────────────────────────────────────────────────────────────
//  components/Slider.jsx
//  Auto-cycling image slider with dot navigation.
//  Auto-advances every 4.5 s; dots allow manual override.
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

const AUTO_INTERVAL_MS = 4500;

export default function Slider({ imgs }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((n) => (n + 1) % imgs.length),
      AUTO_INTERVAL_MS
    );
    return () => clearInterval(timer);
  }, [imgs.length]);

  return (
    <>
      <div className="sl-wr">
        {imgs.map((src, k) => (
          <div key={k} className={`sl-sl${current === k ? " on" : ""}`}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="sl-dots">
        {imgs.map((_, k) => (
          <div
            key={k}
            className={`sl-d${current === k ? " on" : ""}`}
            onClick={() => setCurrent(k)}
          />
        ))}
      </div>
    </>
  );
}
