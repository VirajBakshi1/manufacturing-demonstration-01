import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function WhatWeDoSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <Reveal>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
            What we do
          </span>

          <h2 className="mb-6 text-3xl font-light leading-snug text-gray-900 md:text-4xl">
            Unlock the full value of your applications with our end-to-end
            services
          </h2>

          <p className="mb-5 text-base leading-relaxed text-gray-700">
            To drive business agility and deliver improved user experiences,
            organizations must implement a flexible strategy for transforming
            their applications and data. Successful assessment, migration,
            modernization, and management of applications in hybrid,
            multi-cloud, and distributed environments require specialized
            skills, tools, and capabilities.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            NovaCore helps you transform your complex applications portfolio,
            boost performance and availability, improve security, and maintain
            application currency.
          </p>
        </Reveal>

        {/* RIGHT IMAGE */}
        <Reveal direction="right">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/services/applications/services-what-we-do.jpg"
                alt="Application services collaboration"
                width={640}
                height={420}
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-blue-700 px-6 py-5 text-white shadow-xl shadow-blue-700/30 md:block">
              <p className="text-3xl font-bold">25+</p>
              <p className="mt-1 text-sm text-blue-100">
                years of application expertise
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
