/**
 * Team & Advisory Board — Data
 * Edit this file to add, remove, or update team members.
 */

export interface TeamMember {
  initial: string
  name: string
  role: string
  bio?: string
  photo?: string
}

export interface Advisor {
  initial: string
  name: string
  affiliation: string
  description: string
  photo?: string
}

export const coreTeam: TeamMember[] = [
  { initial: 'K', name: 'Kunal Singh', role: 'AI Engineer and Alignment Researcher', bio: 'Kunal Singh is an AI Safety Researcher and Incoming MATS 10 Fellow based in Pune, India, working at the intersection of technical AI safety and governance. He has hands-on experience building production agentic AI systems and conducting adversarial red-teaming on frontier models.' },
  { initial: 'R', name: 'Rujuta Karekar', role: 'Sentient Futures Fellow', bio: 'An engineer pivoting to AI safety and governance research. Her work focuses on military AI governance, autonomous weapons, and gradual disempowerment.' },
]

export const advisors: Advisor[] = [
  {
    initial: 'A',
    name: 'Aman Agarwal',
    affiliation: '',
    description:
      'Former FIG Fellow researching AI governance with Oxford Researchers and former SPAR Fellow at CeSIA (Paris) focused on UN-level AI policy. Background in quantitative economics (Erasmus Mundus, Paris 1 Panthéon-Sorbonne) with experience in parliamentary policy, UNDP research, and international stakeholder coordination.',
  },
  {
    initial: 'P',
    name: 'Pratik Agarwal',
    affiliation: 'EAGx India',
    description:
      'Co-lead for EAGx India 2025 with a deep knowledge of the Indian community. Providing strategic guidance on the Hub\'s direction, partnerships, and international alignment with the broader AI Safety ecosystem.',
  },
  {
    initial: 'A',
    name: 'Anonyo Mitra',
    affiliation: 'AI Safety Asia',
    description:
      'Advising on regional coordination across Asia and connecting India\'s AI Safety efforts with the broader Asian network.',
  },
]
