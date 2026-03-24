import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="hero-panel">
      <span className="section-tag">Welcome</span>
      <h2>Education that helps students grow with confidence.</h2>
      <p>
        Sunrise School offers a strong academic foundation, caring mentorship, and
        a vibrant learning environment for students and families.
      </p>
      <Link to="/about" className="cta-link">Read About Us</Link>
    </section>
  )
}
