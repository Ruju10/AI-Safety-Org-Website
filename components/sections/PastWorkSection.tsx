'use client'

import { motion } from 'framer-motion'
import Timeline from '@/components/ui/Timeline'
import type { TimelineItem } from '@/components/ui/Timeline'

const timelineItems: TimelineItem[] = [
  {
    label: 'Virtual Event',
    title: 'India AIS Virtual Meetup + Mixer',
    body: 'An online event bringing together AIS practitioners and researchers across India for presentations, discussions, and community building.',
  },
  {
    label: 'Community Building',
    title: 'AIS Meetup Outreach & WhatsApp Communities',
    body: 'Initiated structured outreach to identify India-based AIS stakeholders and launched curated WhatsApp groups for ongoing coordination.',
  },
  {
    label: 'Coming Up',
    title: 'Advisory Meeting & Strategic Planning',
    body: 'Bringing together the core team, advisory board, and key stakeholders to define the Alliance\'s roadmap and next steps.',
    upcoming: true,
  },
]

export default function PastWorkSection() {
  return (
    <section className="sec-bg" id="past">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="chip-teal">Our Journey</span>
        <h2 className="h2">Past Work</h2>
        <p className="lead">
          Activities, events, and milestones that have shaped the India AIS community so far.
        </p>
        <Timeline items={timelineItems} />
      </motion.div>
    </section>
  )
}
