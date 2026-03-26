'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-3)',
        borderTop: '1px solid var(--border)',
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
          borderBottom: '1px solid var(--border)',
        }}
        className="footer-grid"
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 22,
              fontWeight: 600,
              color: 'var(--ink)',
              marginBottom: 10,
            }}
          >
            India <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>AI Safety Coordination</em> Hub
          </div>
          <div
            style={{
              fontSize: 13,
              color: 'var(--ink-mid)',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Building the connective infrastructure for AI Safety work across India — and linking
            it with the global movement.
          </div>
        </div>

        <div>
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-dim)', marginBottom: 16 }}>
            Pages
          </div>
          <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 24px' }}>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/about#toc', label: 'Theory of Change' },
              { href: '/about#team', label: 'Our Team' },
              { href: '/landscape', label: 'Landscape' },
              { href: '/events', label: 'Events' },
              { href: '/contact', label: 'Contact Us' },
              { href: '/news', label: 'News' },
            ].map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} style={{ color: 'var(--ink-mid)', textDecoration: 'none', fontSize: 13.5, transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-mid)')}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-dim)', marginBottom: 16 }}>
            Resources
          </div>
          <ul style={{ listStyle: 'none' }}>
            {[
              { href: '/news', label: 'AIS News India' },
              { href: '/mapping', label: 'AI Landscape Map' },
            ].map((l) => (
              <li key={l.href} style={{ marginBottom: 6 }}>
                <Link href={l.href} style={{ color: 'var(--ink-mid)', textDecoration: 'none', fontSize: 13.5, transition: 'color 0.15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-mid)')}
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
          color: 'var(--ink-dim)',
        }}
        className="footer-bottom"
      >
        <span>&copy; 2025 India <span style={{ color: 'var(--teal)' }}>AI Safety Coordination</span> Hub. All rights reserved.</span>
        <span>Building India&apos;s AI Safety Ecosystem</span>
      </div>
    </footer>
  )
}
