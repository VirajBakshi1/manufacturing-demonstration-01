import Link from 'next/link'
import Reveal from '@/components/Reveal'
import CtaBanner from '@/components/CtaBanner'
import type { PageContent } from '@/lib/siteContent'

/**
 * Insights template — magazine-style: soft hero with rule lines,
 * topic chips, and featured content as an editorial article list.
 */
export default function InsightsPage({ content }: { content: PageContent }) {
  const { intro, stats, features, cta } = content

  return (
    <>
      {/* ---------------- MAGAZINE HERO ---------------- */}
      <section className="bg-gradient-to-b from-blue-50/80 to-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 md:pt-36">
          <div className="flex items-center gap-4">
            <span className="animate-fade-in text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              {content.eyebrow}
            </span>
            <span className="animate-fade-in h-px flex-1 bg-blue-200" />
          </div>

          <h1 className="animate-slide-up mt-8 max-w-3xl text-5xl font-light leading-[1.08] text-blue-950 md:text-6xl">
            {content.title}
          </h1>

          <p className="animate-slide-up delay-100 mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            {content.description}
          </p>

          {/* Topic chips from intro bullets */}
          {intro?.bullets && (
            <div className="animate-slide-up delay-200 mt-10 flex flex-wrap gap-3">
              {intro.bullets.map((b) => (
                <span
                  key={b}
                  className="cursor-default rounded-full border border-blue-200 bg-white px-4 py-2 text-sm text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800"
                >
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------------- LEAD PARAGRAPHS ---------------- */}
      {intro && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
              <Reveal className="md:col-span-4">
                <h2 className="border-t-2 border-blue-600 pt-5 text-2xl font-medium text-gray-900">
                  {intro.heading}
                </h2>
              </Reveal>
              <Reveal delay={120} className="md:col-span-8">
                {intro.body.map((p, i) => (
                  <p
                    key={i}
                    className="border-t border-gray-200 pt-5 text-lg leading-relaxed text-gray-700 first:md:border-t-2 first:md:border-gray-200"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ---------------- ARTICLE LIST ---------------- */}
      {features && (
        <section className="bg-white pb-24 pt-4 md:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex items-baseline justify-between border-b-2 border-gray-900 pb-4">
                <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                  {features.heading ?? 'Featured'}
                </h2>
                {features.subheading && (
                  <span className="text-sm font-medium uppercase tracking-widest text-gray-400">
                    {features.subheading}
                  </span>
                )}
              </div>
            </Reveal>

            <div>
              {features.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 4) * 80}>
                  <Link
                    href="/contact"
                    className="group grid grid-cols-12 items-baseline gap-4 border-b border-gray-200 py-10 transition-colors duration-300 hover:bg-blue-50/40 md:gap-8"
                  >
                    <span className="col-span-12 text-xs font-semibold uppercase tracking-widest text-blue-600 md:col-span-2">
                      No. {String(i + 1).padStart(2, '0')}
                    </span>

                    <h3 className="col-span-12 text-2xl font-light leading-snug text-gray-900 transition-colors duration-300 group-hover:text-blue-700 md:col-span-5 md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="col-span-10 text-base leading-relaxed text-gray-600 md:col-span-4">
                      {item.desc}
                    </p>

                    <span className="col-span-2 text-right text-xl text-blue-600 transition-transform duration-300 group-hover:translate-x-2 md:col-span-1">
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            {/* Small stat footnotes */}
            {stats && (
              <Reveal className="mt-12">
                <div className="flex flex-wrap gap-x-12 gap-y-4">
                  {stats.map((s) => (
                    <p key={s.label} className="text-sm text-gray-500">
                      <span className="mr-2 text-lg font-bold text-blue-700">
                        {s.value}
                      </span>
                      {s.label}
                    </p>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      <CtaBanner tone="minimal" title={cta?.title} subtitle={cta?.subtitle} primaryLabel="Subscribe" />
    </>
  )
}
