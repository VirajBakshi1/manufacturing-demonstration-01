import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import "./globals.css";


const navLinks = [
  /* ================= SERVICES ================= */
  {
    label: 'Services',
    mega: {
      intro: {
        title: 'What do you want to do today?',
        items: [
          'Scale AI you can trust',
          'Transform applications to unlock value',
          'Navigate cyber risk with confidence',
        ],
      },
      links: [
        {
          title: 'Services that drive business results',
          items: [
            { label: 'Applications', href: '/services/applications' },
            { label: 'Cloud', href: '/services/cloud' },
            { label: 'Core Enterprise and zCloud', href: '/services/core-enterprise' },
            { label: 'Cyber Resilience', href: '/services/cyber-resilience' },
          ],
        },
        {
          title: '',
          items: [
            { label: 'Data and AI', href: '/services/data-ai' },
            { label: 'Digital Workplace', href: '/services/digital-workplace' },
            { label: 'Network and Edge', href: '/services/network-edge' },
          ],
        },
      ],
      spotlight: [
        {
          title: 'NovaCore Bridge',
          description: 'An open integration platform delivering IT solutions',
          href: '/platforms/bridge',
        },
        {
          title: 'NovaCore Collaborative',
          description: 'The space where delivery happens globally and locally',
          href: '/platforms/collaborative',
        },
        {
          title: 'NovaCore Vital',
          description: 'Co-creating intelligent, human-centered experiences',
          href: '/platforms/vital',
        },
      ],
    },
  },

  /* ================= CONSULTING ================= */
  {
    label: 'Consulting',
    mega: {
      intro: {
        title: 'Consulting that turns strategy into action',
        items: [
          'Business-led technology decisions',
          'Practical transformation roadmaps',
          'Execution at enterprise scale',
        ],
      },
      links: [
        {
          title: 'Our consulting capabilities',
          items: [
            { label: 'Digital Transformation', href: '/consulting/digital-transformation' },
            { label: 'Cloud Strategy', href: '/consulting/cloud-strategy' },
            { label: 'Cybersecurity Strategy', href: '/consulting/cybersecurity' },
            { label: 'Enterprise Architecture', href: '/consulting/enterprise-architecture' },
          ],
        },
        {
          title: 'Engagement models',
          items: [
            { label: 'Advisory Services', href: '/consulting/advisory' },
            { label: 'Co-creation Workshops', href: '/consulting/workshops' },
            { label: 'Transformation Programs', href: '/consulting/programs' },
          ],
        },
      ],
      spotlight: [
        {
          title: 'Consulting Playbooks',
          description: 'Proven frameworks built from real enterprise engagements',
          href: '/consulting/playbooks',
        },
      ],
    },
  },

  /* ================= INDUSTRIES ================= */
  {
    label: 'Industries',
    mega: {
      intro: {
        title: 'Industry expertise that delivers results',
        items: [
          'Solutions built for real-world complexity',
          'Deep domain knowledge',
          'Regulatory-aware architectures',
        ],
      },
      links: [
        {
          title: 'Industries we serve',
          items: [
            { label: 'Manufacturing', href: '/industries/manufacturing' },
            { label: 'Banking & Financial Services', href: '/industries/banking' },
            { label: 'Healthcare', href: '/industries/healthcare' },
            { label: 'Retail & Consumer Goods', href: '/industries/retail' },
          ],
        },
        {
          title: '',
          items: [
            { label: 'Telecommunications', href: '/industries/telecom' },
            { label: 'Energy & Utilities', href: '/industries/energy' },
            { label: 'Public Sector', href: '/industries/public-sector' },
          ],
        },
      ],
      spotlight: [
        {
          title: 'Industry Case Studies',
          description: 'How enterprises modernize and scale with confidence',
          href: '/case-studies',
        },
      ],
    },
  },

  /* ================= INSIGHTS ================= */
  {
    label: 'Insights',
    mega: {
      intro: {
        title: 'Insights from the front lines of transformation',
        items: [
          'Trends shaping enterprise IT',
          'Lessons from complex environments',
          'Expert perspectives',
        ],
      },
      links: [
        {
          title: 'Explore insights',
          items: [
            { label: 'Articles', href: '/insights/articles' },
            { label: 'Reports', href: '/insights/reports' },
            { label: 'Whitepapers', href: '/insights/whitepapers' },
            { label: 'Blogs', href: '/insights/blogs' },
          ],
        },
        {
          title: 'Media',
          items: [
            { label: 'Events & Webinars', href: '/insights/events' },
            { label: 'Podcasts', href: '/insights/podcasts' },
          ],
        },
      ],
      spotlight: [
        {
          title: 'Future of Enterprise IT',
          description: 'Key trends every CIO should be tracking',
          href: '/insights/future-it',
        },
      ],
    },
  },

  /* ================= ABOUT US ================= */
  {
    label: 'About Us',
    mega: {
      intro: {
        title: 'Who we are',
        items: [
          'Purpose-driven technology services',
          'Global delivery, local expertise',
          'People-first culture',
        ],
      },
      links: [
        {
          title: 'Company',
          items: [
            { label: 'Our Story', href: '/about/story' },
            { label: 'Leadership', href: '/about/leadership' },
            { label: 'Partners', href: '/about/partners' },
            { label: 'Careers', href: '/careers' },
          ],
        },
        {
          title: 'Trust & responsibility',
          items: [
            { label: 'Sustainability', href: '/about/sustainability' },
            { label: 'Diversity & Inclusion', href: '/about/diversity' },
            { label: 'Ethics & Compliance', href: '/about/ethics' },
          ],
        },
      ],
      spotlight: [
        {
          title: 'Life at NovaCore',
          description: 'Meet the people building mission-critical systems',
          href: '/careers/life-at-NovaCore',
        },
      ],
    },
  },

  /* ================= NEWS ================= */
  {
    label: 'News',
    href: '/news',
  },
]


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar
        brand="NovaCore"
        links={navLinks}
      />
      
        {children}
        <Footer />
      </body>
    </html>
  );
}
