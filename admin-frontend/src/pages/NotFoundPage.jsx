import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <header className="topbar">
        <div>
          <h2>Page Not Found</h2>
          <p>The admin route you opened does not exist.</p>
        </div>
        <div className="status-pill">404</div>
      </header>

      <section className="dashboard-grid">
        <article className="card full-width">
          <span className="eyebrow">Routing</span>
          <h3>Check the sidebar or head back to the dashboard.</h3>
          <p className="hero-copy">
            The requested route is not part of the current admin panel setup.
          </p>
          <Link to="/" className="inline-link">Go to Dashboard</Link>
        </article>
      </section>
    </>
  )
}
