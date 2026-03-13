'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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
            A coordination hub for researchers, organisations, and policy practitioners working on AI
            Safety across India — connecting local efforts with global momentum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
          >
            <Link href="/landscape" className="btn-teal">
              Explore the Landscape
            </Link>
            <Link href="#join-hub" className="btn-ghost">
              Join the Hub →
            </Link>
          </motion.div>
        </div>

        {/* Right: orbital animation */}
        <motion.div
          className="hero-anim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            position: 'relative',
            width: 420,
            height: 420,
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          {/* Clip to show only left 180° of orbits */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '0 50% 50% 0' }}>
            {/* Soft glow behind orbits */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 300,
              height: 300,
              marginTop: -150,
              marginLeft: -150,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(13,122,107,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
          </div>

          <svg
            viewBox="0 0 420 420"
            width="420"
            height="420"
            style={{ position: 'absolute', inset: 0 }}
          >
            <defs>
              {/* Fade mask — only right half visible */}
              <mask id="half-mask">
                <rect x="100" y="0" width="320" height="420" fill="white" />
                <rect x="100" y="0" width="60" height="420" fill="url(#fade-left)" />
              </mask>
              <linearGradient id="fade-left" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="black" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>

              {/* Animated dash for trajectory lines */}
              <style>{`
                @keyframes dash-flow {
                  to { stroke-dashoffset: -40; }
                }
                @keyframes dash-flow-rev {
                  to { stroke-dashoffset: 40; }
                }
                .traj { animation: dash-flow 3s linear infinite; }
                .traj-rev { animation: dash-flow-rev 4s linear infinite; }
                .traj-slow { animation: dash-flow 6s linear infinite; }

                @keyframes orbit1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes orbit-rev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                .orbit-60 { animation: orbit1 60s linear infinite; transform-origin: 210px 210px; }
                .orbit-45 { animation: orbit1 45s linear infinite; transform-origin: 210px 210px; }
                .orbit-35-rev { animation: orbit-rev 35s linear infinite; transform-origin: 210px 210px; }
                .orbit-50 { animation: orbit1 50s linear infinite; transform-origin: 210px 210px; }
                .orbit-28-rev { animation: orbit-rev 28s linear infinite; transform-origin: 210px 210px; }
                .orbit-70 { animation: orbit1 70s linear infinite; transform-origin: 210px 210px; }
                .orbit-40-rev { animation: orbit-rev 40s linear infinite; transform-origin: 210px 210px; }

                @keyframes float1 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                @keyframes float2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(8px); } }
                @keyframes float3 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(6px,-6px); } }
                .float-1 { animation: float1 5s ease-in-out infinite; }
                .float-2 { animation: float2 6s ease-in-out infinite; }
                .float-3 { animation: float3 7s ease-in-out infinite; }

                @keyframes pulse-glow { 0%,100% { opacity:0.3; r:42; } 50% { opacity:0.7; r:50; } }
                .center-glow { animation: pulse-glow 4s ease-in-out infinite; }
              `}</style>
            </defs>

            <g mask="url(#half-mask)">
              {/* Orbit rings — thicker, more visible */}
              <circle cx="210" cy="210" r="190" fill="none" stroke="#DDD9D0" strokeWidth="1.5" />
              <circle cx="210" cy="210" r="150" fill="none" stroke="rgba(13,122,107,0.18)" strokeWidth="1.2" strokeDasharray="6 4" />
              <circle cx="210" cy="210" r="110" fill="none" stroke="#DDD9D0" strokeWidth="1.5" />
              <circle cx="210" cy="210" r="70" fill="none" stroke="rgba(13,122,107,0.15)" strokeWidth="1" strokeDasharray="4 6" />

              {/* Animated trajectory lines between dots */}
              {/* Outer to mid-outer */}
              <path d="M 210 20 Q 340 100 360 210" fill="none" stroke="rgba(13,122,107,0.12)" strokeWidth="1" strokeDasharray="8 8" className="traj" />
              <path d="M 400 210 Q 380 340 210 400" fill="none" stroke="rgba(176,57,154,0.12)" strokeWidth="1" strokeDasharray="6 10" className="traj-rev" />
              {/* Mid to inner */}
              <path d="M 320 210 Q 290 130 210 100" fill="none" stroke="rgba(59,111,212,0.12)" strokeWidth="1" strokeDasharray="6 8" className="traj-slow" />
              <path d="M 210 320 Q 300 290 320 210" fill="none" stroke="rgba(196,122,27,0.12)" strokeWidth="1" strokeDasharray="5 10" className="traj" />
              {/* Cross trajectories */}
              <path d="M 270 60 Q 350 180 300 340" fill="none" stroke="rgba(13,122,107,0.08)" strokeWidth="0.8" strokeDasharray="4 12" className="traj-rev" />
              <path d="M 360 120 Q 280 210 340 330" fill="none" stroke="rgba(107,92,231,0.08)" strokeWidth="0.8" strokeDasharray="6 8" className="traj-slow" />

              {/* ── Orbiting dots on rings ── */}

              {/* Ring 1 (r=190) — 3 dots */}
              <g className="orbit-60">
                <circle cx="210" cy="20" r="7" fill="#0D7A6B" opacity="0.8" />
              </g>
              <g className="orbit-45">
                <circle cx="400" cy="210" r="5" fill="#B0399A" opacity="0.7" />
              </g>
              <g className="orbit-70">
                <circle cx="210" cy="400" r="4" fill="#E05252" opacity="0.6" />
              </g>

              {/* Ring 2 (r=150) — 3 dots */}
              <g className="orbit-35-rev">
                <circle cx="360" cy="210" r="6" fill="#C47A1B" opacity="0.75" />
              </g>
              <g className="orbit-50">
                <circle cx="210" cy="60" r="4.5" fill="#3B6FD4" opacity="0.65" />
              </g>
              <g className="orbit-40-rev">
                <circle cx="60" cy="210" r="3.5" fill="#6B5CE7" opacity="0.6" />
              </g>

              {/* Ring 3 (r=110) — 3 dots */}
              <g className="orbit-45">
                <circle cx="320" cy="210" r="5.5" fill="#0D7A6B" opacity="0.7" />
              </g>
              <g className="orbit-28-rev">
                <circle cx="210" cy="100" r="4" fill="#E05252" opacity="0.65" />
              </g>
              <g className="orbit-60">
                <circle cx="100" cy="210" r="3" fill="#B0399A" opacity="0.55" />
              </g>

              {/* Ring 4 (r=70) — 2 dots */}
              <g className="orbit-35-rev">
                <circle cx="280" cy="210" r="4.5" fill="#3B6FD4" opacity="0.7" />
              </g>
              <g className="orbit-50">
                <circle cx="210" cy="140" r="3.5" fill="#C47A1B" opacity="0.6" />
              </g>

              {/* Floating ambient dots (not on rings) */}
              <circle cx="330" cy="80" r="2.5" fill="#0D7A6B" opacity="0.35" className="float-1" />
              <circle cx="370" cy="310" r="3" fill="#B0399A" opacity="0.3" className="float-2" />
              <circle cx="280" cy="370" r="2" fill="#6B5CE7" opacity="0.3" className="float-3" />
              <circle cx="390" cy="160" r="2" fill="#E05252" opacity="0.25" className="float-1" />
              <circle cx="250" cy="45" r="1.5" fill="#C47A1B" opacity="0.3" className="float-2" />
              <circle cx="350" cy="260" r="2.5" fill="#3B6FD4" opacity="0.25" className="float-3" />
              <circle cx="300" cy="150" r="1.5" fill="#0D7A6B" opacity="0.2" className="float-1" />
              <circle cx="260" cy="300" r="2" fill="#B0399A" opacity="0.2" className="float-2" />

              {/* Center glow */}
              <circle cx="210" cy="210" r="42" fill="rgba(13,122,107,0.08)" className="center-glow" />
            </g>
          </svg>

          {/* Center icon (on top of SVG) */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 48,
              height: 48,
              marginTop: -24,
              marginLeft: -24,
              borderRadius: 10,
              border: '2px solid rgba(13,122,107,0.3)',
              background: 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-fraunces)',
              fontSize: 20,
              fontWeight: 600,
              color: 'var(--teal)',
              boxShadow: '0 4px 20px rgba(13,122,107,0.1)',
              zIndex: 2,
            }}
          >
            I
          </div>
        </motion.div>
      </div>
    </section>
  )
}
