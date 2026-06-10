import Link from 'next/link'
import Reveal from '@/components/Reveal'
import CtaBanner from '@/components/CtaBanner'
import type { PageContent } from '@/lib/siteContent'

/**
 * Platform template — dark product-launch look: centered glow hero
 * with stats built in, a light capability split, and glassmorphism
 * feature cards on deep navy.
 */
export default function PlatformPage({ content }: { content: PageContent }) {
  const { intro, stats, features, cta } = content

  return (
    <>
      {/* ---------------- CENTERED GLOW HERO ---------------- */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Glow effects */}
        <div className="animate-float-slow pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-32 text-center md:pt-40">
          <span className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
            {content.eyebrow}
          </span>

          <h1 className="animate-slide-up bg-gradient-to-br from-white via-white to-blue-300 bg-clip-text text-5xl font-bold leading-[1.05] text-transparent md:text-7xl">
            {content.title}
          </h1>

          <p className="animate-slide-up delay-100 mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
            {content.description}
          </p>

          <div className="animate-slide-up delay-200 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-400/50"
            >
              Request a demo
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/5"
            >
              See it in action
            </Link>
          </div>

          {/* In-hero stats */}
          {stats && (
            <div className="animate-slide-up delay-300 mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-slate-950/80 px-4 py-7 backdrop-blur-sm transition-colors duration-300 hover:bg-slate-900/80"
                >
                  <p className="text-3xl font-bold text-blue-300">{s.value}</p>
                  <p className="mt-2 text-xs leading-snug text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------------- LIGHT CAPABILITY SPLIT ---------------- */}
      {intro && (
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-6 md:grid-cols-2">
            <Reveal>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
                Why it matters
              </span>
              <h2 className="text-3xl font-light leading-snug text-gray-900 md:text-4xl">
                {intro.heading}
              </h2>
              {intro.body.map((p, i) => (
                <p key={i} className="mt-6 text-base leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal direction="right">
              <div className="space-y-4">
                {intro.bullets?.map((b, i) => (
                  <div
                    key={b}
                    className="group flex items-center gap-5 rounded-2xl border border-gray-100 bg-gradient-to-r from-gray-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-mono text-sm font-bold text-white shadow-md shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base leading-relaxed text-gray-700">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------------- GLASS FEATURE CARDS ---------------- */}
      {features && (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-blue-950 py-24 md:py-32">
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal>
              {features.subheading && (
                <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-400">
                  {features.subheading}
                </span>
              )}
              {features.heading && (
                <h2 className="mb-16 max-w-3xl text-3xl font-light leading-snug text-white md:text-4xl">
                  {features.heading}
                </h2>
              )}
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 120}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10">
                    <span className="mb-6 block font-mono text-sm text-blue-400">
                      / {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mb-3 text-xl font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner tone="navy" title={cta?.title} subtitle={cta?.subtitle} primaryLabel="Request a demo" />
    </>
  )
}
