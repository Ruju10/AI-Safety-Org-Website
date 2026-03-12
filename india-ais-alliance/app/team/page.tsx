import type { Metadata } from 'next'
import TeamSection from '@/components/sections/TeamSection'

export const metadata: Metadata = {
  title: 'Team | India AI Safety Coordination Hub',
  description: 'Meet the core team and advisory board behind the India AI Safety Coordination Hub.',
}

export default function TeamPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <TeamSection />
    </div>
  )
}
