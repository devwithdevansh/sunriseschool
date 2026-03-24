import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="content-card">
      <span className="section-tag">404</span>
      <h2>Page not found</h2>
      <p className="content-copy">
        The page you are looking for does not exist on the public website.
      </p>
      <Link to="/" className="cta-link">Go back home</Link>
    </section>
  )
}
