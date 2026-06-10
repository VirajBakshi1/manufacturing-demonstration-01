import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ConsultingPage from '@/components/templates/ConsultingPage'
import { consultingContent } from '@/lib/siteContent'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(consultingContent).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = consultingContent[slug]
  if (!content) return {}
  return { title: content.title, description: content.description }
}

export default async function ConsultingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = consultingContent[slug]
  if (!content) notFound()
  return <ConsultingPage content={content} />
}
