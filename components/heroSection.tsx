'use client'

import { useEffect, useRef, useState } from 'react'
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

/* ---------------- COMPONENT ---------------- */

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [openPanel, setOpenPanel] = useState<number | null>(0)
  const interacted = useRef(false)

  /* Auto slide */
  useEffect(() => {
    if (interacted.current) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [])

  const next = () => {
    interacted.current = true
    setCurrent((c) => (c + 1) % slides.length)
  }

  const prev = () => {
    interacted.current = true
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* ---------------- BACKGROUND SLIDES ---------------- */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={clsx(
            'absolute inset-0 bg-cover bg-center transition-all duration-[1200ms] ease-out',
            i === current
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          )}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-12 px-6">
        {/* LEFT TEXT */}
        <div className="col-span-12 flex flex-col justify-center md:col-span-7">
          <span className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-400 animate-fade-in">
            {slides[current].industry}
          </span>

          <h1
            key={current}
            className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl animate-slide-up"
          >
            {slides[current].title}
          </h1>

          <p
            key={`sub-${current}`}
            className="mt-6 max-w-lg text-lg text-gray-200 animate-slide-up delay-100"
          >
            {slides[current].subtitle}
          </p>
        </div>
      </div>

      {/* ---------------- STICKY SIDE PANEL (DESKTOP) ---------------- */}
      <aside className="absolute right-0 top-0 z-20 hidden h-full w-[420px] md:block">
        <div className="sticky top-0 h-full bg-black/65 backdrop-blur">
          {sidePanels.map((panel, index) => (
            <div
              key={panel.title}
              className="border-b border-white/10 last:border-none"
            >
              <button
                onClick={() =>
                  setOpenPanel(openPanel === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left text-white transition-colors hover:bg-white/5"
              >
                <span className="text-sm font-medium">
                  {panel.title}
                </span>
                <span
                  className={clsx(
                    'text-xl transition-transform duration-300',
                    openPanel === index && 'rotate-45'
                  )}
                >
                  +
                </span>
              </button>

              <div
                className={clsx(
                  'overflow-hidden transition-all duration-300',
                  openPanel === index
                    ? 'max-h-40 px-6 pb-6'
                    : 'max-h-0 px-6'
                )}
              >
                <p className="text-sm text-gray-300">
                  {panel.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* ---------------- MOBILE SIDE PANEL ---------------- */}
      <div className="relative z-10 mt-8 block px-6 md:hidden">
        <div className="rounded-md bg-black/70 backdrop-blur">
          {sidePanels.map((panel, index) => (
            <div key={panel.title} className="border-b border-white/10">
              <button
                onClick={() =>
                  setOpenPanel(openPanel === index ? null : index)
                }
                className="flex w-full items-center justify-between px-4 py-4 text-left text-white"
              >
                <span className="text-sm font-medium">
                  {panel.title}
                </span>
                <span className="text-xl">
                  {openPanel === index ? '−' : '+'}
                </span>
              </button>

              {openPanel === index && (
                <div className="px-4 pb-4 text-sm text-gray-300">
                  {panel.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    
    </section>
  )
}
