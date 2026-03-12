import type { Metadata } from 'next'
import ParticipateSection from '@/components/sections/ParticipateSection'

export const metadata: Metadata = {
  title: 'Participate | India AI Safety Coordination Hub',
  description: 'Join the India AI Safety Coordination Hub as an organisation or individual.',
}

export default function ParticipatePage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <ParticipateSection />
    </div>
  )
}
