'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'


export default function JoinHubSection() {
  return (
    <section className="sec-bg2" id="join-hub" style={{ height: '100%' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="h2">Join the Hub</h2>
        <p className="lead" style={{ maxWidth: 600 }}>
          Whether you&apos;re shaping policy, building tools, or asking hard questions about AI
          — there&apos;s a place for you here.
        </p>

        <div style={{ marginTop: 40, display: 'flex', gap: 16, alignItems: 'stretch', flexWrap: 'wrap' }}>
          {/* Main teal card */}
          <div
            style={{
              flex: '1 1 220px',
              background: 'var(--teal)',
              border: 'none',
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
                fontSize: 28,
                marginBottom: 14,
                position: 'relative',
                color: '#fff',
              }}
            >
              Be Part of the Ecosystem
            </h3>
            <p
              style={{
                fontSize: 15,
                opacity: 0.85,
                lineHeight: 1.75,
                marginBottom: 24,
                fontWeight: 300,
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
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />
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
                  fontSize: 15,
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.25)',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', flexShrink: 0 }} />
                Join as an Individual
              </Link>
            </div>
          </div>

          {/* WhatsApp separate card */}
          <div
            style={{
              flex: '0 1 180px',
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(37,211,102,0.12)',
                border: '1px solid rgba(37,211,102,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.655 1.435 5.163L2 22l4.837-1.435A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#25D366"/>
                <path d="M17 14.5c-.3.8-1.5 1.5-2.1 1.6-.5.1-1.2.1-1.9-.2-.4-.2-1-.4-1.7-.7-3-1.3-5-4.4-5.1-4.6-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.8-2 .2-.2.5-.3.7-.3.2 0 .4 0 .5.001.2 0 .4.001.6.5.2.5.7 1.7.8 1.9.1.2.1.3 0 .5-.1.2-.1.3-.3.5-.1.2-.3.4-.4.5-.2.2-.4.4-.2.7.2.3 1 1.5 2.1 2.4 1.4 1.2 2.6 1.6 3 1.7.3.1.5 0 .7-.1.2-.2.9-1 1.1-1.4.2-.3.5-.2.8-.1.3.1 1.9.9 2.2 1.1.3.2.5.3.6.4.1.4-.1 1.3-.4 2.1z" fill="white"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>
                WhatsApp Community
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.65 }}>
                Join practitioners across India for ongoing discussions, resources, and updates.
              </div>
            </div>
            <Link
              href="/get-involved"
              style={{
                marginTop: 'auto',
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--teal)',
                textDecoration: 'none',
              }}
            >
              Join the group →
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
