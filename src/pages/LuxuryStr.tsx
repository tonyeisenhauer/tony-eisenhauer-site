import { Link } from 'react-router-dom'
import {
  PEAK_AMENITIES,
  PEAK_FAQS,
  PEAK_GALLERY,
  PEAK_NEARBY,
  PEAK_REVIEWS,
} from '../data/content'
import { LINKS } from '../data/links'

export function LuxuryStr() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy-950 text-cream">
        <img
          src="/images/b99c3818.webp"
          alt="Peak and Pine Retreat"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="container-page relative z-10 py-24 text-center">
          <p className="section-label mb-3">5-Star Rated · Airbnb & VRBO</p>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-text">Intervale, NH</p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Peak & Pine Retreat
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-text sm:text-lg">
            Cozy family getaway in the heart of North Conway, NH — 5 bedrooms, sleeps 12.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={LINKS.peakAndPine}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Stay
            </a>
            <a
              href={LINKS.peakAndPine}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Full Property
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/8f53a055.avif"
              alt="Peak and Pine Retreat outdoor area"
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-xl border-2 border-gold/30" />
          </div>
          <div>
            <p className="section-label mb-3">The Retreat</p>
            <h2 className="font-display text-3xl font-semibold text-navy-900">
              White Mountain escape
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Escape to Peak and Pine Retreat — a fully renovated 5BR/2BA mountain home nestled in
              Intervale, NH, sleeping up to 12 guests. Just 6 minutes to downtown North Conway and 3
              minutes to Storyland, this property is built for family adventure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Near Attitash, Cranmore, and Black Mountain — Peak and Pine puts you in the heart of New
              Hampshire adventure.
            </p>
            <a
              href={LINKS.peakAndPine}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-on-light mt-8"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="section-label mb-3">Amenities</p>
            <h2 className="font-display text-3xl font-semibold text-navy-900">Built for groups</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PEAK_AMENITIES.map((a) => (
              <div key={a.title} className="card-light">
                <h3 className="font-display text-lg font-semibold text-navy-900">{a.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-cream">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="section-label mb-3">Gallery</p>
            <h2 className="font-display text-3xl font-semibold">See the space</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PEAK_GALLERY.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="h-48 w-full rounded-lg object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="section-label mb-3">Nearby</p>
            <h2 className="font-display text-3xl font-semibold text-navy-900">
              Minutes from everything
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PEAK_NEARBY.map((n) => (
              <div key={n.name} className="rounded-xl border border-cream-dark bg-white px-5 py-4">
                <p className="font-semibold text-navy-900">{n.name}</p>
                <p className="text-sm text-ink/55">{n.season}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page max-w-4xl">
          <div className="mb-10 text-center">
            <p className="section-label mb-3">Guest Love</p>
            <h2 className="font-display text-3xl font-semibold text-navy-900">Reviews</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PEAK_REVIEWS.map((r) => (
              <blockquote key={r.name} className="card-light">
                <p className="text-amber-500" aria-label="5 stars">
                  ★★★★★
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink/80">“{r.text}”</p>
                <footer className="mt-4 text-sm text-ink/55">
                  {r.name} · {r.date}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page max-w-3xl">
          <div className="mb-10 text-center">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="font-display text-3xl font-semibold text-navy-900">Good to know</h2>
          </div>
          <div className="space-y-4">
            {PEAK_FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-cream-dark bg-white px-5 py-4"
              >
                <summary className="cursor-pointer list-none font-semibold text-navy-900 marker:content-none">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-20 text-cream">
        <img
          src="/images/8ddc1eb4.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="container-page relative z-10 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Ready for the mountains?</h2>
          <p className="mt-4 text-slate-text">
            Check availability and book your stay at Peak and Pine Retreat — the ultimate family
            getaway in the White Mountains of New Hampshire.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={LINKS.peakAndPine}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Now at PeakAndPineRetreat.com
            </a>
            <a
              href={LINKS.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Airbnb
            </a>
            <a href={LINKS.vrbo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Vrbo
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-text">
            Investor?{' '}
            <Link to="/submit-deal" className="text-gold hover:text-gold-light">
              Submit a deal
            </Link>{' '}
            or{' '}
            <Link to="/buy-box" className="text-gold hover:text-gold-light">
              view Tony&apos;s buy box
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
