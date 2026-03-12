/**
 * India AIS Landscape — Organisation Data
 *
 * This file is the single source of truth for the Landscape section.
 * Edit this file to add, remove, or update organisations.
 * Categories: Government, Academia, Research & NGO, Think Tank & Policy, Frontier AI Lab, Civil Society
 */

export interface LandscapeOrgEntry {
  id: string
  name: string
  category: 'Government' | 'Academia' | 'Research & NGO' | 'Think Tank & Policy' | 'Frontier AI Lab' | 'Civil Society'
  focus: string
  location: string
  website: string
}

export const CATEGORIES = [
  'All',
  'Government',
  'Academia',
  'Research & NGO',
  'Think Tank & Policy',
  'Frontier AI Lab',
  'Civil Society',
] as const

export const CATEGORY_COLORS: Record<string, string> = {
  Government: '#B0399A',
  Academia: '#C47A1B',
  'Research & NGO': '#0D7A6B',
  'Think Tank & Policy': '#3B6FD4',
  'Frontier AI Lab': '#E05252',
  'Civil Society': '#6B5CE7',
}

const landscapeOrgs: LandscapeOrgEntry[] = [
  // ── Government ──────────────────────────────────────────────
  {
    id: 'gov-1',
    name: 'MEITY',
    category: 'Government',
    focus: 'AI Policy & Regulation',
    location: 'New Delhi',
    website: 'https://www.meity.gov.in',
  },
  {
    id: 'gov-2',
    name: 'NITI Aayog',
    category: 'Government',
    focus: 'National AI Strategy & Ethics',
    location: 'New Delhi',
    website: 'https://www.niti.gov.in',
  },
  {
    id: 'gov-3',
    name: 'IndiaAI',
    category: 'Government',
    focus: 'National AI Mission & Compute',
    location: 'New Delhi',
    website: 'https://indiaai.gov.in',
  },
  {
    id: 'gov-4',
    name: 'Bureau of Indian Standards (BIS)',
    category: 'Government',
    focus: 'AI Standards & Certification',
    location: 'New Delhi',
    website: 'https://www.bis.gov.in',
  },
  {
    id: 'gov-5',
    name: 'NASSCOM',
    category: 'Government',
    focus: 'Responsible AI Framework for Industry',
    location: 'New Delhi',
    website: 'https://nasscom.in',
  },

  // ── Academia ────────────────────────────────────────────────
  {
    id: 'acad-1',
    name: 'IIT Madras',
    category: 'Academia',
    focus: 'AI Research, Robert Bosch Centre for Data Science & AI',
    location: 'Chennai',
    website: 'https://rbcdsai.iitm.ac.in',
  },
  {
    id: 'acad-2',
    name: 'IISc Bangalore',
    category: 'Academia',
    focus: 'AI/ML Research & Safety',
    location: 'Bangalore',
    website: 'https://www.iisc.ac.in',
  },
  {
    id: 'acad-3',
    name: 'IIT Bombay',
    category: 'Academia',
    focus: 'ML Research, C-MInDS Centre',
    location: 'Mumbai',
    website: 'https://www.iitb.ac.in',
  },
  {
    id: 'acad-4',
    name: 'IIT Delhi',
    category: 'Academia',
    focus: 'AI Research, School of AI',
    location: 'New Delhi',
    website: 'https://scai.iitd.ac.in',
  },
  {
    id: 'acad-5',
    name: 'Ashoka University',
    category: 'Academia',
    focus: 'Trivedi Centre for Political Data, AI & Society',
    location: 'Sonipat, Haryana',
    website: 'https://www.ashoka.edu.in',
  },
  {
    id: 'acad-6',
    name: 'IIIT Hyderabad',
    category: 'Academia',
    focus: 'AI/ML Research, Language Technologies',
    location: 'Hyderabad',
    website: 'https://www.iiit.ac.in',
  },
  {
    id: 'acad-7',
    name: 'IIT Kharagpur',
    category: 'Academia',
    focus: 'AI Research Centre',
    location: 'Kharagpur',
    website: 'https://www.iitkgp.ac.in',
  },
  {
    id: 'acad-8',
    name: 'ISI Kolkata',
    category: 'Academia',
    focus: 'Statistical ML & AI Foundations',
    location: 'Kolkata',
    website: 'https://www.isical.ac.in',
  },

  // ── Research & NGO ──────────────────────────────────────────
  {
    id: 'rng-1',
    name: 'AI Safety India',
    category: 'Research & NGO',
    focus: 'Community Building & AIS Advocacy',
    location: 'India',
    website: '',
  },
  {
    id: 'rng-2',
    name: 'Groundless AI',
    category: 'Research & NGO',
    focus: 'AI Safety Research',
    location: 'India',
    website: '',
  },
  {
    id: 'rng-3',
    name: 'Impact Academy',
    category: 'Research & NGO',
    focus: 'AI Safety Education & Community',
    location: 'India',
    website: '',
  },
  {
    id: 'rng-4',
    name: 'Wadhwani AI',
    category: 'Research & NGO',
    focus: 'AI for Social Good & Responsible AI',
    location: 'Mumbai',
    website: 'https://www.wadhwaniai.org',
  },
  {
    id: 'rng-5',
    name: 'AI Safety Connect',
    category: 'Research & NGO',
    focus: 'AI Safety Coordination & Networking',
    location: 'India',
    website: '',
  },
  {
    id: 'rng-6',
    name: 'AI Safety Asia',
    category: 'Research & NGO',
    focus: 'Regional AIS Network (Asia Focus)',
    location: 'Asia / India',
    website: '',
  },

  // ── Think Tank & Policy ─────────────────────────────────────
  {
    id: 'ttp-1',
    name: 'Takshashila Institution',
    category: 'Think Tank & Policy',
    focus: 'AI Policy, Governance & National Security',
    location: 'Bangalore',
    website: 'https://takshashila.org.in',
  },
  {
    id: 'ttp-2',
    name: 'Carnegie India',
    category: 'Think Tank & Policy',
    focus: 'Technology Policy & AI Governance',
    location: 'New Delhi',
    website: 'https://carnegieindia.org',
  },
  {
    id: 'ttp-3',
    name: 'Centre for Internet & Society (CIS)',
    category: 'Think Tank & Policy',
    focus: 'Digital Rights, AI Policy & Ethics',
    location: 'Bangalore',
    website: 'https://cis-india.org',
  },
  {
    id: 'ttp-4',
    name: 'Digital Futures Lab',
    category: 'Think Tank & Policy',
    focus: 'AI Governance Research & Policy',
    location: 'India',
    website: '',
  },
  {
    id: 'ttp-5',
    name: 'Observer Research Foundation (ORF)',
    category: 'Think Tank & Policy',
    focus: 'AI & Emerging Tech Policy',
    location: 'New Delhi',
    website: 'https://www.orfonline.org',
  },
  {
    id: 'ttp-6',
    name: 'Vidhi Centre for Legal Policy',
    category: 'Think Tank & Policy',
    focus: 'AI Regulation & Legal Frameworks',
    location: 'New Delhi',
    website: 'https://vidhilegalpolicy.in',
  },
  {
    id: 'ttp-7',
    name: 'The Dialogue',
    category: 'Think Tank & Policy',
    focus: 'Digital Economy, AI Ethics & Governance',
    location: 'New Delhi',
    website: 'https://thedialogue.co',
  },

  // ── Frontier AI Lab ─────────────────────────────────────────
  {
    id: 'fal-1',
    name: 'Sarvam AI',
    category: 'Frontier AI Lab',
    focus: 'India-first Foundation Models & AI Safety',
    location: 'Bangalore',
    website: 'https://www.sarvam.ai',
  },
  {
    id: 'fal-2',
    name: 'Krutrim (Ola)',
    category: 'Frontier AI Lab',
    focus: 'Indian LLM & Multilingual AI',
    location: 'Bangalore',
    website: 'https://olakrutrim.com',
  },
  {
    id: 'fal-3',
    name: 'AI4Bharat',
    category: 'Frontier AI Lab',
    focus: 'Open-source Indian Language AI Models',
    location: 'Chennai / IIT Madras',
    website: 'https://ai4bharat.iitm.ac.in',
  },
  {
    id: 'fal-4',
    name: 'Bhavish AI (CoRover)',
    category: 'Frontier AI Lab',
    focus: 'Conversational AI & Enterprise LLMs',
    location: 'Bangalore',
    website: 'https://corover.ai',
  },

  // ── Civil Society ───────────────────────────────────────────
  {
    id: 'cs-1',
    name: 'IT for Change',
    category: 'Civil Society',
    focus: 'Digital Justice, AI & Social Equity',
    location: 'Bangalore',
    website: 'https://itforchange.net',
  },
  {
    id: 'cs-2',
    name: 'Internet Freedom Foundation (IFF)',
    category: 'Civil Society',
    focus: 'Digital Rights, AI Accountability',
    location: 'New Delhi',
    website: 'https://internetfreedom.in',
  },
  {
    id: 'cs-3',
    name: 'Software Freedom Law Centre (SFLC.in)',
    category: 'Civil Society',
    focus: 'Digital Rights, Open Source & AI Policy',
    location: 'New Delhi',
    website: 'https://sflc.in',
  },
]

export default landscapeOrgs
