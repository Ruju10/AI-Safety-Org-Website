'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="sec-white" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 40,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h2 className="h2" style={{ marginBottom: 10 }}>Contact Us</h2>
          <p className="lead" style={{ maxWidth: 480 }}>
            Questions, collaboration ideas, or just want to connect? We&apos;d love to hear from you.
          </p>
        </div>
        <Link href="/contact" className="btn-teal" style={{ flexShrink: 0 }}>
          Get in Touch →
        </Link>
      </motion.div>
    </section>
  )
}
