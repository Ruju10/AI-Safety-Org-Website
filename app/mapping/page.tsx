import type { Metadata } from 'next'
import MappingSection from '@/components/sections/MappingSection'
import { getLandscapeMapping } from '@/lib/airtable'

export const metadata: Metadata = {
  title: 'AI Landscape Mapping | India AIS Alliance',
  description: 'Comprehensive mapping of India\'s AI ecosystem across safety, policy, industry, and research.',
}

export const revalidate = 3600

export default async function MappingPage() {
  const orgs = await getLandscapeMapping()
  return (
    <div style={{ paddingTop: 60 }}>
      <MappingSection orgs={orgs} />
    </div>
  )
}
