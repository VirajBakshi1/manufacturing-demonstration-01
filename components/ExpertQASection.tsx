'use client'

import Image from 'next/image'
import Reveal from '@/components/Reveal'

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
    q: 'Where does AI deliver the fastest return on the plant floor?',
    a: `Predictive maintenance, quality inspection, and demand forecasting deliver
measurable ROI quickly — and build the data foundation for digital twins and
autonomous operations.`,
  },
]

/* ---------------- COMPONENT ---------------- */

export default function ExpertQASection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f9] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <Reveal>
          <div className="mb-14">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
              Expert perspective
            </span>
            <h2 className="text-4xl font-bold text-blue-950 md:text-5xl">
              Our experts, your challenges
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-600">
              Read the Q&amp;A with a NovaCore manufacturing expert.
            </p>
          </div>
        </Reveal>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* LEFT: Q&A */}
          <div className="md:col-span-7">
            <div className="thin-scrollbar relative max-h-[560px] overflow-y-auto pr-6 md:border-r md:border-gray-200">
              {qaData.map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="mb-12 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-500 hover:shadow-lg hover:ring-blue-100 md:p-8">
                    {/* QUESTION */}
                    <p className="mb-5 flex gap-4 text-lg font-medium leading-snug text-blue-700">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        Q
                      </span>
                      {item.q}
                    </p>

                    {/* ANSWER */}
                    <div className="flex gap-4 text-gray-700">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-500">
                        A
                      </span>
                      <p className="max-w-xl leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative md:col-span-5">
            <Reveal direction="right" className="md:sticky md:top-24">
              <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-xl md:h-[560px]">
                <Image
                  src="/images/expert1.jpg"
                  alt="Onofrio Pirrotta, Senior Vice President and Managing Partner at NovaCore"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />

                {/* Gradient for legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/80 to-transparent" />

                {/* TEXT OVERLAY */}
                <div className="absolute bottom-6 right-6 text-right text-sm text-white">
                  <p className="text-base font-semibold">Onofrio Pirrotta</p>
                  <p className="text-blue-200">Senior Vice President</p>
                  <p className="text-blue-200">Managing Partner</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gray-300">
                    NovaCore
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
