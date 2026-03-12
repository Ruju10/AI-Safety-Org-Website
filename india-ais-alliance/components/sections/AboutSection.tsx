'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutSection() {
  return (
    <section className="sec-bg" id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <span className="chip-teal">Who We Are</span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'start',
            marginTop: 56,
          }}
        >
          {/* Left col */}
          <div>
            <h2 className="h2">About the Hub</h2>
            <p className="lead" style={{ marginBottom: 28 }}>
              We exist to bridge India&apos;s growing AI ecosystem with the global AI Safety
              movement — fostering research, collaboration, and policy engagement.
            </p>

            <div
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
                  fontSize: 19,
                  color: 'var(--teal)',
                  marginBottom: 14,
                }}
              >
                Why a Coordination Hub?
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-mid)', lineHeight: 1.8 }}>
                India&apos;s AI landscape is expanding rapidly, yet AI Safety research,
                coordination, and policy engagement remain fragmented. The India AI Safety
                Coordination Hub creates a structured home for practitioners, researchers, and
                organisations to connect, share resources, and accelerate AI Safety goals —
                domestically and internationally.
              </p>
            </div>
          </div>

          {/* Right col — Quick links */}
          <div>
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
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-dim)',
                  marginBottom: 20,
                }}
              >
                Our Focus Areas
              </div>

              {[
                { title: 'Coordination', desc: 'Connecting India\'s fragmented AI Safety ecosystem into a unified network.' },
                { title: 'Research', desc: 'Building technical research tracks and mentorship pathways.' },
                { title: 'Policy', desc: 'Engaging with India\'s AI governance landscape and international frameworks.' },
                { title: 'Community', desc: 'Events, meetups, and WhatsApp communities for practitioners across India.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    display: 'flex',
                    gap: 14,
                    padding: '14px 0',
                    borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--teal)',
                      flexShrink: 0,
                      marginTop: 7,
                    }}
                  />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 3 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/team"
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
          </div>
        </div>
      </motion.div>
    </section>
  )
}
