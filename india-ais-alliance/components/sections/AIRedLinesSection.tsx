'use client'

import { motion } from 'framer-motion'

const resources = [
  {
    title: 'AI Red Lines Tracker',
    desc: 'Tracks frontier model capabilities against critical risk thresholds defined by major AI labs — OpenAI, Anthropic, Google DeepMind, and xAI.',
    href: 'https://ai-red-lines-tracker-2026.vercel.app/',
  },
  {
    title: 'Evaluating the Evaluators',
    desc: 'A look at how AI safety evaluations themselves hold up — where model assessments can be trusted, and where they fall short.',
    href: 'https://kunalsingh9373.github.io/evaluating-the-evaluators/',
  },
]

export default function AIRedLinesSection() {
  return (
    <section className="sec-white" id="ai-red-lines">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-teal">Global Context</span>
        <h2 className="h2" style={{ marginBottom: 12 }}>AI Red Lines</h2>
        <p className="lead" style={{ maxWidth: 640 }}>
          Clear thresholds — capabilities and behaviours frontier AI should never cross — are
          central to keeping development safe as models grow more capable.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 14,
            marginTop: 40,
          }}
        >
          {resources.map((r) => (
            <motion.a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, boxShadow: '0 4px 14px rgba(0,0,0,0.05)' }}
              style={{
                display: 'block',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '22px 20px',
                textDecoration: 'none',
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--teal)', marginBottom: 6 }}>
                {r.title} →
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.65 }}>
                {r.desc}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
