'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const orgBenefits = [
  'Listed in the India AIS landscape',
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

function PartCol({
  head,
  title,
  desc,
  benefits,
  formLabel,
  fields,
  cta,
}: {
  head: string
  title: string
  desc: string
  benefits: string[]
  formLabel: string
  fields: string[]
  cta: string
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
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
        {head}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontSize: 26,
          color: 'var(--ink)',
          marginBottom: 12,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.75, marginBottom: 22, fontWeight: 300 }}>
        {desc}
      </p>
      <ul style={{ listStyle: 'none', marginBottom: 26 }}>
        {benefits.map((b) => (
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
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: 'var(--teal)',
                flexShrink: 0,
              }}
            />
            {b}
          </li>
        ))}
      </ul>
      <FormMock label={formLabel} fields={fields} cta={cta} />
    </motion.div>
  )
}

export default function ParticipateSection() {
  return (
    <section className="sec-white" id="participate">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-teal">Get Involved</span>
        <h2 className="h2">Join the Alliance</h2>
        <p className="lead">
          Whether you&apos;re an organisation or an individual — there&apos;s a place for you in
          India&apos;s AIS community.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 28,
            marginTop: 52,
          }}
        >
          <PartCol
            head="For Organisations"
            title="Your Organisation"
            desc="Working on AI Safety in India? Join to collaborate, share resources, and be part of the ecosystem map."
            benefits={orgBenefits}
            formLabel="Airtable — Interest Form"
            fields={['Organisation Name', 'Primary Focus Area', 'Contact Email']}
            cta="Express Interest →"
          />
          <PartCol
            head="For Individuals"
            title="You, Personally"
            desc="Researchers, students, policy professionals, and curious minds — connect with the community."
            benefits={individualBenefits}
            formLabel="Airtable — Interest Form"
            fields={['Your Name', 'Background / Affiliation', 'Contact Email']}
            cta="Express Interest →"
          />
        </div>
      </motion.div>
    </section>
  )
}
