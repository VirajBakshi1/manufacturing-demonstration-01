import Link from 'next/link'

/* ---------------- CONFIG ---------------- */

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Applications', href: '/services/applications' },
      { label: 'Network and Edge', href: '/services/network-edge' },
      { label: 'Data and AI', href: '/services/data-ai' },
      { label: 'Consulting', href: '/consulting' },
      { label: 'NovaCore Vital', href: '/platforms/vital' },
      { label: 'Cyber Resilience', href: '/services/cyber-resilience' },
      { label: 'Cloud', href: '/services/cloud' },
      { label: 'NovaCore Bridge', href: '/platforms/bridge' },
      { label: 'Digital Workplace', href: '/services/digital-workplace' },
      { label: 'Core Enterprise and zCloud', href: '/services/core-enterprise' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'Alliances', href: '/about/alliances' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Corporate Citizenship', href: '/about/corporate-citizenship' },
      { label: 'Investors', href: '/investors' },
      { label: 'Kinship at NovaCore', href: '/about/kinship' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Locations', href: '/about/locations' },
      { label: 'News', href: '/news' },
      { label: 'Trust', href: '/trust' },
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

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'X', href: '#', icon: 'X' },
]

/* ---------------- COMPONENT ---------------- */

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-blue-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-semibold text-blue-700">
              NovaCore
            </Link>
          </div>

          {/* Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-lg font-medium">{section.title}</h3>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social + Locale */}
        <div className="mt-12 flex flex-col gap-6 border-t border-blue-100 pt-6 md:flex-row md:items-center md:justify-between">
          {/* Social */}
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="rounded-md bg-blue-700 p-2 text-white hover:bg-blue-800"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Locale */}
          <button className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline">
            India – English
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Legal */}
        <div className="mt-8 border-t border-blue-100 pt-6 text-sm text-blue-700">
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {legalLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-3">
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
                {i !== legalLinks.length - 1 && <span>|</span>}
              </span>
            ))}
          </div>

          <p className="mt-4 text-xs text-blue-600">
            © 2026 NovaCore Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
