'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import type { NewsItem } from '@/lib/airtable'

const categories = ['All', 'Policy', 'Research', 'Industry', 'Regulation', 'Events']

interface NewsPageContentProps {
  news: NewsItem[]
}

export default function NewsPageContent({ news }: NewsPageContentProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? news
      : news.filter((n) => n.category === activeCategory)

  return (
    <section className="sec-bg">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-teal">Updates</span>
        <h1 className="h2">AI Safety &amp; Ethics News India</h1>
        <p className="lead" style={{ marginBottom: 36 }}>
          Curated news and updates on AI Safety, ethics, and governance relevant to India.
        </p>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 5, marginBottom: 32, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '7px 16px',
                borderRadius: 100,
                fontSize: 12,
                fontWeight: 500,
                cursor: 'pointer',
                border: '1px solid var(--border)',
                color: activeCategory === cat ? '#fff' : 'var(--ink-mid)',
                background: activeCategory === cat ? 'var(--ink)' : 'var(--white)',
                borderColor: activeCategory === cat ? 'var(--ink)' : 'var(--border)',
                transition: 'all 0.15s',
                fontFamily: 'var(--font-outfit)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 16,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.07)' }}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '24px 26px',
                  cursor: 'default',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  {item.category && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                        color: 'var(--teal)',
                        background: 'var(--teal-light)',
                        border: '1px solid var(--teal-border)',
                        borderRadius: 100,
                        padding: '2px 10px',
                      }}
                    >
                      {item.category}
                    </span>
                  )}
                  {item.date && (
                    <span style={{ fontSize: 11, color: 'var(--ink-dim)' }}>
                      {new Date(item.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  )}
                </div>

                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: 'var(--ink)',
                      lineHeight: 1.5,
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: 10,
                    }}
                  >
                    {item.headline}
                  </a>
                ) : (
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: 'var(--ink)',
                      lineHeight: 1.5,
                      marginBottom: 10,
                    }}
                  >
                    {item.headline}
                  </div>
                )}

                <div style={{ fontSize: 12, color: 'var(--ink-dim)' }}>via {item.source}</div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '64px 0',
                color: 'var(--ink-dim)',
                fontSize: 14,
              }}
            >
              No news in this category yet.
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
