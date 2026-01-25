'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

/* ---------------- DATA ---------------- */

const qaData = [
  {
    q: 'How tech helps manufacturing and energy firms create a bright future?',
    a: `Leveraging data and building intelligent supply chains will be key to success.
Manufacturers are modernizing IT and OT, improving resilience, securing systems,
and enabling innovation-focused cultures.`,
  },
  {
    q: 'What are the biggest challenges facing manufacturing and energy firms?',
    a: `Organizations face challenges across legacy modernization, cybersecurity,
rising costs, supply-chain disruption, and talent shortages.`,
  },
  {
    q: 'How should leaders prioritize digital investments?',
    a: `Leaders should invest in platforms that deliver immediate value while
supporting long-term transformation through data, automation, and AI.`,
  },
  {
    q: 'How should leaders prioritize digital investments?',
    a: `Leaders should invest in platforms that deliver immediate value while
supporting long-term transformation through data, automation, and AI.`,
  },
]

/* ---------------- COMPONENT ---------------- */

export default function ExpertQASection() {
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.15 }
    )

    itemsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-[#f7f8f9] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Our experts, your challenges
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            Read the Q&amp;A with a NovaCore manufacturing expert.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* LEFT: Q&A */}
          <div className="md:col-span-7">
            <div className="relative max-h-[520px] overflow-y-auto pr-6 md:border-r md:border-gray-300">
              {qaData.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) itemsRef.current[i] = el
                  }}
                  className="mb-14 transform opacity-0 translate-y-6 transition-all duration-700 ease-out"
                >
                  {/* QUESTION */}
                  <p className="mb-4 flex gap-4 text-lg font-medium text-blue-600">
                    <span className="text-gray-400">Q</span>
                    {item.q}
                  </p>

                  {/* ANSWER */}
                  <div className="flex gap-4 text-gray-700">
                    <span className="text-gray-400">A</span>
                    <p className="max-w-xl leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: IMAGE (EDGE-TO-EDGE) */}
          <div className="md:col-span-5 relative">
            <div className="md:sticky md:top-24">
              <div className="relative h-[520px] w-full">
                <Image
                  src="/images/expert1.jpg"
                  alt="Managing Partner"
                  fill
                  priority
                  className="object-cover"
                />

                {/* TEXT OVERLAY */}
                <div className="absolute bottom-6 right-6 text-right text-sm text-blue-200">
                  <p className="font-medium">Onofrio Pirrotta</p>
                  <p>Senior Vice President</p>
                  <p>Managing Partner</p>
                  <p className="text-gray-500">NovaCore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH IMAGE EDGE ALIGNMENT */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-[calc((100vw-1280px)/2)] bg-[#f7f8f9]" />
    </section>
  )
}
