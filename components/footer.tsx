import Link from 'next/link'

/* ---------------- CONFIG ---------------- */

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Applications', href: '/services/applications' },
      { label: 'Cloud', href: '/services/cloud' },
      { label: 'Data and AI', href: '/services/data-ai' },
      { label: 'Cyber Resilience', href: '/services/cyber-resilience' },
      { label: 'Digital Workplace', href: '/services/digital-workplace' },
      { label: 'Network and Edge', href: '/services/network-edge' },
      { label: 'Core Enterprise and zCloud', href: '/services/core-enterprise' },
      { label: 'Consulting', href: '/consulting' },
    ],
  },
  {
    title: 'Platforms',
    links: [
      { label: 'NovaCore Bridge', href: '/platforms/bridge' },
      { label: 'NovaCore Collaborative', href: '/platforms/collaborative' },
      { label: 'NovaCore Vital', href: '/platforms/vital' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Insights', href: '/insights/articles' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'Our Story', href: '/about/story' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Careers', href: '/careers' },
      { label: 'Alliances', href: '/about/alliances' },
      { label: 'Locations', href: '/about/locations' },
      { label: 'Investors', href: '/investors' },
      { label: 'News', href: '/news' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Security', href: '/security' },
  { label: 'CSR Policy', href: '/csr-policy' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Sitemap', href: '/sitemap' },
  {
    label: 'Do not sell or share my personal information',
    href: '/do-not-sell',
  },
  { label: 'Cookie Preferences', href: '/cookie-preferences' },
]

/* ---------------- SOCIAL ICONS ---------------- */

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
  { label: 'X', href: '#', icon: <XIcon /> },
  { label: 'YouTube', href: '#', icon: <YouTubeIcon /> },
]

/* ---------------- COMPONENT ---------------- */

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Top */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4 lg:col-span-3">
            <Link href="/" className="text-3xl font-bold tracking-tight text-white">
              Nova<span className="text-blue-400">Core</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-200/80">
              Mission-critical technology services for manufacturers and
              enterprises — modernizing IT and OT, scaling AI, and securing
              digital operations worldwide.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-blue-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-8 lg:col-span-9">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-blue-300">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-blue-100/80 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Locale */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <button className="flex w-fit items-center gap-2 text-sm font-medium text-blue-200 transition-colors hover:text-white">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
              <path d="M3.6 9h16.8M3.6 15h16.8M12 3a13.7 13.7 0 0 1 0 18M12 3a13.7 13.7 0 0 0 0 18" />
            </svg>
            India – English
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <p className="text-xs text-blue-300/70">
            © 2026 NovaCore Inc. All rights reserved.
          </p>
        </div>

        {/* Legal */}
        <div className="mt-6 flex flex-wrap gap-x-2 gap-y-2 text-xs text-blue-300/70">
          {legalLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-2">
              <Link
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
              {i !== legalLinks.length - 1 && (
                <span className="text-blue-300/30">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
