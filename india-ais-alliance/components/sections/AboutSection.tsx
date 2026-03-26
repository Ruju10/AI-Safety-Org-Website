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
          alignItems: 'start',
        }}
      >
        {/* Left col */}
        <div>
          <motion.h2 className="h2" {...fade(0)}>About the Hub</motion.h2>

          <motion.p className="lead" style={{ marginBottom: 28 }} {...fade(0.05)}>
            The Hub operates at the intersection of India&apos;s AI ecosystem and the global AI
            Safety movement — accelerating research collaboration, sharpening policy thinking, and
            building the connective tissue between domestic and international efforts.
          </motion.p>

          <motion.div
            {...fade(0.1)}
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: 36,
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: 'clamp(24px, 2.8vw, 34px)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: 18,
              }}
            >
              Why a{' '}
              <span style={{ color: 'var(--teal)' }}>Coordination</span>{' '}
              Hub?
            </h3>
            <p style={{ fontSize: 'clamp(17px, 2vw, 22px)', color: 'var(--ink-mid)', lineHeight: 1.75 }}>
              India&apos;s AI Safety work is scattered across institutions, disciplines, and
              geographies. Without a shared space, researchers duplicate efforts, policy insights
              stay siloed, and emerging practitioners have no clear entry point. The Coordination
              Hub exists to change that — creating a structured home where efforts align, resources
              travel, and momentum compounds.
            </p>
          </motion.div>
        </div>

        {/* Right col — Activities */}
        <motion.div {...fade(0.1)}>
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
                color: 'var(--ink-dim)',
                marginBottom: 20,
              }}
            >
              Activities
            </div>

            {[
              {
                title: 'Coordination',
                desc: "Facilitating regular dialogue between India's AI safety researchers, civil society groups, and governance practitioners — so efforts aren't duplicated and insights travel faster.",
              },
              {
                title: 'Research',
                desc: "Running governance research tracks, publishing policy analysis, and building mentorship pathways for emerging AI safety researchers in India.",
              },
              {
                title: 'Policy',
                desc: "Translating international AI safety frameworks for Indian policy contexts, producing policy briefs, and convening roundtable discussions with key stakeholders.",
              },
              {
                title: 'Community Building',
                desc: "Organizing events, roundtables, and working groups — and maintaining active communication channels for practitioners across India.",
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
