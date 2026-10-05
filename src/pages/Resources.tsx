import { Link } from 'react-router-dom'
import { RESOURCES } from '../data/content'
import { LINKS } from '../data/links'
import { PageHero } from '../components/PageHero'

export function Resources() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Tools & education Tony trusts"
        subtitle="Podcasts, events, lenders, and community links — same destinations as the live site."
      >
        <Link to="/submit-deal" className="btn-primary">
          Submit a Deal
        </Link>
        <a href={LINKS.subto} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Join SubTo
        </a>
      </PageHero>

      <section className="bg-cream py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <a
              key={r.title}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-light group flex flex-col"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                {r.tag}
              </span>
              <h2 className="mt-3 font-display text-xl font-semibold text-navy-900 group-hover:text-gold-dark">
                {r.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{r.description}</p>
              <span className="mt-5 text-sm font-semibold text-gold-dark">Open →</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
