import ApplicationsInsightsSection from "@/components/Services/Application/ApplicationsInsightsSection";
import CustomerSuccessSection from "@/components/Services/Application/CustomerSuccessSection";
import ServiceApplicationHero from "@/components/Services/Application/HeroSection";
import PartnersCarousel from "@/components/Services/Application/PartnersCarousel";
import ServicesTabsSection from "@/components/Services/Application/ServicesTabSection";
import WhatWeDoSection from "@/components/Services/Application/WhatWeDo";
import App from "next/app";


export default function Application() {
  return (
    <>
        <ServiceApplicationHero />
        <WhatWeDoSection />
        <ServicesTabsSection />
        <ApplicationsInsightsSection />
        <CustomerSuccessSection />
        <PartnersCarousel />
    </>
  )
}
