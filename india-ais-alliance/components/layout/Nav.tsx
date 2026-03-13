'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  {
    href: '/about',
    label: 'About',
    dropdown: [
      { href: '/about', label: 'About Us' },
      { href: '/about#toc', label: 'Theory of Change' },
      { href: '/about#team', label: 'Our Team' },
    ],
  },
  { href: '/landscape', label: 'Landscape' },
  { href: '/events', label: 'Events' },
  { href: '/news', label: 'News' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  const isAboutActive = pathname === '/about' || pathname === '/theory-of-change'

  return (
    <>
      <motion.nav
        className="nav-bar"
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
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: '#14130F',
              letterSpacing: '0.02em',
            }}
            className="nav-logo-text"
          >
            India <span style={{ color: '#0D7A6B' }}>AI Safety Coordination</span> Hub
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 30, listStyle: 'none' }}>
          {links.map((l) =>
            l.dropdown ? (
              <li
                key={l.href}
                style={{ position: 'relative' }}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={l.href}
                  className="nav-link"
                  style={{
                    color: isAboutActive ? '#14130F' : '#4A4844',
                    textDecoration: 'none',
                    fontSize: 12,
                    fontWeight: isAboutActive ? 500 : 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'color 0.15s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  {l.label}
                  <span style={{ fontSize: 8, opacity: 0.5, marginTop: 1 }}>▼</span>
                </Link>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: -12,
                        paddingTop: 8,
                        zIndex: 300,
                      }}
                    >
                      <div
                        style={{
                          background: 'var(--white)',
                          border: '1px solid var(--border)',
                          borderRadius: 10,
                          padding: '8px 0',
                          minWidth: 180,
                          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                        }}
                      >
                        {l.dropdown.map((d) => (
                          <Link
                            key={d.href + d.label}
                            href={d.href}
                            className="nav-dropdown-item"
                            style={{
                              display: 'block',
                              padding: '10px 20px',
                              fontSize: 13,
                              color: 'var(--ink-mid)',
                              textDecoration: 'none',
                              fontWeight: 400,
                            }}
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="nav-link"
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
            )
          )}
          <li>
            {/* Comet border wrapper */}
            <div style={{
              position: 'relative',
              display: 'inline-block',
              borderRadius: 100,
              padding: 1.5,
              overflow: 'hidden',
            }}>
              {/* Spinning comet gradient */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '300%',
                paddingTop: '300%',
                marginLeft: '-150%',
                marginTop: '-150%',
                background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(13,122,107,0.15) 300deg, rgba(13,122,107,0.5) 330deg, #0D7A6B 350deg, #2EB89A 360deg)',
                animation: 'comet-orbit 2.4s linear infinite',
              }} />
              {/* Inner button */}
              <Link href="/get-involved" style={{
                position: 'relative',
                zIndex: 1,
                display: 'block',
                padding: '6px 16px',
                borderRadius: 100,
                background: 'var(--bg)',
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--teal)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}>
                Join →
              </Link>
            </div>
          </li>
        </ul>

        {/* Hamburger button (mobile) */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span
            style={{
              display: 'block',
              width: 22,
              height: 2,
              background: 'var(--ink)',
              borderRadius: 1,
              transition: 'all 0.2s',
              transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 22,
              height: 2,
              background: 'var(--ink)',
              borderRadius: 1,
              transition: 'all 0.2s',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: 22,
              height: 2,
              background: 'var(--ink)',
              borderRadius: 1,
              transition: 'all 0.2s',
              transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="nav-mobile-overlay"
            style={{
              position: 'fixed',
              top: 60,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 190,
              background: 'rgba(250,250,248,0.98)',
              backdropFilter: 'blur(18px)',
              padding: '32px 28px',
              overflowY: 'auto',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {links.map((l) =>
                l.dropdown ? (
                  <li key={l.href}>
                    {l.dropdown.map((d) => (
                      <Link
                        key={d.href + d.label}
                        href={d.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'block',
                          padding: '16px 0',
                          borderBottom: '1px solid var(--border)',
                          textDecoration: 'none',
                          fontSize: 15,
                          fontWeight: 500,
                          color: 'var(--ink)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {d.label}
                      </Link>
                    ))}
                  </li>
                ) : (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block',
                        padding: '16px 0',
                        borderBottom: '1px solid var(--border)',
                        textDecoration: 'none',
                        fontSize: 15,
                        fontWeight: 500,
                        color: pathname === l.href ? 'var(--teal)' : 'var(--ink)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link
                  href="/get-involved"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    padding: '20px 0 16px',
                    textDecoration: 'none',
                    fontSize: 15,
                    fontWeight: 600,
                    color: 'var(--teal)',
                    letterSpacing: '0.02em',
                  }}
                >
                  Join the Hub →
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
