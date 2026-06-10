'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

/* ---------------- DATA ---------------- */

const slides = [
  {
    image: '/images/manufacturing-1.jpg',
    industry: 'Manufacturing',
    title: 'Transform operations to exceed customer requirements',
    subtitle:
      'Bridge IT and OT to streamline operations and optimize costs',
  },
  {
    image: '/images/manufacturing-2.jpg',
    industry: 'Smart Manufacturing',
    title: 'Accelerate Industry 4.0 at scale',
    subtitle:
      'Enable real-time intelligence across the production lifecycle',
  },
  {
    image: '/images/manufacturing-3.jpg',
    industry: 'Industrial Engineering',
    title: 'Build resilient, future-ready factories',
    subtitle:
      'Design adaptive systems that evolve with demand',
  },
]

const sidePanels = [
  {
    title: 'Overview',
    content:
      'NovaCore delivers deep manufacturing expertise to modernize plant-floor IT and OT environments and enable digital-first operations.',
  },
  {
    title: 'Manage digital transformation and the Industry 4.0 vision',
    content:
      'Implement connected factories, intelligent automation, and data-driven workflows across the value chain.',
  },
  {
    title: 'Adapt to new transformative technologies',
    content:
      'Adopt AI, robotics, digital twins, and predictive maintenance with confidence.',
  },
  {
    title: 'Bridge IT and OT through a zero-trust lens',
    content:
      'Secure convergence of operational and information technology environments.',
  },
]

const SLIDE_DURATION = 7000

/* ---------------- COMPONENT ---------------- */

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [openPanel, setOpenPanel] = useState<number | null>(0)
  const [interacted, setInteracted] = useState(false)

  /* Auto slide */
  useEffect(() => {
    if (interacted) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION)

    return () => clearInterval(timer)
  }, [interacted])

  const goTo = useCallback((index: number) => {
    setInteracted(true)
    setCurrent((index + slides.length) % slides.length)
  }, [])

  return (
    <section className="relative overflow-hidden bg-slate-950 md:h-[90vh] md:min-h-[640px]">
      {/* ---------------- BACKGROUND SLIDES ---------------- */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={clsx(
            'absolute inset-0 transition-opacity duration-[1200ms] ease-out',
            i === current ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div
            className={clsx(
              'absolute inset-0 bg-cover bg-center',
              i === current && 'animate-ken-burns'
            )}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-900/30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 to-transparent" />

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 px-6 pt-24 md:h-full md:pt-0">
        {/* LEFT TEXT */}
        <div className="col-span-12 flex flex-col justify-center md:col-span-7 lg:pr-12">
          <span
            key={`tag-${current}`}
            className="animate-fade-in mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            {slides[current].industry}
          </span>

          <h1
            key={current}
            className="animate-slide-up max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {slides[current].title}
          </h1>

          <p
            key={`sub-${current}`}
            className="animate-slide-up delay-100 mt-6 max-w-lg text-lg leading-relaxed text-gray-300"
          >
            {slides[current].subtitle}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${current}`}
            className="animate-slide-up delay-200 mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/services/applications"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Explore our services
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Talk to an expert
            </Link>
          </div>

          {/* SLIDE CONTROLS */}
          <div className="mt-14 hidden items-center gap-6 pb-10 md:flex">
            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                onClick={() => goTo(current - 1)}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => goTo(current + 1)}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress indicators */}
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group py-2"
                >
                  <span
                    className={clsx(
                      'relative block h-1 overflow-hidden rounded-full transition-all duration-500',
                      i === current
                        ? 'w-14 bg-white/30'
                        : 'w-8 bg-white/20 group-hover:bg-white/40'
                    )}
                  >
                    {i === current && (
                      <span
                        key={current}
                        className={clsx(
                          'absolute inset-y-0 left-0 rounded-full bg-blue-400',
                          interacted ? 'w-full' : 'animate-slide-progress'
                        )}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <span className="text-sm font-medium tabular-nums text-white/60">
              {String(current + 1).padStart(2, '0')} /{' '}
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* ---------------- STICKY SIDE PANEL (DESKTOP) ---------------- */}
      <aside className="absolute right-0 top-0 z-20 hidden h-full w-[420px] md:block">
        <div className="flex h-full flex-col justify-center border-l border-white/10 bg-slate-950/60 backdrop-blur-md">
          {sidePanels.map((panel, index) => (
            <div
              key={panel.title}
              className="border-b border-white/10 last:border-none"
            >
              <button
                onClick={() =>
                  setOpenPanel(openPanel === index ? null : index)
                }
                className={clsx(
                  'flex w-full items-center justify-between px-8 py-5 text-left text-white transition-colors duration-300',
                  openPanel === index ? 'bg-white/5' : 'hover:bg-white/5'
                )}
              >
                <span className="pr-4 text-sm font-medium">
                  {panel.title}
                </span>
                <span
                  className={clsx(
                    'shrink-0 text-xl text-blue-300 transition-transform duration-300',
                    openPanel === index && 'rotate-45'
                  )}
                >
                  +
                </span>
              </button>

              <div
                className={clsx(
                  'overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                  openPanel === index
                    ? 'max-h-40 px-8 pb-6'
                    : 'max-h-0 px-8'
                )}
              >
                <p className="text-sm leading-relaxed text-gray-300">
                  {panel.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* ---------------- MOBILE PANELS + CONTROLS ---------------- */}
      <div className="relative z-10 mt-12 block px-6 pb-10 md:hidden">
        {/* Mobile slide dots */}
        <div className="mb-6 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={clsx(
                'h-1.5 rounded-full transition-all duration-500',
                i === current ? 'w-8 bg-blue-400' : 'w-3 bg-white/30'
              )}
            />
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 backdrop-blur-md">
          {sidePanels.map((panel, index) => (
            <div
              key={panel.title}
              className="border-b border-white/10 last:border-none"
            >
              <button
                onClick={() =>
                  setOpenPanel(openPanel === index ? null : index)
                }
                className="flex w-full items-center justify-between px-5 py-4 text-left text-white"
              >
                <span className="pr-4 text-sm font-medium">
                  {panel.title}
                </span>
                <span
                  className={clsx(
                    'shrink-0 text-xl text-blue-300 transition-transform duration-300',
                    openPanel === index && 'rotate-45'
                  )}
                >
                  +
                </span>
              </button>

              <div
                className={clsx(
                  'overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                  openPanel === index ? 'max-h-40 px-5 pb-5' : 'max-h-0 px-5'
                )}
              >
                <p className="text-sm leading-relaxed text-gray-300">
                  {panel.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
