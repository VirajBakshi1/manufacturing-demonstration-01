'use client'

import { useEffect, useRef, useState } from 'react'
import Reveal from '@/components/Reveal'

/* ---------------- DATA ---------------- */

const stats = [
  {
    number: '01',
    value: 95,
    suffix: '%',
    text:
      '95% of discrete manufacturers still use paper-based processes (27% still use paper for more than half of all processes).',
    source: 'Source: SDC Executive',
  },
  {
    number: '02',
    value: 70,
    suffix: '%',
    text:
      'By 2022, as many as 70 percent of manufacturers may be using digital twins to conduct simulations and evaluations.',
    source: 'Source: Forbes',
  },
  {
    number: '03',
    value: 25,
    suffix: '%',
    text:
      'In 2022 alone, nearly a quarter of all detected cyberattacks were targeted at manufacturing firms.',
    source: 'Source: Forbes',
  },
]

/* ---------------- COUNT-UP ---------------- */

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const duration = 1600
        const start = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(eased * value))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

/* ---------------- COMPONENT ---------------- */

export default function ThingsToKnow() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Decorative background accent */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ---------------- HEADER ---------------- */}
        <Reveal>
          <div className="mb-20 flex items-end gap-6">
            <span className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-7xl font-bold text-transparent md:text-8xl">
              03
            </span>

            <div className="relative flex-1 pb-4">
              <h2 className="text-4xl font-light leading-tight text-blue-600 md:text-5xl">
                things
                <br />
                to know
              </h2>
              <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-blue-500 via-blue-300 to-transparent" />
            </div>
          </div>
        </Reveal>

        {/* ---------------- CONTENT ---------------- */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-12 lg:gap-20">
          {stats.map((item, i) => (
            <Reveal key={item.number} delay={i * 150}>
              <div className="group h-full rounded-2xl border border-transparent p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-100 hover:bg-blue-50/40 hover:shadow-xl hover:shadow-blue-100/60">
                {/* Number */}
                <div className="mb-8">
                  <span className="block text-6xl font-extralight text-gray-200 transition-colors duration-500 group-hover:text-blue-200">
                    {item.number}
                  </span>
                  <span className="mt-3 block h-0.5 w-10 bg-blue-500 transition-all duration-500 group-hover:w-20" />
                </div>

                {/* Percentage */}
                <p className="mb-6 text-5xl font-semibold text-gray-900">
                  <CountUp value={item.value} suffix={item.suffix} />
                </p>

                {/* Description */}
                <p className="mb-6 max-w-sm text-base leading-relaxed text-gray-600">
                  {item.text}
                </p>

                {/* Source */}
                <p className="text-sm text-gray-400">{item.source}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
