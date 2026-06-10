import Reveal from '@/components/Reveal'
import CtaBanner from '@/components/CtaBanner'
import type { PageContent } from '@/lib/siteContent'

/**
 * Consulting template — bright editorial hero with oversized
 * typography, inline stat chips, a two-column thought-piece
 * intro, and capabilities as a vertical numbered timeline.
 */
export default function ConsultingPage({ content }: { content: PageContent }) {
  const { intro, stats, features, cta } = content

  return (
    <>
      {/* ---------------- EDITORIAL HERO ---------------- */}
      <section className="relative overflow-hidden bg-white">
        {/* Oversized watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-10 top-10 select-none text-[180px] font-bold leading-none text-blue-50 md:text-[280px]"
        >
          NC
        </span>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 md:pb-28 md:pt-36">
          <span className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
            {content.eyebrow}
          </span>

          <h1 className="animate-slide-up max-w-4xl text-5xl font-light leading-[1.05] tracking-tight text-gray-900 md:text-7xl">
            {content.title}
          </h1>

          <div className="animate-slide-up delay-100 mt-8 flex max-w-2xl items-start gap-5">
            <span className="mt-3 block h-1 w-14 shrink-0 rounded-full bg-blue-600" />
            <p className="text-xl leading-relaxed text-gray-600">
              {content.description}
            </p>
          </div>

          {/* Stat chips */}
          {stats && (
            <div className="animate-slide-up delay-200 mt-12 flex flex-wrap gap-3">
              {stats.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-baseline gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                >
                  <span className="text-lg font-bold text-blue-700">
                    {s.value}
                  </span>
                  <span className="text-sm text-gray-500">{s.label}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------------- THOUGHT-PIECE INTRO ---------------- */}
      {intro && (
        <section className="border-y border-gray-100 bg-gray-50/60 py-24 md:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-light leading-snug text-gray-900 md:text-4xl">
                {intro.heading}
              </h2>
              {intro.body.map((p, i) => (
                <p key={i} className="mt-6 text-lg leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal direction="right">
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
                What you can expect
              </p>
              <ol className="space-y-6">
                {intro.bullets?.map((b, i) => (
                  <li key={b} className="flex items-start gap-5">
                    <span className="text-2xl font-extralight tabular-nums text-blue-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="border-b border-gray-200 pb-6 text-base leading-relaxed text-gray-700">
                      {b}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------------- TIMELINE CAPABILITIES ---------------- */}
      {features && (
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              {features.subheading && (
                <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
                  {features.subheading}
                </span>
              )}
              {features.heading && (
                <h2 className="mb-16 text-3xl font-light leading-snug text-gray-900 md:text-4xl">
                  {features.heading}
                </h2>
              )}
            </Reveal>

            <div className="relative ml-5 border-l-2 border-blue-100 pl-10 md:ml-8 md:pl-14">
              {features.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 4) * 100}>
                  <div className="group relative pb-14 last:pb-0">
                    {/* Node */}
                    <span className="absolute -left-[51px] top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-200 bg-white text-sm font-semibold text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white md:-left-[67px]">
                      {i + 1}
                    </span>

                    <h3 className="text-2xl font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner tone="light" title={cta?.title} subtitle={cta?.subtitle} />
    </>
  )
}
