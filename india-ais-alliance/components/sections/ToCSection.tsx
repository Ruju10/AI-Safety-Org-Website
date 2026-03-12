'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    num: '01',
    title: 'Implement International Projects Locally',
    desc: 'Bring global AIS initiatives, research, and frameworks into India\'s context.',
  },
  {
    num: '02',
    title: 'Accelerate Domestic AIS Goals',
    desc: 'Coordinate India-specific AI Safety research, policy work, and capacity building.',
  },
  {
    num: '03',
    title: 'Build Cross-Sector Coordination',
    desc: 'Bridge academia, civil society, government, and industry around shared AIS objectives.',
  },
  {
    num: '04',
    title: 'Map & Strengthen the Ecosystem',
    desc: 'Maintain living intelligence on India\'s AI Safety landscape to guide collective action.',
  },
]

export default function ToCSection() {
  return (
    <section className="sec-white" id="toc">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-teal">Strategic Direction</span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 72,
            alignItems: 'center',
            marginTop: 56,
          }}
        >
          <div>
            <h2 className="h2">Theory of Change</h2>
            <p className="lead">
              Our theory of change is rooted in connecting India&apos;s existing capacity with
              international momentum — lowering the friction for India to participate in and
              contribute to global AI Safety.
            </p>
            <p className="lead" style={{ marginTop: 16 }}>
              We focus on translating international AIS frameworks to the Indian context: adapting
              them for local policy environments, research institutions, and the specific
              opportunities India faces as a major AI-developing nation.
            </p>
          </div>

          <div>
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '20px 24px',
                  border: '1px solid var(--border)',
                  borderBottom: i === pillars.length - 1 ? '1px solid var(--border)' : 'none',
                  background: 'var(--white)',
                  borderRadius:
                    i === 0
                      ? '8px 8px 0 0'
                      : i === pillars.length - 1
                      ? '0 0 8px 8px'
                      : 0,
                  transition: 'background 0.15s',
                  cursor: 'default',
                }}
                whileHover={{ backgroundColor: 'var(--bg-2)' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontSize: 22,
                    color: 'var(--teal)',
                    opacity: 0.4,
                    lineHeight: 1,
                    flexShrink: 0,
                    paddingTop: 1,
                  }}
                >
                  {p.num}
                </span>
                <div>
                  <h4 style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--ink)', marginBottom: 4 }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
