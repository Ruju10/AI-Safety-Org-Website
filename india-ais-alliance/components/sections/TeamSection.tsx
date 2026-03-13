'use client'

import { motion } from 'framer-motion'
import { coreTeam, advisors } from '@/data/team'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: '-80px' },
  transition: { duration: 0.5, delay },
})

export default function TeamSection() {
  return (
    <section className="sec-white" id="team">
      {/* Header */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: 52 }}>
        <span className="chip-teal">About Us</span>
        <h2 className="h2" style={{ marginBottom: 12 }}>Our Team</h2>
        <p className="lead">
          The people building India&apos;s AI Safety coordination infrastructure.
        </p>
      </motion.div>

      {/* Core Team */}
      <motion.div {...fadeUp(0.05)}>
        <div style={{
          fontSize: 22, fontWeight: 700, color: 'var(--teal)',
          marginBottom: 20, textAlign: 'center',
          fontFamily: 'var(--font-fraunces)',
        }}>
          Core Team
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 14,
          marginBottom: 52,
        }}>
          {coreTeam.map((m, i) => (
            <motion.div
              key={m.name}
              {...fadeUp(0.05 * i)}
              whileHover={{ y: -4, boxShadow: '0 6px 20px rgba(13,122,107,0.08)' }}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '32px 20px',
                textAlign: 'center',
                width: 200,
              }}
            >
              <div style={{
                width: 56, height: 56,
                borderRadius: '50%',
                background: 'var(--teal-light)',
                border: '1.5px solid var(--teal-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-fraunces)',
                fontSize: 22, color: 'var(--teal)', fontWeight: 600,
                margin: '0 auto 16px',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                {m.photo
                  ? <img src={m.photo} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : m.initial}
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{m.name}</div>
              {m.role && (
                <div style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.07em',
                  textTransform: 'uppercase', color: 'var(--teal)', marginTop: 6,
                }}>
                  {m.role}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Advisory Board */}
      <motion.div {...fadeUp(0.1)}>
        <div style={{
          fontSize: 22, fontWeight: 700, color: 'var(--teal)',
          marginBottom: 20, textAlign: 'center',
          fontFamily: 'var(--font-fraunces)',
        }}>
          Advisory Board
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 14,
        }}>
          {advisors.map((a, i) => (
            <motion.div
              key={a.name}
              {...fadeUp(0.05 * i)}
              whileHover={{ y: -4, boxShadow: '0 6px 20px rgba(13,122,107,0.08)' }}
              style={{
                background: 'var(--teal)',
                borderRadius: 12,
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
                width: 340,
              }}
            >
              <div style={{
                position: 'absolute', top: -30, right: -30,
                width: 100, height: 100, borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)', pointerEvents: 'none',
              }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                <div style={{
                  width: 48, height: 48,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-fraunces)',
                  fontSize: 18, color: '#fff', fontWeight: 600,
                  flexShrink: 0,
                  overflow: 'hidden',
                }}>
                  {a.photo
                    ? <img src={a.photo} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : a.initial}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{a.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 5 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.07em',
                      textTransform: 'uppercase', color: 'var(--teal)',
                      background: '#fff', borderRadius: 100, padding: '2px 10px',
                    }}>
                      Advisor
                    </span>
                    {a.affiliation && (
                      <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.7)' }}>{a.affiliation}</span>
                    )}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
                {a.description}
              </p>
            </motion.div>
          ))}

          {/* Expanding placeholder */}
          <div style={{
            border: '1px dashed var(--border)', borderRadius: 12, padding: '28px 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 340,
          }}>
            <p style={{ fontSize: 13, color: 'var(--ink-dim)', textAlign: 'center', lineHeight: 1.7 }}>
              Advisory board expanding —<br />seeking voices from policy, research, and industry.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
