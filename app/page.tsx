import ExpertQASection from '@/components/ExpertQASection'
import HeroSection from '@/components/heroSection'
import ThingsToKnow from '@/components/thingsToKnow'
import ValueDelivery from '@/components/ValueDelivery'
import CtaBanner from '@/components/CtaBanner'
import PartnersCarousel from '@/components/Services/Application/PartnersCarousel'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThingsToKnow />
      <ExpertQASection />
      <ValueDelivery />
      <PartnersCarousel />
      <CtaBanner />
    </>
  )
}
