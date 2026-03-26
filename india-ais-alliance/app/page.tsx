import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import ToCSection from '@/components/sections/ToCSection'
import EventsSummarySection from '@/components/sections/EventsSummarySection'
import JoinHubSection from '@/components/sections/JoinHubSection'
import ContactSection from '@/components/sections/ContactSection'

export const revalidate = 3600

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ToCSection />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <EventsSummarySection />
        <JoinHubSection />
      </div>
      <ContactSection />
    </>
  )
}
