import type { Metadata } from 'next'
import CareersPage from '@/components/templates/CareersPage'
import { careersIndexContent } from '@/lib/siteContent'

export const metadata: Metadata = {
  title: 'Careers',
  description: careersIndexContent.description,
}

export default function CareersIndexPage() {
  return <CareersPage content={careersIndexContent} />
}
