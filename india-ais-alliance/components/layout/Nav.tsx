'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '/about', label: 'About' },
  { href: '/theory-of-change', label: 'Theory of Change' },
  { href: '/landscape', label: 'Landscape' },
  { href: '/events', label: 'Events' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/news', label: 'News' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 52px',
        height: '60px',
        background: 'rgba(250,250,248,0.95)',
        backdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1px solid #DDD9D0' : '1px solid transparent',
        transition: 'border-color 0.3s ease',
      }}
    >
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', gap: '11px', textDecoration: 'none' }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            border: '1.5px solid #0D7A6B',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-fraunces)',
            fontSize: 14,
            fontWeight: 600,
            color: '#0D7A6B',
          }}
        >
          I
        </div>
        <span style={{ fontSize: 13, fontWeight: 500, color: '#14130F', letterSpacing: '0.02em' }}>
          India AI <span style={{ color: '#0D7A6B' }}>Safety</span> Hub
        </span>
      </Link>

      <ul style={{ display: 'flex', alignItems: 'center', gap: 30, listStyle: 'none' }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              style={{
                color: pathname === l.href ? '#14130F' : '#4A4844',
                textDecoration: 'none',
                fontSize: 12,
                fontWeight: pathname === l.href ? 500 : 400,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'color 0.15s',
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/get-involved" className="nav-pill">
            Join →
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}
