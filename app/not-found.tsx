import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative px-6 text-center">
        <p className="animate-fade-in bg-gradient-to-br from-white to-blue-400 bg-clip-text text-8xl font-bold text-transparent md:text-9xl">
          404
        </p>
        <h1 className="animate-slide-up mt-6 text-2xl font-semibold text-white md:text-3xl">
          This page doesn&apos;t exist
        </h1>
        <p className="animate-slide-up delay-100 mx-auto mt-4 max-w-md text-blue-200">
          The page you&apos;re looking for may have moved or never existed.
          Let&apos;s get you back on track.
        </p>
        <div className="animate-slide-up delay-200 mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-blue-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Back to home
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
