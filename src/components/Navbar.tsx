import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LINKS, NAV_PRIMARY } from '../data/links'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gold text-center text-[11px] font-bold uppercase tracking-[0.18em] text-navy-950">
        <a
          href={LINKS.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-1.5 hover:bg-gold-light"
        >
          Book a Call with Tony →
        </a>
      </div>
      <nav
        className={`border-b transition-colors ${
          scrolled
            ? 'border-navy-800/80 bg-navy-950/95 backdrop-blur'
            : 'border-transparent bg-navy-950'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link to="/" className="group flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-cream group-hover:text-gold">
              Tony Eisenhauer
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-text">
              Creative Finance Investor
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_PRIMARY.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'text-gold'
                      : 'text-cream/80 hover:text-gold'
                  } ${item.to === '/submit-deal' ? 'ml-1 bg-gold/15 text-gold hover:bg-gold/25' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary ml-3 !px-4 !py-2 text-xs"
            >
              Book a Call
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-navy-700 p-2 text-cream lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-navy-800 bg-navy-950 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_PRIMARY.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-3 text-base font-medium ${
                      isActive ? 'bg-navy-800 text-gold' : 'text-cream hover:bg-navy-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
