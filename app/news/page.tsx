import type { Metadata } from 'next'
import NewsPageContent from './NewsPageContent'
import { getNews } from '@/lib/airtable'

export const metadata: Metadata = {
  title: 'AI Safety & Ethics News India | India AIS Alliance',
  description: 'Latest news and updates on AI Safety and ethics in India.',
}

export const revalidate = 3600

export default async function NewsPage() {
  const news = await getNews()
  return (
    <div style={{ paddingTop: 60 }}>
      <NewsPageContent news={news} />
    </div>
  )
}
