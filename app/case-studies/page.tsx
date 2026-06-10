import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/templates/StandardPage'
import CtaBanner from '@/components/CtaBanner'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'How enterprises modernize and scale with confidence — real results from NovaCore engagements.',
}

const caseStudies = [
  {
    image: '/images/services/applications/customer-arizona.jpg',
    client: 'Arizona Motor Vehicle Division',
    industry: 'Public Sector',
    title:
      'Shaping the future of motor vehicle services and elevating driver experiences',
    result: '70% faster service processing',
  },
  {
    image: '/images/services/applications/customer-romero.jpg',
    client: 'Grupo Romero',
    industry: 'Consumer Goods',
    title:
      "Enhancing efficiency and agility with NovaCore's Cloud and SAP solutions",
    result: '40% reduction in run costs',
  },
  {
    image: '/images/services/applications/insights-sirman.jpg',
    client: 'Sirman',
    industry: 'Manufacturing',
    title:
      'Migrating SAP S/4HANA to AWS for global consistency and lower costs',
    result: 'Global ERP on cloud in 9 months',
  },
  {
    image: '/images/services/applications/insights-bank.jpg',
    client: 'Canara Bank',
    industry: 'Banking',
    title:
      'Modernizing end-to-end IT operations to enhance customer experience',
    result: '99.99% platform availability',
  },
  {
    image: '/images/manufacturing-1.jpg',
    client: 'Global discrete manufacturer',
    industry: 'Manufacturing',
    title:
      'Connecting 60 plants with a unified industrial data platform and edge AI',
    result: '35% less unplanned downtime',
  },
  {
    image: '/images/value-operations.jpg',
    client: 'European energy utility',
    industry: 'Energy & Utilities',
    title:
      'Securing OT environments while modernizing grid operations technology',
    result: 'Zero security incidents since go-live',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Results our clients can measure"
        description="How enterprises modernize and scale with confidence — told through the outcomes that matter."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.title} delay={(i % 2) * 150}>
                <article className="group">
                  <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl shadow-md transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-blue-200/50">
                    <Image
                      src={cs.image}
                      alt={cs.client}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-blue-900 backdrop-blur-sm">
                      {cs.result}
                    </span>
                  </div>

                  <p className="mb-2 flex items-center gap-3 text-sm">
                    <span className="font-medium uppercase tracking-wider text-gray-500">
                      {cs.client}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <span className="text-blue-600">{cs.industry}</span>
                  </p>

                  <span className="mb-4 block h-[2px] w-6 bg-blue-600 transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-2xl font-light leading-snug text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                    {cs.title}
                  </h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Your results could be next"
        subtitle="Tell us the outcome you need — we'll show you how others got there."
      />
    </>
  )
}
