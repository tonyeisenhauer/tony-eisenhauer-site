import { Link } from 'react-router-dom'
import {
  BUY_BOXES,
  COMMUNITY_PHOTOS,
  DEAL_COLLAGE,
  PRINCIPLES,
  STATS,
  TESTIMONIALS,
} from '../data/content'
import { LINKS } from '../data/links'

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

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-cream">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/tony-headshot-new.jpeg"
          >
            <source src="/images/tony-hero-v3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/92 to-navy-950/55" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
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
            <div className="absolute -inset-3 rounded-2xl border border-gold/30 shadow-[0_0_60px_-20px_rgba(196,163,90,0.45)]" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
            <img
              src="/images/tony-headshot-new.jpeg"
              alt="Tony Eisenhauer"
              className="relative w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Proof strip — gold band accent */}
      <section className="border-y border-cream-dark bg-white">
        <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-accent-copper" />
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
      <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
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
                to={`/buy-box#${box.id}`}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-cream-dark bg-white transition duration-300 hover:-translate-y-1.5 ${accentRing[box.accent]}`}
              >
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <img
                    src={box.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy-950 shadow-lg ${accentBg[box.accent]}`}
                  >
                    <span className="font-display text-sm font-bold">{box.number}</span>
                  </span>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${accentBg[box.accent]}`} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span
                    className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${accentSoft[box.accent]} ${accentText[box.accent]}`}
                  >
                    Strategy {box.number}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy-900">
                    {box.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">{box.subtitle}</p>
                  <p className="mt-4 text-sm font-medium text-navy-800">{box.shortStrategy}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{box.shortLocation}</p>
                  <span className={`mt-5 text-sm font-semibold ${accentText[box.accent]}`}>
                    View criteria →
                  </span>
                </div>
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

      {/* Photo / deal collage band */}
      <section className="bg-navy-900 py-16 text-cream sm:py-20">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label mb-2">Deal Flow</p>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Photography-forward investing
              </h2>
            </div>
            <Link to="/buy-box" className="text-sm font-semibold text-gold hover:text-gold-light">
              See all buy boxes →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {DEAL_COLLAGE.map((img, i) => (
              <div
                key={img.src}
                className={`photo-frame overflow-hidden ${
                  i === 0 || i === 5 ? 'md:row-span-1' : ''
                } ${i === 1 ? 'md:col-span-1' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover ${i % 3 === 0 ? 'h-44 sm:h-56' : 'h-36 sm:h-44'} transition duration-500 hover:scale-105`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peak & Pine teaser — warmer treatment */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-cream sm:py-24">
        <img
          src="/images/b99c3818.webp"
          alt=""
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3d2a1a]/35 via-transparent to-transparent" />
        <div className="container-page relative z-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="section-label mb-3">Luxury STR</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Peak & Pine Retreat</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/80">
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
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl border border-gold/25" />
            <img
              src="/images/8f53a055.avif"
              alt="Peak and Pine Retreat outdoor area"
              className="relative w-full rounded-xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* Integrity / about short — cream panel */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl border border-gold/20" />
            <img
              src="/images/about-us.webp"
              alt="Tony Eisenhauer"
              className="relative w-full rounded-xl object-cover shadow-xl"
            />
            <img
              src="/images/tony-5m-club.jpg"
              alt="$5M Club"
              className="absolute -bottom-6 -right-4 hidden w-36 rounded-lg border-4 border-cream object-cover shadow-xl sm:block md:w-44"
            />
          </div>
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
                <div
                  key={p.title}
                  className="rounded-lg border border-cream-dark bg-white p-4 shadow-sm"
                >
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

      {/* Community proof photos — navy panel */}
      <section className="bg-navy-950 py-20 text-cream sm:py-24">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="section-label mb-3">In The Community</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Tony in action</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {COMMUNITY_PHOTOS.map((p) => (
              <figure
                key={p.src}
                className="group overflow-hidden rounded-xl border border-navy-700 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.7)] transition hover:border-gold/35"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.caption}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="bg-navy-900 px-4 py-3 text-sm text-slate-text">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — white band for contrast */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="mb-12 text-center">
            <p className="section-label mb-3">What Others Say</p>
            <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Trusted to close
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="card-light relative overflow-hidden">
                <span className="absolute right-4 top-3 font-display text-5xl leading-none text-gold/25">
                  “
                </span>
                <p className="relative text-base leading-relaxed text-ink/80">“{t.quote}”</p>
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
      <section className="relative overflow-hidden bg-navy-900 py-20 text-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,163,90,0.12),_transparent_60%)]" />
        <div className="container-page relative z-10 max-w-3xl text-center">
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
