import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

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
    <section className="overflow-hidden bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our partners
          </span>

          <h2 className="mb-6 max-w-4xl text-3xl font-light text-gray-900 md:text-4xl">
            Global alliance partnerships enable our customers&apos; complex
            hybrid IT ecosystems
          </h2>

          <Link
            href="/about/alliances"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            Learn more about our alliance partners
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>

      {/* Carousel */}
      <div className="relative mt-16 md:mt-20">
        <div className="marquee">
          <div className="marquee__track">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="marquee__item">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={60}
                  className="opacity-50 grayscale transition-all duration-500 hover:scale-110 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
