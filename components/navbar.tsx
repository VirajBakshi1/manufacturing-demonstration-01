'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

/* ---------------- TYPES ---------------- */

type MegaMenu = {
  intro: {
    title: string
    items: string[]
  }
  links: {
    title: string
    items: { label: string; href: string }[]
  }[]
  spotlight?: {
    title: string
    description: string
    href: string
  }[]
}

type NavItem = {
  label: string
  href?: string
  mega?: MegaMenu
}

type NavbarProps = {
  brand?: string
  links: NavItem[]
}

/* ---------------- COMPONENT ---------------- */

export default function Navbar({
  brand = 'NovaCore',
  links,
}: NavbarProps) {
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  /* Outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDesktopMenu(null)
        setMobileOpen(false)
        setMobileAccordion(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* ESC close */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopMenu(null)
        setMobileOpen(false)
        setMobileAccordion(null)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  /* Elevation on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAll = () => {
    setDesktopMenu(null)
    setMobileOpen(false)
    setMobileAccordion(null)
  }

  return (
    <>
      {/* Backdrop overlay (desktop mega menu) */}
      {desktopMenu && (
        <div className="fixed inset-0 z-40 hidden bg-slate-900/30 backdrop-blur-sm md:block animate-fade-in" />
      )}

      <header
        ref={navRef}
        className={clsx(
          'sticky top-0 z-50 border-b transition-all duration-300',
          scrolled || desktopMenu
            ? 'border-gray-200 bg-white/90 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.25)] backdrop-blur-md'
            : 'border-transparent bg-white'
        )}
      >
        {/* ---------------- TOP BAR ---------------- */}
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            onClick={closeAll}
            className="text-xl font-bold tracking-tight text-blue-700 transition-colors hover:text-blue-800"
          >
            {brand.slice(0, 4)}
            <span className="text-gray-900">{brand.slice(4)}</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-7 md:flex lg:gap-9">
            {links.map((item) => (
              <li key={item.label}>
                {item.mega ? (
                  <button
                    onClick={() =>
                      setDesktopMenu(
                        desktopMenu === item.label ? null : item.label
                      )
                    }
                    className={clsx(
                      'group relative flex items-center gap-1 py-1 text-sm font-medium transition-colors',
                      desktopMenu === item.label
                        ? 'text-blue-700'
                        : 'text-gray-700 hover:text-blue-700'
                    )}
                    aria-expanded={desktopMenu === item.label}
                  >
                    {item.label}
                    <svg
                      className={clsx(
                        'h-4 w-4 transition-transform duration-300',
                        desktopMenu === item.label && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>

                    {/* Hover underline */}
                    <span
                      className={clsx(
                        'absolute -bottom-1 left-0 h-0.5 bg-blue-700 transition-all duration-300',
                        desktopMenu === item.label
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={closeAll}
                    className="group relative py-1 text-sm font-medium text-gray-700 transition-colors hover:text-blue-700"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            onClick={closeAll}
            className="hidden rounded-full bg-blue-700 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-700/25 md:inline-block"
          >
            Contact us
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ---------------- DESKTOP MEGA MENU ---------------- */}
        {desktopMenu && (
          <div className="animate-mega-open absolute left-1/2 top-full z-50 hidden w-screen -translate-x-1/2 border-t border-gray-100 bg-white shadow-2xl md:block">
            {links
              .filter((l) => l.label === desktopMenu && l.mega)
              .map((item) => {
                const mega = item.mega!
                return (
                  <div
                    key={item.label}
                    className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-6 py-12"
                  >
                    {/* Intro */}
                    <div className="col-span-3 border-r border-gray-100 pr-8">
                      <h3 className="mb-5 text-xl font-medium leading-snug text-gray-900">
                        {mega.intro.title}
                      </h3>
                      <ul className="space-y-4 text-sm text-gray-600">
                        {mega.intro.items.map((i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-2 h-1 w-4 shrink-0 rounded-full bg-blue-600" />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="col-span-6 grid grid-cols-2 gap-8">
                      {mega.links.map((group, gi) => (
                        <div key={group.title || gi}>
                          {group.title && (
                            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                              {group.title}
                            </h4>
                          )}
                          <ul className="space-y-1">
                            {group.items.map((l) => (
                              <li key={l.href}>
                                <Link
                                  href={l.href}
                                  onClick={closeAll}
                                  className="group flex items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                                >
                                  {l.label}
                                  <span className="-translate-x-1 text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    →
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Spotlight */}
                    {mega.spotlight && (
                      <div className="col-span-3 space-y-4 border-l border-gray-100 pl-8">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Spotlight
                        </h4>
                        {mega.spotlight.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            onClick={closeAll}
                            className="group block rounded-lg border border-gray-100 bg-gray-50/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-md"
                          >
                            <p className="font-medium text-gray-900 transition-colors group-hover:text-blue-700">
                              {s.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-600">
                              {s.description}
                            </p>
                            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700">
                              Learn more
                              <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
          </div>
        )}

        {/* ---------------- MOBILE ACCORDION MENU ---------------- */}
        {mobileOpen && (
          <div className="animate-mobile max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-100 bg-white px-4 py-6 md:hidden">
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.label} className="border-b border-gray-100 pb-2 last:border-none">
                  {item.mega ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileAccordion(
                            mobileAccordion === item.label
                              ? null
                              : item.label
                          )
                        }
                        className="flex w-full items-center justify-between py-2 text-sm font-semibold text-gray-900"
                      >
                        {item.label}
                        <svg
                          className={clsx(
                            'h-4 w-4 text-blue-700 transition-transform duration-300',
                            mobileAccordion === item.label && 'rotate-180'
                          )}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      <div
                        className={clsx(
                          'overflow-hidden transition-all duration-300',
                          mobileAccordion === item.label
                            ? 'mt-2 max-h-[600px]'
                            : 'max-h-0'
                        )}
                      >
                        {item.mega.links.map((group, gi) => (
                          <div key={group.title || gi} className="mb-4">
                            {group.title && (
                              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                {group.title}
                              </p>
                            )}
                            <ul className="space-y-1">
                              {group.items.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    onClick={closeAll}
                                    className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={closeAll}
                      className="block py-2 text-sm font-semibold text-gray-900"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              onClick={closeAll}
              className="mt-6 block rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-blue-800"
            >
              Contact us
            </Link>
          </div>
        )}
      </header>

      {/* ---------------- ANIMATIONS ---------------- */}
      <style jsx>{`
        .animate-mega-open {
          animation: megaSlideDown 480ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes megaSlideDown {
          0% {
            opacity: 0;
            transform: translate(-50%, -24px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .animate-mobile {
          animation: mobileIn 260ms ease-out forwards;
        }

        @keyframes mobileIn {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
