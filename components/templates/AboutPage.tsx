import Image from 'next/image'
import Reveal from '@/components/Reveal'
import CtaBanner from '@/components/CtaBanner'
import type { PageContent } from '@/lib/siteContent'

/**
 * About template — warm and human: soft light hero with optional
 * portrait-style photo, a pull-quote intro, ruled big-number stats,
 * and values as accent-border cards.
 */
export default function AboutPage({ content }: { content: PageContent }) {
  const { intro, stats, features, cta } = content

  return (
    <>
      {/* ---------------- SOFT SPLIT HERO ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100/50">
        <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-28 md:grid-cols-12 md:pb-28 md:pt-36">
          <div className={content.heroImage ? 'md:col-span-7' : 'md:col-span-9'}>
            <span className="animate-fade-in mb-5 inline-block rounded-full bg-blue-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
              {content.eyebrow}
            </span>

            <h1 className="animate-slide-up max-w-2xl text-5xl font-bold leading-[1.08] text-blue-950 md:text-6xl">
              {content.title}
            </h1>

            <p className="animate-slide-up delay-100 mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              {content.description}
            </p>
          </div>

          {content.heroImage && (
            <div className="animate-slide-up delay-200 md:col-span-5">
              <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2.5rem] rounded-tl-lg shadow-2xl shadow-blue-900/20">
                <Image
                  src={content.heroImage}
                  alt={content.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------------- PULL-QUOTE INTRO ---------------- */}
      {intro && (
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <span
                aria-hidden
                className="block font-serif text-7xl leading-none text-blue-200"
              >
                “
              </span>
              <h2 className="-mt-6 text-3xl font-light leading-snug text-gray-900 md:text-4xl">
                {intro.heading}
              </h2>
            </Reveal>

            <div className="mt-10 space-y-6 border-l-2 border-blue-100 pl-8">
              {intro.body.map((p, i) => (
                <Reveal key={i} delay={i * 100}>
                  <p className="text-lg leading-relaxed text-gray-700">{p}</p>
                </Reveal>
              ))}
            </div>

            {intro.bullets && (
              <Reveal delay={150}>
                <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
                  {intro.bullets.map((b) => (
                    <span
                      key={b}
                      className="flex items-center gap-3 text-base text-gray-700"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                      {b}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ---------------- RULED BIG-NUMBER STATS ---------------- */}
      {stats && (
        <section className="bg-white pb-24 md:pb-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="group border-t-4 border-blue-100 pt-6 transition-colors duration-500 hover:border-blue-600">
                  <p className="text-5xl font-bold tracking-tight text-blue-950 md:text-6xl">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm leading-snug text-gray-500">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ---------------- VALUES CARDS ---------------- */}
      {features && (
        <section className="bg-blue-950 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              {features.subheading && (
                <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-400">
                  {features.subheading}
                </span>
              )}
              {features.heading && (
                <h2 className="mb-16 max-w-3xl text-3xl font-bold leading-snug text-white md:text-4xl">
                  {features.heading}
                </h2>
              )}
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 120}>
                  <div className="group h-full rounded-r-2xl border-l-4 border-blue-500 bg-white/5 p-8 transition-all duration-500 hover:border-blue-300 hover:bg-white/10 hover:pl-10">
                    <h3 className="text-2xl font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-blue-200/80">
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
