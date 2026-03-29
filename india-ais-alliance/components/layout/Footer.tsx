'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--teal)',
        borderTop: '1px solid rgba(255,255,255,0.15)',
        padding: '36px 52px 24px',
      }}
      className="footer-root"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr 1fr',
          gap: 32,
          marginBottom: 24,
          paddingBottom: 24,
          borderBottom: '1px solid rgba(255,255,255,0.15)',
        }}
        className="footer-grid"
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 22,
              fontWeight: 600,
              color: '#fff',
              marginBottom: 10,
            }}
          >
            India <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>AI Safety Coordination</em> Hub
          </div>
          <div
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: 14,
            }}
          >
            Building the connective infrastructure for AI Safety work across India — and linking
            it with the global movement.
          </div>
          <a
            href="mailto:aisafetymeetup@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              color: 'rgba(255,255,255,0.9)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            aisafetymeetup@gmail.com
          </a>
        </div>

        <div>
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>
            Pages
          </div>
          <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 24px' }}>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/about#team', label: 'Our Team' },
              { href: '/events', label: 'Events & News' },
              { href: '/contact', label: 'Contact Us' },
            ].map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: 13.5, transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>
            Resources
          </div>
          <ul style={{ listStyle: 'none' }}>
            {[
              { href: '/landscape', label: 'AI Landscape Map' },
            ].map((l) => (
              <li key={l.href} style={{ marginBottom: 6 }}>
                <Link href={l.href} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: 13.5, transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 12,
          color: 'rgba(255,255,255,0.55)',
        }}
        className="footer-bottom"
      >
        <span>&copy; 2025 India <span style={{ color: 'rgba(255,255,255,0.8)' }}>AI Safety Coordination</span> Hub. All rights reserved.</span>
        <span>Building India&apos;s AI Safety Ecosystem</span>
      </div>
    </footer>
  )
}
