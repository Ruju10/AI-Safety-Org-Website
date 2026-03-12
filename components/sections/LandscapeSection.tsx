'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import OrgCard from '@/components/ui/OrgCard'
import type { Org } from '@/lib/airtable'

const legend = [
  { label: 'India-based', color: '#0D7A6B', type: 'India' },
  { label: 'International', color: '#3B6FD4', type: 'Intl' },
  { label: 'Academic', color: '#C47A1B', type: 'Academic' },
  { label: 'Policy / Multilateral', color: '#B0399A', type: 'Policy' },
]

const filterTabs = ['All', 'India', 'International', 'Academic', 'Policy']
const typeMap: Record<string, string> = {
  All: '',
  India: 'India',
  International: 'Intl',
  Academic: 'Academic',
  Policy: 'Policy',
}

interface LandscapeSectionProps {
  orgs: Org[]
}

export default function LandscapeSection({ orgs }: LandscapeSectionProps) {
  const [activeTab, setActiveTab] = useState('All')

  const filtered =
    activeTab === 'All' ? orgs : orgs.filter((o) => o.type === typeMap[activeTab])

  return (
    <section className="sec-bg2" id="landscape">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-gray">The Ecosystem</span>
        <h2 className="h2">AIS Landscape in India</h2>
        <p className="lead" style={{ marginBottom: 28 }}>
          Organisations and initiatives working on AI Safety across India — and international bodies
          relevant to the Indian context.
        </p>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', marginBottom: 24 }}>
          {legend.map((l) => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: 'var(--ink-mid)' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: l.color }} />
              {l.label}
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 5, marginBottom: 24, flexWrap: 'wrap' }}>
          {filterTabs.map((tab) => (
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
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(196px, 1fr))',
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
            {/* Placeholder "more" card */}
            {activeTab === 'All' && (
              <motion.div
                key="more"
                layout
                style={{
                  background: 'var(--white)',
                  border: '1px dashed var(--border)',
                  borderRadius: 10,
                  padding: '18px 16px',
                  opacity: 0.45,
                }}
              >
                <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink-dim)', marginBottom: 4, lineHeight: 1.3 }}>
                  + More to be mapped
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-dim)' }}>In consultation</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}
