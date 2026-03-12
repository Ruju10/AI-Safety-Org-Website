/**
 * International AIS Organisations — Data
 *
 * Key global bodies whose work is particularly relevant to India's AI Safety context.
 * Edit this file to add, remove, or update organisations.
 */

export interface IntlOrgEntry {
  id: string
  name: string
  description: string
  tag: string
  website: string
}

const intlOrgs: IntlOrgEntry[] = [
  {
    id: 'intl-1',
    name: 'AI Safety Asia',
    description: 'Regional AIS network focused on Asian contexts and collaboration.',
    tag: 'Regional',
    website: '',
  },
  {
    id: 'intl-2',
    name: 'Safe AI Germany',
    description: 'National AIS alliance — inspiration for our structure and model.',
    tag: 'Model Org',
    website: '',
  },
  {
    id: 'intl-3',
    name: 'AISafety.com',
    description: 'Global AI Safety resource hub and community platform.',
    tag: 'Global Hub',
    website: '',
  },
  {
    id: 'intl-4',
    name: 'Centre for AI Safety (CAIS)',
    description: 'Research and policy on reducing catastrophic risks from AI.',
    tag: 'Research',
    website: 'https://www.safe.ai',
  },
  {
    id: 'intl-5',
    name: 'Future of Life Institute',
    description: 'Works to reduce extreme risks from transformative technologies.',
    tag: 'Policy',
    website: 'https://futureoflife.org',
  },
  {
    id: 'intl-6',
    name: 'Alignment Forum',
    description: 'Research community for technical AI alignment work.',
    tag: 'Research',
    website: 'https://www.alignmentforum.org',
  },
  {
    id: 'intl-7',
    name: 'GovAI (Oxford)',
    description: 'Research on the governance of advanced AI systems.',
    tag: 'Governance',
    website: 'https://www.governance.ai',
  },
  {
    id: 'intl-8',
    name: 'MIRI',
    description: 'Machine Intelligence Research Institute — foundational AI alignment research.',
    tag: 'Research',
    website: 'https://intelligence.org',
  },
  {
    id: 'intl-9',
    name: 'Partnership on AI',
    description: 'Multi-stakeholder org advancing responsible AI practices globally.',
    tag: 'Governance',
    website: 'https://partnershiponai.org',
  },
  {
    id: 'intl-10',
    name: 'AI Safety Institute (UK)',
    description: 'UK government body for AI safety evaluation and research.',
    tag: 'Government',
    website: '',
  },
  {
    id: 'intl-11',
    name: 'AI Safety Institute (US)',
    description: 'US NIST body for AI safety standards and evaluation.',
    tag: 'Government',
    website: '',
  },
]

export default intlOrgs
