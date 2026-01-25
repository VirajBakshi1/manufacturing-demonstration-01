'use client'

import Link from 'next/link'

export default function ServiceHero() {
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/services/applications/services-applications.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* LEFT CONTENT (CONSTRAINED) */}
      <div className="relative z-10 mx-auto h-full max-w-7xl px-6">
        <div className="flex h-full items-center">
          <div className="max-w-xl">
            {/* Services label */}
            <span className="block text-sm font-medium text-blue-400 mb-2">
              Services
            </span>

            <h1 className="text-4xl font-light leading-tight text-white md:text-5xl">
              Application <br /> Services
            </h1>

            <p className="mt-5 text-base leading-relaxed text-gray-200">
              Transform your applications to enable business agility and
              innovation at scale.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL (FULL HEIGHT, EDGE-TO-EDGE) */}
      <aside className="absolute right-0 top-0 z-20 hidden h-full w-[36%] min-w-[420px] bg-black/60 backdrop-blur md:block">
        <div className="flex h-full flex-col justify-center px-10 space-y-10">
          <div>
            <h3 className="text-lg font-light text-white">
              Enable business agility and innovation at scale
            </h3>
            <Link
              href="#"
              className="mt-3 inline-block text-sm text-blue-300 hover:underline"
            >
              Read the report
            </Link>
          </div>

          <div className="h-px w-full bg-white/20" />

          <div>
            <h3 className="text-lg font-light text-white">
              Navigate SAP transformation challenges and accelerate
              time-to-value
            </h3>
            <Link
              href="#"
              className="mt-3 inline-block text-sm text-blue-300 hover:underline"
            >
              Learn more
            </Link>
          </div>

          <div className="h-px w-full bg-white/20" />

          <div>
            <h3 className="text-lg font-light text-white">
              Are you at the readiness tipping point?
            </h3>
            <Link
              href="#"
              className="mt-3 inline-block text-sm text-blue-300 hover:underline"
            >
              Read the report
            </Link>
          </div>
        </div>
      </aside>

      {/* MOBILE CONTENT */}
      <div className="relative z-10 block bg-[#0b1b2b] px-6 py-10 text-white md:hidden">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-light">
              Enable business agility and innovation at scale
            </h3>
            <Link href="#" className="mt-2 inline-block text-sm text-blue-300">
              Read the report
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-light">
              Navigate SAP transformation challenges and accelerate
              time-to-value
            </h3>
            <Link href="#" className="mt-2 inline-block text-sm text-blue-300">
              Learn more
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-light">
              Are you at the readiness tipping point?
            </h3>
            <Link href="#" className="mt-2 inline-block text-sm text-blue-300">
              Read the report
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
