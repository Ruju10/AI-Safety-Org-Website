import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import ToCSection from '@/components/sections/ToCSection'
import JoinHubSection from '@/components/sections/JoinHubSection'

export const revalidate = 3600

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ToCSection />
      <JoinHubSection />
    </>
  )
}
