'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const orgBenefits = [
  'Listed in the India AI Safety landscape',
  'Access shared resources & research',
  'Collaborate on joint initiatives',
  'Connect with international orgs',
]

const individualBenefits = [
  'Connect with the AIS community',
  'Access learning resources',
  'Attend events & meetups',
  'Contribute to open projects',
]

const waGroups = [
  { title: 'AIS Research Updates', desc: 'Latest papers, reports, and developments in AI Safety — curated for the Indian context.' },
  { title: 'Events & Meetups', desc: 'Announcements for virtual and in-person gatherings across India.' },
  { title: 'Collaboration Opportunities', desc: 'Find co-researchers, project partners, and collaborators.' },
  { title: 'Policy Discussions', desc: "Track India's AI governance landscape and contribute to policy conversations." },
]

function FormMock({ label, fields, cta }: { label: string; fields: string[]; cta: string }) {
  const orgFormUrl = process.env.NEXT_PUBLIC_ORG_FORM_URL
  const individualFormUrl = process.env.NEXT_PUBLIC_INDIVIDUAL_FORM_URL
  const formUrl = label.toLowerCase().includes('org') ? orgFormUrl : individualFormUrl

  if (formUrl) {
    return (
      <iframe
        src={formUrl}
        style={{ width: '100%', height: 340, border: 'none', borderRadius: 8 }}
        allowTransparency={true}
      />
    )
  }

  return (
    <div
      style={{
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: 18,
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ink-dim)',
          marginBottom: 10,
        }}
      >
        {label}
      </div>
      {fields.map((f) => (
        <div
          key={f}
          style={{
            border: '1px solid var(--border)',
            borderRadius: 5,
            padding: '9px 12px',
            fontSize: 12.5,
            color: 'var(--ink-dim)',
            marginBottom: 7,
            background: 'var(--white)',
          }}
        >
          {f}
        </div>
      ))}
      <button
        style={{
          width: '100%',
          background: 'var(--teal)',
          color: '#fff',
          border: 'none',
          borderRadius: 5,
          padding: '11px',
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          marginTop: 3,
          fontFamily: 'var(--font-outfit)',
        }}
      >
        {cta}
      </button>
    </div>
  )
}

type Tab = 'alliance' | 'whatsapp'

export default function GetInvolvedSection() {
  const [tab, setTab] = useState<Tab>('alliance')
  const waUrl = process.env.NEXT_PUBLIC_WA_FORM_URL

  return (
    <section className="sec-white" id="get-involved">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-teal">Get Involved</span>
        <h2 className="h2">Join the Movement</h2>
        <p className="lead">
          Whether you&apos;re an organisation, individual researcher, or simply curious about AI Safety
          — there&apos;s a place for you in India&apos;s AIS community.
        </p>

        {/* Tab switcher */}
        <div
          style={{
            display: 'inline-flex',
            gap: 2,
            background: 'var(--bg-2)',
            borderRadius: 10,
            padding: 4,
            marginTop: 32,
            marginBottom: 40,
          }}
        >
          {[
            { key: 'alliance' as Tab, label: 'Join the Hub' },
            { key: 'whatsapp' as Tab, label: 'WhatsApp Community' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                padding: '10px 24px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                border: 'none',
                color: tab === t.key ? 'var(--ink)' : 'var(--ink-dim)',
                background: tab === t.key ? 'var(--white)' : 'transparent',
                boxShadow: tab === t.key ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s',
                fontFamily: 'var(--font-outfit)',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Alliance content */}
        {tab === 'alliance' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 28,
              }}
            >
              {/* Organisations */}
              <div
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '38px 34px',
                }}
              >
                <div
                  style={{
                    fontSize: 10.5,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--teal)',
                    marginBottom: 16,
                  }}
                >
                  For Organisations
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontSize: 26,
                    color: 'var(--ink)',
                    marginBottom: 12,
                  }}
                >
                  Your Organisation
                </h3>
                <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.75, marginBottom: 22, fontWeight: 300 }}>
                  Working on AI Safety in India? Join to collaborate, share resources, and be part of the ecosystem map.
                </p>
                <ul style={{ listStyle: 'none', marginBottom: 26 }}>
                  {orgBenefits.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        fontSize: 13.5,
                        color: 'var(--ink-mid)',
                        padding: '9px 0',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <FormMock label="Airtable — Interest Form" fields={['Organisation Name', 'Primary Focus Area', 'Contact Email']} cta="Express Interest →" />
              </div>

              {/* Individuals */}
              <div
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '38px 34px',
                }}
              >
                <div
                  style={{
                    fontSize: 10.5,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--teal)',
                    marginBottom: 16,
                  }}
                >
                  For Individuals
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontSize: 26,
                    color: 'var(--ink)',
                    marginBottom: 12,
                  }}
                >
                  You, Personally
                </h3>
                <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.75, marginBottom: 22, fontWeight: 300 }}>
                  Researchers, students, policy professionals, and curious minds — connect with the community.
                </p>
                <ul style={{ listStyle: 'none', marginBottom: 26 }}>
                  {individualBenefits.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        fontSize: 13.5,
                        color: 'var(--ink-mid)',
                        padding: '9px 0',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <FormMock label="Airtable — Individual Form" fields={['Your Name', 'Background / Affiliation', 'Contact Email']} cta="Express Interest →" />
              </div>
            </div>
          </motion.div>
        )}

        {/* WhatsApp content */}
        {tab === 'whatsapp' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* WA hero card */}
            <motion.div
              style={{
                background: 'var(--teal)',
                borderRadius: 14,
                padding: '40px 34px',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                }}
              />
              <div style={{ fontSize: 28, marginBottom: 18 }}>💬</div>
              <h3
                style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontSize: 26,
                  marginBottom: 12,
                }}
              >
                WhatsApp Communities
              </h3>
              <p style={{ fontSize: 14, opacity: 0.82, lineHeight: 1.75, marginBottom: 26, fontWeight: 300, maxWidth: 600 }}>
                Join our curated WhatsApp communities for AIS researchers, practitioners, and
                enthusiasts across India. Stay updated, find collaborators, and be part of the conversation.
              </p>

              {waUrl ? (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#fff',
                    color: 'var(--teal)',
                    textDecoration: 'none',
                    padding: '12px 24px',
                    borderRadius: 6,
                    fontSize: 13.5,
                    fontWeight: 600,
                  }}
                >
                  Join WhatsApp Groups →
                </a>
              ) : (
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.15)',
                    padding: '12px 24px',
                    borderRadius: 6,
                    fontSize: 13.5,
                    fontWeight: 600,
                  }}
                >
                  Registration link coming soon
                </div>
              )}
            </motion.div>

            {/* What to expect grid */}
            <h3
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontSize: 22,
                color: 'var(--ink)',
                marginBottom: 16,
              }}
            >
              What to Expect
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {waGroups.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    padding: '20px 24px',
                  }}
                >
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 13.5, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
