import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import UtilityPage from '@/components/templates/UtilityPage'
import { utilityContent } from '@/lib/siteContent'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(utilityContent).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = utilityContent[slug]
  if (!content) return {}
  return { title: content.title, description: content.description }
}

export default async function UtilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = utilityContent[slug]
  if (!content) notFound()
  return <UtilityPage content={content} />
}
