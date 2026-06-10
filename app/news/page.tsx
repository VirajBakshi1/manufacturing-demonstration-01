import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/templates/StandardPage'
import CtaBanner from '@/components/CtaBanner'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'News',
  description:
    'The latest announcements, client wins, and milestones from NovaCore.',
}

const newsItems = [
  {
    image: '/images/services/applications/insights-sirman.jpg',
    tag: 'Client win',
    date: 'May 2026',
    title:
      "NovaCore innovates Sirman's enterprise resource planning, bringing it to AWS cloud",
    excerpt:
      'Sirman teams up with NovaCore to migrate SAP S/4HANA to AWS, improving efficiency and global service consistency.',
  },
  {
    image: '/images/services/applications/insights-bank.jpg',
    tag: 'Client win',
    date: 'April 2026',
    title: "NovaCore to modernize and manage Canara Bank's IT operations",
    excerpt:
      'End-to-end modernization of the bank’s IT estate to enhance customer experience and availability.',
  },
  {
    image: '/images/manufacturing-2.jpg',
    tag: 'Announcement',
    date: 'March 2026',
    title:
      'NovaCore opens new industrial AI co-creation hub for smart manufacturing',
    excerpt:
      'The new hub brings edge AI, digital twin, and private 5G capabilities under one roof for manufacturing clients.',
  },
  {
    image: '/images/value-security.jpg',
    tag: 'Recognition',
    date: 'February 2026',
    title:
      'NovaCore named a leader in cyber resilience services for manufacturing',
    excerpt:
      'Independent analysts recognize NovaCore’s OT-aware security and recovery capabilities.',
  },
  {
    image: '/images/value-ai.jpg',
    tag: 'Research',
    date: 'January 2026',
    title: 'NovaCore publishes 2026 Future of Enterprise IT outlook',
    excerpt:
      'Five forces reshaping enterprise technology — with concrete first moves for each.',
  },
  {
    image: '/images/manufacturing-3.jpg',
    tag: 'Partnership',
    date: 'December 2025',
    title:
      'NovaCore expands strategic alliance for industrial edge computing',
    excerpt:
      'Joint engineering investment accelerates deterministic edge platforms for plant floors.',
  },
]

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="News from NovaCore"
        description="Announcements, client stories, research, and milestones — straight from the source."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 120}>
                <Link
                  href="/insights/articles"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-200/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-blue-700/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">
                      {item.date}
                    </p>
                    <h3 className="mb-3 text-lg font-medium leading-snug text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                      {item.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-600">
                      {item.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-blue-600">
                      Read more
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Get NovaCore news first"
        subtitle="Press inquiries, media kits, and interview requests — our communications team is ready."
        primaryLabel="Contact our press team"
      />
    </>
  )
}
