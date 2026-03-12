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
      <div style={{ fontSize: 11.5, color: 'var(--ink-dim)', marginBottom: 4 }}>{org.focus}</div>
      <div style={{ fontSize: 10.5, color: 'var(--ink-dim)', opacity: 0.7 }}>{org.location}</div>
    </motion.div>
  )
}

export default function LandscapeSection() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered =
    activeTab === 'All' ? landscapeOrgs : landscapeOrgs.filter((o) => o.category === activeTab)

  return (
    <section className="sec-bg2" id="landscape">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-gray">The Ecosystem</span>
        <h2 className="h2">Explore the Landscape</h2>
        <p className="lead" style={{ marginBottom: 28 }}>
          Indian organisations, institutions, and labs working on AI Safety — across government,
          academia, research, policy, and frontier AI.
        </p>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 24 }}>
          {Object.entries(CATEGORY_COLORS).map(([label, color]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: 'var(--ink-mid)' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
              {label}
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 5, marginBottom: 24, flexWrap: 'wrap' }}>
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '7px 16px',
                borderRadius: 100,
                fontSize: 12,
                fontWeight: 500,
                cursor: 'pointer',
                border: '1px solid var(--border)',
                color: activeTab === tab ? '#fff' : 'var(--ink-mid)',
                background: activeTab === tab ? 'var(--ink)' : 'var(--white)',
                borderColor: activeTab === tab ? 'var(--ink)' : 'var(--border)',
                transition: 'all 0.15s',
                fontFamily: 'var(--font-outfit)',
              }}
            >
              {tab}
              <span style={{ marginLeft: 6, opacity: 0.6, fontSize: 11 }}>
                {tab === 'All' ? landscapeOrgs.length : landscapeOrgs.filter((o) => o.category === tab).length}
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
            {filtered.map((org) => (
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
      </motion.div>
    </section>
  )
}
