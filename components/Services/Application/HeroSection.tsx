'use client'

import Link from 'next/link'

const highlights = [
  {
    title: 'Enable business agility and innovation at scale',
    linkLabel: 'Read the report',
  },
  {
    title:
      'Navigate SAP transformation challenges and accelerate time-to-value',
    linkLabel: 'Learn more',
  },
  {
    title: 'Are you at the readiness tipping point?',
    linkLabel: 'Read the report',
  },
]

export default function ServiceHero() {
  return (
    <section className="relative w-full overflow-hidden md:h-[85vh] md:min-h-[560px]">
      {/* Background Image */}
      <div
        className="animate-ken-burns absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/services/applications/services-applications.jpg')",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-900/40" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/60 to-transparent" />

      {/* LEFT CONTENT (CONSTRAINED) */}
      <div className="relative z-10 mx-auto h-full max-w-7xl px-6">
        <div className="flex h-full items-center py-24 md:py-0">
          <div className="max-w-xl">
            {/* Breadcrumb-style label */}
            <span className="animate-fade-in mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Services
            </span>

            <h1 className="animate-slide-up text-4xl font-light leading-tight text-white md:text-6xl">
              Application <br />
              <span className="font-semibold">Services</span>
            </h1>

            <p className="animate-slide-up delay-100 mt-6 max-w-md text-lg leading-relaxed text-gray-200">
              Transform your applications to enable business agility and
              innovation at scale.
            </p>

            <div className="animate-slide-up delay-200 mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl"
              >
                Talk to an expert
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="animate-scroll-hint flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* RIGHT PANEL (FULL HEIGHT, EDGE-TO-EDGE) */}
      <aside className="absolute right-0 top-0 z-20 hidden h-full w-[36%] min-w-[420px] border-l border-white/10 bg-slate-950/60 backdrop-blur-md md:block">
        <div className="flex h-full flex-col justify-center space-y-10 px-10">
          {highlights.map((item, i) => (
            <div key={item.title}>
              {i > 0 && <div className="mb-10 h-px w-full bg-white/15" />}
              <div className="group">
                <h3 className="text-lg font-light leading-snug text-white transition-colors duration-300 group-hover:text-blue-200">
                  {item.title}
                </h3>
                <Link
                  href="#"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 transition-colors hover:text-blue-200"
                >
                  {item.linkLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* MOBILE CONTENT */}
      <div className="relative z-10 block border-t border-white/10 bg-slate-950/85 px-6 py-10 text-white backdrop-blur md:hidden">
        <div className="space-y-8">
          {highlights.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-light leading-snug">{item.title}</h3>
              <Link
                href="#"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300"
              >
                {item.linkLabel} <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
