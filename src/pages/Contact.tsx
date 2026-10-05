import { Link } from 'react-router-dom'
import { LINKS } from '../data/links'
import { PageHero } from '../components/PageHero'

const OPTIONS = [
  {
    title: 'Submit a Deal',
    desc: 'Have a property that fits the buy box? Send it through the multi-step form — Tony reviews every submission.',
    cta: 'Go to Submit Form',
    to: '/submit-deal',
    external: false,
  },
  {
    title: 'Book a Call',
    desc: 'Prefer to talk live? Grab time on Calendly.',
    cta: 'Open Calendly',
    href: LINKS.calendly,
    external: true,
  },
  {
    title: 'Email Tony',
    desc: LINKS.emailAddress,
    cta: 'Send Email',
    href: LINKS.email,
    external: true,
  },
  {
    title: 'Linktree',
    desc: 'All of Tony’s links in one place.',
    cta: 'Open Linktree',
    href: LINKS.linktree,
    external: true,
  },
  {
    title: 'Instagram',
    desc: 'Follow deals, community, and Peak & Pine updates.',
    cta: 'Follow on Instagram',
    href: LINKS.instagram,
    external: true,
  },
  {
    title: 'More Social',
    desc: 'YouTube, Facebook, and LinkedIn.',
    links: [
      { label: 'YouTube', href: LINKS.youtube },
      { label: 'Facebook', href: LINKS.facebook },
      { label: 'LinkedIn', href: LINKS.linkedin },
    ],
  },
] as const

export function Contact() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let’s talk deals"
        subtitle="Primary path: submit a deal. Need a conversation first? Book a call. Everything else lives here too."
      >
        <Link to="/submit-deal" className="btn-primary">
          Submit a Deal
        </Link>
        <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Book a Call
        </a>
      </PageHero>

      <section className="bg-cream py-20">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {OPTIONS.map((opt) => (
            <div key={opt.title} className="card-light flex flex-col">
              <h2 className="font-display text-xl font-semibold text-navy-900">{opt.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{opt.desc}</p>
              {'to' in opt && opt.to && (
                <Link to={opt.to} className="btn-on-light mt-6 self-start">
                  {opt.cta}
                </Link>
              )}
              {'href' in opt && opt.href && (
                <a
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-on-light mt-6 self-start"
                >
                  {opt.cta}
                </a>
              )}
              {'links' in opt && opt.links && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {opt.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-navy-900/15 px-3 py-1.5 text-xs font-semibold text-navy-900 hover:border-gold hover:text-gold-dark"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="container-page mt-10 text-center text-sm text-ink/55">
          Looking for updates?{' '}
          <Link to="/newsletter" className="font-semibold text-gold-dark hover:underline">
            Newsletter
          </Link>{' '}
          · Tools & education:{' '}
          <Link to="/resources" className="font-semibold text-gold-dark hover:underline">
            Resources
          </Link>
        </div>
      </section>
    </>
  )
}
