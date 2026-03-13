'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { LandscapeOrg } from '@/lib/airtable'

const tabs = ['All', 'Policy & Govt', 'Industry', 'Academia', 'Civil Society']

const sectorMap: Record<string, string[]> = {
  'Policy & Govt': ['Government'],
  Industry: ['Industry', 'Industry Body'],
  Academia: ['Academia'],
  'Civil Society': ['Civil Society', 'Research / NGO'],
}

interface MappingSectionProps {
  orgs: LandscapeOrg[]
}

export default function MappingSection({ orgs }: MappingSectionProps) {
  const [activeTab, setActiveTab] = useState('All')

  const filtered =
    activeTab === 'All'
      ? orgs
      : orgs.filter((o) => {
          const sectors = sectorMap[activeTab] || []
          return sectors.some((s) => o.sector.includes(s))
        })

  return (
    <section className="sec-white" id="mapping">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-gray">Ecosystem Intelligence</span>
        <h2 className="h2">Broader AI Landscape Mapping</h2>
        <p className="lead">
          Comprehensive mapping of India&apos;s AI ecosystem — across safety, policy, industry, and
          research. Data from our live tracking.
        </p>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 5, margin: '36px 0 24px', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
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

        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
          <thead>
            <tr>
              {['Organisation', 'Sector', 'Focus Areas', 'AIS Relevance', 'Location'].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: 'left',
                    padding: '10px 16px',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-dim)',
                    background: 'var(--bg-3)',
                    borderBottom: '2px solid var(--border)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((org) => (
              <tr
                key={org.id}
                style={{ transition: 'background 0.15s', cursor: 'default' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  Array.from(el.querySelectorAll('td')).forEach(
                    (td) => ((td as HTMLElement).style.background = 'var(--bg)')
                  )
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  Array.from(el.querySelectorAll('td')).forEach(
                    (td) => ((td as HTMLElement).style.background = '')
                  )
                }}
              >
                <td style={{ padding: '13px 16px', borderBottom: '1px solid var(--border)', color: 'var(--ink-mid)' }}>
                  <strong style={{ color: 'var(--ink)' }}>{org.organisation}</strong>
                </td>
                <td style={{ padding: '13px 16px', borderBottom: '1px solid var(--border)', color: 'var(--ink-mid)' }}>
                  {org.sector}
                </td>
                <td style={{ padding: '13px 16px', borderBottom: '1px solid var(--border)', color: 'var(--ink-mid)' }}>
                  {(Array.isArray(org.focusAreas) ? org.focusAreas : [org.focusAreas]).map((f) => (
                    <span key={f} className="tag-s">{f}</span>
                  ))}
                </td>
                <td style={{ padding: '13px 16px', borderBottom: '1px solid var(--border)' }}>
                  <span
                    style={{
                      color: org.aisRelevance === 'High' ? '#0D7A6B' : '#C47A1B',
                      fontWeight: 600,
                      fontSize: 12,
                    }}
                  >
                    {org.aisRelevance}
                  </span>
                </td>
                <td style={{ padding: '13px 16px', borderBottom: '1px solid var(--border)', color: 'var(--ink-mid)' }}>
                  {org.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: 'center', marginTop: 18 }}>
          <a
            href="#"
            style={{
              fontSize: 13,
              color: 'var(--ink-mid)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            View full mapping →
          </a>
        </div>
      </motion.div>
    </section>
  )
}
