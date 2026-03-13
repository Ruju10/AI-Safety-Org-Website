'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const events = [
  { date: 'Feb 4, 2026', title: 'AI Safety & Governance Virtual Event' },
  { date: 'Feb 17, 2026', title: 'AI Safety Mixer' },
]

export default function JoinHubSection() {
  return (
    <section className="sec-bg2" id="join-hub">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-teal">Join Us</span>
        <h2 className="h2">Join the Hub</h2>
        <p className="lead" style={{ maxWidth: 600 }}>
          Connect with India&apos;s AI Safety community — researchers, organisations, and policy
          practitioners building a safer AI future together.
        </p>

        <div
          className="join-hub-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 28,
            marginTop: 40,
            alignItems: 'start',
          }}
        >
          {/* Left: CTA card */}
          <div
            style={{
              background: 'var(--teal)',
              borderRadius: 14,
              padding: '40px 34px',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -60,
                right: -60,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
              }}
            />
            <h3
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: 26,
                marginBottom: 14,
                position: 'relative',
              }}
            >
              Be Part of the Ecosystem
            </h3>
            <p
              style={{
                fontSize: 14,
                opacity: 0.85,
                lineHeight: 1.75,
                marginBottom: 28,
                fontWeight: 300,
                maxWidth: 420,
                position: 'relative',
              }}
            >
              Whether you&apos;re an organisation working on AI Safety or an individual researcher
              — there&apos;s a place for you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative' }}>
              <Link
                href="/get-involved"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#fff',
                  color: 'var(--teal)',
                  textDecoration: 'none',
                  padding: '14px 20px',
                  borderRadius: 8,
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />
                Join as an Individual
              </Link>
              <Link
                href="/get-involved"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '14px 20px',
                  borderRadius: 8,
                  fontSize: 13.5,
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', flexShrink: 0 }} />
                Join as an Organisation
              </Link>
              <Link
                href="/get-involved"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '14px 20px',
                  borderRadius: 8,
                  fontSize: 13.5,
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', flexShrink: 0 }} />
                Join WhatsApp Community
              </Link>
            </div>
          </div>

          {/* Right: Events list */}
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '32px 30px',
            }}
          >
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ink-dim)',
                marginBottom: 20,
              }}
            >
              Events
            </div>
            {events.map((event, i) => (
              <div
                key={event.title}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 0',
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
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>
                  {event.title}
                </div>
              </div>
            ))}
            <Link
              href="/events"
              style={{
                display: 'inline-block',
                marginTop: 20,
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--teal)',
                textDecoration: 'none',
              }}
            >
              View all events →
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
