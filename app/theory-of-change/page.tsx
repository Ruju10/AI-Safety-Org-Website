import type { Metadata } from 'next'
import ToCSection from '@/components/sections/ToCSection'

export const metadata: Metadata = {
  title: 'Theory of Change | India AIS Alliance',
  description: 'Our strategic theory of change for building India\'s AI Safety ecosystem.',
}

export default function ToCPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <ToCSection />
    </div>
  )
}
