import type { Metadata } from 'next'
import IntlOrgsSection from '@/components/sections/IntlOrgsSection'

export const metadata: Metadata = {
  title: 'International AIS Organisations | India AI Safety Coordination Hub',
  description: "Key global AI Safety bodies relevant to India's context.",
}

export default function InternationalPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <IntlOrgsSection />
    </div>
  )
}
