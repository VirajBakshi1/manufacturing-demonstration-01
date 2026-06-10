import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import AboutPage from '@/components/templates/AboutPage'
import { careersContent } from '@/lib/siteContent'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(careersContent).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = careersContent[slug]
  if (!content) return {}
  return { title: content.title, description: content.description }
}

export default async function CareersDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = careersContent[slug]
  if (!content) notFound()
  return <AboutPage content={content} />
}
