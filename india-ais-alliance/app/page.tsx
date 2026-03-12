import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import ToCSection from '@/components/sections/ToCSection'
import LandscapeSection from '@/components/sections/LandscapeSection'
import GetInvolvedSection from '@/components/sections/GetInvolvedSection'
import MappingSection from '@/components/sections/MappingSection'
import EventsSection from '@/components/sections/EventsSection'
import { getLandscapeMapping } from '@/lib/airtable'

export const revalidate = 3600

export default async function Home() {
  const landscape = await getLandscapeMapping()

  return (
    <>
      <Hero />
      <AboutSection />
      <ToCSection />
      <LandscapeSection />
      <GetInvolvedSection />
      <MappingSection orgs={landscape} />
      <EventsSection />
    </>
  )
}
