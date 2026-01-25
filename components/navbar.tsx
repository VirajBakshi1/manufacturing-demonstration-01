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

  return (
    <>
      {/* Backdrop overlay (desktop mega menu) */}
      {desktopMenu && (
        <div className="fixed inset-0 z-40 hidden bg-black/10 backdrop-blur-sm md:block" />
      )}

      <header
        ref={navRef}
        className="sticky top-0 z-50 border-b bg-white"
      >
        {/* ---------------- TOP BAR ---------------- */}
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link
            href="/"
            className="text-xl font-semibold text-blue-700"
          >
            {brand}
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
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
                      'group flex items-center gap-1 text-sm font-medium transition-colors',
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
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className="relative text-sm font-medium text-gray-700 hover:text-blue-700"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-md p-2 text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Open menu"
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
            <div
  className={clsx(
    'absolute left-1/2 top-full z-50 w-screen -translate-x-1/2 border-t bg-white shadow-lg hidden md:block',
    desktopMenu ? 'animate-mega-open pointer-events-auto' : 'animate-mega-closed pointer-events-none'
  )}
>
               {links
              .filter((l) => l.label === desktopMenu && l.mega)
              .map((item) => {
                const mega = item.mega!
                return (
                  <div
                    key={item.label}
                    className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-12 gap-10"
                  >
                    {/* Intro */}
                    <div className="col-span-3 border-r pr-6">
                      <h3 className="mb-4 text-xl font-medium text-gray-900">
                        {mega.intro.title}
                      </h3>
                      <ul className="space-y-4 text-sm text-gray-600">
                        {mega.intro.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="col-span-6 grid grid-cols-2 gap-8">
                      {mega.links.map((group) => (
                        <div key={group.title}>
                          {group.title && (
                            <h4 className="mb-3 text-sm font-semibold text-gray-900">
                              {group.title}
                            </h4>
                          )}
                          <ul className="space-y-2">
                            {group.items.map((l) => (
                              <li key={l.href}>
                                <Link
                                  href={l.href}
                                  onClick={() => setDesktopMenu(null)}
                                  className="text-sm text-gray-700 hover:text-blue-700 transition-colors"
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Spotlight */}
                    {mega.spotlight && (
                      <div className="col-span-3 border-l pl-6 space-y-6">
                        <h4 className="text-lg font-medium text-gray-900">
                          Spotlight
                        </h4>
                        {mega.spotlight.map((s) => (
                          <div key={s.title}>
                            <p className="font-medium text-gray-900">
                              {s.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-600">
                              {s.description}
                            </p>
                            <Link
                              href={s.href}
                              className="mt-2 inline-block text-sm font-medium text-blue-700 hover:underline"
                            >
                              Learn more →
                            </Link>
                          </div>
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
          <div className="md:hidden border-t bg-white px-4 py-6 animate-mobile">
            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item.label}>
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
                        className="flex w-full items-center justify-between text-sm font-medium text-blue-700"
                      >
                        {item.label}
                        <svg
                          className={clsx(
                            'h-4 w-4 transition-transform duration-300',
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
                            ? 'max-h-[500px] mt-4'
                            : 'max-h-0'
                        )}
                      >
                        {item.mega.links.map((group) => (
                          <div key={group.title} className="mb-4">
                            {group.title && (
                              <p className="mb-2 text-xs font-semibold uppercase text-gray-500">
                                {group.title}
                              </p>
                            )}
                            <ul className="space-y-2">
                              {group.items.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    onClick={() => {
                                      setMobileOpen(false)
                                      setMobileAccordion(null)
                                    }}
                                    className="block text-sm text-gray-700 hover:text-blue-700"
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
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-gray-700"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* ---------------- ANIMATIONS ---------------- */}
      <style jsx>{`
  .animate-mega-open {
    animation: megaSlideDown 520ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .animate-mega-closed {
    animation: megaSlideUp 420ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes megaSlideDown {
    0% {
      opacity: 0;
      transform: translate(-50%, -48px);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  @keyframes megaSlideUp {
    0% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -32px);
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
