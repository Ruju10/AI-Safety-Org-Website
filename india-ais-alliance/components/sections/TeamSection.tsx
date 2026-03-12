'use client'

import { motion } from 'framer-motion'
import { coreTeam, advisors } from '@/data/team'

export default function TeamSection() {
  return (
    <section className="sec-bg" id="team">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-teal">Who We Are</span>
        <h2 className="h2">Our Team</h2>
        <p className="lead" style={{ marginBottom: 48 }}>
          The people building India&apos;s AI Safety coordination infrastructure.
        </p>

        {/* Core Team */}
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
          Core Team
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 14,
            marginBottom: 48,
          }}
        >
          {coreTeam.map((m) => (
            <motion.div
              key={m.name}
              whileHover={{ y: -4, boxShadow: '0 4px 16px rgba(13,122,107,0.07)' }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '28px 20px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: 'var(--teal-light)',
                  border: '1.5px solid var(--teal-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-fraunces)',
                  fontSize: 20,
                  color: 'var(--teal)',
                  fontWeight: 600,
                  margin: '0 auto 14px',
                }}
              >
                {m.initial}
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{m.name}</div>
              {m.role && (
                <div style={{ fontSize: 12, color: 'var(--ink-dim)', marginTop: 4 }}>{m.role}</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Advisory Board */}
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 14,
          }}
        >
          {advisors.map((a) => (
            <motion.div
              key={a.name}
              whileHover={{ y: -4, boxShadow: '0 4px 16px rgba(13,122,107,0.07)' }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '28px 24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
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
                    flexShrink: 0,
                  }}
                >
                  {a.initial}
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)' }}>{a.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                    <span
                      style={{
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
                    {a.affiliation && (
                      <span style={{ fontSize: 11.5, color: 'var(--ink-dim)' }}>{a.affiliation}</span>
                    )}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--ink-mid)', lineHeight: 1.7 }}>
                {a.description}
              </p>
            </motion.div>
          ))}

          {/* Expanding placeholder */}
          <div
            style={{
              border: '1px dashed var(--border)',
              borderRadius: 12,
              padding: '28px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg)',
            }}
          >
            <p style={{ fontSize: 12.5, color: 'var(--ink-dim)', textAlign: 'center' }}>
              Advisory board expanding — seeking voices from policy, research, and industry.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
