/**
 * Team & Advisory Board — Data
 * Edit this file to add, remove, or update team members.
 */

export interface TeamMember {
  initial: string
  name: string
  role: string
}

export interface Advisor {
  initial: string
  name: string
  affiliation: string
  description: string
}

export const coreTeam: TeamMember[] = [
  { initial: 'A', name: 'Aman Agarwal', role: 'Founder' },
  { initial: 'K', name: 'Kunal Singh', role: '' },
  { initial: 'R', name: 'Rujuta Karekar', role: '' },
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
