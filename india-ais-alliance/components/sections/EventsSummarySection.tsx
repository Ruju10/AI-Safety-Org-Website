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
    <section className="sec-white" id="events-summary">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="toc-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 72,
            alignItems: 'start',
          }}
        >
          {/* Left: heading */}
          <div>
            <span className="chip-teal">Our Journey</span>
            <h2 className="h2">Events</h2>
            <p className="lead">
              Community events and gatherings shaping the AI Safety ecosystem in India.
            </p>
            <Link
              href="/events"
              style={{
                display: 'inline-block',
                marginTop: 24,
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--teal)',
                textDecoration: 'none',
              }}
            >
              View all events →
            </Link>
          </div>

          {/* Right: event list */}
          <div
            style={{
              background: 'var(--bg)',
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
                <div style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--ink)' }}>
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
