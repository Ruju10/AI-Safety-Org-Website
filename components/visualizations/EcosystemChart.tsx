'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import type { LandscapeOrg } from '@/lib/airtable'

interface EcosystemChartProps {
  orgs: LandscapeOrg[]
}

const COLORS = ['#0D7A6B', '#3B6FD4', '#C47A1B', '#B0399A', '#6B7280']

export default function EcosystemChart({ orgs }: EcosystemChartProps) {
  const sectorCounts = orgs.reduce<Record<string, number>>((acc, org) => {
    acc[org.sector] = (acc[org.sector] || 0) + 1
    return acc
  }, {})

  const data = Object.entries(sectorCounts)
    .map(([sector, count]) => ({ sector, count }))
    .sort((a, b) => b.count - a.count)

  return (
    <div style={{ width: '100%', height: 280 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 16, right: 16, top: 8, bottom: 8 }}>
          <XAxis type="number" tick={{ fontSize: 11, fill: '#8A8884' }} />
          <YAxis
            type="category"
            dataKey="sector"
            tick={{ fontSize: 11, fill: '#4A4844' }}
            width={120}
          />
          <Tooltip
            contentStyle={{
              background: '#FFFFFF',
              border: '1px solid #DDD9D0',
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
