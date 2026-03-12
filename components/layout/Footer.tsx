'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-3)', borderTop: '1px solid var(--border)', padding: '72px 52px 40px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 52,
          paddingBottom: 48,
          borderBottom: '1px solid var(--border)',
        }}
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
            India <em style={{ fontStyle: 'italic', color: 'var(--teal)' }}>AIS</em> Alliance
          </div>
          <div
            style={{
              fontSize: 13,
              color: 'var(--ink-mid)',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Connecting India&apos;s AI Safety ecosystem with the global movement. Building
            coordination infrastructure for safe AI — rooted in Indian context.
          </div>
        </div>

        <div>
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-dim)', marginBottom: 16 }}>
            Pages
          </div>
          <ul style={{ listStyle: 'none' }}>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/theory-of-change', label: 'Theory of Change' },
              { href: '/landscape', label: 'Landscape' },
              { href: '/past-work', label: 'Past Work' },
            ].map((l) => (
              <li key={l.href} style={{ marginBottom: 10 }}>
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
            Participate
          </div>
          <ul style={{ listStyle: 'none' }}>
            {[
              { href: '/participate', label: 'Organisations' },
              { href: '/participate', label: 'Individuals' },
              { href: '/whatsapp', label: 'WA Groups' },
              { href: '/international', label: 'International' },
            ].map((l, i) => (
              <li key={i} style={{ marginBottom: 10 }}>
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
              { href: '/landscape', label: 'Org Directory' },
            ].map((l) => (
              <li key={l.href} style={{ marginBottom: 10 }}>
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

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, color: 'var(--ink-dim)' }}>
        <span>© 2025 India AIS Alliance. All rights reserved.</span>
        <span>Building India&apos;s AI Safety Ecosystem</span>
      </div>
    </footer>
  )
}
