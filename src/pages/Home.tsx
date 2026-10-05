import { Link } from 'react-router-dom'
import {
  BUY_BOXES,
  COMMUNITY_PHOTOS,
  PRINCIPLES,
  STATS,
  TESTIMONIALS,
} from '../data/content'
import { LINKS } from '../data/links'

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-cream">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-35"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/tony-headshot-new.jpeg"
          >
            <source src="/images/tony-hero-v3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/55" />
        </div>
        <div className="container-page relative z-10 grid items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <p className="section-label mb-4">Investor · Entrepreneur · Community Leader</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Tony Eisenhauer
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl">
              Creative finance investor who closes with integrity — subject-to, seller finance, and
              value-add deals across New England and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/submit-deal" className="btn-primary">
                Submit a Deal
              </Link>
              <a
                href={LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Book a Call
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-2xl border border-gold/25" />
            <img
              src="/images/tony-headshot-new.jpeg"
              alt="Tony Eisenhauer"
              className="relative w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y border-cream-dark bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-text">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Buy boxes teaser */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="section-label mb-3">Active Strategies</p>
            <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Three clear buy boxes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Know exactly what Tony buys — then submit with confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BUY_BOXES.map((box) => (
              <Link
                key={box.id}
                to="/buy-box"
                className="card-light group flex flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {box.number}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-navy-900 group-hover:text-gold-dark">
                  {box.title}
                </h3>
                <p className="mt-1 text-sm text-ink/60">{box.subtitle}</p>
                <p className="mt-4 text-sm font-medium text-navy-800">{box.shortStrategy}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{box.shortLocation}</p>
                <span className="mt-5 text-sm font-semibold text-gold group-hover:text-gold-dark">
                  View criteria →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/submit-deal" className="btn-on-light">
              Submit a Deal
            </Link>
          </div>
        </div>
      </section>

      {/* Peak & Pine teaser */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-cream sm:py-24">
        <img
          src="/images/b99c3818.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="container-page relative z-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="section-label mb-3">Luxury STR</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Peak & Pine Retreat</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-text">
              A fully renovated 5BR / 2BA mountain home in Intervale, NH — sleeps 12, minutes from
              North Conway, Storyland, and White Mountain adventure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/luxury-str" className="btn-primary">
                Explore Peak & Pine
              </Link>
              <a
                href={LINKS.peakAndPine}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Book Your Stay
              </a>
            </div>
          </div>
          <img
            src="/images/8f53a055.avif"
            alt="Peak and Pine Retreat outdoor area"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Integrity / about short */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/images/about-us.webp"
            alt="Tony Eisenhauer"
            className="w-full rounded-xl object-cover shadow-lg"
          />
          <div>
            <p className="section-label mb-3">About Tony</p>
            <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Integrity first. Family always.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Mentored by Pace Morby and a proud SubTo member, Tony has closed over $5M in creative
              finance deals. He leads with transparency, moves fast, and builds for long-term wealth —
              including a light but real focus on providing affordable housing in the communities he
              serves.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {PRINCIPLES.slice(0, 4).map((p) => (
                <div key={p.title} className="rounded-lg border border-cream-dark bg-cream/60 p-4">
                  <p className="text-sm font-semibold text-navy-900">{p.title}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline-dark mt-8">
              Read the full story
            </Link>
          </div>
        </div>
      </section>

      {/* Community proof photos */}
      <section className="bg-navy-950 py-20 text-cream sm:py-24">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="section-label mb-3">In The Community</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Tony in action</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {COMMUNITY_PHOTOS.map((p) => (
              <figure key={p.src} className="overflow-hidden rounded-xl border border-navy-700">
                <img src={p.src} alt={p.caption} className="h-64 w-full object-cover" />
                <figcaption className="bg-navy-900 px-4 py-3 text-sm text-slate-text">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-page">
          <div className="mb-12 text-center">
            <p className="section-label mb-3">What Others Say</p>
            <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Trusted to close
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="card-light">
                <p className="text-base leading-relaxed text-ink/80">“{t.quote}”</p>
                <footer className="mt-6 border-t border-cream-dark pt-4">
                  <p className="font-semibold text-navy-900">{t.name}</p>
                  <p className="text-sm text-ink/55">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink/55">
            Tony is a 2nd Year Owners Club member — part of an elite group of investors in Pace
            Morby&apos;s community who have closed over $5M in creative finance deals.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-900 py-20 text-cream">
        <div className="container-page max-w-3xl text-center">
          <p className="section-label mb-3">Ready?</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Have a deal? Send it over.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-text">
            Tony reviews every submission personally. Fast response — typically within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/submit-deal" className="btn-primary">
              Submit a Deal
            </Link>
            <a
              href={LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
