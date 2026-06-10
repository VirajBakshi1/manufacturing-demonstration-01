import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

/* ---------------- DATA ---------------- */

const valueItems = [
  {
    number: '01',
    title: 'AI transformation',
    description:
      'Our approach to AI transformation delivers tangible outcomes by designing intelligent, agile environments. We help organizations re-engineer architectures to become AI-native enterprises.',
    image: '/images/value-ai.jpg',
    href: '/services/data-ai',
  },
  {
    number: '02',
    title: 'Technology strategy',
    description:
      'We align technology strategy with business priorities, creating enterprise architectures that support continuous change, resilience, and long-term competitive advantage.',
    image: '/images/value-strategy.jpg',
    href: '/consulting/digital-transformation',
  },
  {
    number: '03',
    title: 'Operational excellence',
    description:
      'NovaCore enables operational excellence by modernizing IT and OT systems, improving reliability, performance, and cost efficiency across complex manufacturing environments.',
    image: '/images/value-operations.jpg',
    href: '/services/core-enterprise',
  },
  {
    number: '04',
    title: 'Secure digital foundations',
    description:
      'We embed security into every layer of the enterprise, enabling zero-trust architectures that protect data, systems, and operations without slowing innovation.',
    image: '/images/value-security.jpg',
    href: '/services/cyber-resilience',
  },
]

/* ---------------- COMPONENT ---------------- */

export default function ValueDelivery() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <Reveal>
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
              What we deliver
            </span>
            <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
              How NovaCore delivers value
            </h2>
            <span className="mx-auto mt-6 block h-1 w-16 rounded-full bg-blue-600" />
          </div>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
          {valueItems.map((item, i) => (
            <Reveal key={item.number} delay={(i % 2) * 150}>
              <Link href={item.href} className="group block">
                {/* IMAGE */}
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-md transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-blue-200/50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Hover tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* NUMBER */}
                  <span className="absolute bottom-4 left-5 text-7xl font-bold text-white/70 transition-all duration-500 group-hover:text-white">
                    {item.number}
                  </span>
                </div>

                {/* CONTENT */}
                <h3 className="mb-2 text-2xl font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                  {item.title}
                </h3>

                <span className="mb-4 block h-0.5 w-8 bg-blue-600 transition-all duration-500 group-hover:w-16" />

                <p className="max-w-lg text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-700">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
