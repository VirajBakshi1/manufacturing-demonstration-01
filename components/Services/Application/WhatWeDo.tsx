'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function WhatWeDoSection() {
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
      {
        threshold: 0.25,
      }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div
          className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="mb-3 inline-block text-sm font-medium text-blue-600">
            What we do
          </span>

          <h2 className="mb-6 text-3xl font-light leading-snug text-gray-900 md:text-4xl">
            Unlock the full value of your applications with our end-to-end services
          </h2>

          <p className="mb-5 text-base leading-relaxed text-gray-700">
            To drive business agility and deliver improved user experiences,
            organizations must implement a flexible strategy for transforming
            their applications and data. Successful assessment, migration,
            modernization, and management of applications in hybrid, multi-cloud,
            and distributed environments require specialized skills, tools, and
            capabilities.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            NovaCore helps you transform your complex applications portfolio,
            boost performance and availability, improve security, and maintain
            application currency.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`relative transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            visible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-16'
          }`}
        >
          <Image
            src="/images/services/applications/services-what-we-do.jpg"
            alt="Application services collaboration"
            width={640}
            height={420}
            className="w-full rounded-sm object-cover"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}
