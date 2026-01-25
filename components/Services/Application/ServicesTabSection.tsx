'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

const TABS = ['Our services', 'The NovaCore difference', 'Awards and recognition'] as const
type Tab = (typeof TABS)[number]

export default function ServicesTabsSection() {
  const [activeTab, setActiveTab] = useState<Tab>('Our services')
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  /* Scroll-triggered animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-blue-100/80 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Tabs */}
        <div className="mb-20 border-b border-gray-300">
          <nav className="flex gap-10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  'relative pb-4 text-sm font-medium transition-colors',
                  activeTab === tab
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-800'
                )}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-600" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* CONTENT */}
        <div
          className={clsx(
            'transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
        >
          {activeTab === 'Our services' && <OurServices />}
          {activeTab === 'The NovaCore difference' && <NovaCoreDifference />}
          {activeTab === 'Awards and recognition' && <Awards />}
        </div>
      </div>
    </section>
  )
}

/* ---------------- TAB: OUR SERVICES ---------------- */

function OurServices() {
  const items = [
    {
      title: 'Application modernization',
      desc: 'Unlock the value of your digital business.',
    },
    {
      title: 'Application development',
      desc: 'Deliver secure, intelligent applications.',
    },
    {
      title: 'Cloud-native services',
      desc: 'Build and scale modern cloud architectures.',
    },
    {
      title: 'DevSecOps',
      desc: 'Embed security into every stage of delivery.',
    },
    {
      title: 'Application management',
      desc: 'Improve performance, reliability, and cost.',
    },
    {
      title: 'Enterprise integration',
      desc: 'Connect systems, data, and experiences.',
    },
  ]

  return (
    <>
      <h2 className="mb-20 max-w-3xl text-4xl font-light leading-snug text-gray-900">
        Helping to optimize applications for efficiency, integration,
        and business outcomes
      </h2>

      <div className="grid grid-cols-1 gap-x-20 gap-y-20 md:grid-cols-2">
        {items.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}
      </div>
    </>
  )
}

/* ---------------- TAB: NOVACORE DIFFERENCE ---------------- */

function NovaCoreDifference() {
  const items = [
    {
      title: 'Modernize for better experiences',
      desc: 'Application lifecycle services across cloud and hybrid environments.',
    },
    {
      title: 'Innovate for sustainable advantage',
      desc: 'DevSecOps-driven engineering to modernize and build new applications.',
    },
    {
      title: 'Secure for resilient operations',
      desc: 'Industry-leading cyber resilience for ERP and non-ERP applications.',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
      {items.map((item) => (
        <ServiceCard key={item.title} {...item} />
      ))}
    </div>
  )
}

/* ---------------- TAB: AWARDS ---------------- */

function Awards() {
  const items = [
    {
      title: 'Leader in RISE with SAP Implementation Partner',
      desc: 'Named a Leader in ISG Provider Lens SAP Ecosystem Report, Global 2024.',
    },
    {
      title: 'Major Contender in Application Transformation Services',
      desc: 'Positioned as Major Contender in Everest PEAK Matrix® 2024.',
    },
  ]

  return (
    <>
      <h2 className="mb-20 max-w-3xl text-4xl font-light leading-snug text-gray-900">
        Discover why NovaCore is recognized as an application services
        market leader
      </h2>

      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        {items.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}
      </div>
    </>
  )
}

/* ---------------- REUSABLE CARD ---------------- */

function ServiceCard({
  title,
  desc,
}: {
  title: string
  desc: string
}) {
  return (
    <div className="group max-w-md">
      {/* Icon placeholder */}
      <div className="mb-6 h-10 w-10 rounded-full border border-gray-400" />

      <h3 className="mb-4 text-2xl font-light text-gray-900">
        {title}{' '}
        <span className="inline-block translate-x-0 transition-transform group-hover:translate-x-1">
          →
        </span>
      </h3>

      <p className="text-base leading-relaxed text-gray-700">
        {desc}
      </p>
    </div>
  )
}
