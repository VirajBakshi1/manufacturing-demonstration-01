import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PlatformPage from '@/components/templates/PlatformPage'
import { platformsContent } from '@/lib/siteContent'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(platformsContent).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = platformsContent[slug]
  if (!content) return {}
  return { title: content.title, description: content.description }
}

export default async function PlatformDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = platformsContent[slug]
  if (!content) notFound()
  return <PlatformPage content={content} />
}
