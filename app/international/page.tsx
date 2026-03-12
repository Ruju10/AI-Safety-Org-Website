import type { Metadata } from 'next'
import IntlOrgsSection from '@/components/sections/IntlOrgsSection'
import { getIntlOrgs } from '@/lib/airtable'

export const metadata: Metadata = {
  title: 'International AIS Organisations | India AIS Alliance',
  description: 'Key global AI Safety bodies relevant to India\'s context.',
}

export const revalidate = 3600

export default async function InternationalPage() {
  const orgs = await getIntlOrgs()
  return (
    <div style={{ paddingTop: 60 }}>
      <IntlOrgsSection orgs={orgs} />
    </div>
  )
}
