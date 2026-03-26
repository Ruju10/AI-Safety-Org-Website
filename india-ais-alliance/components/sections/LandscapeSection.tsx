'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import landscapeOrgs, { CATEGORIES, CATEGORY_COLORS } from '@/data/landscape-orgs'
import type { LandscapeOrgEntry } from '@/data/landscape-orgs'

function OrgCard({ org }: { org: LandscapeOrgEntry }) {
  const dotColor = CATEGORY_COLORS[org.category] || '#8A8884'

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.09)' }}
      transition={{ duration: 0.2 }}
      style={{
        background: 'var(--white)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        padding: '18px 16px',
        position: 'relative',
        cursor: 'default',
        height: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: dotColor,
        }}
      />
      <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 4, lineHeight: 1.3, paddingRight: 16 }}>
        {org.website ? (
          <a
            href={org.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ink)', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink)')}
          >
            {org.name}
          </a>
        ) : (
          org.name
        )}
      </div>
      <div style={{ fontSize: 11.5, color: 'var(--ink-dim)', marginBottom: 4, flex: 1 }}>{org.focus}</div>
      <div style={{ fontSize: 10.5, color: 'var(--ink-dim)', opacity: 0.7 }}>{org.location}</div>
    </motion.div>
  )
}

const aiSafetyOrgs = landscapeOrgs.filter((o) => o.aiSafety)
const ecosystemOrgs = landscapeOrgs.filter((o) => !o.aiSafety)

// Preserve category order from CATEGORIES for the ecosystem filter tabs
const ecosystemCategories = ['All', ...CATEGORIES.slice(1).filter(
  (cat) => ecosystemOrgs.some((o) => o.category === cat)
)]

export default function LandscapeSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredEcosystem =
    activeCategory === 'All'
      ? ecosystemOrgs
      : ecosystemOrgs.filter((o) => o.category === activeCategory)

  return (
    <section className="sec-bg2" id="landscape">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-gray">The Ecosystem</span>
        <h2 className="h2">Explore the Landscape</h2>
        <p className="lead" style={{ marginBottom: 36 }}>
          India&apos;s AI Safety organisations alongside the labs, institutions, think tanks, and
          government bodies shaping how AI develops here.
        </p>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 48 }}>
          {Object.entries(CATEGORY_COLORS).map(([label, color]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: 'var(--ink-mid)' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
              {label}
            </div>
          ))}
        </div>

        {/* ── Section 1: AI Safety Organisations ── */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ marginBottom: 20 }}>
            <h3
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 700,
                color: 'var(--ink)',
                marginBottom: 8,
              }}
            >
              AI Safety Organisations
            </h3>
            <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
              Organisations explicitly focused on AI Safety research, advocacy, education, and coordination in India.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 10,
            }}
          >
            {aiSafetyOrgs.map((org) => (
              <OrgCard key={org.id} org={org} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            marginBottom: 48,
          }}
        />

        {/* ── Section 2: The Broader AI Ecosystem ── */}
        <div>
          <div style={{ marginBottom: 20 }}>
            <h3
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontWeight: 700,
                color: 'var(--ink)',
                marginBottom: 8,
              }}
            >
              The Broader AI Ecosystem
            </h3>
            <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
              Labs, government bodies, academic institutions, think tanks, and civil society shaping AI development and governance in India.
            </p>
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 5, marginBottom: 24, flexWrap: 'wrap' }}>
            {ecosystemCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: 'pointer',
                  border: '1px solid var(--border)',
                  color: activeCategory === tab ? '#fff' : 'var(--ink-mid)',
                  background: activeCategory === tab ? 'var(--ink)' : 'var(--white)',
                  borderColor: activeCategory === tab ? 'var(--ink)' : 'var(--border)',
                  transition: 'all 0.15s',
                  fontFamily: 'var(--font-outfit)',
                }}
              >
                {tab}
                <span style={{ marginLeft: 6, opacity: 0.6, fontSize: 11 }}>
                  {tab === 'All'
                    ? ecosystemOrgs.length
                    : ecosystemOrgs.filter((o) => o.category === tab).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 10,
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredEcosystem.map((org) => (
                <motion.div
                  key={org.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <OrgCard org={org} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
