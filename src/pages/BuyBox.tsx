import { Link } from 'react-router-dom'
import { BUY_BOXES, PARTNER_OPTIONS } from '../data/content'
import { LINKS } from '../data/links'
import { PageHero } from '../components/PageHero'

const accentText = {
  gold: 'accent-text-gold',
  copper: 'accent-text-copper',
  steel: 'accent-text-steel',
} as const

const accentBg = {
  gold: 'accent-bg-gold',
  copper: 'accent-bg-copper',
  steel: 'accent-bg-steel',
} as const

const accentSoft = {
  gold: 'accent-soft-gold',
  copper: 'accent-soft-copper',
  steel: 'accent-soft-steel',
} as const

const accentRing = {
  gold: 'accent-ring-gold',
  copper: 'accent-ring-copper',
  steel: 'accent-ring-steel',
} as const

const accentBorder = {
  gold: 'accent-border-gold',
  copper: 'accent-border-copper',
  steel: 'accent-border-steel',
} as const

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

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold/10 to-transparent" />
        <div className="container-page space-y-10">
          {BUY_BOXES.map((box, index) => {
            const reverse = index % 2 === 1
            return (
              <article
                key={box.id}
                id={box.id}
                className={`group overflow-hidden rounded-2xl border border-cream-dark bg-white transition duration-300 hover:-translate-y-1 ${accentRing[box.accent]}`}
              >
                <div
                  className={`grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] ${
                    reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative min-h-[240px] overflow-hidden sm:min-h-[300px] lg:min-h-full">
                    <img
                      src={box.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/35 to-navy-950/10" />
                    <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                      <div
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-xl text-navy-950 shadow-lg ${accentBg[box.accent]}`}
                      >
                        <span className="font-display text-xl font-semibold">{box.number}</span>
                      </div>
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${accentText[box.accent]}`}>
                          Strategy {box.number}
                        </p>
                        <h2 className="mt-2 font-display text-2xl font-semibold text-cream sm:text-3xl">
                          {box.title}
                        </h2>
                        <p className="mt-1 text-sm text-cream/75">{box.subtitle}</p>
                      </div>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1.5 ${accentBg[box.accent]}`}
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream-dark bg-navy-950/97 px-6 py-5 sm:px-8">
                      <div className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${accentSoft[box.accent]} ${accentText[box.accent]}`}>
                        {box.accentLabel} lane
                      </div>
                      <Link
                        to="/submit-deal"
                        className="btn-primary !px-4 !py-2 text-xs"
                      >
                        Submit to this box
                      </Link>
                    </div>
                    <div className="grid flex-1 gap-0 sm:grid-cols-2">
                      {box.criteria.map((c) => (
                        <div
                          key={c.label}
                          className="border-b border-cream-dark px-6 py-5 sm:border-r sm:px-8 even:sm:border-r-0 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${accentBg[box.accent]}`}
                            />
                            <p
                              className={`text-xs font-semibold uppercase tracking-[0.14em] ${accentText[box.accent]}`}
                            >
                              {c.label}
                            </p>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`h-px w-full border-t ${accentBorder[box.accent]} opacity-40`} />
              </article>
            )
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 text-cream sm:py-24">
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-accent-steel/10 blur-3xl" />
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <p className="section-label mb-3">Partner / Lending</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Invest with Tony</h2>
            <p className="mt-4 text-slate-text">
              First & second position, equity, and flexible structures — nationwide.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PARTNER_OPTIONS.map((p, i) => (
              <div
                key={p.title}
                className="card-dark relative overflow-hidden"
              >
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold/15 font-display text-sm font-semibold text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
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
