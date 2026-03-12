import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import ToCSection from '@/components/sections/ToCSection'
import LandscapeSection from '@/components/sections/LandscapeSection'
import ParticipateSection from '@/components/sections/ParticipateSection'
import IntlOrgsSection from '@/components/sections/IntlOrgsSection'
import CommunitySection from '@/components/sections/CommunitySection'
import MappingSection from '@/components/sections/MappingSection'
import PastWorkSection from '@/components/sections/PastWorkSection'
import { getOrgs, getNews, getLandscapeMapping, getIntlOrgs } from '@/lib/airtable'

export const revalidate = 3600

export default async function Home() {
  const [orgs, news, landscape, intlOrgs] = await Promise.all([
    getOrgs(),
    getNews(),
    getLandscapeMapping(),
    getIntlOrgs(),
  ])

  return (
    <>
      <Hero />
      <AboutSection />
      <div className="rule" />
      <ToCSection />
      <LandscapeSection orgs={orgs} />
      <ParticipateSection />
      <IntlOrgsSection orgs={intlOrgs} />
      <CommunitySection news={news} />
      <MappingSection orgs={landscape} />
      <PastWorkSection />
    </>
  )
}
