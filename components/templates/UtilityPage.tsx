import Reveal from '@/components/Reveal'
import CtaBanner from '@/components/CtaBanner'
import type { PageContent } from '@/lib/siteContent'

/**
 * Utility / legal template — quiet document look: compact ruled
 * header, optional inline facts, simple checklists, and prose
 * sections with a side index feel. No big marketing moments.
 */
export default function UtilityPage({ content }: { content: PageContent }) {
  const { intro, stats, features, sections, cta } = content

  return (
    <>
      {/* ---------------- DOCUMENT HEADER ---------------- */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 pb-14 pt-28 md:pt-32">
          <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
            {content.eyebrow}
          </p>
          <h1 className="animate-slide-up mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            {content.title}
          </h1>
          <p className="animate-slide-up delay-100 mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            {content.description}
          </p>

          {/* Inline facts */}
          {stats && (
            <dl className="animate-slide-up delay-200 mt-10 flex flex-wrap gap-x-12 gap-y-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs uppercase tracking-wider text-gray-400">
                    {s.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-gray-900">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {/* ---------------- INTRO + CHECKLIST ---------------- */}
      {intro && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <h2 className="text-2xl font-semibold text-gray-900">
                {intro.heading}
              </h2>
              {intro.body.map((p, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </Reveal>

            {intro.bullets && (
              <Reveal delay={120}>
                <ul className="mt-8 space-y-3 rounded-xl border border-gray-200 bg-gray-50/70 p-6">
                  {intro.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-base text-gray-700">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ---------------- SIMPLE RESOURCE LIST ---------------- */}
      {features && (
        <section className="bg-white pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              {features.heading && (
                <h2 className="mb-8 border-t border-gray-200 pt-10 text-2xl font-semibold text-gray-900">
                  {features.heading}
                </h2>
              )}
            </Reveal>
            <div className="divide-y divide-gray-100 rounded-xl border border-gray-200">
              {features.items.map((item) => (
                <Reveal key={item.title}>
                  <div className="group flex items-start justify-between gap-6 p-6 transition-colors duration-300 hover:bg-blue-50/40">
                    <div>
                      <h3 className="font-medium text-gray-900 transition-colors group-hover:text-blue-700">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                    <span className="mt-1 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600">
                      →
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- PROSE SECTIONS ---------------- */}
      {sections && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl space-y-12 px-6">
            {sections.map((sec) => (
              <Reveal key={sec.heading}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                  <h2 className="text-lg font-semibold text-gray-900 md:col-span-4">
                    {sec.heading}
                  </h2>
                  <div className="md:col-span-8">
                    {sec.body.map((p, i) => (
                      <p
                        key={i}
                        className="mb-4 text-base leading-relaxed text-gray-700 last:mb-0"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CtaBanner tone="minimal" title={cta?.title} subtitle={cta?.subtitle} />
    </>
  )
}
