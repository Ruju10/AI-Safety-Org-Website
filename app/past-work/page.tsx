import type { Metadata } from 'next'
import PastWorkSection from '@/components/sections/PastWorkSection'

export const metadata: Metadata = {
  title: 'Past Work | India AIS Alliance',
  description: 'Activities, events, and milestones from the India AIS Alliance.',
}

export default function PastWorkPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <PastWorkSection />
    </div>
  )
}
