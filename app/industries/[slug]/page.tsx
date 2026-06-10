import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import IndustryPage from '@/components/templates/IndustryPage'
import { industriesContent } from '@/lib/siteContent'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(industriesContent).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = industriesContent[slug]
  if (!content) return {}
  return { title: content.title, description: content.description }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = industriesContent[slug]
  if (!content) notFound()
  return <IndustryPage content={content} />
}
