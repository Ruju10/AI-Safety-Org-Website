'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import IndiaGlobeAnimation from '@/components/visualizations/IndiaGlobeAnimation'

const heroLines = ['India', 'AI Safety', 'Coordination', 'Hub']

export default function Hero() {
  return (
    <section
      className="hero-section"
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

      {/* Main content row */}
      <div className="hero-content" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
        {/* Left: text */}
        <div style={{ maxWidth: 780, flex: '1 1 auto' }}>
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
                  color: (line === 'AI Safety' || line === 'Coordination') ? 'var(--teal)' : 'var(--ink)',
                  fontStyle: (line === 'AI Safety' || line === 'Coordination') ? 'italic' : 'normal',
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
            Bridging India&apos;s growing AI safety work with the global movement — through shared
            research, policy dialogue, and cross-sector connection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
          >
            <Link href="#join-hub" className="btn-teal">
              Join the Hub →
            </Link>
            <Link href="/landscape" className="btn-ghost">
              Explore the AI Landscape
            </Link>
          </motion.div>
        </div>

        {/* Right: globe animation */}
        <motion.div
          className="hero-anim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            position: 'relative',
            width: 620,
            flexShrink: 0,
          }}
        >
          <IndiaGlobeAnimation />
        </motion.div>
      </div>
    </section>
  )
}
