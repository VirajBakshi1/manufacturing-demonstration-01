import Image from 'next/image'

/* ---------------- DATA ---------------- */

const valueItems = [
  {
    number: '01',
    title: 'AI transformation',
    description:
      'Our approach to AI transformation delivers tangible outcomes by designing intelligent, agile environments. We help organizations re-engineer architectures to become AI-native enterprises.',
    image: '/images/value-ai.jpg',
  },
  {
    number: '02',
    title: 'Technology strategy',
    description:
      'We align technology strategy with business priorities, creating enterprise architectures that support continuous change, resilience, and long-term competitive advantage.',
    image: '/images/value-strategy.jpg',
  },
  {
    number: '03',
    title: 'Operational excellence',
    description:
      'NovaCore enables operational excellence by modernizing IT and OT systems, improving reliability, performance, and cost efficiency across complex manufacturing environments.',
    image: '/images/value-operations.jpg',
  },
  {
    number: '04',
    title: 'Secure digital foundations',
    description:
      'We embed security into every layer of the enterprise, enabling zero-trust architectures that protect data, systems, and operations without slowing innovation.',
    image: '/images/value-security.jpg',
  },
]

/* ---------------- COMPONENT ---------------- */

export default function ValueDelivery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <h2 className="mb-16 text-center text-3xl font-bold text-blue-900">
          How NovaCore delivers value
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {valueItems.map((item) => (
            <div key={item.number} className="group">
              {/* IMAGE */}
              <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* NUMBER */}
                <span className="absolute bottom-4 left-4 text-7xl font-bold text-blue-200/80">
                  {item.number}
                </span>
              </div>

              {/* CONTENT */}
              <h3 className="mb-2 text-xl font-medium text-gray-900">
                {item.title}
              </h3>

              <span className="mb-4 block h-0.5 w-8 bg-blue-600" />

              <p className="max-w-lg text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
