import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import InsightsPage from '@/components/templates/InsightsPage'
import { insightsContent } from '@/lib/siteContent'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(insightsContent).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = insightsContent[slug]
  if (!content) return {}
  return { title: content.title, description: content.description }
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = insightsContent[slug]
  if (!content) notFound()
  return <InsightsPage content={content} />
}
