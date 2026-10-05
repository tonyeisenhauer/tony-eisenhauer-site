import { useMemo, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { SUBMIT_BUY_BOX_OPTIONS } from '../data/content'
import { LINKS } from '../data/links'
import { PageHero } from '../components/PageHero'

const STEPS = ['Buy Box', 'Contact Info', 'Property Details', 'Seller Situation'] as const

const CONTACT_METHODS = ['Phone Call', 'Text Message', 'Email']
const PROPERTY_TYPES = [
  'Single Family Home',
  'Condo / Townhouse',
  'Multifamily (2-4 units)',
  'Multifamily (5+ units)',
  'Land',
  'Other',
]
const CONDITIONS = [
  'Excellent / Move-in Ready',
  'Good — Minor Updates',
  'Fair — Needs Work',
  'Poor — Major Rehab',
]
const OCCUPANCY = ['Owner Occupied', 'Tenant Occupied', 'Vacant']
const CREATIVE = [
  'Yes — Open to Sub2 / Seller Finance',
  'Maybe — Tell me more',
  'No — Cash / Conventional Only',
]
const REASONS = [
  'Downsizing',
  'Relocation',
  'Divorce',
  'Probate / Inherited',
  'Financial Hardship',
  'Tired Landlord',
  'Behind on Payments',
  'Other',
]
const TIMELINES = ['ASAP — As Soon as Possible', 'Within 30 Days', 'Flexible / No Rush']
const REFERRALS = ['Referral', 'SubTo', 'Instagram', 'Facebook', 'Google Search', 'Other']

type FormState = {
  buyBox: string
  firstName: string
  lastName: string
  email: string
  phone: string
  contactMethod: string
  propertyAddress: string
  propertyType: string
  bedsBaths: string
  askingPrice: string
  estimatedARV: string
  estimatedRepairs: string
  mortgageBalance: string
  interestRate: string
  propertyCondition: string
  occupancyStatus: string
  creativeFinance: string
  sellingReason: string
  closingTimeline: string
  referralSource: string
  additionalNotes: string
}

const initial: FormState = {
  buyBox: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  contactMethod: '',
  propertyAddress: '',
  propertyType: '',
  bedsBaths: '',
  askingPrice: '',
  estimatedARV: '',
  estimatedRepairs: '',
  mortgageBalance: '',
  interestRate: '',
  propertyCondition: '',
  occupancyStatus: '',
  creativeFinance: '',
  sellingReason: '',
  closingTimeline: '',
  referralSource: '',
  additionalNotes: '',
}

const inputClass =
  'w-full rounded-md border border-navy-700 bg-navy-800 px-4 py-3 text-sm text-white placeholder:text-slate-text/60 focus:border-gold focus:outline-none'
const labelClass = 'mb-1.5 block text-sm font-semibold text-white'

function Field({
  label,
  required,
  children,
  className = '',
}: {
  label: string
  required?: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label className={labelClass}>
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      {children}
    </div>
  )
}

export function SubmitDeal() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const validateStep = () => {
    const next: Record<string, string> = {}
    if (step === 0 && !form.buyBox) next.buyBox = 'Select a buy box'
    if (step === 1) {
      if (!form.firstName.trim()) next.firstName = 'Required'
      if (!form.lastName.trim()) next.lastName = 'Required'
      if (!form.email.trim()) next.email = 'Required'
      if (!form.phone.trim()) next.phone = 'Required'
    }
    if (step === 2 && !form.propertyAddress.trim()) next.propertyAddress = 'Required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const summary = useMemo(
    () =>
      Object.entries(form)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n'),
    [form],
  )

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validateStep()) return
    // TODO: Wire to Cloudflare Forms, Formspree, or backend API.
    // Local success state for now — no network POST.
    console.info('Deal submission (local only):\n', summary)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <PageHero
          label="Submit a Deal"
          title="Got it — thank you"
          subtitle="Your details are ready. Backend wiring (Cloudflare Forms / Formspree) can be added next. Prefer to talk live?"
        >
          <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a Call
          </a>
          <a href={LINKS.email} className="btn-secondary">
            Email Tony
          </a>
        </PageHero>
        <section className="bg-cream py-16">
          <div className="container-page max-w-2xl">
            <div className="card-light">
              <p className="text-sm font-semibold text-navy-900">Submission preview</p>
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-cream p-4 text-xs text-ink/70">
                {summary}
              </pre>
              <p className="mt-4 text-sm text-ink/60">
                TODO: Connect this form to Cloudflare Pages Forms or Formspree. Until then, copy the
                preview or email{' '}
                <a className="text-gold-dark underline" href={LINKS.email}>
                  {LINKS.emailAddress}
                </a>
                .
              </p>
              <button
                type="button"
                className="btn-on-light mt-6"
                onClick={() => {
                  setSubmitted(false)
                  setStep(0)
                  setForm(initial)
                }}
              >
                Submit another
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        label="Submit a Deal"
        title="Send Tony a deal"
        subtitle="Multi-step form aligned with the live buy boxes. Tony reviews every submission personally."
      >
        <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Prefer to Book a Call?
        </a>
      </PageHero>

      <section className="bg-navy-950 py-16 text-cream">
        <div className="container-page max-w-3xl">
          <ol className="mb-10 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {STEPS.map((label, i) => (
              <li
                key={label}
                className={`rounded-md border px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide ${
                  i === step
                    ? 'border-gold bg-gold/10 text-gold'
                    : i < step
                      ? 'border-navy-600 text-cream/80'
                      : 'border-navy-800 text-slate-text'
                }`}
              >
                {i + 1}. {label}
              </li>
            ))}
          </ol>

          <form onSubmit={onSubmit} className="space-y-6 rounded-2xl border border-navy-700 bg-navy-900 p-6 sm:p-8">
            {step === 0 && (
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold">Which buy box fits?</h2>
                <p className="text-sm text-slate-text">
                  Select the strategy that best matches your property or situation.
                </p>
                <div className="grid gap-3">
                  {SUBMIT_BUY_BOX_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => set('buyBox', opt.id)}
                      className={`rounded-xl border p-4 text-left transition ${
                        form.buyBox === opt.id
                          ? 'border-gold bg-gold/10'
                          : 'border-navy-700 hover:border-gold/40'
                      }`}
                    >
                      <p className="font-semibold text-white">{opt.label}</p>
                      <p className="mt-1 text-sm text-gold">{opt.strategy}</p>
                      <p className="mt-1 text-xs text-slate-text">{opt.location}</p>
                    </button>
                  ))}
                </div>
                {errors.buyBox && <p className="text-sm text-red-300">{errors.buyBox}</p>}
                <p className="text-xs text-slate-text">
                  Criteria match the{' '}
                  <Link to="/buy-box" className="text-gold underline">
                    Buy Box page
                  </Link>
                  .
                </p>
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First Name" required>
                  <input
                    className={inputClass}
                    value={form.firstName}
                    onChange={(e) => set('firstName', e.target.value)}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-300">{errors.firstName}</p>}
                </Field>
                <Field label="Last Name" required>
                  <input
                    className={inputClass}
                    value={form.lastName}
                    onChange={(e) => set('lastName', e.target.value)}
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-300">{errors.lastName}</p>}
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
                </Field>
                <Field label="Phone" required>
                  <input
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                </Field>
                <Field label="Preferred Contact Method" className="sm:col-span-2">
                  <select
                    className={inputClass}
                    value={form.contactMethod}
                    onChange={(e) => set('contactMethod', e.target.value)}
                  >
                    <option value="">Select…</option>
                    {CONTACT_METHODS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Property Address" required className="sm:col-span-2">
                  <input
                    className={inputClass}
                    value={form.propertyAddress}
                    onChange={(e) => set('propertyAddress', e.target.value)}
                    placeholder="Street, City, State"
                  />
                  {errors.propertyAddress && (
                    <p className="mt-1 text-xs text-red-300">{errors.propertyAddress}</p>
                  )}
                </Field>
                <Field label="Property Type">
                  <select
                    className={inputClass}
                    value={form.propertyType}
                    onChange={(e) => set('propertyType', e.target.value)}
                  >
                    <option value="">Select…</option>
                    {PROPERTY_TYPES.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Beds / Baths">
                  <input
                    className={inputClass}
                    value={form.bedsBaths}
                    onChange={(e) => set('bedsBaths', e.target.value)}
                    placeholder="3/2"
                  />
                </Field>
                <Field label="Asking Price">
                  <input
                    className={inputClass}
                    value={form.askingPrice}
                    onChange={(e) => set('askingPrice', e.target.value)}
                    placeholder="$250,000"
                  />
                </Field>
                <Field label="Estimated ARV">
                  <input
                    className={inputClass}
                    value={form.estimatedARV}
                    onChange={(e) => set('estimatedARV', e.target.value)}
                    placeholder="$350,000"
                  />
                </Field>
                <Field label="Estimated Repairs">
                  <input
                    className={inputClass}
                    value={form.estimatedRepairs}
                    onChange={(e) => set('estimatedRepairs', e.target.value)}
                  />
                </Field>
                <Field label="Mortgage Balance">
                  <input
                    className={inputClass}
                    value={form.mortgageBalance}
                    onChange={(e) => set('mortgageBalance', e.target.value)}
                  />
                </Field>
                <Field label="Interest Rate">
                  <input
                    className={inputClass}
                    value={form.interestRate}
                    onChange={(e) => set('interestRate', e.target.value)}
                  />
                </Field>
                <Field label="Property Condition">
                  <select
                    className={inputClass}
                    value={form.propertyCondition}
                    onChange={(e) => set('propertyCondition', e.target.value)}
                  >
                    <option value="">Select…</option>
                    {CONDITIONS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Occupancy Status" className="sm:col-span-2">
                  <select
                    className={inputClass}
                    value={form.occupancyStatus}
                    onChange={(e) => set('occupancyStatus', e.target.value)}
                  >
                    <option value="">Select…</option>
                    {OCCUPANCY.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Open to Creative Finance?" className="sm:col-span-2">
                  <select
                    className={inputClass}
                    value={form.creativeFinance}
                    onChange={(e) => set('creativeFinance', e.target.value)}
                  >
                    <option value="">Select…</option>
                    {CREATIVE.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Selling Reason">
                  <select
                    className={inputClass}
                    value={form.sellingReason}
                    onChange={(e) => set('sellingReason', e.target.value)}
                  >
                    <option value="">Select…</option>
                    {REASONS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Closing Timeline">
                  <select
                    className={inputClass}
                    value={form.closingTimeline}
                    onChange={(e) => set('closingTimeline', e.target.value)}
                  >
                    <option value="">Select…</option>
                    {TIMELINES.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="How did you find Tony?" className="sm:col-span-2">
                  <select
                    className={inputClass}
                    value={form.referralSource}
                    onChange={(e) => set('referralSource', e.target.value)}
                  >
                    <option value="">Select…</option>
                    {REFERRALS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Additional Notes" className="sm:col-span-2">
                  <textarea
                    className={`${inputClass} min-h-28`}
                    value={form.additionalNotes}
                    onChange={(e) => set('additionalNotes', e.target.value)}
                    placeholder="Anything else Tony should know…"
                  />
                </Field>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-navy-700 pt-6">
              <button
                type="button"
                className="btn-dark"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                Back
              </button>
              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    if (validateStep()) setStep((s) => s + 1)
                  }}
                >
                  Continue
                </button>
              ) : (
                <button type="submit" className="btn-primary">
                  Submit Deal
                </button>
              )}
            </div>
          </form>

          <ul className="mt-8 grid gap-2 text-sm text-slate-text sm:grid-cols-3">
            <li>Fast response — typically within 24 hours</li>
            <li>All deal types welcome — even if imperfect fit</li>
            <li>Creative solutions for every situation</li>
          </ul>
        </div>
      </section>
    </>
  )
}
