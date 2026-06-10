import type { Metadata } from 'next'
import ConsultingPage from '@/components/templates/ConsultingPage'
import { consultingIndexContent } from '@/lib/siteContent'

export const metadata: Metadata = {
  title: consultingIndexContent.title,
  description: consultingIndexContent.description,
}

export default function ConsultingIndexPage() {
  return <ConsultingPage content={consultingIndexContent} />
}
