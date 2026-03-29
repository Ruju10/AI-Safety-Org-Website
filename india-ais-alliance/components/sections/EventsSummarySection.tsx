'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const events = [
  {
    date: 'Feb 4, 2026',
    title: 'AI Safety & Governance Virtual Event',
    desc: 'A pre-Summit virtual gathering with 70+ attendees and 6 organizations presenting across governance, research, and community building.',
    href: '/events#virtual-event',
  },
  {
    date: 'Feb 17, 2026',
    title: 'AI Safety Mixer',
    desc: "An independent mixer during the India AI Impact Summit with ~40 attendees and themed discussions on threat models, capabilities, and India's AI safety landscape.",
    href: '/events#mixer',
  },
]

export default function EventsSummarySection() {
  return (
    <section className="sec-bg" id="events-summary" style={{ height: '100%' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="h2" style={{ marginBottom: 12 }}>Events</h2>
        <p className="lead" style={{ marginBottom: 28 }}>
          Community events and gatherings shaping the AI Safety ecosystem in India.
        </p>

        <div
          style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: '28px 30px',
          }}
        >
          {events.map((event, i) => (
            <Link
              key={event.title}
              href={event.href}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                padding: '18px 0',
                borderBottom: i < events.length - 1 ? '1px solid var(--border)' : 'none',
                textDecoration: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--bg)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'transparent')}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--teal)',
                  background: 'rgba(13,122,107,0.08)',
                  borderRadius: 6,
                  padding: '5px 12px',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  marginTop: 2,
                }}
              >
                {event.date}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}>
                  {event.title}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
                  {event.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/events"
          style={{
            display: 'inline-block',
            marginTop: 20,
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--teal)',
            textDecoration: 'none',
          }}
        >
          View all events →
        </Link>
      </motion.div>
    </section>
  )
}
