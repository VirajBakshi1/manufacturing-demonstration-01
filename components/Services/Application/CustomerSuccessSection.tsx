'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function CustomerSuccessSection() {
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
        {/* Header */}
        <span className="mb-3 inline-block text-sm font-medium text-blue-600">
          Our customers
        </span>

        <h2 className="mb-20 text-4xl font-light text-gray-900">
          We&apos;re invested in customer success
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <CustomerCard
            visible={visible}
            image="/images/services/applications/customer-arizona.jpg"
            client="Arizona Motor Vehicle Division"
            title="Shaping the future of motor vehicle services and elevating driver experiences"
          />

          <CustomerCard
            visible={visible}
            image="/images/services/applications/customer-romero.jpg"
            client="Grupo Romero"
            title="Enhancing efficiency and agility with NovaCore’s Cloud and SAP solutions"
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
  visible,
}: {
  image: string
  client: string
  title: string
  visible: boolean
}) {
  return (
    <div
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]
      ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
    >
      <Image
        src={image}
        alt={client}
        width={720}
        height={480}
        className="mb-8 w-full object-cover"
      />

      <p className="mb-2 text-sm text-gray-600">
        {client}
      </p>

      <span className="mb-4 block h-[2px] w-6 bg-blue-600" />

      <h3 className="text-2xl font-light leading-snug text-gray-900">
        {title}
      </h3>
    </div>
  )
}
