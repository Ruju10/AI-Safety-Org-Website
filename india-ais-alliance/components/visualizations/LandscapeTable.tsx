'use client'

import { useState } from 'react'
import type { LandscapeOrg } from '@/lib/airtable'

interface LandscapeTableProps {
  orgs: LandscapeOrg[]
}

export default function LandscapeTable({ orgs }: LandscapeTableProps) {
  const [sortKey, setSortKey] = useState<keyof LandscapeOrg>('organisation')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const sorted = [...orgs].sort((a, b) => {
    const av = String(a[sortKey]).toLowerCase()
    const bv = String(b[sortKey]).toLowerCase()
    return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av)
  })

  const toggleSort = (key: keyof LandscapeOrg) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
        <thead>
          <tr>
            {(['organisation', 'sector', 'aisRelevance', 'location'] as const).map((key) => (
              <th
                key={key}
                onClick={() => toggleSort(key)}
                style={{
                  textAlign: 'left',
                  padding: '10px 16px',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: sortKey === key ? 'var(--teal)' : 'var(--ink-dim)',
                  background: 'var(--bg-3)',
                  borderBottom: '2px solid var(--border)',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                {sortKey === key && (sortDir === 'asc' ? ' ↑' : ' ↓')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((org) => (
            <tr key={org.id}>
              <td style={{ padding: '13px 16px', borderBottom: '1px solid var(--border)', color: 'var(--ink-mid)' }}>
                <strong style={{ color: 'var(--ink)' }}>{org.organisation}</strong>
              </td>
              <td style={{ padding: '13px 16px', borderBottom: '1px solid var(--border)', color: 'var(--ink-mid)' }}>
                {org.sector}
              </td>
              <td style={{ padding: '13px 16px', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: org.aisRelevance === 'High' ? '#0D7A6B' : '#C47A1B', fontWeight: 600, fontSize: 12 }}>
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
    </div>
  )
}
