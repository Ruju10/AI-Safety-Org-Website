'use client'

import { motion } from 'framer-motion'
import AvatarInitial from '@/components/ui/AvatarInitial'

const teamMembers = [
  { initial: 'A', name: 'Aman Agarwal', role: '' },
  { initial: 'K', name: 'Kunal Singh', role: '' },
  { initial: 'R', name: 'Rujuta Karekar', role: '' },
]

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
            <h2 className="h2">About the Alliance</h2>
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
                marginBottom: 24,
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
                Why an Alliance / Hub?
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-mid)', lineHeight: 1.8 }}>
                India&apos;s AI landscape is expanding rapidly, yet AI Safety research,
                coordination, and policy engagement remain fragmented. The India AIS Alliance
                creates a structured home for practitioners, researchers, and organisations to
                connect, share resources, and accelerate AI Safety goals — domestically and
                internationally.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12,
              }}
            >
              {teamMembers.map((m) => (
                <motion.div
                  key={m.name}
                  whileHover={{ borderColor: 'var(--teal-border)', boxShadow: '0 4px 16px rgba(13,122,107,0.07)' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    padding: '22px 16px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: '50%',
                      background: 'var(--teal-light)',
                      border: '1.5px solid var(--teal-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-fraunces)',
                      fontSize: 18,
                      color: 'var(--teal)',
                      fontWeight: 600,
                      margin: '0 auto 11px',
                    }}
                  >
                    {m.initial}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{m.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-dim)', marginTop: 3 }}>{m.role}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right col — Advisory */}
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
                Advisory Board
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 18 }}>
                <AvatarInitial initial="P" size="md" />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)' }}>
                    Pratik Agarwal
                  </div>
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: 5,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      color: 'var(--teal)',
                      background: 'var(--teal-light)',
                      border: '1px solid var(--teal-border)',
                      borderRadius: 100,
                      padding: '2px 10px',
                    }}
                  >
                    Advisor
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: 13.5,
                  color: 'var(--ink-mid)',
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                Providing strategic guidance on the Alliance&apos;s direction, partnerships, and
                international alignment with the broader AI Safety ecosystem.
              </p>

              <div
                style={{
                  border: '1px dashed var(--border)',
                  borderRadius: 8,
                  padding: 18,
                  textAlign: 'center',
                  background: 'var(--bg)',
                }}
              >
                <p style={{ fontSize: 12.5, color: 'var(--ink-dim)' }}>
                  Advisory board expanding — seeking voices from policy, research, and industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
