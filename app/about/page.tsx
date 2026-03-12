import type { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'
import ToCSection from '@/components/sections/ToCSection'

export const metadata: Metadata = {
  title: 'About Us | India AIS Alliance',
  description: 'Learn about the India AIS Alliance — our team, mission, and advisory board.',
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <AboutSection />
      <div className="rule" />
      <ToCSection />
    </div>
  )
}
