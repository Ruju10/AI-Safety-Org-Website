'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

export default function AboutSection() {
  return (
    <section className="sec-bg" id="about">
      <div
        className="about-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'stretch',
        }}
      >
        {/* Left col */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <motion.h2 className="h2" style={{ marginBottom: 24 }} {...fade(0)}>
            About the<br />
            <span style={{ color: 'var(--teal)' }}>Coordination Hub</span>
          </motion.h2>

          <motion.p
            className="lead"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              maxWidth: '100%',
              background: 'rgba(13, 122, 107, 0.08)',
              border: '1.5px solid var(--teal)',
              borderRadius: 12,
              padding: '28px 32px',
              color: 'var(--ink)',
              fontSize: 'clamp(17px, 2vw, 23px)',
              lineHeight: 1.8,
              textAlign: 'left',
              fontFamily: 'var(--font-outfit)',
            }}
            {...fade(0.05)}
          >
            <span style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span>India&apos;s AI Safety work is scattered across institutions, disciplines, and geographies.</span>
              <span>Without a shared space, researchers duplicate efforts, policy insights stay siloed, and emerging practitioners have no clear entry point.</span>
              <span>The Coordination Hub exists to change this by creating a structured home where efforts align, resources travel, and momentum compounds.</span>
            </span>
          </motion.p>
        </div>

        {/* Right col — Activities */}
        <motion.div style={{ paddingTop: 48 }} {...fade(0.1)}>
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: 32,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                marginBottom: 20,
              }}
            >
              Focus Areas
            </div>

            {[
              {
                title: "Accelerate India's Contribution",
                desc: "Strengthen domestic research, policy capacity, and institutional readiness to engage with global safety challenges.",
              },
              {
                title: 'Map & Strengthen the Ecosystem',
                desc: "Maintain a continuously updated view of India's AI Safety landscape to guide collective action.",
              },
              {
                title: 'Community Building',
                desc: "Organizing events, roundtables, and working groups and maintaining active communication channels for practitioners across India.",
              },
              {
                title: 'Shared Goals, Collective Action',
                desc: "Align industry, research, and public stakeholders to drive safe and competitive AI development in India.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 + i * 0.07 }}
                style={{
                  display: 'flex',
                  gap: 14,
                  padding: '16px 0',
                  borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: 'var(--teal)',
                    flexShrink: 0,
                    marginTop: 8,
                  }}
                />
                <div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.65 }}>
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}

            <Link
              href="/about#team"
              style={{
                display: 'inline-block',
                marginTop: 20,
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--teal)',
                textDecoration: 'none',
              }}
            >
              Meet our team →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
