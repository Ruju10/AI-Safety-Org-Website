'use client'

import { motion } from 'framer-motion'
import TagPill from '@/components/ui/TagPill'
import intlOrgs from '@/data/intl-orgs'

export default function IntlOrgsSection() {
  return (
    <section className="sec-bg" id="international">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-gray">Global Context</span>
        <h2 className="h2">International AIS Organisations</h2>
        <p className="lead">
          Key global bodies whose work is particularly relevant to India&apos;s AI Safety context.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 14,
            marginTop: 48,
          }}
        >
          {intlOrgs.map((org, i) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4, boxShadow: '0 4px 14px rgba(0,0,0,0.05)' }}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '22px 20px',
                cursor: 'default',
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: 6,
                }}
              >
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
              <div
                style={{
                  fontSize: 12.5,
                  color: 'var(--ink-mid)',
                  lineHeight: 1.55,
                }}
              >
                {org.description}
              </div>
              <div style={{ marginTop: 12 }}>
                <TagPill
                  variant={org.tag === 'In Progress' ? 'purple' : 'teal'}
                >
                  {org.tag}
                </TagPill>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
