import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import CtaBanner from '@/components/CtaBanner'
import type { PageContent } from '@/lib/siteContent'

/**
 * Industry template — cinematic full-bleed photo hero with
 * bottom-anchored content, a light stat strip, an editorial
 * split intro, and numbered solution rows.
 */
export default function IndustryPage({ content }: { content: PageContent }) {
  const { intro, stats, features, cta } = content

  return (
    <>
      {/* ---------------- FULL-BLEED HERO ---------------- */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-slate-950">
        {content.heroImage && (
          <div
            className="animate-ken-burns absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${content.heroImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
          <nav className="animate-fade-in mb-6 flex items-center gap-2 text-sm text-blue-300">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">{content.eyebrow}</span>
          </nav>

          <h1 className="animate-slide-up max-w-3xl text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            {content.title}
          </h1>

          <p className="animate-slide-up delay-100 mt-6 max-w-2xl border-l-2 border-blue-400 pl-5 text-lg leading-relaxed text-gray-200">
            {content.description}
          </p>
        </div>
      </section>

      {/* ---------------- LIGHT STAT STRIP ---------------- */}
      {stats && (
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-gray-100 px-6 md:grid-cols-4 md:divide-x">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="px-2 py-10 text-center md:px-8 md:py-14">
                  <p className="text-4xl font-bold text-blue-700 md:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-gray-500">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ---------------- EDITORIAL INTRO ---------------- */}
      {intro && (
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <Reveal className="md:col-span-5">
                <span className="mb-4 block h-1 w-14 rounded-full bg-blue-600" />
                <h2 className="text-3xl font-bold leading-snug text-blue-950 md:sticky md:top-28 md:text-4xl">
                  {intro.heading}
                </h2>
              </Reveal>

              <div className="md:col-span-7">
                {intro.body.map((p, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <p className="mb-6 text-lg leading-relaxed text-gray-700">
                      {p}
                    </p>
                  </Reveal>
                ))}

                {intro.bullets && (
                  <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {intro.bullets.map((b, i) => (
                      <Reveal key={b} delay={i * 80}>
                        <div className="flex h-full items-start gap-3 border-l-2 border-blue-200 py-1 pl-4 transition-colors duration-300 hover:border-blue-600">
                          <span className="text-sm leading-relaxed text-gray-600">
                            {b}
                          </span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Wide banner image */}
            {intro.image && (
              <Reveal className="mt-20">
                <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-2xl shadow-blue-950/15">
                  <Image
                    src={intro.image}
                    alt={intro.heading}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ---------------- NUMBERED SOLUTION ROWS ---------------- */}
      {features && (
        <section className="bg-slate-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              {features.subheading && (
                <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
                  {features.subheading}
                </span>
              )}
              {features.heading && (
                <h2 className="mb-14 max-w-3xl text-3xl font-bold leading-snug text-blue-950 md:text-4xl">
                  {features.heading}
                </h2>
              )}
            </Reveal>

            <div className="border-t border-gray-200">
              {features.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 80}>
                  <div className="group grid grid-cols-12 items-start gap-4 border-b border-gray-200 py-8 transition-all duration-300 hover:bg-white hover:pl-4 md:items-center md:gap-8">
                    <span className="col-span-2 text-3xl font-extralight text-gray-300 transition-colors duration-300 group-hover:text-blue-600 md:col-span-1 md:text-4xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <h3 className="col-span-10 text-xl font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-700 md:col-span-4 md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="col-span-10 col-start-3 text-base leading-relaxed text-gray-600 md:col-span-6 md:col-start-auto">
                      {item.desc}
                    </p>

                    <span className="col-span-1 hidden text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:block">
                      →
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner tone="navy" title={cta?.title} subtitle={cta?.subtitle} />
    </>
  )
}
