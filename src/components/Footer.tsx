import { Link } from 'react-router-dom'
import { FOOTER_LINKS, LINKS } from '../data/links'

const socials = [
  { href: LINKS.instagram, label: 'Instagram' },
  { href: LINKS.youtube, label: 'YouTube' },
  { href: LINKS.facebook, label: 'Facebook' },
  { href: LINKS.linkedin, label: 'LinkedIn' },
  { href: LINKS.linktree, label: 'Linktree' },
]

export function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-cream">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold">Tony Eisenhauer</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-text">
              Creative finance investor. Family-first. Integrity-driven. Closing deals across New
              England and expanding markets.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/submit-deal" className="btn-primary !px-4 !py-2 text-xs">
                Submit a Deal
              </Link>
              <a
                href={LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !px-4 !py-2 text-xs"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-cream/80">
              {FOOTER_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Community</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-text">
              2nd Year Owners Club · SubTo mentorship with Pace Morby · $5M+ Club.
            </p>
            <a
              href={LINKS.subto}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-gold hover:text-gold-light"
            >
              Join SubTo →
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-navy-700 px-3 py-1 text-xs text-cream/70 hover:border-gold/40 hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-navy-800 pt-6 text-xs text-slate-text sm:flex-row">
          <p>© {new Date().getFullYear()} Tony Eisenhauer. All rights reserved.</p>
          <p>Owners Club · Integrity First</p>
        </div>
      </div>
    </footer>
  )
}
