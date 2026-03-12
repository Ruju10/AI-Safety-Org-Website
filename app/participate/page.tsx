import type { Metadata } from 'next'
import ParticipateSection from '@/components/sections/ParticipateSection'

export const metadata: Metadata = {
  title: 'Participate | India AIS Alliance',
  description: 'Join the India AIS Alliance as an organisation or individual.',
}

export default function ParticipatePage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <ParticipateSection />
    </div>
  )
}
