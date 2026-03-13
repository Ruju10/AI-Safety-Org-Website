'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const events = [
  {
    date: 'Feb 4, 2026',
    title: 'AI Safety & Governance Virtual Event',
  },
  {
    date: 'Feb 17, 2026',
    title: 'AI Safety Mixer',
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
        <span className="chip-teal">Upcoming Events</span>
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
            <div
              key={event.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '18px 0',
                borderBottom: i < events.length - 1 ? '1px solid var(--border)' : 'none',
              }}
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
                }}
              >
                {event.date}
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>
                {event.title}
              </div>
            </div>
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
