import type { Metadata } from 'next'
import GetInvolvedSection from '@/components/sections/GetInvolvedSection'

export const metadata: Metadata = {
  title: 'Get Involved | India AI Safety Coordination Hub',
  description: 'Join the India AI Safety Coordination Hub as an organisation or individual, or connect via our WhatsApp communities.',
}

export default function GetInvolvedPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <GetInvolvedSection />
    </div>
  )
}
