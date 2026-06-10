import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import CtaBanner from '@/components/CtaBanner'
import type { PageContent } from '@/lib/siteContent'

/**
 * Careers template — split photo hero, a stat card overlapping the
 * fold, perks as a checklist band, and openings as bordered role
 * rows with hover slide.
 */
export default function CareersPage({ content }: { content: PageContent }) {
  const { intro, stats, features, cta } = content

  return (
    <>
      {/* ---------------- SPLIT PHOTO HERO ---------------- */}
      <section className="relative bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:min-h-[80vh] md:grid-cols-2">
          {/* Left: content */}
          <div className="flex flex-col justify-center px-6 pb-16 pt-28 md:py-24 md:pr-16">
            <span className="animate-fade-in mb-5 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              <span className="block h-px w-10 bg-blue-600" />
              {content.eyebrow}
            </span>

            <h1 className="animate-slide-up text-5xl font-bold leading-[1.05] text-gray-900 md:text-6xl">
              {content.title}
            </h1>

            <p className="animate-slide-up delay-100 mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              {content.description}
            </p>

            <div className="animate-slide-up delay-200 mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
              >
                See open roles
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/careers/life-at-NovaCore"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800"
              >
                Life at NovaCore
              </Link>
            </div>
          </div>

          {/* Right: full-height photo */}
          <div className="relative min-h-[320px] md:min-h-0">
            {content.heroImage && (
              <>
                <Image
                  src={content.heroImage}
                  alt={content.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover md:rounded-bl-[5rem]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 to-transparent md:rounded-bl-[5rem]" />
              </>
            )}

            {/* Overlapping stat card */}
            {stats && (
              <div className="animate-slide-up delay-300 absolute -bottom-10 left-6 right-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gray-200 shadow-2xl shadow-blue-950/20 md:-left-16 md:bottom-12 md:right-auto md:w-80">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white p-5">
                    <p className="text-2xl font-bold text-blue-700">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-gray-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- PERKS CHECKLIST BAND ---------------- */}
      {intro && (
        <section className="bg-gray-50 pb-24 pt-32 md:py-28 md:pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <Reveal className="md:col-span-5">
                <h2 className="text-3xl font-bold leading-snug text-blue-950 md:text-4xl">
                  {intro.heading}
                </h2>
                {intro.body.map((p, i) => (
                  <p key={i} className="mt-5 text-lg leading-relaxed text-gray-600">
                    {p}
                  </p>
                ))}
              </Reveal>

              <div className="md:col-span-7">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {intro.bullets?.map((b, i) => (
                    <Reveal key={b} delay={i * 90}>
                      <div className="flex h-full items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-blue-200">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-base leading-relaxed text-gray-700">
                          {b}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------------- ROLE ROWS ---------------- */}
      {features && (
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              {features.subheading && (
                <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
                  {features.subheading}
                </span>
              )}
              {features.heading && (
                <h2 className="mb-14 text-3xl font-bold leading-snug text-blue-950 md:text-4xl">
                  {features.heading}
                </h2>
              )}
            </Reveal>

            <div className="space-y-4">
              {features.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 80}>
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between gap-6 rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 hover:pl-8 md:p-8"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-700 md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        tone="gradient"
        title={cta?.title}
        subtitle={cta?.subtitle}
        primaryLabel="Apply now"
        secondaryLabel="Life at NovaCore"
        secondaryHref="/careers/life-at-NovaCore"
      />
    </>
  )
}
