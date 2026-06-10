import type { Metadata } from 'next'
import ApplicationsInsightsSection from '@/components/Services/Application/ApplicationsInsightsSection'
import CustomerSuccessSection from '@/components/Services/Application/CustomerSuccessSection'
import ServiceApplicationHero from '@/components/Services/Application/HeroSection'
import PartnersCarousel from '@/components/Services/Application/PartnersCarousel'
import ServicesTabsSection from '@/components/Services/Application/ServicesTabSection'
import WhatWeDoSection from '@/components/Services/Application/WhatWeDo'
import CtaBanner from '@/components/CtaBanner'

export const metadata: Metadata = {
  title: 'Application Services',
  description:
    'Transform your applications to enable business agility and innovation at scale with NovaCore Application Services.',
}

export default function Application() {
  return (
    <>
      <ServiceApplicationHero />
      <WhatWeDoSection />
      <ServicesTabsSection />
      <ApplicationsInsightsSection />
      <CustomerSuccessSection />
      <PartnersCarousel />
      <CtaBanner
        title="Let's transform your application portfolio"
        subtitle="From assessment and migration to modernization and management — our experts are ready to help."
      />
    </>
  )
}
