import Image from 'next/image'
import Reveal from '@/components/Reveal'
import CtaBanner from '@/components/CtaBanner'
import type { PageContent } from '@/lib/siteContent'

/* ===============================
   PAGE HERO
   =============================== */

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string
  title: string
  description: string
  image?: string
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900">
      {/* Optional photo */}
      {image && (
        <>
          <div
            className="animate-ken-burns absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
        </>
      )}

      {/* Decorative accents */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <span className="animate-fade-in mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          {eyebrow}
        </span>

        <h1 className="animate-slide-up max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          {title}
        </h1>

        <p className="animate-slide-up delay-100 mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
          {description}
        </p>
      </div>
    </section>
  )
}

/* ===============================
   FEATURE ICONS (cycled)
   =============================== */

const featureIcons = [
  // spark
  <path key="spark" d="M12 2v4m0 12v4M4.9 4.9l2.8 2.8m8.6 8.6l2.8 2.8M2 12h4m12 0h4M4.9 19.1l2.8-2.8m8.6-8.6l2.8-2.8" strokeLinecap="round" />,
  // shield
  <path key="shield" d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4zM9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />,
  // chart
  <path key="chart" d="M4 20V10m6 10V4m6 16v-7m4 7H2" strokeLinecap="round" strokeLinejoin="round" />,
  // gear
  <path key="gear" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8.4 3a8.4 8.4 0 0 1-.1 1.3l2 1.6-2 3.4-2.4-1a8.4 8.4 0 0 1-2.2 1.3L15.3 21h-4l-.4-2.4a8.4 8.4 0 0 1-2.2-1.3l-2.4 1-2-3.4 2-1.6a8.4 8.4 0 0 1 0-2.6l-2-1.6 2-3.4 2.4 1a8.4 8.4 0 0 1 2.2-1.3L11.3 3h4l.4 2.4a8.4 8.4 0 0 1 2.2 1.3l2.4-1 2 3.4-2 1.6c.07.43.1.86.1 1.3z" strokeLinejoin="round" />,
  // cloud
  <path key="cloud" d="M6.5 19a4.5 4.5 0 1 1 .42-8.98 6 6 0 0 1 11.51 2.1A3.5 3.5 0 0 1 17.5 19h-11z" strokeLinecap="round" strokeLinejoin="round" />,
  // network
  <path key="network" d="M12 5a2 2 0 1 0 0 .01M5 19a2 2 0 1 0 0 .01M19 19a2 2 0 1 0 0 .01M12 7v5m0 0l-5.5 5M12 12l5.5 5" strokeLinecap="round" strokeLinejoin="round" />,
]

function FeatureIcon({ index }: { index: number }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      {featureIcons[index % featureIcons.length]}
    </svg>
  )
}

/* ===============================
   STANDARD PAGE
   =============================== */

export default function StandardPage({ content }: { content: PageContent }) {
  const { intro, stats, features, sections, cta } = content

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        image={content.heroImage}
      />

      {/* ---------------- INTRO SPLIT ---------------- */}
      {intro && (
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
            <Reveal>
              <h2 className="mb-6 text-3xl font-light leading-snug text-gray-900 md:text-4xl">
                {intro.heading}
              </h2>
              {intro.body.map((p, i) => (
                <p
                  key={i}
                  className="mb-5 text-base leading-relaxed text-gray-700 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal direction="right">
              {intro.image ? (
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={intro.image}
                    alt={intro.heading}
                    width={640}
                    height={440}
                    className="w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ) : (
                <ul className="space-y-5">
                  {intro.bullets?.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-base leading-relaxed text-gray-700">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>

          {/* Bullets below when both image and bullets exist */}
          {intro.image && intro.bullets && (
            <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
              {intro.bullets.map((b, i) => (
                <Reveal key={b} delay={i * 100}>
                  <div className="flex h-full items-start gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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
          )}
        </section>
      )}

      {/* ---------------- STATS BAND ---------------- */}
      {stats && (
        <section className="relative overflow-hidden bg-blue-950 py-20 md:py-24">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="text-center md:text-left">
                  <p className="bg-gradient-to-br from-white to-blue-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm leading-snug text-blue-200">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ---------------- FEATURE GRID ---------------- */}
      {features && (
        <section className="bg-gradient-to-b from-gray-50 to-blue-50/50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              {features.subheading && (
                <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
                  {features.subheading}
                </span>
              )}
              {features.heading && (
                <h2 className="mb-16 max-w-3xl text-3xl font-light leading-snug text-gray-900 md:text-4xl">
                  {features.heading}
                </h2>
              )}
            </Reveal>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 120}>
                  <div className="group h-full rounded-2xl border border-white bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-200/40">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <FeatureIcon index={i} />
                    </div>

                    <h3 className="mb-3 text-xl font-medium text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-base leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- PROSE SECTIONS (documents) ---------------- */}
      {sections && (
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-3xl space-y-14 px-6">
            {sections.map((sec) => (
              <Reveal key={sec.heading}>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  {sec.heading}
                </h2>
                {sec.body.map((p, i) => (
                  <p
                    key={i}
                    className="mb-4 text-base leading-relaxed text-gray-700 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ---------------- CTA ---------------- */}
      <CtaBanner
        title={cta?.title}
        subtitle={cta?.subtitle}
      />
    </>
  )
}
