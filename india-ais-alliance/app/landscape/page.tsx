import type { Metadata } from 'next'
import LandscapeSection from '@/components/sections/LandscapeSection'

export const metadata: Metadata = {
  title: 'AIS Landscape | India AI Safety Coordination Hub',
  description: 'Explore Indian organisations, institutions, and labs working on AI Safety.',
}

export default function LandscapePage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <LandscapeSection />
    </div>
  )
}
