'use client'

import Image from 'next/image'

const logos = [
  { name: 'Oracle', src: '/images/services/applications/oracle.png' },
  { name: 'Red Hat', src: '/images/services/applications/redhat.png' },
  { name: 'Microsoft', src: '/images/services/applications/microsoft.png' },
  { name: 'Google Cloud', src: '/images/services/applications/google-cloud.png' },
  { name: 'AWS', src: '/images/services/applications/aws.png' },
  { name: 'SAP', src: '/images/services/applications/sap.png' },
]

export default function PartnersCarousel() {
  return (
    <section className="bg-blue-100/20 py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <span className="mb-3 inline-block text-sm font-medium text-blue-600">
          Our partners
        </span>

        <h2 className="mb-6 max-w-4xl text-4xl font-light text-gray-900">
          Global alliance partnerships enable our customers&apos; complex hybrid IT ecosystems
        </h2>

        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          Learn more about our alliance partners →
        </a>
      </div>

      {/* Carousel */}
      <div className="relative mt-24">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee">
          <div className="marquee__track">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="marquee__item">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={60}
                  className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="mx-auto mt-28 max-w-7xl border-gray-200" />
    </section>
  )
}
