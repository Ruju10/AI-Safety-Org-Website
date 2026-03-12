'use client'

import { motion } from 'framer-motion'
import type { Org } from '@/lib/airtable'

const dotColors: Record<string, string> = {
  India: '#0D7A6B',
  Intl: '#3B6FD4',
  Academic: '#C47A1B',
  Policy: '#B0399A',
}

interface OrgCardProps {
  org: Org
}

export default function OrgCard({ org }: OrgCardProps) {
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
        transition: 'border-color 0.2s',
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
          background: dotColors[org.type] || '#8A8884',
        }}
      />
      <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 4, lineHeight: 1.3, paddingRight: 16 }}>
        {org.name}
      </div>
      <div style={{ fontSize: 11.5, color: 'var(--ink-dim)' }}>{org.focus}</div>
    </motion.div>
  )
}
