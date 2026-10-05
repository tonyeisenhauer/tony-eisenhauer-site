import { Link } from 'react-router-dom'
import { COMMUNITY_PHOTOS, MILESTONES, PRINCIPLES } from '../data/content'
import { LINKS } from '../data/links'
import { PageHero } from '../components/PageHero'

export function About() {
  return (
    <>
      <PageHero
        label="About"
        title="The story behind the deals"
        subtitle="Family-first creative finance investor. Mentored in SubTo. Closing with integrity across New England and expanding markets."
        image="/images/about-us.webp"
      >
        <Link to="/submit-deal" className="btn-primary">
          Submit a Deal
        </Link>
        <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Book a Call
        </a>
      </PageHero>

      <section className="bg-cream py-20">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-ink/75">
            <p>
              Tony Eisenhauer is a real estate investor based in New England, specializing in
              creative finance strategies — subject-to, seller finance, and value-add acquisitions.
              Mentored by Pace Morby and a proud member of the SubTo community, Tony has closed over
              $5M in creative finance deals.
            </p>
            <p>
              From Fix & Flips in Worcester County to Short-Term Rentals in New Hampshire and Florida,
              Tony builds portfolios designed for long-term wealth. He collaborates with investors
              nationwide and is always looking for new partnerships.
            </p>
            <p>
              Whether you&apos;re a motivated seller, a fellow investor looking to partner, or someone
              seeking lending solutions — Tony is the person to call. He leads with integrity, moves
              fast, and always finds a way to make the deal work.
            </p>
            <p>
              Alongside growth, Tony cares about providing affordable housing in the markets he serves
              — building community value without making the mission a pitch.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/buy-box" className="btn-on-light">
                View Buy Box
              </Link>
              <a
                href={LINKS.subto}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
              >
                Join SubTo
              </a>
            </div>
          </div>
          <img
            src="/images/tony-headshot-new.jpeg"
            alt="Tony Eisenhauer"
            className="w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-cream">
        <div className="container-page">
          <div className="mb-12 text-center">
            <p className="section-label mb-3">Principles</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">What drives Tony</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="card-dark text-center">
                <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-text">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-cream">
        <div className="container-page max-w-4xl">
          <div className="mb-12 text-center">
            <p className="section-label mb-3">Milestones</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">The journey</h2>
          </div>
          <ol className="relative space-y-6 border-l border-navy-700 pl-8">
            {MILESTONES.map((m, i) => (
              <li key={`${m.year}-${i}`} className="relative">
                <span className="absolute -left-[2.4rem] top-1.5 h-3.5 w-3.5 rounded-full border-4 border-navy-900 bg-gold" />
                <p className="text-sm font-semibold uppercase tracking-wider text-gold">{m.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-text">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="section-label mb-3">Community Proof</p>
            <h2 className="font-display text-3xl font-semibold text-navy-900">
              SubTo · $5M Club · Owners Club
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink/65">
              Tony is an active SubTo member and a 2nd Year Owners Club member — an elite network of
              creative finance investors led by Pace Morby.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {COMMUNITY_PHOTOS.map((p) => (
              <figure key={p.src} className="overflow-hidden rounded-xl bg-white shadow-sm">
                <img src={p.src} alt={p.caption} className="h-56 w-full object-cover" />
                <figcaption className="px-4 py-3 text-sm text-ink/65">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
