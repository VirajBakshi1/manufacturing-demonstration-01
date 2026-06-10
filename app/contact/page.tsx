import type { Metadata } from 'next'
import { PageHero } from '@/components/templates/StandardPage'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Talk to NovaCore experts about your transformation, modernization, or security goals.',
}

const contactChannels = [
  {
    title: 'Sales inquiries',
    detail: 'sales@novacore.example',
    sub: 'Response within one business day',
  },
  {
    title: 'Support',
    detail: '+1 (800) 555-0142',
    sub: '24/7 for managed-service clients',
  },
  {
    title: 'Media & analysts',
    detail: 'press@novacore.example',
    sub: 'Press kit available on request',
  },
  {
    title: 'Careers',
    detail: 'careers@novacore.example',
    sub: 'We read every application',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what's next"
        description="Whether you're planning a transformation or fighting a fire, our experts are ready to help."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
          {/* LEFT: channels */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="mb-4 text-3xl font-light text-gray-900">
                Reach us directly
              </h2>
              <p className="mb-10 max-w-md text-gray-600">
                Prefer a direct line? Pick the channel that fits — or use the
                form and we&apos;ll route your message to the right team.
              </p>
            </Reveal>

            <div className="space-y-5">
              {contactChannels.map((c, i) => (
                <Reveal key={c.title} delay={i * 100}>
                  <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-lg font-medium text-blue-700">
                      {c.detail}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">{c.sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
