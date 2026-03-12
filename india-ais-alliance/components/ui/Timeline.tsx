'use client'

import { motion } from 'framer-motion'

export interface TimelineItem {
  label: string
  title: string
  body: string
  upcoming?: boolean
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div style={{ position: 'relative', marginTop: 48 }}>
      <div
        style={{
          position: 'absolute',
          left: 14,
          top: 8,
          bottom: 0,
          width: 1,
          background: 'var(--border)',
        }}
      />
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          style={{ position: 'relative', paddingLeft: 46, marginBottom: 24 }}
        >
          <div
            style={{
              position: 'absolute',
              left: 8,
              top: 6,
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: item.upcoming ? 'transparent' : 'var(--teal)',
              border: item.upcoming ? '1.5px solid var(--border)' : '3px solid var(--bg)',
            }}
          />
          <div
            style={{
              background: 'var(--white)',
              border: item.upcoming ? '1px dashed var(--border)' : '1px solid var(--border)',
              borderRadius: 10,
              padding: '22px 26px',
              opacity: item.upcoming ? 0.55 : 1,
            }}
          >
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: item.upcoming ? 'var(--ink-dim)' : 'var(--teal)',
                marginBottom: 5,
              }}
            >
              {item.label}
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}>
              {item.title}
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--ink-mid)', lineHeight: 1.65 }}>
              {item.body}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
