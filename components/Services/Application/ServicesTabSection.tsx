'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

const TABS = ['Our services', 'The NovaCore difference', 'Awards and recognition'] as const
type Tab = (typeof TABS)[number]

/* ---------------- ICONS ---------------- */

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    modernization: (
      <path d="M4 16l6-6 4 4 6-6M14 8h6v6M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
    ),
    development: (
      <path d="M8 9l-4 3 4 3m8-6l4 3-4 3M13 5l-2 14" strokeLinecap="round" strokeLinejoin="round" />
    ),
    cloud: (
      <path d="M6.5 19a4.5 4.5 0 1 1 .42-8.98 6 6 0 0 1 11.51 2.1A3.5 3.5 0 0 1 17.5 19h-11z" strokeLinecap="round" strokeLinejoin="round" />
    ),
    security: (
      <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4zM9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    ),
    management: (
      <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm8 4a8 8 0 0 1-.34 2.3l2 1.55-2 3.46-2.36-.95a8 8 0 0 1-2 1.16L14.9 22h-4l-.4-2.48a8 8 0 0 1-2-1.16l-2.36.95-2-3.46 2-1.55A8 8 0 0 1 4 12c0-.79.12-1.56.34-2.3l-2-1.55 2-3.46 2.36.95a8 8 0 0 1 2-1.16L9.1 2h4l.4 2.48a8 8 0 0 1 2 1.16l2.36-.95 2 3.46-2 1.55c.22.74.34 1.51.34 2.3z" strokeLinecap="round" strokeLinejoin="round" />
    ),
    integration: (
      <path d="M9 6a3 3 0 1 0 0 .01M9 6h9M9 18a3 3 0 1 0 0 .01M9 18h9M18 12a3 3 0 1 0 0 .01M6 12h9" strokeLinecap="round" strokeLinejoin="round" />
    ),
    experience: (
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 12C19 16.5 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
    ),
    innovation: (
      <path d="M12 2a7 7 0 0 1 4 12.7V17a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2.3A7 7 0 0 1 12 2zM9 21h6" strokeLinecap="round" strokeLinejoin="round" />
    ),
    award: (
      <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 0v6m-3-2l3-1.5L15 19" strokeLinecap="round" strokeLinejoin="round" />
    ),
  }

  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden
    >
      {paths[name] ?? paths.modernization}
    </svg>
  )
}

/* ---------------- COMPONENT ---------------- */

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
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-gradient-to-b from-blue-50 to-blue-100/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Tabs */}
        <div className="mb-16 overflow-x-auto border-b border-gray-300/70 md:mb-20">
          <nav className="flex min-w-max gap-8 md:gap-10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  'relative whitespace-nowrap pb-4 text-sm font-medium transition-colors duration-300',
                  activeTab === tab
                    ? 'text-blue-800'
                    : 'text-gray-500 hover:text-gray-800'
                )}
              >
                {tab}
                <span
                  className={clsx(
                    'absolute bottom-0 left-0 h-[2.5px] rounded-full bg-blue-600 transition-all duration-300',
                    activeTab === tab ? 'w-full' : 'w-0'
                  )}
                />
              </button>
            ))}
          </nav>
        </div>

        {/* CONTENT — keyed so it re-animates on every tab switch */}
        <div
          key={activeTab}
          className={clsx(
            visible && 'animate-slide-up',
            !visible && 'opacity-0'
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
      icon: 'modernization',
      title: 'Application modernization',
      desc: 'Unlock the value of your digital business.',
    },
    {
      icon: 'development',
      title: 'Application development',
      desc: 'Deliver secure, intelligent applications.',
    },
    {
      icon: 'cloud',
      title: 'Cloud-native services',
      desc: 'Build and scale modern cloud architectures.',
    },
    {
      icon: 'security',
      title: 'DevSecOps',
      desc: 'Embed security into every stage of delivery.',
    },
    {
      icon: 'management',
      title: 'Application management',
      desc: 'Improve performance, reliability, and cost.',
    },
    {
      icon: 'integration',
      title: 'Enterprise integration',
      desc: 'Connect systems, data, and experiences.',
    },
  ]

  return (
    <>
      <h2 className="mb-16 max-w-3xl text-3xl font-light leading-snug text-gray-900 md:text-4xl">
        Helping to optimize applications for efficiency, integration,
        and business outcomes
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      icon: 'experience',
      title: 'Modernize for better experiences',
      desc: 'Application lifecycle services across cloud and hybrid environments.',
    },
    {
      icon: 'innovation',
      title: 'Innovate for sustainable advantage',
      desc: 'DevSecOps-driven engineering to modernize and build new applications.',
    },
    {
      icon: 'security',
      title: 'Secure for resilient operations',
      desc: 'Industry-leading cyber resilience for ERP and non-ERP applications.',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
      icon: 'award',
      title: 'Leader in RISE with SAP Implementation Partner',
      desc: 'Named a Leader in ISG Provider Lens SAP Ecosystem Report, Global 2024.',
    },
    {
      icon: 'award',
      title: 'Major Contender in Application Transformation Services',
      desc: 'Positioned as Major Contender in Everest PEAK Matrix® 2024.',
    },
  ]

  return (
    <>
      <h2 className="mb-16 max-w-3xl text-3xl font-light leading-snug text-gray-900 md:text-4xl">
        Discover why NovaCore is recognized as an application services
        market leader
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {items.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}
      </div>
    </>
  )
}

/* ---------------- REUSABLE CARD ---------------- */

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: string
  title: string
  desc: string
}) {
  return (
    <div className="group h-full rounded-2xl border border-white/60 bg-white/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-200/40">
      {/* Icon */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
        <Icon name={icon} />
      </div>

      <h3 className="mb-3 text-xl font-medium text-gray-900 md:text-2xl">
        {title}{' '}
        <span className="inline-block text-blue-600 transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </h3>

      <p className="text-base leading-relaxed text-gray-600">{desc}</p>
    </div>
  )
}
