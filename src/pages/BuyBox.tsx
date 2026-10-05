import { Link } from 'react-router-dom'
import { BUY_BOXES, PARTNER_OPTIONS } from '../data/content'
import { LINKS } from '../data/links'
import { PageHero } from '../components/PageHero'

export function BuyBox() {
  return (
    <>
      <PageHero
        label="Buy Box"
        title="What Tony buys"
        subtitle="Clear criteria. No contradictions. Submit deals that fit — or partner through lending and equity."
        image="/images/tony-buybox-bg.webp"
      >
        <Link to="/submit-deal" className="btn-primary">
          Submit a Deal
        </Link>
        <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Book a Call
        </a>
      </PageHero>

      <section className="bg-cream py-20">
        <div className="container-page space-y-8">
          {BUY_BOXES.map((box) => (
            <article
              key={box.id}
              id={box.id}
              className="overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm"
            >
              <div className="border-b border-cream-dark bg-navy-950 px-6 py-6 text-cream sm:px-8">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      Strategy {box.number}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                      {box.title}
                    </h2>
                    <p className="mt-1 text-slate-text">{box.subtitle}</p>
                  </div>
                  <Link to="/submit-deal" className="btn-primary !px-4 !py-2 text-xs">
                    Submit to this box
                  </Link>
                </div>
              </div>
              <div className="grid gap-0 sm:grid-cols-2">
                {box.criteria.map((c) => (
                  <div
                    key={c.label}
                    className="border-b border-cream-dark px-6 py-5 sm:border-r sm:px-8 even:sm:border-r-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark">
                      {c.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.value}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-cream">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <p className="section-label mb-3">Partner / Lending</p>
            <h2 className="font-display text-3xl font-semibold">Invest with Tony</h2>
            <p className="mt-4 text-slate-text">
              First & second position, equity, and flexible structures — nationwide.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PARTNER_OPTIONS.map((p) => (
              <div key={p.title} className="card-dark">
                <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-text">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/submit-deal" className="btn-primary">
              Submit a Deal / Partnership
            </Link>
            <a
              href={LINKS.breezeLender}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Use My Creative Lender
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
