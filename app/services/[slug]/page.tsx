import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import StandardPage from '@/components/templates/StandardPage'
import { servicesContent } from '@/lib/siteContent'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(servicesContent).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = servicesContent[slug]
  if (!content) return {}
  return { title: content.title, description: content.description }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = servicesContent[slug]
  if (!content) notFound()
  return <StandardPage content={content} />
}
