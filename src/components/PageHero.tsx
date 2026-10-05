import type { ReactNode } from 'react'
type Props = {
  label?: string
  title: string
  subtitle?: string
  image?: string
  children?: ReactNode
}

export function PageHero({ label, title, subtitle, image, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-cream">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/85 to-navy-950" />
        </>
      )}
      <div className="container-page relative z-10 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {label && <p className="section-label mb-3">{label}</p>}
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-text sm:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
        </div>
      </div>
    </section>
  )
}
