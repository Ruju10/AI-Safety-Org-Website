'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WhatsAppPage() {
  const waUrl = process.env.NEXT_PUBLIC_WA_FORM_URL

  return (
    <div style={{ paddingTop: 60 }}>
      <section className="sec-bg2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: 700 }}
        >
          <span className="chip-teal">Community</span>
          <h1 className="h2">Join Our WhatsApp Groups</h1>
          <p className="lead" style={{ marginBottom: 48 }}>
            Connect with India&apos;s AI Safety community through our curated WhatsApp groups for
            researchers, practitioners, and enthusiasts.
          </p>

          {waUrl ? (
            <iframe
              src={waUrl}
              style={{ width: '100%', height: 500, border: 'none', borderRadius: 12 }}
              allowTransparency={true}
            />
          ) : (
            <div
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: '48px 40px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 20 }}>💬</div>
              <h3
                style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontSize: 24,
                  color: 'var(--ink)',
                  marginBottom: 12,
                }}
              >
                Registration Coming Soon
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: 32 }}>
                Our WhatsApp group registration form is being set up. In the meantime, reach out
                through our interest form or connect with us on social media.
              </p>
              <Link href="/participate" className="btn-teal">
                Express Interest →
              </Link>
            </div>
          )}

          <div style={{ marginTop: 48 }}>
            <h3
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: 22,
                color: 'var(--ink)',
                marginBottom: 16,
              }}
            >
              What to Expect
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { title: 'AIS Research Updates', desc: 'Latest papers, reports, and developments in AI Safety — curated for the Indian context.' },
                { title: 'Events & Meetups', desc: 'Announcements for virtual and in-person gatherings across India.' },
                { title: 'Collaboration Opportunities', desc: 'Find co-researchers, project partners, and collaborators.' },
                { title: 'Policy Discussions', desc: 'Track India\'s AI governance landscape and contribute to policy conversations.' },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    padding: '20px 24px',
                  }}
                >
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 13.5, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
