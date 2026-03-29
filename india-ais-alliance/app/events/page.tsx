import type { Metadata } from 'next'
import EventsSection from '@/components/sections/EventsSection'
import { getNews } from '@/lib/airtable'

export const metadata: Metadata = {
  title: 'Events & News | India AI Safety Coordination Hub',
  description: 'Community events shaping the AI Safety ecosystem in India, alongside the latest AI Safety news.',
}

export const revalidate = 3600

export default async function EventsPage() {
  const news = await getNews()
  return (
    <div style={{ paddingTop: 60 }}>
      <EventsSection news={news} />
    </div>
  )
}
