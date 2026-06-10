import Link from 'next/link'
import Reveal from '@/components/Reveal'

type CtaBannerProps = {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  /** Visual variant so different page families close differently */
  tone?: 'gradient' | 'navy' | 'light' | 'minimal'
}

export default function CtaBanner({
  title = 'Ready to modernize your operations?',
  subtitle = 'Talk to our experts about transforming your IT and OT landscape — from strategy through execution.',
  primaryLabel = 'Get in touch',
  primaryHref = '/contact',
  secondaryLabel = 'Explore our services',
  secondaryHref = '/services/applications',
  tone = 'gradient',
}: CtaBannerProps) {
  /* ---------- MINIMAL: slim inline strip ---------- */
  if (tone === 'minimal') {
    return (
      <section className="border-t border-gray-200 bg-white py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
          </div>
          <Link
            href={primaryHref}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-700/25"
          >
            {primaryLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    )
  }

  /* ---------- LIGHT: soft blue panel ---------- */
  if (tone === 'light') {
    return (
      <section className="bg-white px-6 py-20 md:py-24">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100/60 px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
            <h2 className="relative text-3xl font-bold leading-tight text-blue-950 md:text-4xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              {subtitle}
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="group inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
              >
                {primaryLabel}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-8 py-3.5 text-sm font-semibold text-blue-800 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    )
  }

  /* ---------- NAVY: left-aligned executive band ---------- */
  if (tone === 'navy') {
    return (
      <section className="relative overflow-hidden bg-blue-950 py-20 md:py-24">
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 md:flex-row md:items-center">
          <Reveal className="max-w-2xl">
            <span className="mb-4 block h-1 w-14 rounded-full bg-blue-400" />
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blue-200">
              {subtitle}
            </p>
          </Reveal>

          <Reveal direction="right" className="flex shrink-0 flex-wrap gap-4">
            <Link
              href={primaryHref}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-900/50"
            >
              {primaryLabel}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          </Reveal>
        </div>
      </section>
    )
  }

  /* ---------- GRADIENT: default centered hero band ---------- */
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 md:py-28">
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="animate-float-slow pointer-events-none absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-950/40"
              >
                {primaryLabel}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
