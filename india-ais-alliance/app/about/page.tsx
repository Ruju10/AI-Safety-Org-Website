import type { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'
import ToCSection from '@/components/sections/ToCSection'
import TeamSection from '@/components/sections/TeamSection'

export const metadata: Metadata = {
  title: 'About Us | India AI Safety Coordination Hub',
  description: 'Learn about the India AI Safety Coordination Hub — our team, mission, and theory of change.',
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 60 }}>
      <AboutSection />
      <div className="rule" />
      <ToCSection />
      <div className="rule" />
      <TeamSection />
    </div>
  )
}
