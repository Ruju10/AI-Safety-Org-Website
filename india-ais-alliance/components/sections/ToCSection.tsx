'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    num: '01',
    title: 'Accelerate Domestic AIS Goals',
    desc: 'Coordinate India-specific AI Safety research, policy work, and capacity building.',
  },
  {
    num: '02',
    title: 'Build Cross-Sector Coordination',
    desc: 'Bridge academia, civil society, government, and industry around shared AIS objectives.',
  },
  {
    num: '03',
    title: 'Map & Strengthen the Ecosystem',
    desc: 'Maintain living intelligence on India\'s AI Safety landscape to guide collective action.',
  },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

export default function ToCSection() {
  return (
    <section className="sec-white" id="toc">
      <motion.div {...fade(0)}>
        <span className="chip-teal">Strategic Direction</span>
      </motion.div>

      <div
        className="toc-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 72,
          alignItems: 'center',
          marginTop: 40,
        }}
      >
        {/* Left: text */}
        <div>
          <motion.h2 className="h2" {...fade(0.05)}>Theory of Change</motion.h2>
          <motion.p className="lead" {...fade(0.1)}>
            Our theory of change is rooted in connecting India&apos;s existing capacity with
            international momentum — lowering the friction for India to participate in and
            contribute to global AI Safety.
          </motion.p>
          <motion.p className="lead" style={{ marginTop: 16 }} {...fade(0.15)}>
            We focus on translating international AIS frameworks to the Indian context: adapting
            them for local policy environments, research institutions, and the specific
            opportunities India faces as a major AI-developing nation.
          </motion.p>
        </div>

        {/* Right: pillars */}
        <div>
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
              whileHover={{ backgroundColor: 'var(--bg-2)', x: 4 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 20,
                padding: '20px 24px',
                border: '1px solid var(--border)',
                borderBottom: i === pillars.length - 1 ? '1px solid var(--border)' : 'none',
                background: 'var(--white)',
                borderRadius:
                  i === 0 ? '8px 8px 0 0' : i === pillars.length - 1 ? '0 0 8px 8px' : 0,
                cursor: 'default',
                transition: 'background 0.2s, transform 0.2s',
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontSize: 26,
                  color: 'var(--teal)',
                  lineHeight: 1,
                  flexShrink: 0,
                  paddingTop: 1,
                }}
              >
                {p.num}
              </motion.span>
              <div>
                <h4 style={{ fontSize: 16.5, fontWeight: 500, color: 'var(--ink)', marginBottom: 4 }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: 15, color: 'var(--ink-dim)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
