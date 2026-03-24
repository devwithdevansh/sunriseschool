export default function SectionPage({ eyebrow, title, description, routePath, items }) {
  return (
    <>
      <header className="topbar">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="status-pill">{routePath}</div>
      </header>

      <section className="dashboard-grid">
        <article className="card hero-card">
          <span className="eyebrow">{eyebrow}</span>
          <h3 className="hero-title">{title}</h3>
          <p className="hero-copy">{description}</p>
        </article>

        <article className="card summary-card">
          <span className="eyebrow">Status</span>
          <ul className="metric-list">
            <li>
              <strong>Route</strong>
              <span>Ready</span>
            </li>
            <li>
              <strong>UI</strong>
              <span>Scaffolded</span>
            </li>
            <li>
              <strong>Backend</strong>
              <span>Connect next</span>
            </li>
          </ul>
        </article>

        <article className="card full-width">
          <span className="eyebrow">Planned Actions</span>
          <ul className="quick-list">
            {items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  )
}
