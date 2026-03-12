import type { Metadata } from 'next'
import EventsSection from '@/components/sections/EventsSection'

export const metadata: Metadata = {
  title: 'Events | India AI Safety Coordination Hub',
  description: 'Community events and gatherings shaping the AI Safety ecosystem in India.',
}

export default function EventsPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <EventsSection />
    </div>
  )
}
