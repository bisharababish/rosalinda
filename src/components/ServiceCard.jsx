// ─────────────────────────────────────────────────────────────
//  components/ServiceCard.jsx
// ─────────────────────────────────────────────────────────────

export default function ServiceCard({
  photo,
  tag,
  title,
  desc,
  price,
  dur,
  visaBtn,
  visaSub,
  accent = "var(--g1)",
}) {
  return (
    <div className="sp-card" style={{ "--acc": accent }}>

      {photo && (
        <div className="sp-photo-wrap">
          <img src={photo} alt={title} className="sp-photo" />
        </div>
      )}

      <div className="sp-body">
        <div className="sp-tag">{tag}</div>
        <h3 className="sp-title">{title}</h3>
        <div className="sp-rule" />
        <p className="sp-desc">{desc}</p>
      </div>

      <div className="sp-footer">
        <div className="sp-price-block">
          <span className="sp-price">{price}</span>
          {dur && <span className="sp-dur">{dur}</span>}
        </div>
        <button className="sp-pay-btn" disabled>
          <span className="sp-pay-icon">💳</span>
          <span>
            <span className="sp-pay-main">{visaBtn}</span>
            <span className="sp-pay-sub">{visaSub}</span>
          </span>
        </button>
      </div>

    </div>
  );
}
