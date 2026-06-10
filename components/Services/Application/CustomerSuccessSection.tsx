import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export default function CustomerSuccessSection() {
  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our customers
          </span>

          <h2 className="mb-16 text-3xl font-light text-gray-900 md:mb-20 md:text-4xl">
            We&apos;re invested in customer success
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <CustomerCard
            image="/images/services/applications/customer-arizona.jpg"
            client="Arizona Motor Vehicle Division"
            title="Shaping the future of motor vehicle services and elevating driver experiences"
            delay={0}
          />

          <CustomerCard
            image="/images/services/applications/customer-romero.jpg"
            client="Grupo Romero"
            title="Enhancing efficiency and agility with NovaCore's Cloud and SAP solutions"
            delay={150}
          />
        </div>
      </div>
    </section>
  )
}

/* ---------------- CARD ---------------- */

function CustomerCard({
  image,
  client,
  title,
  delay,
}: {
  image: string
  client: string
  title: string
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <Link href="/case-studies" className="group block">
        <div className="mb-8 overflow-hidden rounded-2xl shadow-md transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-blue-200/50">
          <Image
            src={image}
            alt={client}
            width={720}
            height={480}
            className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
          {client}
        </p>

        <span className="mb-4 block h-[2px] w-6 bg-blue-600 transition-all duration-500 group-hover:w-14" />

        <h3 className="text-2xl font-light leading-snug text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
          {title}
        </h3>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
          Read the case study
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </span>
      </Link>
    </Reveal>
  )
}
