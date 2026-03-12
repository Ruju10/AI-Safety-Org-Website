'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const heroLines = ['India', 'AIS', 'Alliance']

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 52px 80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--white)',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.5,
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black, transparent)',
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: 0,
          width: 600,
          height: 600,
          borderRadius: '50%',
          pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(13,122,107,0.06) 0%, transparent 65%)',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 780 }}>
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            border: '1px solid var(--border)',
            borderRadius: 100,
            padding: '5px 14px 5px 8px',
            fontSize: 11,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: 'var(--ink-dim)',
            marginBottom: 36,
            background: 'var(--bg)',
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }}
          />
          Building India&apos;s AI Safety Ecosystem
        </motion.div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(52px, 8vw, 96px)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.025em',
            marginBottom: 30,
            color: 'var(--ink)',
          }}
        >
          {heroLines.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              style={{
                display: 'block',
                color: line === 'AIS' ? 'var(--teal)' : 'var(--ink)',
                fontStyle: line === 'AIS' ? 'italic' : 'normal',
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            color: 'var(--ink-mid)',
            maxWidth: 530,
            lineHeight: 1.8,
            fontWeight: 300,
            marginBottom: 44,
          }}
        >
          A coordination hub for researchers, organisations, and policy practitioners working on AI
          Safety across India — connecting local efforts with global momentum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
        >
          <Link href="/participate" className="btn-teal">
            Get Involved
          </Link>
          <Link href="/landscape" className="btn-ghost">
            Explore the Landscape →
          </Link>
        </motion.div>
      </div>

      {/* Baseline */}
      <div
        style={{
          position: 'absolute',
          bottom: 52,
          left: 52,
          right: 52,
          borderTop: '1px solid var(--border)',
          paddingTop: 26,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontSize: 11,
            color: 'var(--ink-dim)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          Laying the foundation
          <div
            style={{
              width: 100,
              height: 2,
              background: 'var(--border)',
              borderRadius: 1,
              overflow: 'hidden',
            }}
          >
            <motion.div
              animate={{ width: ['20%', '45%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
              style={{ height: '100%', background: 'var(--teal)', borderRadius: 1 }}
            />
          </div>
        </div>

        <div
          style={{
            fontSize: 11,
            color: 'var(--ink-dim)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 9,
          }}
        >
          Scroll to explore
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 20,
              height: 20,
              border: '1px solid var(--border)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 9,
            }}
          >
            ↓
          </motion.div>
        </div>
      </div>
    </section>
  )
}
