import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export default function ApplicationsInsightsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <Reveal>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
            Trends and insights
          </span>

          <h2 className="mb-16 text-3xl font-light text-gray-900 md:mb-20 md:text-4xl">
            Applications news and perspectives
          </h2>
        </Reveal>

        {/* Articles */}
        <div className="space-y-20 md:space-y-24">
          <InsightRow
            image="/images/services/applications/insights-sirman.jpg"
            title="NovaCore innovates Sirman's enterprise resource planning bringing it to AWS cloud"
            description="Sirman teams up with NovaCore to migrate their SAP S/4HANA to AWS cloud, aiming to improve efficiency, reduce costs, and ensure data security and global service consistency."
            href="/insights/articles"
          />

          <InsightRow
            image="/images/services/applications/insights-bank.jpg"
            title="NovaCore to modernize and manage Canara Bank's IT operations"
            description="NovaCore to upgrade the bank's end-to-end IT operations to enhance their customer experience and increase availability."
            href="/insights/articles"
          />
        </div>
      </div>
    </section>
  )
}

/* ---------------- ROW COMPONENT ---------------- */

function InsightRow({
  image,
  title,
  description,
  href,
}: {
  image: string
  title: string
  description: string
  href: string
}) {
  return (
    <Reveal>
      <Link
        href={href}
        className="group grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12"
      >
        {/* Image */}
        <div className="md:col-span-4">
          <div className="overflow-hidden rounded-xl shadow-md transition-shadow duration-500 group-hover:shadow-xl">
            <Image
              src={image}
              alt={title}
              width={520}
              height={340}
              className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Headline */}
        <div className="md:col-span-5">
          <h3 className="text-2xl font-light leading-snug text-gray-900 transition-colors duration-300 group-hover:text-blue-700 md:text-3xl">
            {title}
          </h3>
        </div>

        {/* Description */}
        <div className="border-l-2 border-blue-100 pl-6 transition-colors duration-300 group-hover:border-blue-400 md:col-span-3">
          <p className="mb-6 text-base leading-relaxed text-gray-600">
            {description}
          </p>

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
            Read more
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
