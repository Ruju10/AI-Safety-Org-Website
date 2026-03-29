'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { NewsItem } from '@/lib/airtable'

interface EventData {
  id: string
  date: string
  title: string
  description: string
  link: string
  linkLabel: string
  images: string[]
  stats: { label: string; value: string }[]
}

const events: EventData[] = [
  {
    id: 'virtual-event',
    date: 'Feb 4, 2026',
    title: 'AI Safety & Governance Virtual Event',
    description:
      'We organized the AI Safety & Governance Virtual Event before the India AI Impact Summit, drawing 70+ attendees from 100+ registrations. We hosted six organizations (Impact Academy, GovernAI, Groundless AI, FutureKind, AI Safety Asia, AI Safety Connect) presenting work across governance, research retreats, physical spaces in Bengaluru, and regional coordination — revealing an active but disconnected landscape lacking compute access, stable funding, and career pathways. Our next priorities are building coordination infrastructure, technical research tracks, mentorship pathways, and converting this community energy into sustained impact.',
    link: 'https://aman987.substack.com/p/what-happened-when-we-put-indias-bca?r=5v5m3a&utm_campaign=post&utm_medium=web&triedRedirect=true',
    linkLabel: 'Read the full recap →',
    images: [
      '/images/events/virtual-event-1.jpg',
      '/images/events/virtual-event-2.jpg',
    ],
    stats: [
      { label: 'Registrations', value: '100+' },
      { label: 'Attendees', value: '70+' },
      { label: 'Orgs Presented', value: '6' },
    ],
  },
  {
    id: 'mixer',
    date: 'Feb 17, 2026',
    title: 'AI Safety Mixer',
    description:
      "We self-funded an independent AI Safety Mixer during the India AI Impact Summit, drawing ~40 attendees (from ~80 registrations) including David Wood, with themed tables on threat models, capabilities, pause proposals, and post-AGI economy that sparked genuine, exploratory discussions. The turnout confirmed India's AI safety community is larger than expected but deeply siloed, with no coordination point — while also surfacing concerns around gender representation and venue constraints that left 15-20 people waitlisted. With proper funding and infrastructure, future events could serve the full demand and help bridge these gaps.",
    link: 'https://aman987.substack.com/p/what-happened-when-we-put-indias-bca?r=5v5m3a&utm_campaign=post&utm_medium=web&triedRedirect=true',
    linkLabel: 'Read the full recap →',
    images: [
      '/images/events/mixer-1.jpg',
      '/images/events/mixer-2.jpg',
      '/images/events/mixer-3.jpg',
      '/images/events/mixer-4.jpg',
      '/images/events/mixer-5.jpg',
    ],
    stats: [
      { label: 'Registrations', value: '~80' },
      { label: 'Attendees', value: '~40' },
      { label: 'Waitlisted', value: '15-20' },
    ],
  },
]

function EventCard({ event, index }: { event: EventData; index: number }) {
  return (
    <motion.div
      id={event.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        background: 'var(--white, #fff)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '32px 36px',
        marginBottom: 32,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 12 }}>
        <h3
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 22,
            fontWeight: 600,
            color: 'var(--ink)',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {event.title}
        </h3>
        <div
          style={{
            flexShrink: 0,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--teal)',
            background: 'rgba(13,122,107,0.08)',
            borderRadius: 6,
            padding: '4px 12px',
          }}
        >
          {event.date}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 24, marginBottom: 18, flexWrap: 'wrap' }}>
        {event.stats.map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--teal)', lineHeight: 1.2 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 11, color: 'var(--ink-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.7, marginBottom: 20 }}>
        {event.description}
      </p>

      <div
        className="about-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 20 }}
      >
        {event.images.map((src, i) => (
          <div
            key={i}
            style={{
              borderRadius: 10,
              height: 180,
              overflow: 'hidden',
              background: 'var(--bg-2)',
            }}
          >
            <img
              src={src}
              alt={`${event.title} photo ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--teal)',
          textDecoration: 'none',
          borderBottom: '1px solid transparent',
          transition: 'border-color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--teal)')}
        onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
      >
        {event.linkLabel}
      </a>
    </motion.div>
  )
}

function NewsCard({ item }: { item: NewsItem }) {
  const inner = (
    <div
      style={{
        padding: '14px 16px',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.15s',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg-2)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6, gap: 8 }}>
        {item.category && (
          <span
            style={{
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--teal)',
              background: 'rgba(13,122,107,0.08)',
              borderRadius: 100,
              padding: '2px 8px',
              whiteSpace: 'nowrap',
            }}
          >
            {item.category}
          </span>
        )}
        {item.date && (
          <span style={{ fontSize: 10, color: 'var(--ink-dim)', whiteSpace: 'nowrap' }}>
            {new Date(item.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
          </span>
        )}
      </div>
      <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.5, marginBottom: 4 }}>
        {item.headline}
      </div>
      <div style={{ fontSize: 11, color: 'var(--ink-dim)' }}>via {item.source}</div>
    </div>
  )

  return item.url ? (
    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  )
}

function NewsSidebar({ news }: { news: NewsItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el || news.length === 0) return
    let raf: number
    let paused = false

    const step = () => {
      if (!paused && el) {
        el.scrollTop += 0.7
        // When we've scrolled through the first copy, silently jump back
        // to the same position in the second copy so the loop is seamless
        const half = el.scrollHeight / 2
        if (el.scrollTop >= half) {
          el.scrollTop -= half
        }
      }
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    const pause = () => { paused = true }
    const resume = () => { paused = false }
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [news])

  // Duplicate list so the reset is invisible
  const doubled = [...news, ...news]

  return (
    <div style={{ position: 'sticky', top: 80 }}>
      <div style={{ marginBottom: 16 }}>
        <span className="chip-teal" style={{ fontSize: 10 }}>Updates</span>
        <h3
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 18,
            fontWeight: 600,
            color: 'var(--ink)',
            marginTop: 8,
          }}
        >
          AI Safety News India
        </h3>
      </div>

      <div
        ref={scrollRef}
        style={{
          background: 'var(--white)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          overflowY: 'scroll',
          height: 520,
        }}
      >
        {doubled.map((item, i) => (
          <NewsCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function EventsSection({ news }: { news: NewsItem[] }) {
  return (
    <section className="sec-bg" id="events">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 32 }}
      >
        <span className="chip-teal">Our Journey</span>
        <h2 className="h2">Events & News</h2>
        <p className="lead">
          Community events shaping the AI Safety ecosystem in India, alongside the latest updates from the field.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: 40,
          alignItems: 'start',
        }}
        className="events-news-grid"
      >
        <div>
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>

        <div>
          <NewsSidebar news={news} />
        </div>
      </div>
    </section>
  )
}
