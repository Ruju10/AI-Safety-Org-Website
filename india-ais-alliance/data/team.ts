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
  { initial: 'A', name: 'Aman Agarwal', role: '' },
  { initial: 'K', name: 'Kunal Singh', role: '' },
  { initial: 'R', name: 'Rujuta Karekar', role: 'Sentient Futures Fellow', bio: 'An engineer pivoting to AI safety and governance research. Her work focuses on military AI governance, autonomous weapons, and gradual disempowerment.' },
]

export const advisors: Advisor[] = [
  {
    initial: 'P',
    name: 'Pratik Agarwal',
    affiliation: '',
    description:
      'Providing strategic guidance on the Hub\'s direction, partnerships, and international alignment with the broader AI Safety ecosystem.',
  },
  {
    initial: 'A',
    name: 'Anonyo Mitra',
    affiliation: 'AI Safety Asia',
    description:
      'Advising on regional coordination across Asia and connecting India\'s AI Safety efforts with the broader Asian network.',
  },
]
