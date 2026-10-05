import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { LINKS } from '../data/links'
import { PageHero } from '../components/PageHero'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: Wire to email provider (Beehiiv / ConvertKit / Cloudflare).
    setDone(true)
  }

  return (
    <>
      <PageHero
        label="Newsletter"
        title="Stay up to speed with Tony"
        subtitle="Updates on deals, creative finance strategies, and community events. No spam — just real value."
      />

      <section className="bg-cream py-20">
        <div className="container-page max-w-xl">
          {done ? (
            <div className="card-light text-center">
              <h2 className="font-display text-2xl font-semibold text-navy-900">You’re on the list</h2>
              <p className="mt-3 text-sm text-ink/65">
                TODO: Connect this form to your email provider. For now this is a local success
                state.
              </p>
              <a
                href={LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-on-light mt-6"
              >
                Book a Call Meanwhile
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="card-light space-y-4">
              <label className="block text-sm font-semibold text-navy-900" htmlFor="nl-email">
                Email address
              </label>
              <input
                id="nl-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-md border border-cream-dark bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none"
              />
              <button type="submit" className="btn-on-light w-full">
                Subscribe
              </button>
              <p className="text-xs text-ink/50">
                Prefer social? Follow on{' '}
                <a href={LINKS.instagram} className="text-gold-dark underline" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>{' '}
                or browse{' '}
                <Link to="/resources" className="text-gold-dark underline">
                  Resources
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
