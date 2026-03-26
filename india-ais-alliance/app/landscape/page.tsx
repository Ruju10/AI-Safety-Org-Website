import type { Metadata } from 'next'
import LandscapeSection from '@/components/sections/LandscapeSection'

export const metadata: Metadata = {
  title: 'AIS Landscape | India AI Safety Coordination Hub',
  description: "India's AI Safety organisations and the broader AI ecosystem — labs, institutions, think tanks, and government bodies.",
}

export default function LandscapePage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <LandscapeSection />
    </div>
  )
}
