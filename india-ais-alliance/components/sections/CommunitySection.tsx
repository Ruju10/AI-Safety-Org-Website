'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { NewsItem } from '@/lib/airtable'

interface CommunitySectionProps {
  news: NewsItem[]
}

export default function CommunitySection({ news }: CommunitySectionProps) {
  const waUrl = process.env.NEXT_PUBLIC_WA_FORM_URL || '/get-involved'
  const displayNews = news.slice(0, 3)

  return (
    <section className="sec-bg2" id="news">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-teal">Community &amp; Updates</span>
        <h2 className="h2">Stay Connected</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: 24,
            marginTop: 48,
          }}
        >
          {/* WhatsApp card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
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
            <div style={{ fontSize: 28, marginBottom: 18 }}>💬</div>
            <h3
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: 26,
                marginBottom: 12,
              }}
            >
              WhatsApp Groups
            </h3>
            <p style={{ fontSize: 14, opacity: 0.82, lineHeight: 1.75, marginBottom: 26, fontWeight: 300 }}>
              Join our curated WhatsApp communities for AIS researchers, practitioners, and
              enthusiasts across India.
            </p>
            <Link
              href="/get-involved"
              style={{
                display: 'inline-block',
                background: '#fff',
                color: 'var(--teal)',
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: 6,
                fontSize: 13.5,
                fontWeight: 600,
              }}
            >
              Register for WA Groups →
            </Link>
          </motion.div>

          {/* News card */}
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '30px 26px',
            }}
          >
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--ink-dim)',
                marginBottom: 18,
              }}
            >
              AI Safety &amp; Ethics — India News
            </div>

            {displayNews.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: 14,
                  padding: '13px 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--teal)',
                    flexShrink: 0,
                    marginTop: 6,
                  }}
                />
                <div>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 13.5,
                        color: 'var(--ink)',
                        lineHeight: 1.5,
                        textDecoration: 'none',
                      }}
                    >
                      {item.headline}
                    </a>
                  ) : (
                    <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.5 }}>
                      {item.headline}
                    </div>
                  )}
                  <div style={{ fontSize: 11, color: 'var(--ink-dim)', marginTop: 4 }}>
                    via {item.source}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/news"
              style={{
                display: 'block',
                textAlign: 'center',
                marginTop: 14,
                fontSize: 12.5,
                color: 'var(--teal)',
                textDecoration: 'none',
                letterSpacing: '0.03em',
              }}
            >
              View all news →
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
