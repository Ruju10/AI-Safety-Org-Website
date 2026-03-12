import type { Metadata } from 'next'
import LandscapeSection from '@/components/sections/LandscapeSection'
import { getOrgs } from '@/lib/airtable'

export const metadata: Metadata = {
  title: 'AIS Landscape | India AIS Alliance',
  description: 'Explore organisations and initiatives working on AI Safety across India.',
}

export const revalidate = 3600

export default async function LandscapePage() {
  const orgs = await getOrgs()
  return (
    <div style={{ paddingTop: 60 }}>
      <LandscapeSection orgs={orgs} />
    </div>
  )
}
