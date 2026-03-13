'use client'

import { motion } from 'framer-motion'

interface EventData {
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
    date: 'Feb 17, 2026',
    title: 'AI Safety Mixer',
    description:
      'We self-funded an independent AI Safety Mixer during the India AI Impact Summit, drawing ~40 attendees (from ~80 registrations) including David Wood, with themed tables on threat models, capabilities, pause proposals, and post-AGI economy that sparked genuine, exploratory discussions. The turnout confirmed India\'s AI safety community is larger than expected but deeply siloed, with no coordination point — while also surfacing concerns around gender representation and venue constraints that left 15-20 people waitlisted. With proper funding and infrastructure, future events could serve the full demand and help bridge these gaps.',
    link: 'https://aman987.substack.com/p/what-happened-when-we-put-indias-bca?r=5v5m3a&utm_campaign=post&utm_medium=web&triedRedirect=true',
    linkLabel: 'Read the full recap →',
    images: [
      '/images/events/mixer-1.jpg',
      '/images/events/mixer-2.jpg',
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
      {/* Date chip */}
      <div
        style={{
          display: 'inline-block',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--teal)',
          background: 'rgba(13,122,107,0.08)',
          borderRadius: 6,
          padding: '4px 12px',
          marginBottom: 14,
        }}
      >
        {event.date}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontSize: 22,
          fontWeight: 600,
          color: 'var(--ink)',
          marginBottom: 12,
          lineHeight: 1.3,
        }}
      >
        {event.title}
      </h3>

      {/* Stats row */}
      <div
        style={{
          display: 'flex',
          gap: 24,
          marginBottom: 18,
          flexWrap: 'wrap',
        }}
      >
        {event.stats.map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: 'var(--teal)',
                lineHeight: 1.2,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: 11,
                color: 'var(--ink-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 500,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          color: 'var(--ink-mid)',
          lineHeight: 1.7,
          marginBottom: 20,
        }}
      >
        {event.description}
      </p>

      {/* Image placeholders */}
      <div
        className="about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          marginBottom: 20,
        }}
      >
        {event.images.map((src, i) => (
          <div
            key={i}
            style={{
              background: 'var(--bg-2)',
              border: '1px dashed var(--border)',
              borderRadius: 10,
              height: 180,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--ink-dim)',
              fontSize: 12,
              overflow: 'hidden',
            }}
          >
            {/* Replace src with actual image URL when available */}
            {/* <img src={src} alt={`${event.title} photo ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
            <span>📷 Image placeholder {i + 1}</span>
          </div>
        ))}
      </div>

      {/* Link */}
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

export default function EventsSection() {
  return (
    <section className="sec-bg" id="events">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-teal">Our Journey</span>
        <h2 className="h2">Events</h2>
        <p className="lead">
          Community events and gatherings that are shaping the AI Safety ecosystem in India.
        </p>
        <div style={{ marginTop: 40 }}>
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
