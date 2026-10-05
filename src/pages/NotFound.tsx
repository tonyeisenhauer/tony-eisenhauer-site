import { Link } from 'react-router-dom'
import { LINKS } from '../data/links'

export function NotFound() {
  return (
    <section className="bg-navy-950 py-28 text-cream">
      <div className="container-page max-w-xl text-center">
        <p className="section-label mb-3">404</p>
        <h1 className="font-display text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-slate-text">
          That route doesn’t exist. Head home, submit a deal, or book a call.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Home
          </Link>
          <Link to="/submit-deal" className="btn-secondary">
            Submit a Deal
          </Link>
          <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="btn-dark">
            Book a Call
          </a>
        </div>
      </div>
    </section>
  )
}
