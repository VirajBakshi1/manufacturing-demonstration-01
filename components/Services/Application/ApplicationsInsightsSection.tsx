'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ApplicationsInsightsSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

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
    <section ref={ref} className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <span className="mb-3 inline-block text-sm font-medium text-blue-600">
          Trends and insights
        </span>

        <h2 className="mb-20 text-4xl font-light text-gray-900">
          Applications news and perspectives
        </h2>

        {/* Articles */}
        <div className="space-y-24">
          <InsightRow
            visible={visible}
            image="/images/services/applications/insights-sirman.jpg"
            title="NovaCore innovates Sirman’s enterprise resource planning bringing it to AWS cloud"
            description="Sirman teams up with NovaCore to migrate their SAP S/4HANA to AWS cloud, aiming to improve efficiency, reduce costs, and ensure data security and global service consistency."
            href="#"
          />

          <InsightRow
            visible={visible}
            image="/images/services/applications/insights-bank.jpg"
            title="NovaCore to modernize and manage Canara Bank’s IT operations"
            description="NovaCore to upgrade the bank’s end-to-end IT operations to enhance their customer experience and increase availability."
            href="#"
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
  visible,
}: {
  image: string
  title: string
  description: string
  href: string
  visible: boolean
}) {
  return (
    <div
      className={`grid grid-cols-1 items-start gap-12 md:grid-cols-12
      transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]
      ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Image */}
      <div className="md:col-span-4">
        <Image
          src={image}
          alt={title}
          width={520}
          height={340}
          className="w-full object-cover"
        />
      </div>

      {/* Headline */}
      <div className="md:col-span-5">
        <h3 className="text-3xl font-light leading-snug text-gray-900">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="md:col-span-3 border-l border-gray-300 pl-6">
        <p className="mb-6 text-base leading-relaxed text-gray-700">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
        >
          Read more <span>→</span>
        </Link>
      </div>
    </div>
  )
}
